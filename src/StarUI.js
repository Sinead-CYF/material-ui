import React from "react";
// import { yellow } from '@mui/material/colors';
import StarIcon from './customer-star.png';

export default function StarUI() {
  return (
    <div className="outer-wrapper">
      <div className="intro-wrapper">
        <p>lorem ipsum blah blah blah blah blah blah blah</p>
      </div>

      <div className="star-wrapper">
        <div className="star-row">
          <div className="star-step">
            <p className="step-style">S</p>
          </div>
          <div className="star-answer">
            <p>lorem lorem lorem</p>
          </div>
        </div>

        <div className="star-row">
          <div className="star-step">
            <p className="step-style">T</p>
          </div>
          <div className="star-answer">
            <p>lorem lorem lorem</p>
          </div>
        </div>

        <div className="star-row">
          <div className="star-step">
            <p className="step-style">A</p>
          </div>
          <div className="star-answer">
            <p>lorem lorem lorem</p>
          </div>
        </div>

        <div className="star-row">
          <div className="star-step">
            <p className="step-style">R</p>
          </div>
          <div className="star-answer">
            <p>lorem lorem lorem</p>
          </div>
        </div>

        <div className=" star-row star-row-last">
          <div className=" star-step star-wrap">
                <img className="star-icon"src={StarIcon} alt="star icon"></img>
              </div>
          <div className="star-answer star-tags">
            <p>x tag</p> <p>x tag</p> <p>x tag</p>
          </div>
        </div>
      </div>
    </div>
  );
}


