// Write your code here

import './index.css'

const CourseTimelineCard = ({course}) => {
  const {courseTitle, description, duration, tagsList} = course

  return (
    <div className="course-timeline-card">
      <div className="title-duration-container">
        <h2 className="course-title" style={{color: '#2b237c'}}>
          {courseTitle}
        </h2>
        <p className="course-duration">{duration}</p>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag-item">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
