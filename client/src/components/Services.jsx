import React from 'react';
import sevices from '../images/sevices.png';

const services = () => {
  return (
    <div className="our-services-container" style={{ display: 'flex', alignItems: 'center' }}>
      
      <div className="services-content" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="left-side" style={{ flex: 1, marginRight: '20px' }}>
        
          <img src={sevices} alt="Service Image" style={{ width: '100%' }} />
        </div>
        <div className="right-side" style={{ flex: 2 }}>
        <h2>Our Services</h2>
          <div className="feature">
            <h3>Health Consultation</h3>
            <p>
              In times like today, your health is very important, especially since
              the number of COVID-19 cases is increasing day by day, so we are ready
              to help you with your health consultation.
            </p>
          </div>
          <div className="feature">
            <h3>Remote Herbal Supplement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus
              malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
            </p>
          </div>
          <div className="feature">
            <h3>Home Treatment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus
              malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
            </p>
          </div>
          <div className="feature">
            <h3>Schedule Your Appointment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus
              malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
