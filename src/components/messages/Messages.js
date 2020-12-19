import React, { useContext, useEffect } from 'react';
import messagesContext from '../../context/message/messageContext'

import Preloader from '../0_1_layout/Preloader';

import MessageItem from './MessageItem'

const Messages = () => {

  const MessagesContext = useContext(messagesContext)

  const { getMessages, messages, loading } = MessagesContext;

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line 
  }, []);

  if (!loading) {
    return (
      <div className="container">
        <div className="messages">
          {messages.length !== 0 ? messages.map(message => (<MessageItem key={message._id} message={message} />)) : <h3>No message</h3>}
        </div>
      </div>
    )
  } else {
    return (<Preloader />)
  }

};

export default Messages;
