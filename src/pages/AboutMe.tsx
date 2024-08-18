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
                As a strategic Marketing Manager with extensive experience in
                customer support, I excel at developing and executing
                multi-channel marketing campaigns that drive customer
                acquisition and retention. With a solid background in leveraging
                social media, analytics, and influencer partnerships, I have a
                proven ability to enhance customer experiences and foster
                long-term relationships.
              </Typography>
            </AnimatedBox>
            <AnimatedBox variant="slideInLeft">
              <Typography variant="body1" sx={classes.paragraph}>
                Currently, I lead marketing initiatives for Addis International
                Bank and the Ethiopian Youth Entrepreneur Association (EYEA),
                where I apply my customer-centric insights to design impactful
                strategies that resonate with diverse audiences. My hands-on
                experience at Zebib Transport PLC has further sharpened my
                skills in addressing customer needs, resolving inquiries, and
                delivering exceptional service.
              </Typography>
            </AnimatedBox>
            <AnimatedBox variant="slideInLeft">
              <Typography variant="body1" sx={classes.paragraph}>
                Passionate about data-driven decision-making and staying ahead
                of industry trends, I am dedicated to creating solutions that
                not only meet but exceed customer expectations. My goal is to
                apply my comprehensive marketing and customer support expertise
                to drive meaningful growth and build stronger connections with
                clients.
              </Typography>
            </AnimatedBox>
            <Box sx={classes.btnContainer}>
              <Button
                style={{ backgroundColor: "#9BF2EA", color: "#260101" }}
                variant="contained"
                startIcon={<DownloadIcon />}
                href="./Henok Berhanu resume edited.pdf"
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
