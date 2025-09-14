import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HolidayCard from "../HolidayCard/HolidayCard";
import "swiper/css";
import "swiper/css/navigation";
import { IMAGES } from "./../../images";
import './HolidaysSection.scss';

export default function HolidaysSection({ items }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="holidays-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h4>
            &lt;H2&gt; Our Top Salling
            </h4>
            <h2>Holiday Destinations</h2>
            <p>
              Lorem ipsum dolor sit ame. Duis aute irure dolor in reprehenderit in voluptate 
              velitesse non provident Lorem olor sit ame. Duis aute irure dolor Excepteur sint 
              occaecat cupidatat non provident Lorem ipsum dolor sit ame. Duis aute irure dolor 
              in reprehenderit in voluptate velitesse cillumdolore eu fugia.
            </p>
          </div>
          <div className="btns">
            <Link to="/holidays" className="see-all btnPurple btn-sm">
              See all
              <img src={IMAGES.btnarrowpurple} alt="" />
            </Link>
            <div className="sliderbtns">
              {isMobile && (
                <>
                  <button className="custom-prev custom-arrow left">
                    <img src={IMAGES.leftArrow} alt="leftarrow" />
                  </button>
                  <button className="custom-next custom-arrow right">
                    <img src={IMAGES.rightArrow} alt="rightarrow" />
                  </button>
                </>
              )}
            </div>
          </div>
          
        </div>
        <div className="slider-wrap">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
              1780: { slidesPerView: 5 },
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              375: { slidesPerView: 1 },
            }}
          >
            {items.map((h) => (
              <SwiperSlide key={h.id}>
                <HolidayCard holiday={h} />
              </SwiperSlide>
            ))}
          </Swiper>
          {!isMobile && (
            <>
              <button className="custom-prev custom-arrow left">
                <img src={IMAGES.leftArrow} alt="leftarrow" />
              </button>
              <button className="custom-next custom-arrow right">
                <img src={IMAGES.rightArrow} alt="rightarrow" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
