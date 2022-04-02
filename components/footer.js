import React from "react";
import { FooterBottomData, FooterInfo, FooterWidgets } from "@/data";
import FooterShape from "@/images/shape/footer-shape.png";
import Img from "@/components/img";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="footer_contact text-center">
        <div className="container">
          <div className="row">
            {FooterInfo.map(({ icon, tagLine, text }, index) => (
              <div className="col-md-4 col-sm-4" key={`footer-info-${index}`}>
                <div className="footer_contact_width text-left">
                  <p>
                    <i className={icon}></i> {tagLine} <span>{text}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
