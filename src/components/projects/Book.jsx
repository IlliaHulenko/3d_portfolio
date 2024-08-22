import React from 'react';
import Page from './Page';
import { pages } from './ProjectsUi';

const Book = ({...props}) => {
  return (
    <group {...props}>
      {
        [...pages].map((pageData, index) => (
          index === 0 ? (
            <Page
              position-x={index * 0.15} 
              key={index} 
              number={index} 
              {...pageData}
            />
          ) : null            
        ))
      }
    </group>
  )
}

export default Book