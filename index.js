function showSection(id, btn) {
    document.querySelectorAll('main section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-bottom button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function showSection(id, btn) {

    document.querySelectorAll('main section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');


    history.pushState({ section: id }, '', `#${id}`);


    document.querySelectorAll('.nav-bottom button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

window.addEventListener('load', () => {
    const sectionId = window.location.hash.replace('#', '') || 'inicio';
    const sectionButton = document.querySelector(`.nav-bottom button[onclick="showSection('${sectionId}', this)"]`);
    if (sectionId) {
        showSection(sectionId, sectionButton);
    }
});

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        showSection(event.state.section, document.querySelector(`.nav-bottom button[onclick="showSection('${event.state.section}', this)"]`));
    }
});