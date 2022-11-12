import React, { useState } from "react";
import iphone from "../Media/iphone.png"
import samxia from "../Media/sam_xia.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faRecycle, faSun } from '@fortawesome/free-solid-svg-icons'

import '../SCSS/_catalogo.scss'


function Catalogo () {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">Firm comparison</h1>
      <p className="catalogo-p">A comparison of some aspects from every firm in the catalogue is a great way to have a good grasp of the market’s position in the current times.</p>
    <div className="images-container">
      <img 
        src={iphone}
        className={`iphone-card ${inactive ? "inactive" : ""}`}
      />
      <img 
        src={samxia}
        className={`samxia-card ${inactive ? "inactive" : ""}`}
      />
    </div>

    <div className="divider"></div>
    <FontAwesomeIcon icon={faRecycle} className="subtitle-icons"/>
    <h2 className="catalogo-subtitle">How much recycled material is used</h2>
    <p className="catalogo-p-sub">Reusing materials implies a reduction in carbon-intensive mining. Tin can be reused for circuit boards, cobalt for batteries and aluminum for enclosures, now, it’s even possible to recycle rare-earth elements.</p>
    <br />


    <FontAwesomeIcon icon={faBolt} className="subtitle-icons"/>
    <h2 className="catalogo-subtitle">How energy-efficient manufacturers’ facilities are</h2>
    <p className="catalogo-p-sub">The production of the integrated circuits used in smartphones consumes significant amounts of energy, for example, up to 30% of a semiconductor fabrication plant’s operational costs may come solely from the energy needed to maintain constant temperature and humidity.</p>
    <br />

    <FontAwesomeIcon icon={faSun} className="subtitle-icons"/>
    <h2 className="catalogo-subtitle">How heavily the manufacturing ecosystem relies on renewable energy</h2>
    <p className="catalogo-p-sub">This relates to owned facilities as well as third parties to which vendors outsource manufacturing. Vendors may need to convince and assist their outsourced supply chain to migrate to renewable energy.</p>
    <br />

    <div className="divider"></div>

    </div>
    
    );
  }

export default Catalogo;