import React from "react";
import Link from "gatsby-link";
import Search from "../search/search";
import Status from "../status/status";
import logo from "./logo.svg";
import classNames from "classnames";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'





import "./navigation.scss";

const NavItem = ({ linkTo, title }) => {
  const linkProps = to => ({ location }) => {
    return {
      className: classNames("navigation__link", {
        "navigation__link--active": location.pathname.includes(to)
      })
    };
  };

  return (
    <li className="navigation__item">
      <Link to={linkTo} getProps={linkProps(`/${title.toLowerCase()}`)}>
        {title}
      </Link>
    </li>
  );
};

export default ({ pathname }) => {
  return (
    <div role="navigation" className="navigation__wrapper">
      <Link to="/" className="navigation__logo">
        <img src={logo} className="navigation__logo-image" alt="" />
      </Link>
      <ul className="navigation__list">
        <NavItem linkTo="/html.html" title="HTML" />
		<NavItem linkTo="/bootstrap.html" title="CSS" />
        <NavItem linkTo="/programs.html" title="Javascript" />
       
        <NavItem linkTo="/changelog" title="Bootstrap" />
        <NavItem linkTo="/accessibility" title="React" />
		
		

		
		
		
		 <li className="navigation__item drop-down-parent">
          <a
            className="navigation__link"
            href="#">API
          </a>
		  <ul className="drop-down"> 
		  <li>Elephant</li>
		  		  <li>Tiger</li>

		  </ul>
		  
		  
		  
        </li>
		
<li class="join-us navigation__item"><a class="navigation__link navigation__link--active" href="/accessibility">Join us</a></li>
		
		
		
		
		<li class="navigation__item dark-toggle"><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="dark-toggle">
            <input class="dark-toggle"
              type="checkbox" id="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />  <label for="checkbox" ></label>
{' '}
            <svg version="1.1" width="25" height="25" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" class="dark-toggle"></path></svg>
          </label>
        )}
      </ThemeToggler></li>
		
		
		
      </ul>

    

      <Search />
	  

    </div>
  );
};


