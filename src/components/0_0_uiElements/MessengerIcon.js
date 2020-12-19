import React from "react";

const MessengerIcon = ({ mobile = 'show' }) => {

  let whatsappText = '';
  let whatsapp = `https://api.whatsapp.com/send?phone=4915759026756&amp;text=${whatsappText}`;

  return (
    <div className={"messenger-icon " + mobile}>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer"><i className="aicon-whatsapp"></i></a>
      {/* <!-- Your Chat Plugin code --> 
      <div class="fb-customerchat"
        attribution='setup_tool'
        page_id="1891900140937824"
        theme_color="#FA163F"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Hi! How can we help you?">
      </div>*/}

    </div >
  )
};

export default MessengerIcon;
