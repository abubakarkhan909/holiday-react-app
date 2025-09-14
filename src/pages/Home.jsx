import Banner from "../components/Banner/Banner";
import HolidaysSection from "../components/HolidaysSection/HolidaysSection";
import SpecialSection from "../components/SpecialSection/SpecialSection";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage"
import Faqs from '../components/faqs/Faqs'
import aboutContent from "../data/aboutContent.json";
import { IMAGES } from "../images";

export default function Home({ items,specialOffers }) {
  return (
    <>
      <Banner />
      <HolidaysSection items={items} /> 
      <SpecialSection items={specialOffers} />
      {aboutContent.map((section) => (
        <ContentWithImage 
          key={section.id} 
          image={`/src/assets/${section.image}`} 
          content={section.content} 
        />
      ))}
      <Faqs
        usecontainer="container"
        rightLeftdir="right"
      />
    </>
  );
}
