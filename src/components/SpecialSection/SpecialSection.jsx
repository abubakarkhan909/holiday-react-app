import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SpecialCard from "../SpecialCard/SpecialCard";
import "swiper/css";
import "swiper/css/navigation";
import { IMAGES } from "../../images";
import './SpecialSection.scss';

export default function SpecialSection({ items }) {
  return (
    <section className="special-section">
      <div className="container">
        <div className="specialsectioninner">
          <div className="section-header">
            <div>
              <h4>
              &lt;H2&gt; Opportunity to Avail our
              </h4>
              <h2>Special Offers</h2>
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
                  <button className="custom-prev custom-arrow left">
                    <img src={IMAGES.leftArrow} alt="leftarrow" />
                  </button>
                  <button className="custom-next custom-arrow right">
                    <img src={IMAGES.rightArrow} alt="rightarrow" />
                  </button>
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
              slidesPerView={3}
              breakpoints={{
                1500: { slidesPerView: 3 },
                1200: { slidesPerView: 2 },
                1064: { slidesPerView: 3 },
                726: { slidesPerView: 2 },
                375: { slidesPerView: 1 },
              }}
            >
              {items.map((offer) => (
                <SwiperSlide key={offer.id}>
                  <SpecialCard specialoffer={offer} />
                </SwiperSlide>
              ))}
            </Swiper>
          
          </div> 
        </div>
      </div>
    </section>
  );
}
