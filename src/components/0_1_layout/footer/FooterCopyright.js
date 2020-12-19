import React from "react";
import { Link } from 'react-router-dom'

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      <div className='footer-link'>
        <Link to='/privacy'>Datenschutz</Link> - <Link to='#!'>Sitemap</Link> - <Link to='/conditions'>AGB</Link> - <Link to='/Imprint'>Impressum</Link>
      </div>
      <p><span role="img" aria-label="copyright">©️</span> 2020-2021 nicetwice.de</p>
    </div>
  );
};

export default FooterCopyright;
