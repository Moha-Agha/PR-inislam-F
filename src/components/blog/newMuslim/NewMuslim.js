import React, { useContext, useState } from "react";
import AlertContext from '../../../context/alert/alertContext';
import NewMuslimContext from '../../../context/newMuslim/newMuslimContext';

import BackTo from "../../0_0_uiElements/button/BackTo";
import Input from '../../0_0_uiElements/forms/Input';
import Button from '../../0_0_uiElements/forms/Button';

const NewMuslim = () => {

  let content
  const [step, setStep] = useState(1);

  const [addemail, setAddEmail] = useState('');
  const [formTitle, setFormTitle] = useState('دورة متكاملة');
  const [formsubtitle, setFormsubtitle] = useState('نعمل على إتمام دورة تعليمية سهلة ومختصرة تجيب على معظم أسئلة المسلم الجديد, أشترك بالقائمة ليصلك إشعار');
  const [spenden, setSpenden] = useState('');

  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext;

  const newMuslimContext = useContext(NewMuslimContext)
  const { registerNewEmail, email, emailError } = newMuslimContext;

  const onChange = e => setAddEmail(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (addemail === '') {
      setAlert('الرجاء إضافة حقل الإيميل', 'error');
    } else {
      registerNewEmail(addemail)

      if (email) {
        setFormTitle('تم الإرسال');
        setFormsubtitle('شكراً على ثقتك بنا, سوف نبذل جهدنا لتحصل على المحتوى بأقرب وقت ممكن. ')
        setSpenden('تسعدنا مساهمتك لدعم المشروع بالتبرع من خلال رابط موقع البي بال .لأنتقال الى موقع البي بال انقر هنا رجاءً')
        setStep(2);
      }

      if (email === null || emailError) setAlert('حدث خطاء اثناء المعالجة, الرجاء المحاولة لاحقاً', 'error')

    }
  }


  switch (step) {
    case 2:
      content = <>
        <h1>{formTitle}</h1>
        <p>{formsubtitle}</p>
        <br />
        <a href='https://paypal.me/pools/c/8vvoIYGbxt' rel="noopener noreferrer" >{spenden}</a>
      </>
      break;
    default:
      content = <form onSubmit={onSubmit}>
        <h1>{formTitle}</h1>
        <p>{formsubtitle}</p>
        <Input type={'email'} name={'email'} value={addemail} onChange={onChange} placeholder={'الرجاء إدخال عنوان البريد الإلكتروني هنا'} required={true} />
        <Button type={'submit'} value={'إشترك الأن'} />
      </form>
      break;
  }

  return (
    <div className='container'>
      <BackTo to='/' title='العودة إلى الصفحة الرئيسية' />
      <div className='new-muslim'>
        {content}
      </div>
    </div>
  )
};

export default NewMuslim;
