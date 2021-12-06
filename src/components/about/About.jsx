import React from "react";

import Award from "../../img/award.png";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1533488069324-f9265c15d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80"
            alt="my portrait"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">About Me</h2>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsam?
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sapiente quod aliquid, quibusdam quia voluptatem? Rem deleniti iure
          doloribus officia! Id iusto sapiente magnam tenetur, consectetur eos
          et odio adipisci itaque. Porro, nemo. Excepturi adipisci eligendi,
          quae autem doloremque a.
        </p>
        <div className="a-award">
          <img src={Award} alt="my award" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, dolores temporibus. Est!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
