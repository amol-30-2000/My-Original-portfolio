document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    // Sample data for projects
    const projects = [
        { title: 'Project 1', description: 'Description for Project 1', link: '#' },
        { title: 'Project 2', description: 'Description for Project 2', link: '#' },
        { title: 'Project 3', description: 'Description for Project 3', link: '#' },
        { title: 'Project 4', description: 'Description for Project 4', link: '#' }
    ];

    // Render project cards
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectCard);
    });
});
