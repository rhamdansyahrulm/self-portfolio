import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import PortfolioContent from "./PortfolioContent"

const responsive = {
  dekstop : {
    breakpoint: {max: 3000, min: 1024},
    items: 1,
    slidesToSlide: 1
  },
  tablet : {
    breakpoint: {max: 1024, min: 464},
    items: 1,
    slidesToSlide: 1
  },
  mobile : {
    breakpoint: {max: 464, min: 0},
    items: 1,
    slidesToSlide: 1
  }
}

const PortfolioSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <PortfolioContent image="/images/port1.png" title="asdasd" tools="asdasdasd"/>
      <PortfolioContent image="/images/port1.png" title="asdasd" tools="asdasdasd"/>
      <PortfolioContent image="/images/port1.png" title="asdasd" tools="asdasdasd"/>
    </Carousel>
  )
}

const Portfolio = () => {
  return (
    <div className="bg-slate-900 pt-[4rem] md:pt-[8rem] h-[100%]">
      <h1 className="text-[15px] font-bold uppercase text-slate-200 mb-[1rem] text-center">
        What I have done so far
      </h1>
      <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize font-bold text-white text-center">
        My <span className="text-yellow-400">Project</span>
      </h2>

      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <PortfolioSlider />
      </div>
    </div>
  )
}

export default Portfolio