import {useState} from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactOne = () => {
  const [name, setName] = useState('');
  const [phone, setTel] = useState('');
  const [zip, setZip] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  
  const [state, handleSubmit] = useForm("xknypgod");


  const handleClick = async () => {
    const data = {
      name,
      phone,
      zip,
      brand,
      type,
      message
    }

    handleSubmit(data);
}

console.log(state)

  return (
    <section className="contact_form_area">
      <div className="contact_form_width">
        <h1 className="contact_map_title text-center">
          We&apos;re not putting on airs - our work is guaranteed to satisfy.
        </h1>
        <div id="map">
          <iframe
            title="template google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="contact_form_width contact-right">
        <div className="hero-title-with-shape">
          <h4 className="heading_with_border">Get a free quote</h4>
          <h1>To request a service call, please fill out the form below</h1>
        </div>
        {state.succeeded ? 
        <h1>Thank you. Your request is submitted</h1> :
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={e => setName(e.target.value)}
          />
          <input type="tel" name="tell" placeholder="Phone number" onChange={e => setTel(e.target.value)}/>
          <ValidationError
            style={{color: 'red'}}
            prefix="Phone" 
            field="phone"
            errors={state.errors}
          />
          <input type="text" name="zip" placeholder="ZIP code" onChange={e => setZip(e.target.value)}/>
          <span className="select_icon">
            <select name="select" id="select" onChange={e => setBrand(e.target.value)}>
              <option value="Select brand">Select brand</option>
              <option value="Sub Zero">Sub Zero</option>
              <option value="Viking">Viking</option>
              <option value="Wolf">Wolf</option>
              <option value="La Cornue">La Cornue</option>
              <option value="Other">Other</option>
            </select>
          </span>
          <span className="select_icon">
            <select name="select" id="select 2" onChange={e => setType(e.target.value)}>
              <option value="Select brand">Select type</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Freezer">Freezer</option>
              <option value="Range">Range</option>
              <option value="Stove">Stove</option>
              <option value="Cooktop">Cooktop</option>
              <option value="Oven">Oven</option>
              <option value="Double oven">Double oven</option>
            </select>
          </span>
          <input type="text" name="tell" placeholder="Message" onChange={e => setMessage(e.target.value)}/>
          <button className="btn-yellow" onClick={handleClick}>
            SUBMIT NOW
          </button>
        </div>}
      </div>
    </section>
  );
};

export default ContactOne;
