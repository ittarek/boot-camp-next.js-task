"use client"
import React, { useEffect } from 'react';
import "./RightSide.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
const RightSide = () => {
      useEffect(() => {
    if (window.$ && window.$.fn && window.$.fn.SocialCounter) {
      window.$('#wrapper').SocialCounter({
        dribbble_user: 'juanv911',
        facebook_user: 'envato',
        instagram_user: 'mycss_net',
        instagram_user_sandbox: 'juanv911',
        google_plus_id: '100542012590159373204',
        youtube_user: 'envato',
        pinterest_user: 'juanv911',
        soundcloud_user_id: 'juanv911',
        vimeo_user: 'vimeocuration',
        github_user: 'juanv911',
        twitter_user: 'jvargas_01',
        behance_user: 'juanv911',
        vine_user: '952223981988110336',
        vk_id: '66748',
        foursquare_user: 'mo3aser',
        tumblr_username: 'festus915',
        twitch_username: 'towelliee',
        dribbble_token: '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8',
        instagram_token: '3216680391.5a20414.d66b30dc0857473dbf9723d34b502a73',
        google_plus_key: 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',
        facebook_token: '1627334644211864|3_tGe7MNSzumVcKxMyJUTqZAlz4',
        youtube_key: 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',
        twitch_client_id: '2yllx3nbpx9wa5intlhan6p9i8pi2h7',
        soundcloud_client_id: '5a9f3b72a723aac2cffb7ee684a80d9b',
        vimeo_token: '961a0b29198b9ed293a6a70d2c160b0f',
        behance_client_id: 'mpX9kGiySp7YxrTCCw6FwNmKvDLNAt49',
        foursquare_token: 'GCPMWQPBATX1H23NQ4FRURC1SXYC4MPNJ0KWRKXO5JAOEIDI',
        linkedin_oauth: 'AQXo4yikouZnzWkUYZCOnVCKnhAALbi0-eSrlWTORI85p8dHCx_n0lnP7sG1k8HrOqPPvQ6Nkf0iAII2Ui34fsFr6IGcclgDnIsK_Z1Olx3vX-cJNfvuQoqNKFtUvhJOLE43iQQy0y1NDJXIDJV4nTPQCdezuaqAIEbjgcFa8tWsGmSZgtI' 
      });
    }
  }, []);
  return (
    <div>
      <div className="social-container transition-style">
        <h2>Join With Us</h2>
   
      </div>
     
      <div id="wrapper" className="square">
  
       
        <a className="item twitter">
          <i className="fa fa-twitter"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item facebook">
          <i className="fa fa-facebook"></i>
          <span className="count"></span>Likes
        </a>
        <a className="item instagram">
          <i className="fa fa-instagram"></i>
          <span className="count"> </span>Followers
        </a>
        <a className="item google">
          <i className="fa fa-google-plus"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item instagram_sandbox">
          <i className="fa fa-instagram"></i>
          <span className="count"> </span>Followers
        </a>
        <a className="item linkedin">
          <i className="fa fa-linkedin"></i>
          <span className="count"></span>Connections
        </a>
        <a className="item youtube">
          <i className="fa fa-youtube"></i>
          <span className="count"></span>Subscribers
        </a>
        <a className="item twitch">
          <i className="fa fa-twitch"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item tumblr">
          <i className="fa fa-tumblr"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item vine">
          <i className="fa fa-vine"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item pinterest">
          <i className="fa fa-pinterest"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item dribbble">
          <i className="fa fa-dribbble"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item soundcloud">
          <i className="fa fa-soundcloud"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item vimeo">
          <i className="fa fa-vimeo"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item github">
          <i className="fa fa-github"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item behance">
          <i className="fa fa-behance"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item vk">
          <i className="fa fa-vk"></i>
          <span className="count"></span>Followers
        </a>
        <a className="item foursquare">
          <i className="fa fa-foursquare"></i>
          <span className="count"></span>Friends
        </a>
      </div>
    </div>
  );
};

export default RightSide;
