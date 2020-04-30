import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import GatsbyConfig from "../../gatsby-config";

import Header from "../components/header/header";

import "../css/main.scss";



const TemplateWrapper = ({ children }) => (
  <div>
            
    
	
    <Header />
    <div className="wrapper">{children}</div>
  </div>
);





TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
