import React from 'react';
import { experiences } from '../constants';

const Timeline = () => {
  return (   

    <div className="timeline">      
      <div className="container container--left">
        <img src={experiences[0].icon} alt={experiences[0].company_name} />
        <div className="text-box">
          <h2>{experiences[0].company_name}</h2>
          <h3>{experiences[0].title}</h3>
          <small>{experiences[0].date}</small>
          <p key={experiences[0].points.index}>
            {experiences[0].points.map((exp, index) => <li key={index}>{exp}</li>)}
          </p>
        </div>
      </div>

      <div className="container container--right">
        <img src={experiences[1].icon} alt={experiences[1].company_name} />
        <div className="text-box">
          <h2>{experiences[1].company_name}</h2>
          <h3>{experiences[1].title}</h3>
          <small>{experiences[1].date}</small>
          <p key={experiences[1].points.index}>
            {experiences[1].points.map((exp, index) => <li key={index}>{exp}</li>)}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Timeline