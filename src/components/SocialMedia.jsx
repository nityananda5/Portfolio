import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.facebook.com/nityananda.niku'>
      <FaFacebookF />

      </a>
    </div>
    <div>
      <a href='https://twitter.com/Nityananda__B'>
    <BsTwitter />
    
    </a>
    </div>
    <div>
      <a href='https://github.com/nityananda5'>
      <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
