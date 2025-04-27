import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <div className="text-right text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rajkumar-narman-singh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/share/1Gt1XXUBgF/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/_n2rk__?igsh=MWRtZzJ2dGV4MDZocA=="><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
