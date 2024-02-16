import { NavLink, useLocation  } from "react-router-dom"
import logoGitgub from "../assets/github-icon.png"
import logoLinkedin from "../assets/linkedin-icon.png"
import '../styles/HeaderComponent.css'


function SelectorNav(){
  const location = useLocation();
  return (location.pathname === "/search"?  (<div className="animation start-search"></div>) : (<div className="animation start-home"></div>))
}

export  function HeaderComponent() {

  
  return(
    <header className="page-header">
      <div className="page-header-left-section">
       <a href="https://www.linkedin.com/in/carlosvertiz/"
        className="header-link"
         target="_blank"
          rel="noreferrer">
         <img className="linkedin-logo" 
         src={logoLinkedin}
         alt = "Linkedin profile"></img>
       </a>
       <a href="https://github.com/carlosvertiz"
        className="header-link" 
        target="_blank" 
        rel="noreferrer">
         <img className="github-logo"
          src={logoGitgub}
          alt = "Github profile"></img>
       </a>
       </div>
       <div className="page-header-right-section">
          <nav>
            <NavLink to = '/' className = "nav-link">add</NavLink>
            <NavLink to =  '/search' className = "nav-link">search</NavLink>
            <SelectorNav></SelectorNav>
          </nav>
        </div>
      </header>
  )
}