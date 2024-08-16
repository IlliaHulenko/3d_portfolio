import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText}) => {
    return (
        <div className='mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
            </Link>        
        </div>
    )    
}

const renderContent = {
    1:(
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5'>
        Hi, my name is <span className='font-semibold'>Elijah</span>
        <br />
        A Full Stack developer from Spain.
      </h1>
    ),
    2:( 
        <InfoBox 
            text="Need for a project done or looking for a dev? Just contact with me"
            link='/contact'
            btnText="Let's contact"
        />
    ),
    3:(
        <InfoBox 
            text="Made multiple projects in different technologies. Do you want to see them?"
            link='/projects'
            btnText="Portfolio"
        />        
    ),
    4:(
        <InfoBox 
            text="I am a Full Stack Developer with 3+ years of experience working both independently and in teams."
            link='/about'
            btnText="About me"
        />         
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo