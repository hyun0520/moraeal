import Announcement from "./sections/Announcement";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import Details from "./sections/Details";
import PhotoBlock from "./sections/PhotoBlock";
import News from "./sections/News";


import "../styles/publisher.css";

export default function Publisher() {
  
  return (
    <div className="publisher-page">
      <Announcement />
      <Header />
      <Hero />
      <WhatWeDo />
      <Details />
      {/* <PhotoBlock /> */}
      <News />
    </div>
  );
}
