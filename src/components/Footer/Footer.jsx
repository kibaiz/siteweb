import React from 'react';
import {FaSlack, FaSlideshare, FaReadme, FaHubspot, FaOpencart} from 'react-icons/fa';

import './Footer.css';



const Footer = () =>{
  return(
    <>
      <footer className="bg-primary text-white pt-5 pb-4 footer">
        <div className="contaire text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img src="./images/logo.jpg" className="footer_logo" alt="logo"/>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 a1">Contact</h5>
                <p className="para">
                <h6 className="text-center">Centre d’Echanges, de Documentation et d’Information Interinstitutionnelles</h6>
                  Boulevard Philibert TSIRANANA <br/>
                  BP. 166 Tsianolondroa 301 - FIANARANTSOA MADAGASCAR
                  <br/>
                  Tel (261) 20 75 509 34 / (261) 20 75 509 68
                  Fax : (261) 20 75 511 06 <br/>
                  Email : cedii@cedii.mg ;  cedii.fia@moov.mg

                </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 a1">Vision</h5>
                <p className="para">
                « Le développement équilibré et harmonieux, permettant aux différentes forces vives d’accéder à l’information et de contribuer au mieux vivre et au mieux être, et de participer à l’éradication de l’exclusion et de la pauvreté sous toutes  leurs  formes »
                </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 a1">Liens</h5>
                <p className="para">
                  <a className="text-white a" href="/"><FaSlack/> Home</a>
                </p>
                <p className="para">
                  <a className="text-white a" href="/echange"><FaSlideshare/> Echange</a>
                </p>
                <p className="para">
                  <a className="text-white a" href="/documentation"><FaReadme/> Documentation</a>
                </p>
                <p className="para">
                  <a className="text-white a" href="/information"><FaHubspot/> Information</a>
                </p>
                <p className="para">
                  <a className="text-white a" href="/contact"><FaOpencart/> A propos</a>
                </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
