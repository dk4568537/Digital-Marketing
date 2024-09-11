'use client'
import Slider from "react-elastic-carousel";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SlickCarousel({ children }) {
  
  return <Slider itemsToScroll={1} itemsToShow={4} showArrows={false} itemPadding={[0,20]} >{children}</Slider>;
}

export default SlickCarousel;
