import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";

const Sharing = ({ articleTitle, articleSlug }) => {

  const [copy, setCopy] = useState('kopieren')

  const shareUrl = 'http://nicetwice.de/article/' + articleSlug;
  const title = articleTitle;

  return (
    <div className="sharing">

      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=" : interesting article : "
      >
        <i className="aicon-whatsapp"></i>
      </WhatsappShareButton>

      <FacebookMessengerShareButton
        url={shareUrl}
        appId="1006340983219207"
      >
        <i className="aicon-messenger"></i>
      </FacebookMessengerShareButton>

      <TelegramShareButton
        url={shareUrl}
        title={title}
      >
        <i className="aicon-telegram"></i>
      </TelegramShareButton>

      <FacebookShareButton
        url={shareUrl}
        quote={title}
      >
        <i className="aicon-facebook"></i>
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={title}
      >
        <i className="aicon-twitter"></i>
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} >
        <i className="aicon-linkedin"></i>
      </LinkedinShareButton>

      <EmailShareButton
        url={shareUrl}
        subject={title}
        body="I found this interesting article. I hope you will like "
      >
        <i className="aicon-message"></i>
      </EmailShareButton>

      <button onClick={() => { navigator.clipboard.writeText(shareUrl); setCopy('kopiert') }} onMouseLeave={() => setCopy('kopieren')}>
        <i className="aicon-link"></i>
        <span className='sharing-tooltip'>{copy}</span>
      </button>

    </div>
  );
};

export default Sharing;