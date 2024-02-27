import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const FooterCarousel = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={6000}
        centerMode={false}
        className="bg-transparent dark:bg-slate-900 "
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="p-2 md:p-2 "
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <img
          src="../hair/men1.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women1.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women7.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women10.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women9.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women5.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/men2.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women1.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women7.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women44.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women9.jpg"
          alt="..."
          className="rounded"
        />
        <img
          src="../hair/women5.jpg"
          alt="..."
          className="rounded"
        />


      </Carousel>
    </>
  );
};

export default FooterCarousel;
