import React from 'react'
import { VscChevronLeft } from "react-icons/vsc";

const KarachiJobsOpening = () => {
  return (
    <div className='flex justify-center items-center px-3 md:px-5'>
        <div className=' py-5 md:p-10 container md:gap-5'>
            <div className=' flex justify-center items-start flex-col gap-3 pb-2'>
                <h1 className=' md:text-3xl font-bold font-sans'>KARACHI JOB OPENINGS</h1>
                <h4 className=' flex items-center text-red-500 hover:underline'><VscChevronLeft/><VscChevronLeft/>Back to job</h4>
                <h2 className=' md:text-3xl font-sans font-bold'>Associate IT Support Engineer - Morning Shift</h2>
                <h3 className=' md:text-xl font-semibold'>Karachi, Pakistan - Full Time</h3>
            </div>
            <div className=' flex justify-center flex-col gap-4'>
                <h1 className=' md:text-2xl font-sans font-bold md:pt-5'>Company Overview:</h1>
                <p className=' text-xs md:text-base font-normal md:pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit neque harum sint eum dignissimos ducimus facere labore. Nulla corrupti cumque et numquam adipisci magni aliquam temporibus, possimus vel nihil sunt laboriosam molestiae modi quam explicabo repudiandae facilis nobis quisquam vero exercitationem totam accusamus accusantium! Quae ab numquam molestias quia nulla voluptas impedit porro officia deserunt atque vitae ratione recusandae delectus iste illo, accusamus asperiores tempora odit placeat aliquam nam quidem. Non ab debitis est mollitia quaerat nulla. Iste repudiandae cupiditate, eaque explicabo, quos velit natus voluptatum alias inventore unde deleniti. Vero ipsum consequuntur facere numquam sed a non blanditiis ducimus.</p>
                <h2 className=' text-2xl font-sans font-bold'>Responsbilities</h2>
                <ul className=' flex justify-center flex-col gap-5 list-disc pl-5'>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit voluptatibus.</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit voluptatibus lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum.</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit .</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit voluptatibus.</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit voluptatibus</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit voluptatibus.</li>
                    <li>Lorem ipsum dolor sit amet, legimus quaerendum at sed, nam in blandit voluptatibus lorem ipsum dolor.</li>
                </ul>
                <h1 className=' md:text-3xl font-sans font-bold md:pt-5'>Additional Knowledge</h1>
                <ul className=' flex justify-center flex-col gap-3 list-disc pl-5'>
                    <li>MAC OS</li>
                    <li>Linux</li>
                    <li>MAC OS Linux Routers and Firewall management Office365, AWS, Azure</li>
                    <li>Office365, AWS, Azure</li>
                </ul>
                <h1 className=' md:text-3xl font-bold font-sans md:pt-5'>KARACHI JOBS OPENING</h1>
                <h3 className=' md:text-3xl font-semibold font-sans'>Associate IT Support Engineer - Morning Shift</h3>
                <h4 className=' text-lg font-semibold text-slate-500 font-sans'>Karachi, Pakistan - Full Time</h4>
                <h2 className=' md:text-xl font-bold font-sans pb-5'>Apply: Associate IT Support Engineer - Morning Shift</h2>
            </div>
           
        </div>
    </div>
  )
}

export default KarachiJobsOpening