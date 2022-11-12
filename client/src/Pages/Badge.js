import React from "react";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faInfo } from '@fortawesome/free-solid-svg-icons';

import greenp from "../Media/green_product.png";
import redp from "../Media/red_product.png";
import greenc from "../Media/green_company.png";
import redc from "../Media/red_company.png";


import '../SCSS/_badge.scss'

function Badge() {
  function product_evaluation_formula() {
    var lca_value = document.getElementById("lca").value;
    var pc_eele_value = document.getElementById("pc_eele").value;
    var pc_etm_value = document.getElementById("pc_etm").value;
    var retriv_value = document.getElementById("pc_retriv").value;

    
    switch (lca_value) {
      case "1":
        var lca = 0.3;
        console.log('caso 1');
        break;
      case "2":
        var lca = 0.3 * 0.5;
        console.log('caso 2');
        break;
      case "3":
        var lca = 0.3 * 0.25;
        console.log('caso 3');
        break;
      case "4":
        var lca = 0;
        console.log("case 4");  
    }
    console.log(lca)

    var pc_eele = pc_eele_value * 0.25 / 100;
    console.log(pc_eele)
    var pc_etm = pc_etm_value * 0.25 / 100;
    console.log(pc_etm)
    var retriv = retriv_value * 0.2 / 100;
    console.log(retriv)

    var product_ev = pc_eele + pc_etm + lca + retriv;
    console.log(product_ev);

    if (product_ev >= 0.7){
      console.log("Badge green");
      document.getElementById("badgep-output").innerHTML = '<img src="' + greenp + '" width="150px" height="150px" />';

    }
    if (product_ev < 0.7){
      console.log("Badge red");
      document.getElementById("badgep-output").innerHTML = '<img src="' + redp + '" width="150px" height="150px" />';
    }

  }

  function company_evaluation_formula() {
    var co2_mea_value = document.getElementById('co2_mea').value;
    var carbon_co_value = document.getElementById('carbon_co').value;
    var tons_co2_value = document.getElementById('tons_co2').value;
    var coef_tons = 0.2;
    console.log(co2_mea_value);
    console.log(carbon_co_value);
    console.log(tons_co2_value);

    switch (co2_mea_value) {
      case "1":
        var co2_mea = 0.5;
        console.log('caso 1')
        break;
      case "2":
        var co2_mea = 0.5 * 0.5;
        console.log('caso 2')
        break;
      case "3":
        var co2_mea = 0.5 * 0.25;
        console.log('caso 3')
        break;
    }
    console.log(co2_mea)

    switch (carbon_co_value) {
      case "1":
        var  carbon_co = 0.3
        console.log('caso 1')
        break;
      case "2":
        var  carbon_co = 0.3 * 0.5;
        console.log('caso 2')
        break;
      case "3":
        var  carbon_co = 0;
        var  coef_tons = 0.5;
        console.log('caso 3')
        break;
    }
    console.log(carbon_co)

    switch (tons_co2_value) {
      case "1":
        var tons_co2 = coef_tons;
        console.log('caso 1')
        break;
      case "2":
        var tons_co2 = coef_tons * 0.5;
        console.log('caso 2')
        break;
      case "3":
        var tons_co2 = coef_tons * 0.25;
        console.log('caso 3')
        break;
    }
    console.log(tons_co2)
     

    var company_ev = tons_co2 + carbon_co + co2_mea ;
  

    if (company_ev >= 0.7){
      console.log("Badge green");
      document.getElementById("badgec-output").innerHTML = '<img src="' + greenc + '" width="150px" height="150px" />';

    }
    if (company_ev < 0.7){
      console.log("Badge red");
      document.getElementById("badgec-output").innerHTML = '<img src="' + redc + '" width="150px" height="150px" display="block" margin-left= "auto" margin-right="auto" />';

    }
  }

  function footprint_calculator() {
    var use_hours  = document.getElementById("use").value;
    var CO2_day =  use_hours*(365/63)*0.15;
    console.log(CO2_day)

    document.getElementById("calculator-output").innerHTML = CO2_day + " kg";
  }
  
  return (
    <div className="badge-container">
      <ReactTooltip />
      <section className="product-evaluation">
        <h1 className="section-titles">Product Evaluation</h1>
        <div className="input-container">
          <span className="input-span">
            Which was the reported  Life Cycle Assessment of the product (LCA)? <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="Which was the reported  Life Cycle Assessment of the product (LCA)? 1 Cradle to cradle: the design of a product where their life cycle contemplates the end of its life in a way that they could be truly recycle.
2 Cradle to grave: is an assessment of the product from their resource extraction to their dispose.
3 Cradle to gate: this is an assessment of a portion of the product life cycle just from the resource extraction to the factory gate.
4 None: No LCA was reported."/>
          </span>
          <input className="input-field" id="lca" type="number" min="1" max="4" step="1" required/>
        </div>
        <div className="input-container">
          <span className="input-span">
            From the overall list, which is the percentage of the endangered elements used?
            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="From the periodic table a total of 90 elements were reported with their respective risk of shortage in a near future. The elements in a risk of shortage are: He, Li, B, C, Mg, P, Sc, V, Cr, Mn, Co, Ni, Cu, Zn, Ga, Ge, As, Se, Sr, T, Zr, Nb, Mo, Ru, Rh, Pd, Ag, Cd, In, Sn, Sb, Te, Nb, Dy, Hi, Ta, W, Os, Ir, Pt, Au, Hg, Ti, Pb, Bi, U. 
The Percentage is given from the amount of elements present in this list times 100 over 46 (n x 100 / 46 )."/>
          </span>
          <input className="input-field" id="pc_eele" type="number" min="0" max="100" step="1" required/>
        </div>
        <div className="input-container">
          <span className="input-span">
            From the total weight of the device, how much of it is from materials in risk of shortage?
            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="It is calculated with the following formula: Weight of shortage risk materials times 100 over overall weight. (Shortage Risk Materials x 100 / Overall Weight)."/>
          </span>
          <input className="input-field" id="pc_etm" type="number" min="0" max="100" step="1" required/>
        </div>
        <div className="input-container">          
            <span className="input-span">
              Which percentage of the product could be retrieved and recycle?
              <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="It refers to the amount of the product that could return to the chain of production to be used in new devices."/>
            </span>
            <input className="input-field" id="pc_retriv" type="number" min="0" max="100" step="1" required/>
        </div>
        <button className="ev-btn" id="js-btn" onClick={product_evaluation_formula}>Grade</button>
        <div id="badgep-output"></div>
      </section>
      <br />
      <div className="section-divider"></div>
      <br />
      <section className="company-evaluation">
        <h1 className="section-titles">Company Evaluation</h1>
        <div className="input-container">
          <span className="input-span">
            Does the company take measures to reduce their Carbon Footprint?
            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="1 The company have a specific strategy with a transparent plan to reduce their carbon footprint.
	2 The company claims to have strategies to reduce their carbon footprint, but no plan published.
	3 The company have no plan to reduce their carbon footprint."/>
          </span>
          <input className="input-field" id="co2_mea" type="number" min="1" max="3" step="1" required/>
        </div>
        <div className="input-container">
          <span className="input-span">
            In the context of the carbon market exchange, does the company have carbon credits or offset?
            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="1 The company have carbon offset. 
		2 The company buys carbon credits.
		3 Does not apply to the company."/>
          </span>
          <input className="input-field" id="carbon_co" type="number" min="1" max="3" step="1" required/>
        </div>
        <div className="input-container">
          <span className="input-span">
            How much CO2 does the company produce per year?
            <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="1 The company produce from 0 – 10 tons of CO2 per year. 
		2 The company produce from 11 – 80 tons of CO2 per year.
		3 The company produces more than 81 tons of CO2 per year."/>
          </span>
          <input className="input-field" id="tons_co2" type="number" min="1" max="3" step="1" required/>
        </div>
        <button className="ev-btn" onClick={company_evaluation_formula}>Grade</button>
        <div id="badgec-output"></div>
      </section>
      <br />
      <div className="section-divider"></div>
      <br />
      <section className="calculator">
      <h1 className="section-titles">Footprint Calculator</h1>
        <div className="input-container">
          <span className="input-span">
            How many hours do you use your smartphone daily? <FontAwesomeIcon className="info-icon" icon={faCircleInfo} data-tip="This calculator give you the carbon footprint for the usage of your phone."/>
          </span>
          <input className="input-field" id="use" type="number" min="1" max="24" step="1" required/>
        </div>
        <button className="ev-btn" onClick={footprint_calculator}>Calculate</button><label id="calculator-output"></label>
      </section>
    </div>
    );
  }

export default Badge;