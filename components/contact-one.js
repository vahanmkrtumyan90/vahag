import {useState} from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactOne = () => {
  const [name, setName] = useState('');
  const [phone, setTel] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  
  const [state, handleSubmit] = useForm("xknypgod");


  const handleClick = async () => {
    const data = {
      name,
      phone,
      brand,
      type,
    }

    handleSubmit(data);
}

  return (
    <section className="contact_form_area">
      <div className="contact_form_width">
        <h1 className="contact_map_title text-center">
          We&apos;re not putting on airs - our work is guaranteed to satisfy.
        </h1>
        <div id="map">
          <iframe
            title="template google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13738.670017452565!2d-118.27626171321883!3d34.14948441820061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c05bd32fd135%3A0x30620f993f5b0bf3!2s614%20W%20California%20Ave%2C%20Glendale%2C%20CA%2091203%2C%20USA!5e0!3m2!1sen!2s!4v1651498760124!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="contact_form_width contact-right" id="contact">
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
          <button className="btn-yellow" onClick={handleClick}>
            SUBMIT NOW
          </button>
        </div>}
      </div>
    </section>
  );
};

export default ContactOne;
