import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DescriptionContainer, Name, Interests, PrimaryButton } from "./styled";
import Typewriter from "typewriter-effect";

const typeWritter = () => {
  //   var TxtType = function (el, toRotate, period) {
  //     this.toRotate = toRotate;
  //     this.el = el;
  //     this.loopNum = 0;
  //     this.period = parseInt(period, 10) || 2000;
  //     this.txt = "";
  //     this.tick();
  //     this.isDeleting = false;
  //   };
  //   TxtType.prototype.tick = function () {
  //     var i = this.loopNum % this.toRotate.length;
  //     var fullTxt = this.toRotate[i];
  //     if (this.isDeleting) {
  //       this.txt = fullTxt.substring(0, this.txt.length - 1);
  //     } else {
  //       this.txt = fullTxt.substring(0, this.txt.length + 1);
  //     }
  //     this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  //     var that = this;
  //     var delta = 200 - Math.random() * 100;
  //     if (this.isDeleting) {
  //       delta /= 2;
  //     }
  //     if (!this.isDeleting && this.txt === fullTxt) {
  //       delta = this.period;
  //       this.isDeleting = true;
  //     } else if (this.isDeleting && this.txt === "") {
  //       this.isDeleting = false;
  //       this.loopNum++;
  //       delta = 500;
  //     }
  //     setTimeout(function () {
  //       that.tick();
  //     }, delta);
  //   };
  //   window.onload = function () {
  //     var elements = document.getElementsByClassName("typewrite");
  //     for (var i = 0; i < elements.length; i++) {
  //       var toRotate = elements[i].getAttribute("data-type");
  //       var period = elements[i].getAttribute("data-period");
  //       if (toRotate) {
  //         new TxtType(elements[i], JSON.parse(toRotate), period);
  //       }
  //     }
  //     // INJECT CSS
  //     var css = document.createElement("style");
  //     css.type = "text/css";
  //     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  //     document.body.appendChild(css);
  //   };
};

const displayElements = [
  "Software Engineer",
  "Full Stack",
  "MERN Developer",
  "Motivated by Rust",
  "Chess ♟️",
  "Tech Enthusiast",
  "Typescript",
  "Open Source Contributor",
  "Python 🐍",
];

export const Description = () => {
  useEffect(() => {}, []);
  return (
    <div style={{ paddingTop: "6em" }}>
      <Row style={{ margin: 0 }}>
        <Col md={6}></Col>
        <Col md={6}>
          <DescriptionContainer>Hello I am</DescriptionContainer>
        </Col>
        <Col md={6}></Col>
        <Col md={6}>
          <Name>Suman Kumar</Name>
          <Interests id="typewriter">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: displayElements,
                cursor: "_",
              }}
            />
          </Interests>
        </Col>
        <Col md={6}></Col>
        <Col md={6}>
          <PrimaryButton>Hire Me</PrimaryButton>
        </Col>
      </Row>
    </div>
  );
};
