import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images for doctors
import doctor1 from '../images/slide_1.png';
import doctor2 from '../images/slide_2.png';
import doctor3 from '../images/slide_3.png';

const QualifiedDoctors = () => {
  // Configuration for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="qualified-doctors-container">
      <h2>Qualified Doctors</h2>
      <Slider {...settings}>
        <div className="doctor-slide">
          <img src={doctor1} alt="Doctor 1" />
          <div className="doctor-info">
            <h3>Dr. John Doe</h3>
            <p>Specialty: Cardiology</p>
          </div>
        </div>
        <div className="doctor-slide">
          <img src={doctor2} alt="Doctor 2" />
          <div className="doctor-info">
            <h3>Dr. Jane Smith</h3>
            <p>Specialty: Pediatrics</p>
          </div>
        </div>
        <div className="doctor-slide">
          <img src={doctor3} alt="Doctor 3" />
          <div className="doctor-info">
            <h3>Dr. Alex Johnson</h3>
            <p>Specialty: Dermatology</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default QualifiedDoctors;
