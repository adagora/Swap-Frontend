import React from 'react';
import './ComingSoon.css';
import logo from '../../assets/Elements/logo.svg';

function ComingSoon() {
  return (
    <div id="content-background">
      <div id="content-wrapper">
        <div id="logo-wrapper">
          <div id="logo-fill" />
          <div id="logo-background">
            <div id="logo-element">
              <div id="logo" style={{ backgroundImage: `url(${logo})` }} />
            </div>
          </div>
        </div>
        <div id="about-wrapper">
          <h1>Coming Soon!</h1>
          <div id="about">
            <span>I am working on it.</span>
            <br />
            <span id="team">Team</span>
          </div>
          <div id="icons-wrapper">
            <a
              href="https://twitter.com/AdrianGra1"
              target="_blank"
              className="icon-wrapper"
              rel="noreferrer"
            >
              <div id="twitter-icon-blue" className="icon-color" />
              <div id="twitter-icon-white" className="icon-white" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              className="icon-wrapper"
              rel="noreferrer"
            >
              <div id="discord-icon-blue" className="icon-color" />
              <div id="discord-icon-white" className="icon-white" />
            </a>
            <a
              href="https://linktr.ee/"
              target="_blank"
              className="icon-wrapper"
              rel="noreferrer"
            >
              <div id="linktree-icon-green" className="icon-color" />
              <div id="linktree-icon-white" className="icon-white" />
            </a>
          </div>
        </div>
        <div id="content-filler" />
      </div>
    </div>
  );
}

export default ComingSoon;
