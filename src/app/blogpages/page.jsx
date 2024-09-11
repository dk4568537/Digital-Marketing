import React from 'react';
import Navbar from '../component/navbar/Navbar';
import { Blogsmain } from './blogsmain/Blogsmain';
import FutureExcluestive from './futureExcluesive/FutureExcluestive';
import ThereAre from './ThereAre/ThereAre';
import VaraitionsOff from './varaitionsOff/VaraitionsOff';
import Popular from './popular/Popular';
import { OlderArticlenew } from './olderArticle/OlderArticlenew';
import SearchTheBlog from './searchTheBlog/SearchTheBlog';
import BlogCarts from './blogCarts/BlogCarts';
import Lestcheatfooter from '../component/Lestcheatfooter/Lestcheatfooter';


const Page = () => {
  return (
    <div>
      <Navbar/>
      <Blogsmain/>
      <FutureExcluestive/>
      <ThereAre/>
      <VaraitionsOff/>
      <Popular/>
      <OlderArticlenew/>
      <SearchTheBlog/>
      <BlogCarts/>
      <Lestcheatfooter/>      
    </div>
  )
}

export default Page;