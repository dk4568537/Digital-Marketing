import React from 'react'

const ReachMore = () => {
  return (
    <div className='pb-20'>
        <div className=' h-[100vh] grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div className='items-center pl-3 md:pl-14'>
                <h3 className=' text-md md:text-xl font-bold text-blue-900 font-sans '>Email Marketing</h3>
                <h3 className=' text-2xl md:text-5xl font-sans font-extrabold text-[#494949] uppercase pb-2 md:py-5 w-[70%] md:w-[80%]'>Reach More Customers and Upsells</h3>
                <p className=' w-full md:w-[78%] font-sans md:pt-2'>Email marketing is the most practical way to make your customers satisfied and happy. At GFS IT Solutions, we can help you with email campaigns that can promote your products and services. From targeted ads to nurturing emails, our services will help you get the most out of your email marketing.</p>
            </div>
            <div className=' flex justify-center items-center'>
                <img className=' md:w-[75%]' src="/images/Reachemail.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ReachMore