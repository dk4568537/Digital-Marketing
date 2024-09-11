import React from 'react'
import Navbar from './component/navbar/Navbar'
import Email from './component/first-section/Emailmarketing'
import Whyemail from './whyemail/Whyemail'
import ServiceOffer from './component/serviceOffer/ServiceOffer'
import ReachMore from './component/reachMore/ReachMore'
import RelatedServices from './component/relatedServices/RelatedServices'
import OurLocation from './component/ourLocation/OurLocation'
import Lestcheatfooter from './component/Lestcheatfooter/Lestcheatfooter'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Email emailimg="/images/Frame.png"/>
      <Whyemail/>
      <ServiceOffer/>
      <ReachMore/>
      <RelatedServices/>
      <OurLocation/>
      <Lestcheatfooter/>
    </div>
  )
}

export default page