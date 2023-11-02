import React, { useEffect, useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const Contact = () => {
    const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (fname === '') {
      alert('Please enter your First Name.');
      return;
    }
    const regName = /^[\p{L} ,.'-]+$/u;
    if (!regName.test(fname)) {
      alert('Invalid first name given.');
      return;
    }

    if (lname === '') {
      alert('Please enter your Last Name');
      return;
    }

    if (!regName.test(lname)) {
      alert('Invalid last name given.');
      return;
    }

    if (email === '') {
      alert('Please enter your Email Address.');
      return;
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid Email Address.');
      return;
    }

    if (phone === '') {
      alert('Please enter your Phone Number.');
      return;
    } else if (!isValidPhoneNumber(phone)) {
      alert('Please enter a valid Phone Number.');
      return;
    }

    if (message === '') {
      alert('Please enter your Message.');
      return;
    }

    // Perform any further processing or API calls here

    // Reset form fields
    setFname('');
    setLname('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
    const [rating, setrating] = React.useState(0)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <div className='extrapage'>
            <Navbar reloadnavbar={false}/>
            <SingleBanner
                bannerimage='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                heading="Contact Us"
            />
            <div className='pgleft pgcommon'>
                <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />

                <div>
                    <h1>Our Story</h1>
                    <p>Welcome to Vegella, your direct link to farm-fresh goodness. Our story is one of connecting diligent farmers with discerning consumers, ensuring you access the finest produce while supporting local communities. Stay ahead with real-time market insights and price predictions, making informed choices effortlessly. Say goodbye to market chaos - we bring the mandi to your door, guaranteeing freshness, quality, and affordability. Embracing sustainability, we're your partners in cultivating a greener future. Join us in savoring not just vegetables and fruits, but a healthier lifestyle. Vegella - where farm meets fork for a happier you and a happier planet.</p>

                </div>
            </div>
            <div className='pgright pgcommon'>
                <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />

                <div>
                    <h1>Who are we</h1>
                    <p>At Vegella, we're committed to not only nourishing your body but also nurturing our planet. We prioritize sustainable practices that minimize our environmental footprint. By supporting us, you're contributing to a greener tomorrow, where responsible farming and conscious consumption go hand in hand.

Join us in this journey of freshness, affordability, and sustainability. Experience the joy of savoring farm-fresh vegetables and fruits that not only tantalize your taste buds but also contribute to the well-being of our farmers and the planet. Vegella – where every bite is a step towards a healthier you and a happier world.</p>

                </div>
            </div>

             <section className="contact" id="contact">
      <div className="background-image">
      <h1 className="heading">
        contact <span> now </span>
      </h1>
      <div className="row">
        <div className="image">
          <img src="/images/contactus.png" alt="contact" />
        </div>
        <form id="contactForm" onSubmit={handleFormSubmit}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="phone"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="checkbox"
            name="Terms-Conditions"
            id="message"
            value="accept"
            className="btn"
          />
          I give permission to contact me on phone and email for marketing purposes<br />
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
      </div>
    </section>

            <Footer1 />
            <Footer2 />
            Contact</div>
    )
}

export default Contact