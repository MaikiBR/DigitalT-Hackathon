import React from "react";
import pres1 from "../Media/pres1.gif"
import pres2 from "../Media/pres2.gif"
import pres3 from "../Media/pres3.gif"
import pres4 from "../Media/pres4.gif"
import pres5 from "../Media/pres5.gif"
import diagrama from "../Media/diagrama.png"

import '../SCSS/_dashboard.scss'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="divider"></div>
      <h1 className="dashboard-title">Do you want to see how you are doing against different mobile companies around the world?</h1>
      <p className="dashboard-p">
      The performance indicators in practicing green operations can be classified into financial, operational, and environmental. 
      The financial indicators show the cost saved as a result of saving energy and material. The operational indicators show a better 
      use of capacity, improved productivity, and a smaller inventory. The environmental indicators show the reduction of GHG emissions, 
      solid waste, and energy consumed.
      </p>
      <br />
      <p className="dashboard-p">
      According to the life-cycle assessment process, all organizations should investigate the environmental impact of their 
      operations on the overall aspects of their operational processes, products, and materials, so that CO2 emissions should be 
      reported for suppliers’ practices, logistics processes, business travel, manufacturing, customers’ practices, and the operation 
      of offices and facilities.
      </p>
      <br /> <br /> 
      <div className="divider"></div>

      <h1 className="lca-title">Green Supply Chain - GHG</h1>
      <h2 className="lca-subtitle">Life Cycle Assesment [LCA]</h2>

      <img 
        src={diagrama}
        width="80%"
        height="80%"
        className="diagram-img"
      />

      <div className="divider"></div>
      <div class="small-img-row">
      <img
        src={pres1}
        width="100%"
        height="100%"
        class="small-img"
      />
      </div>
      <div className="divider"></div>
      <div class="small-img-row">
        <img
          src={pres2}
          width="100%"
          height="100%"
          class="small-img"
        />
      </div>
      <div className="divider"></div>
      <div class="small-img-row">
      <img
        src={pres3}
        width="100%"
        height="100%"
        class="small-img"
      />
      </div>
      <div className="divider"></div>
      <div class="small-img-row">
      <img
        src={pres4}
        width="100%"
        height="100%"
        class="small-img"
      />
      </div>
      <div className="divider"></div>
      <div class="small-img-row">
      <img
        src={pres5}
        width="100%"
        height="100%"
        class="small-img"
      />
      </div>
      <div className="divider"></div>
    </div>
    );
  }

export default Dashboard;