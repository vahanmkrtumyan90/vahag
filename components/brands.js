import { BrandData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandCard from "./brand-card";

const Brands = ({ extraClassName }) => {
  const { title, posts } = BrandData;
  return (
    <section
      className={`team_member_area section_padding text-center ${extraClassName}`}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>Brands</h1>
            </div>
          </Col>
          {posts.map((data, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <BrandCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
