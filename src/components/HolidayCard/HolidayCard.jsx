import './HolidayCard.scss';

export default function HolidayCard({ holiday }) {
  return (
    <article className="holiday-card">
      <div className='pre_img'>
        <img src={`/src/assets/${holiday.image}`} alt={holiday.title} />
      </div> 
      <div className='pre_content'>
        <div className='pre_text'>
          <h4>{holiday.title}</h4>
          <p className="pricediv"> <span>Starting <br /> from</span> <span className='price'>£{holiday.price}</span><sub>pp</sub></p>
        </div>
      </div>
    </article>
  );
}
