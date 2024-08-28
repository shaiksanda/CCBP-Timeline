import './index.css'

const ProjectTimelineCard = ({project}) => {
  const {projectTitle, description, imageUrl, duration, projectUrl} = project

  return (
    <div className="project-timeline-card">
      <img src={imageUrl} alt={projectTitle} className="project-image" />
      <div className="title-duration-container">
        <h2 style={{color: '#2b237c'}} className="project-title">
          {projectTitle}
        </h2>
        <p className="project-duration">{duration}</p>
      </div>
      <p className="project-description">{description}</p>
      <a
        href={projectUrl}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  )
}

export default ProjectTimelineCard
