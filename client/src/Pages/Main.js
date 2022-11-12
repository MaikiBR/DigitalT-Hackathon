import React from "react";
import headline1 from "../Media/1.png"
import headline2 from "../Media/2.png"
import headline3 from "../Media/3.png"

import '../SCSS/_main.scss'

function Main() {
  return (   
    <div className="main-container">
      <section className="intro">
        <div className="inner-container">
          <header>
            <h1 className="title">Digital IT | Hackathon</h1>
          </header>
          <div className="content phrase">
            <em>"Smartphones are warming the planet far more than you think"</em>
          </div>
        </div>
      </section>
      <section className="info">
        <p>Since the Paris Agreement adopted in 2015 set the specific intentions of holding global warming to well below 2 degrees Celsius (°C) under pre industrial levels, and trying to limit warming to 1.5°C. The information and communication industry (ICT) has received little attention as a significant contributor to GHG emissions, despite the increase in its contribution from 1% to 1.6% of the worldwide GHG emissions in 2007, rising to 14% in 2016. </p>
        <br/>
        <p>By 2040, it will exceed this figure, the carbon footprint of smartphones alone will outstrip the individual contribution of desktops, laptops and displays by 2024. Smartphones represent a fast-growing segment of ICT. About 1.9 billion of them were sold in 2017, and the number is expected to reach 6.1 billion by 2024,  enough for 70% of the global population.</p>
        <br/>
        <p>The entire lifecycle of the iPhone 6s emitted about 95 kg of CO2, 85% of which occurred in the manufacturing stage, the projected sales of 80 million of the iPhone 6s are expected to generate a total annual carbon footprint of 6,460 kilotons of CO2, which is greater than the emissions of 770,000 people and all the business of the London boroughs of Westminster, Lambeth, and Camden put together. In addition, building an iPhone 7 Plus creates roughly 10% more CO2 emissions than an iPhone 6s does. </p>
        <br/>
        <p>The best practices were found to be related to waste management and recycling, and reported the design of effective green base stations, so green actions of the mobile phone producers were beyond its scope.</p>
      </section>
      <br /> <br />
      <div className="divider"></div>
      <div className="headline-container">
        <img 
          src={headline1}
          width="300px"
          height="190px"
          className="headline-img"
        />
        <img 
          src={headline2}
          width="300px"
          height="190px"
          className="headline-img"
        />
        <img 
          src={headline3}
          width="300px"
          height="190px"
          className="headline-img"
          id="headline-final"
        />
      </div>
      <br/>
      <div className="divider"></div>
    </div>
    );
  }

export default Main;