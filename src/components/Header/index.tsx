import React from "react";
import { Col, Row } from "react-bootstrap";
import { HeaderContainer, NavItem } from "./styled";
import "./style.css";

const headerItems = ["Home", "About", "Contact"];

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <Row style={{ margin: 0 }}>
          {headerItems.map((item) => (
            <NavItem>
              <Col md={4} className="nav-link">
                <a href="#" >{item}</a>
              </Col>
            </NavItem>
          ))}
        </Row>
      </nav>
    </HeaderContainer>
  );
};
