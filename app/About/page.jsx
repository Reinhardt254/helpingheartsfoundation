import React from 'react'

const About = () => {
  return (
    <div className='h-full bg-gray-200'>
      <div className='h-full mx-0  bg-white md:mx-0'>
        <div className='pb-10 mx-3 space-y-4 md:mx-32 md:pr-48'>
        <div 
            className='mt-10 border-t-8 border-slate-900'
          />
          <div>
            <h1 className='pt-4 text-2xl font-bold text-slate-900'>Mission</h1>
            <p className='font-semibold text-slate-900'>
            Compassion for All is dedicated to improving the lives of vulnerable individuals and communities worldwide. Our mission is to provide support, resources, and empowerment to those in need, fostering positive change and sustainable development.
            </p>
          </div>

          <div>
            <h1 className='text-2xl font-bold text-slate-900'>Vision</h1>
            <p className='font-semibold text-slate-900'>
            We envision a world where every person has access to basic necessities, education, healthcare, and opportunities for growth and self-sufficiency. We believe that by promoting compassion, equity, and inclusivity, we can create a brighter future for all.
            </p>
          </div>

          <div className='pb-1'>
            <h1 className='text-2xl font-bold text-slate-900'>Core values</h1>
            <div>
              <p className='font-semibold text-slate-900'>1. Compassion: We believe in the power of empathy and kindness to create positive change in the lives of individuals and communities.
              </p>
              <p className='font-semibold text-slate-900 pt-2'>2.Equity: We are committed to promoting equal access to resources, opportunities, and basic human rights, irrespective of race, gender, religion, or socioeconomic status.
              </p>
              <p className='font-semibold text-slate-900 pt-2'>3. Collaboration: We work in partnership with local communities, organizations, and volunteers to maximize our impact and create sustainable solutions.
              </p>
              <p className='font-semibold text-slate-900 pt-2'>4. Transparency: We maintain the highest standards of accountability and transparency in all our activities and financial operations.
              </p>
              <p className='font-semibold text-slate-900 pb-5 pt-2'> 
              5. Empowerment: We empower individuals to take control of their own destinies by providing them with the tools, knowledge, and support they need to thrive.
              </p>    
            </div>
          </div>
        <div 
            className='pt-8 border-t-8 border-slate-900'
          />
        </div>
      </div>
    </div>
  )
}

export default About