import React from "react";

const ArticleADDesktop = () => {
  const adTitel = 'هل تجد محتوى هذا الموقع مفيد لك؟'
  const adInfo = 'مساعدتك في دعم تطوير الموقع برمجياً و توفير القدرة على الترويج. يحمل تأثير كبير في نشر هذه الأفكار وخلق وعي و مجتمع أفضل. مجتمع افضل, راحة اكثر لك ولعائلتك.'
  const adInterestingPoint = 'بضغط الزر تنتقل إلى موقع البي بال'
  const adAction = 'إدعم الموقع الأن'
  return (
    <>
      {/* <div className="article_body_ad_info">
        <i className="aicon-info"></i>
          Wir sind nicht verantwortlich für den Inhalt dieser Anzeige.
      </div> */}
      <div className="article_body_ad_ad">
        <div className='my_ad-container'>
          <h1 className='my_ad-title'> {adTitel} </h1>
          <p className='my_ad-info'>{adInfo}</p>
          <p className='my_ad-interesting-point'>{adInterestingPoint}</p>

          <a href='https://paypal.me/pools/c/8vvoIYGbxt' className='my_ad-action'>{adAction}</a>
        </div>
      </div>
    </>
  );
};

export default ArticleADDesktop;
