import React from 'react'
import "../Styles/Experience.css";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School"
import UniversityIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"

function Experience() {


  return (
    <div className='experience'>Experience
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement className='vertical-timeline-elememt--education'
      date='2013-2017'
      iconStyle={{background:"#3e497a",color:"#fff"}}
      icon={<SchoolIcon />}
      >
      <h3 className='vertical-timeline-element-title'>Acharya Nagarjuna University </h3>
      <p>Bachelors Degree</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-elememt--education'
      date='2018-2020'
      iconStyle={{background:"#3e497a",color:"#fff"}}
      icon={<UniversityIcon />}
      >
      <h3 className='vertical-timeline-element-title'>University Of Windsor </h3>
      <p>Masters's Degree'</p>
      </VerticalTimelineElement>



      <VerticalTimelineElement className='vertical-timeline-elememt--education'
      date='2021-2022'
      iconStyle={{background:"#3e497a",color:"#fff"}}
      icon={<UniversityIcon />}
      >
      <h3 className='vertical-timeline-element-title'>University Of Waterloo</h3>
      <p>Advanced Web Devlopmemnt and Design</p>
      </VerticalTimelineElement>

    </VerticalTimeline>


    </div>
  )
}

export default Experience