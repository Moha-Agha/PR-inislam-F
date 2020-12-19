import React from "react";

const SocialMedia = () => {


  let behance = 'https://www.behance.net/M-agha';
  let facebook = 'https://www.facebook.com/nicetwice.de/';
  let youtube = 'https://youtube.com/channel/UC8NdRgx0vQ4kOvGq1Kuw0Cw';
  let spotify = '';




  return (
    <div className="social-media">
      <a href={behance} target="_blank" rel="noopener noreferrer" className="icon-circle"><i className="aicon-behance-logo"></i></a>
      <a href={facebook} target="_blank" rel="noopener noreferrer" className="icon-circle"><i className="aicon-facebook"></i></a>
      <a href={youtube} target="_blank" rel="noopener noreferrer" className="icon-circle"><i className="aicon-youtube"></i></a>
      <a href={spotify} target="_blank" rel="noopener noreferrer" className="icon-circle"><i className="aicon-spotify"></i></a>
    </div>
  )
};

export default SocialMedia;
