import React from 'react';
import { skills } from '../constants';
import Timeline from '../components/Timeline';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-show'>Elijah</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          My name is Illia, Elías en español, Elijah in english. I am a ukrainian living in Spaine.
          <br />
          I am a Full Stack Developer with 3+ years of experience working both 
          independently and in teams.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12 justify-center'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-16 pb-8'>
          <h3 className='subhead-text'>
            My Work Experience
          </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I've worked with some of the most talented people in the industry, 
              leveling up my skills as a Full Stack developer like a team player and a freelancer.
            </p>
          </div>

          <Timeline />

          <hr className='border-slate-200' />

          <CTA />

      </div>
      

    </section>
  )
}

export default About