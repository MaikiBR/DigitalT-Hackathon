import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart, faArrowAltCircleLeft, faArrowAltCircleRight, faBook, faTicket, faMobilePhone, faCalculator} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from "../Media/CO.png"

import "../SCSS/_sidebar.scss"


const SideBar = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        props.onCollapse(inactive);
    }, [inactive]);

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className='top-section'>
                <Link to="/">
                <div className='logo'>
                    <img 
                        src={logo}
                        alt="Logo"
                    />
                </div>
                </Link>
                <div className='toggle-menu-btn' onClick={() => setInactive(!inactive)}>
                    {inactive ?<FontAwesomeIcon icon={faArrowAltCircleRight} /> : <FontAwesomeIcon icon={faArrowAltCircleLeft} />}
                </div>
            </div>

            <div className='sidebar-divider'></div>

            <div className='main-menu'>
                <ul>
                    <Link to="/dashboard">
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <FontAwesomeIcon icon={faPieChart} />
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    </Link>
                    <Link to="/catalogue">
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <FontAwesomeIcon icon={faMobilePhone} />
                            </div>
                            <span>Catalogue</span>
                        </a>
                    </li>
                    </Link>
                    <Link to="/badge">
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <FontAwesomeIcon icon={faCalculator} />
                            </div>
                            <span>Evaluation</span>
                        </a>
                    </li>
                    </Link>
                </ul>
            </div>
        
            <div className='side-menu-footer'></div>
        </div>
    );
}

export default SideBar;