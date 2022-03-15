import React from "react";
import StarIcon from "./custom-star.png";
import Box from "@mui/material/Box";

export default function StarUI() {
  return (
    <Box className="outer-wrapper">
      <Box
        className="intro-wrapper "
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <p className="intro-text">
          lorem ipsum blah blah blah blah blah blah blah
        </p>
      </Box>

      <Box className="star-wrapper">
        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <p className="step-style">S</p>
          </Box>
          <Box className="star-answer">
            <p>lorem lorem lorem</p>
          </Box>
        </Box>

        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <p className="step-style">T</p>
          </Box>
          <Box className="star-answer">
            <p>lorem lorem lorem</p>
          </Box>
        </Box>

        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <p className="step-style">A</p>
          </Box>
          <Box className="star-answer">
            <p>lorem lorem lorem</p>
          </Box>
        </Box>

        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <p className="step-style">R</p>
          </Box>
          <Box className="star-answer">
            <p>lorem lorem lorem</p>
          </Box>
        </Box>

        <Box className=" star-row star-row-last">
          <Box
            className="star-step star-wrap"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <img className="star-icon" src={StarIcon} alt="star icon"></img>
          </Box>
          <Box className="star-answer star-tags">
            <p>x tag</p> <p>x tag</p> <p>x tag</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
