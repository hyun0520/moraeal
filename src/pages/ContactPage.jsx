import "../styles/publisher.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "../components/sections/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="contact-wrapper">

        {/* --- Contact Information Card --- */}
        <div className="contact-card">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>주소</h4>
              <p>서울시 서초구 명달로 94</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h4>대표전화</h4>
              <p>02-3470-6800</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>info@moraeal.co.kr</p>
            </div>
          </div>
        </div>

        {/* --- Map Card --- */}
        <div className="map-card">
          <iframe
            title="location"
            src="https://map.kakao.com/?urlX=507113&urlY=1113807&coord=Kakao&map_type=TYPE_MAP&map_hybrid=false"
            width="100%"
            height="450"
            style={{
              border: "0",
              borderRadius: "16px",
            }}
          ></iframe>
        </div>

      </div>

      
    </>
  );
}
