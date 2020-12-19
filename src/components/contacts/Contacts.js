import React, { useState, useContext, useEffect } from "react";

import AlertContext from '../../context/alert/alertContext';
import MessageContext from '../../context/message/messageContext';

import Input from "../0_0_uiElements/forms/Input";
import Select from "../0_0_uiElements/forms/Select";
import Textarea from "../0_0_uiElements/forms/Textarea";
import Button from "../0_0_uiElements/forms/Button";

import BackTo from "../0_0_uiElements/button/BackTo"

import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

const Contacts = () => {
  const messageContext = useContext(MessageContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { addMessage, error } = messageContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [])

  const [step, setStep] = useState(0);

  const [messageItems, setMessageItems] = useState({
    name: '',
    companyName: '',
    service: '',
    phone: '',
    email: '',
    information: ''
  });

  const { name, companyName, service, phone, email, information } = messageItems;

  const onChange = e => setMessageItems({ ...messageItems, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || service === '' || email === '') {
      setAlert('Please fill in all fields', 'error');
    } else if (email === '') {
      setAlert('Please fill in all fields', 'error');
    }
    else {
      addMessage(messageItems)
      if (error == null) {
        setStep(1)
      }
    }
  };

  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className='contact-us_message'>

              <span className='contact-us_icon-success'><i className='aicon-direct'></i></span>
              <h1 className="contact-us_success">Danke dir<br /> Wir werden uns bald<br /> bei dir melden.</h1>

            </div>
          </>
        )

      default:
        return (
          <>
            <form onSubmit={onSubmit} className='contact-us_message' >

              <p>Hallo Mohammad,</p>
              <div className="message-item">
                <span className=' message-item_title_1 '>mein Name ist</span>
                <Input
                  id='name'
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                  placeholder='Vor- und Nachname*'
                  required='required'
                  classs=' message-item_input_1 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_2 '>Ich arbeite bei </span>
                <Input
                  id='companyName'
                  type='text'
                  name='companyName'
                  value={companyName}
                  onChange={onChange}
                  placeholder='Unternehmensname'
                  classs=' message-item_input_2 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_3 '>und ich brauche deine Hilfe für</span>
                <Select
                  id='service'
                  name='service'
                  value={service}
                  onChange={onChange}
                  placeholder='Art des Projekts*'
                  required='required'
                  classs='  message-item_input_3 '
                  options={[{ _id: '1', slug: 'Logo' }, { _id: '2', slug: 'Webseite' }, { _id: '3', slug: 'Logo+Webseite' }]}
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_4 '>Du kannst mich unter dieser</span>
                <Input
                  id='phone'
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={onChange}
                  placeholder='Telefonnummer'
                  classs='  message-item_input_4 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_5 '>erreichen oder einfach per E-Mail</span>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  placeholder='E-Mail adresse*'
                  required='required'
                  classs='  message-item_input_5 '
                />
              </div>
              <div className="message-item">
                <Textarea
                  id='information'
                  name='information'
                  value={information}
                  onChange={onChange}
                  placeholder='Weitere Informationen'
                  classs='  message-item_input_5 '
                />
              </div>

              <p>Dankeschön.</p>

              <Button
                type='submit'
                value='SENDEN'
              />
            </form >
          </>
        )

    }
  };


  return (
    <>
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <div id="contact" className="contact-us">
          <h1 className="contact-us_title"> sag mir, was du brauchst.<br /><span className="contact-us_subtitle"> was du wirklich brauchst.</span></h1>

          {switchStep()}
          <p className="city-name">HAMBURG</p>
        </div>
      </div>
      <FooterRedirection to='home' />
    </>
  );
};

export default Contacts;
