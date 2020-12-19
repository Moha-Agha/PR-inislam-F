import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MessageContext from '../../context/message/messageContext';

const MessageItem = ({ message }) => {
  const messageContext = useContext(MessageContext);
  const { deleteMessage } = messageContext;

  const { _id, name, service, phone, email, information, date } = message;

  const onDelete = () => {
    deleteMessage(_id);
  };

  return (
    <div className='message-card'>
      <h3 className="message-title">{service}</h3>
      <div className="message-subtitle"><p>{name}</p><p>{date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)}</p></div>
      <p className="message-body">{(information.length !== 0) ? information : <>No message ... </>}</p>

      <div className="message-footer">
        <div>
          <div className="circle-secondary-button" onClick={() => { console.log(email) }}><i className='aicon-phone-call' /></div>
          <div className="circle-secondary-button" onClick={() => { console.log(phone) }}><i className='aicon-at' /></div>
        </div>
        <div className="circle-premium-button" onClick={onDelete}><i className='aicon-trash' /></div>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageItem;

