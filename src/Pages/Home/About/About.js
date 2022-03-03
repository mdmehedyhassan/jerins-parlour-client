import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div className="container pt-5 pb-5" style={{ background: '#f21679', color: 'white' }}>
            <div className="row">
                <div className="col-md-4">
                    <h6><FontAwesomeIcon icon={faLocationDot} /> H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh</h6>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{ fontWeight: 700 }}>Company</h5>
                            <p>About</p>
                            <p>Project</p>
                            <p>Our Team</p>
                            <p>Terms Conditions</p>
                            <p>Submit Listing</p>
                        </div>
                        <div className="col-6">
                            <h5 style={{ fontWeight: 700 }}>Quick Links</h5>
                            <p>Quick Links</p>
                            <p>Rentals</p>
                            <p>Sales</p>
                            <p>Contact</p>
                            <p>Our blog</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 style={{ fontWeight: 700 }}>Quick Links</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis illum aut illo quasi nobis amet soluta hic. Eum, iusto.</p>
                    <h5>
                        <a href="https://www.facebook.com/mehedysr/" target="_blank" rel="noopener noreferrer" className="p-2 text-light">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/mdmehedyhassanmmh/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 text-light">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer" className="p-2 text-light">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://github.com/mdmehedyhassan" target="_blank" rel="noopener noreferrer" className="p-2 text-light">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default About;