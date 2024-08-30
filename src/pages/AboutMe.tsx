"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import aboutMeStyles from "../styles/aboutMeStyles";
import AnimatedBox from "../components/AnimatedBox";
import Counter from "../components/Counter";
import useIsMobile from "../utils/mediaQueries";

const AboutMe = () => {
  const isMobile = useIsMobile();
  const classes = aboutMeStyles(isMobile);
  return (
    <Container
      style={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        padding: 20,
        backgroundColor: "#191d2b",
        display: "grid",
        placeItems: "center",
      }}
      id="about"
    >
      <Box sx={classes.aboutSection}>
        <Box sx={classes.mainTitle}>
          <Typography variant="h2">About me</Typography>
        </Box>
        {/* <Grid container spacing={4} sx={classes.aboutContainer}> */}
        <Box sx={classes.styledAboutMe}>
          <Box sx={classes.leftAbout}>
            <AnimatedBox variant="fadeInUp">
              <Typography variant="h4">Information About Me</Typography>
            </AnimatedBox>
            <AnimatedBox variant="slideInLeft">
              <Typography variant="body1" sx={classes.paragraph}>
                .
              </Typography>
            </AnimatedBox>
            <AnimatedBox variant="slideInLeft">
              <Typography variant="body1" sx={classes.paragraph}></Typography>
            </AnimatedBox>
            <AnimatedBox variant="slideInLeft">
              <Typography variant="body1" sx={classes.paragraph}>
                Dedicated to the intersection of technology and finance,
                I&apos;m currently immersed in the dynamic world of blockchain
                and cryptocurrency. Fascinated by the potential of fintech to
                revolutionize traditional financial systems, I&apos;m passionate
                about staying abreast of industry trends and developments. With
                a keen interest in Ethiopia&apos;s macroeconomic landscape,
                I&apos;m closely following the evolution of the capital market
                and exploring opportunities within the securities exchange and
                investment banking sectors. My goal is to leverage my knowledge
                and skills to contribute to the growth and development of
                Ethiopia financial ecosystem.
              </Typography>
            </AnimatedBox>
            <Box sx={classes.btnContainer}>
              <Button
                style={{ backgroundColor: "#9BF2EA", color: "#260101" }}
                variant="contained"
                startIcon={<DownloadIcon />}
                href="./Henok-Berhanu-FlowCV-Resume-new .pdf"
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Box>
        {/* <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[
                { value: "10", label: "Projects Completed" },
                { value: "4", label: "Years of experience" },
                { value: "30", label: "Happy Clients" },
                { value: "40", label: "Customer reviews" },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={classes.card}>
                    <CardContent sx={classes.cardContent}>
                      <Counter
                        targetNumber={parseInt(item.value)}
                        largeText={classes.largeText}
                      />
                      <AnimatedBox variant="fadeInUp">
                        <Typography variant="body1" sx={classes.smallText}>
                          {item.label}
                        </Typography>
                      </AnimatedBox>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid> */}
        {/* </Grid> */}
      </Box>
    </Container>
  );
};

export default AboutMe;
