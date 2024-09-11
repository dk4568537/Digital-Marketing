import React from 'react'
import Navbar from '../component/navbar/Navbar'
import CareerDashBoard from './careerDashBoard/CareerDashBoard'
import LifeAtSolution from './lifeAtSolution/LifeAtSolution'
import KarachiJobsOpening from './karachiJobsOpening/KarachiJobsOpening'
import RequiredField from './requiredField/RequiredField'
import Lestcheatfooter from '../component/Lestcheatfooter/Lestcheatfooter'

const page = () => {
  return (
    <div>
        <Navbar/>
        <CareerDashBoard/>
        <LifeAtSolution/>
        <KarachiJobsOpening/>
        <RequiredField/>
        <Lestcheatfooter/>
    </div>
  )
}

export default page