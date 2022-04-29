
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../../style/main.css'

// import required modules
import { Pagination } from "swiper";

export default function HeaderSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://random.imagecdn.app/500/250" alt="img1" /></SwiperSlide>
        <SwiperSlide><img src="https://random.imagecdn.app/520/250" alt="img2" /></SwiperSlide>
        <SwiperSlide><img src="https://random.imagecdn.app/512/250" alt="img3" /></SwiperSlide>
      </Swiper>
    </>
  );
}
