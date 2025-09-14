import { useNavigate } from "react-router-dom";
import { IMAGES } from "./../../images";
import './Banner.scss';

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section
      className="mainbanner"
      style={{
        backgroundImage:
          `url(${IMAGES.mainbanner})`
      }}
    >
      <div className="container">
        <div className="banner-inner">
          <h2>
            &lt;H1&gt;<span>Millions of Holidays</span>,<br />
            One Search Away&lt;/H1&gt;
          </h2>
          <p>
            Lorem ipsum dolor sit ame. Duis aute irure dolor in reprehenderit 
            in voluptate velitesse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
          <button className="btnPurple" onClick={() => navigate("/holidays")}>
            Send Enquiry
            <img src={IMAGES.btnarrowpurple} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
