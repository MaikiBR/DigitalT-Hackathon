import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPieChart, faHome, faRankingStar, faFaceGrin, faArrowAltCircleLeft, faArrowAltCircleRight, faBookAtlas, faBook, faBookmark, faTicket} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from "../Media/logo-dabi-gris.png"

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

            <div className='divider'></div>

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
                    <Link to="/manual">
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                            <span>Manual</span>
                        </a>
                    </li>
                    </Link>
                    <Link to="/catalogo">
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <span>Catalogo</span>
                        </a>
                    </li>
                    </Link>
                    <Link to="/badge">
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <FontAwesomeIcon icon={faTicket} />
                            </div>
                            <span>Badging</span>
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