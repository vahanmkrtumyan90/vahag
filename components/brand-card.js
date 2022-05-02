import React from "react";
import Img from "./img";

const BrandCard = ({ data }) => {
  const { image, name, designation, social } = data;
  return (
    <div className="brand">
      <Img src={image} alt={name} layout="responsive" style={{height: '150px'}}/>
      <div className="team_details">
        <h3>
          {name}
        </h3>
        {/* <ul className="team_socials">
          {social.map(({ icon, url }, index) => (
            <li key={index}>
              <a href={url}>
                <i className={`fa ${icon}`}></i>
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default BrandCard;
