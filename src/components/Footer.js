import React from 'react';
import {Link} from 'react-router-dom';

function Footer (props) {
    return(
   

        <div className="footer dark bg-dark flex-md-nowrap p-0 shadow">
            <div className="container">
                <div className="col-12 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+" style={{color:"#ea4335"}}><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="  style={{color:"#3b5998"}} ><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/" style={{color:"#336699"}}><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" style={{color:"#c3dee9"}}><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/" style={{color:"#ff0000"}}><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto text-muted">
                        <p>© Copyright 2020 LetsWalk </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;