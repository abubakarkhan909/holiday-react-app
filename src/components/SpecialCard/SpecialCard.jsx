import { Link } from "react-router-dom";
import { IMAGES } from '../../images';
import './SpecialCard.scss';

export default function SpecialCard({ specialoffer }) {
  return (
    <article className="special-card">
     
      <div className='pre_content'>
        <div className='ratings'>
          <div className="stars">
           {[...Array(specialoffer.rating)].map((_, i) => (
            <img
              key={i}
              src={IMAGES.star}
              alt="star"
            />
          ))}

          </div>
          <div className='ratingquantity'>
            {String(specialoffer.ratingQuantity).padStart(2, "0")}
          </div>
        </div>

        <div className='pre_text'>
          <h2>{specialoffer.title}</h2>
          <p>{specialoffer.description}</p>
          <div className='offersprovide'>
           
            {specialoffer.offers.map((offer, index) => {
              const offerClassMap = {
              transfer: "transfer-img",
              breakfast: "breakfast-img",
              flight:"flight-img"
            };
            
            return (
              <span key={index} className="offer-item">
                <img
                  src={IMAGES[offer]}
                  alt={offer}
                  title={offer}
                  className={offerClassMap[offer] || ""}
                />
                <span className="offer-text">{offer}</span>
              </span>
            )})}
          </div>
          <div className='price_link'>
            <div className="pricediv"> 
              <span>Starting <br /> from</span> <span className='price'>£{specialoffer.price}</span><sub>pp</sub>
            </div>
             <Link to={specialoffer.link} className="linkarrow">
              
            </Link>
          </div>
          

        </div>
      </div>

      <div className='pre_img'>
        <img src={`/src/assets/${specialoffer.image}`} alt={specialoffer.title} />
      </div> 
    </article>
  );
}
