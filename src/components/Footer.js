import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          CONTACT
        </p>
        <p className='footer-subscription-text'>
          Send me an Email
        </p>
        <div className='input-areas'>
          
            <Button buttonStyle='btn--outline'>
            <a href="mailto:canedoflores.franco@gmail.com?subject=Subject&body=Body">EMAIL</a>
              </Button>
         
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Technical Skills</h2>
            <Link to='/'>JavaScript</Link>
            <Link to='/'>React.JS</Link>
            <Link to='/'>Ruby</Link>
            <Link to='/'>Ruby on Rails</Link>
          </div>
          <div class='footer-link-items'>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.linkedin.com/in/franco-canedo/">LinkedIn</a>
            <a target="_blank" href="https://github.com/franco-canedo">Github</a>
            <a target="_blank" href="https://medium.com/@francocanedo">Medium</a>
            <a target="_blank" href="https://www.youtube.com/channel/UCw9nQo4vYAaTQzrPYwb3Mjw">Youtube</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FRANCO CANEDO 
              <i class='fab fa-font-awesome' />
            </Link>
          </div>
          <small class='website-rights'> 2021</small>
          <div class='social-icons'>
          <a target="_blank" 
          class='social-icon-link facebook'
          aria-label='LinkedIn'
          href="https://www.linkedin.com/in/franco-canedo/">
            <i class='fab fa-linkedin' />
            </a>
            <a target="_blank" 
          class='social-icon-link facebook'
          aria-label='Github'
          href="https://github.com/franco-canedo">
            <i class='fab fa-github' />
            </a>
            <a target="_blank" 
          class='social-icon-link facebook'
          aria-label='Medium'
          href="https://medium.com/@francocanedo">
            <i class='fab fa-medium' />
            </a>
            <a target="_blank" 
          class='social-icon-link facebook'
          aria-label='Youtube'
          href="https://www.youtube.com/channel/UCw9nQo4vYAaTQzrPYwb3Mjw">
            <i class='fab fa-youtube' />
            </a>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
