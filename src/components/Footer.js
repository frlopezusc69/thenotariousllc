import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-container'>
                <h1 className='footer-subscription-heading'>
                    Start Your Notarious Journey Today!
                </h1>
                <p className='footer-subscription-text'>
                    Unsubscribe at any time you wish
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="What's Your Email?" className="footer-input" />
                        <Button buttonStyle='btn-outline'>See You Soon!</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Why Be Notarious?</h2>
                        <Link to='/sign-up'>Begin Your Journey</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Programs</Link>
                        <Link to='/'>Payment Options</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Our Services</h2>
                        <Link to='/'>3-Hour Program</Link>
                        <Link to='/'>6-Hour Program</Link>
                        <Link to='/'>1-On-1 Training</Link>
                        <Link to='/'>Live Classes</Link>
                        <Link to='/'>Training Schedule & Available Dates</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Send Us an Email!</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            The Notarious, LLC <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>The Notarious, LLC, 2021</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link 
                        className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link 
                        className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='YouTube'
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link 
                        className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
