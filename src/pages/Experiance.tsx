"use client";
import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { Work, School } from "@mui/icons-material";
import { styled } from "@mui/system";
import AnimatedBox from "../components/AnimatedBox";

const experiences = [
  {
    duration: "November 2022 - Present",
    title: "Customer Service Officer",
    company: "Addis International Bank",
    description:
      "Supported the development and execution of 6+ multi-channel marketing campaigns for Addis Bank. Provided exceptional customer service, consistently exceeding satisfaction ratings. Developed clear reports, visualizing key performance indicators for the branch operation department.",
    icon: "<Work />",
  },
  {
    duration: "June 2023 - Present",
    title: "Marketing Manager",
    company: "Ethiopian Youth Entrepreneur Association",
    description:
      "Revamped social media presence and increased organic engagement. Collaborated on influencer outreach programs and analyzed data to identify trends. Worked closely with influencers on platforms like TikTok, YouTube, and Instagram to advertise the EYEA brand. Planned and executed marketing events, managed budgets, and coordinated with various vendors.",
    icon: "<Work />",
  },
  {
    duration: "September 2020 - October 2022",
    title: "Marketing Manager",
    company: "Zebib Transport PLC",
    description:
      "Developed and implemented marketing strategies for customer acquisition and retention. Managed social media posts, activities, and campaigns. Collaborated with influencers to create brand awareness and monitored marketing metrics to make data-driven decisions. Organized events and trained team members.",
    icon: "<Work />",
  },
  {
    duration: "September 2019 - August 2020",
    title: "Senior Marketing Specialist",
    company: "Zebib Transport PLC",
    description:
      "Oversaw marketing strategies, analyzed market trends, and developed tactics to promote the company. Assisted the sales team in creating business development plans. Provided strategic input and oversaw company participation in trade shows and conferences.",
    icon: "<Work />",
  },
  {
    duration: "October 2018 - August 2019",
    title: "Junior Marketing Specialist",
    company: "Zebib Transport PLC",
    description:
      "Conducted market research, contacted clients, and supported the senior marketing manager. Assisted in planning and executing marketing plans. Supported internal and external events.",
    icon: "<Work />",
  },
  {
    duration: "September 2018 - November 2021",
    title: "Accounting and Finance",
    company: "Unity University",
    description:
      "Achieved a GPA of 3.7. Served as the captain of the graduation committee and vice president of the English club. Facilitated sponsorships for the charity club.",
    icon: "<School />",
  },
  {
    duration: "October 2023 - Present",
    title: "Masters of Marketing Management",
    company: "Ethiopian Civil Service University",
    description:
      "Currently pursuing a Master's degree in Marketing Management.",
    icon: "<School />",
  },
];
const Header = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "2rem",
  position: "relative",
  color: "#A3BFAA",
  marginTop: "5rem",
  marginBottom: "5rem",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "block",
    width: "100%",
    height: "2px",
    backgroundColor: "#454e56",
    marginTop: "1rem",
  },
}));

const ExperienceContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  maxWidth: "100%",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#191d2b",
  color: "#fff",
  paddingBottom: "5rem",
}));

const ExperienceContent = styled(Container)(({ theme }) => ({
  width: "100%",
  color: "#fff",
  padding: 0,
}));

const ExperienceItem = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingLeft: "2rem",
  borderLeft: "1px solid grey",
  marginBottom: "2rem",
}));

const ExperienceIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-25px",
  top: 0,
  backgroundColor: "#27AE60",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "5px",
}));

const ExperienceDuration = styled(Typography)(({ theme }) => ({
  padding: "0.2rem 0.6rem",
  backgroundColor: "#191d2b",
  borderRadius: "15px",
  display: "inline-block",
  textTransform: "uppercase",
  fontWeight: "500",
  marginBottom: "0.5rem",
  color: "#fff",
}));

const ExperienceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#beebd0",
  marginBottom: "0.5rem",
}));

const ExperienceDescription = styled(Typography)(({ theme }) => ({
  color: "#dbe1e8",
}));

const Experience = () => {
  return (
    <ExperienceContainer id="experiance">
      <ExperienceContent>
        <Header>
          <Typography variant="h4">Experience</Typography>
        </Header>
        <Grid container spacing={4} style={{ marginLeft: "-20px" }}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ExperienceItem>
                <ExperienceIcon>{experience.icon}</ExperienceIcon>
                <ExperienceDuration variant="body2">
                  {experience.duration}
                </ExperienceDuration>
                <ExperienceTitle variant="h6">
                  {experience.title}
                  {experience.company && (
                    <span style={{ color: "#fff", fontWeight: 500 }}>
                      {" "}
                      - {experience.company}
                    </span>
                  )}
                </ExperienceTitle>
                <AnimatedBox variant="slideInRight">
                  <ExperienceDescription variant="body2">
                    {experience.description}
                  </ExperienceDescription>
                </AnimatedBox>
              </ExperienceItem>
            </Grid>
          ))}
        </Grid>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
