import { Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
import StarIcon from "C:/Users/Sinea/Desktop/Code your Future/Projects/material-ui/src/images/custom-star.png";
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
        <Typography variant="body1" className="intro-text">
          lorem ipsum blah blah blah blah blah blah blah
        </Typography>
      </Box>

      <Box className="star-wrapper">
        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="h4" className="step-style">
              S
            </Typography>
          </Box>
          <Box className="star-answer">
            <Typography
              variant="body1"
              sx={{
                maxWidth: "100%",
                padding: "0.5rem",
              }}
            >
              lorem lorem lorem
            </Typography>
          </Box>
        </Box>

        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="h4" className="step-style">
              T
            </Typography>
          </Box>
          <Box className="star-answer">
            <Typography
              variant="body1"
              sx={{
                maxWidth: "100%",
                padding: "0.5rem",
              }}
            >
              lorem lorem lorem
            </Typography>
          </Box>
        </Box>

        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="h4" className="step-style">
              A
            </Typography>
          </Box>
          <Box className="star-answer">
            <Typography
              variant="body1"
              sx={{
                maxWidth: "100%",
                padding: "0.5rem",
              }}
            >
              lorem lorem lorem
            </Typography>
          </Box>
        </Box>

        <Box className="star-row">
          <Box
            className="star-step"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="h4" className="step-style">
              R
            </Typography>
          </Box>
          <Box className="star-answer">
            <Typography
              variant="body1"
              sx={{
                maxWidth: "100%",
                padding: "0.5rem",
              }}
            >
              lorem lorem lorem
            </Typography>
          </Box>
        </Box>

        <Box className=" star-row star-row-last">
          <Box
            className="star-step star-wrap"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            {/* <img className="star-icon" src={StarIcon} alt="star icon"></img> */}
            <Image
              src={StarIcon}
              width={65}
              className="star-icon"
              alt="star icon"
            />
            {/* <Avatar alt="star icon" src={StarIcon} /> */}
          </Box>
          <Box className="star-answer star-tags">
            <p>x tag</p> <p>x tag</p> <p>x tag</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
