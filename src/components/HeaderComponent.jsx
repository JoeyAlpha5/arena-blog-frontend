import '../styles/HeaderComponent.css';
import {useState} from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from "react-router-dom";
const HeaderComponent = ()=>{
    const [displayMobileMenu,setDisplayMobileMenu] = useState(false);
    return(
        <header className={displayMobileMenu===true?"expanded-header":null}>
            <div className={displayMobileMenu===true?"container expanded-container header-container":"container header-container"}>
                <h1>Arena<span>Blog</span></h1>
                {displayMobileMenu === true?
                    <MdClose size={30} className="menu-icon" onClick={()=>setDisplayMobileMenu(false)}/>
                    :
                    <MdMenu size={30} className="menu-icon" onClick={()=>setDisplayMobileMenu(true)}/>
                }
                <ul className="desktop-menu">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About us</li></Link>
                        <Link to="/contact"><li>Contact us</li></Link>
                </ul>
                <button className="login-button">
                    Login
                </button>
            </div>
            {displayMobileMenu === true?
                    <ul className="mobile-menu">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About us</li></Link>
                        <Link to="/contact"><li>Contact us</li></Link>
                    </ul>
                    :
                    null
                }
        </header>
    )
}

export default HeaderComponent;