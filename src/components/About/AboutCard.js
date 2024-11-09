import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arihant Debnath </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br/>
            I am currently in my 3rd year studying CSE at SRM IST.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watchin Movies and TV Shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Dream is not that which you see while sleeping, it is something that does not let you sleep."{" "}
          </p>
          <footer className="blockquote-footer">Arihant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
