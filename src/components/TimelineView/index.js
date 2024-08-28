import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderTimelineItem = item => {
    // Render CourseTimelineCard if item type is 'course'
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} course={item} />
    }

    // Render ProjectTimelineCard if item type is 'project'
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} project={item} />
    }

    return null
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1 style={{color: '#171f46'}}>My Journey Of</h1>
          <h1 style={{color: '#0967d2'}}>CCBP 4.0</h1>
        </div>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(this.renderTimelineItem)}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
