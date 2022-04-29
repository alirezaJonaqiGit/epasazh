import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import productsList from "../../context/productsContext";


export default function ProductsListSlider() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    });

    const context = useContext(productsList);

  return (
    <>
      <Swiper
        slidesPerView={window.innerWidth > 400? 2 : 1.5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            context.map((product, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="w-100 productCard my-5">
                          <img className="productCard_img" src={product.avatar} alt={product.first_name + ' ' + product.last_name} />
                          <div className="productCard_body">
                            <h5 className="productCard_title">{product.first_name + ' ' + product.last_name}</h5>
                            <span className="productCard_subTitle">{product.email}</span>
                          </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}

