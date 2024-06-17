const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <img src={project.image} alt="project image" />
            <p><a href={project.link}>{project.name} link</a></p>
            <a href={project.github}>Github link</a>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard