import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { clearAlert } = alertContext;

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='aicon-x' onClick={() => { clearAlert(alert.id) }} /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;

