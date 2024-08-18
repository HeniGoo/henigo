'use client'
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import skillsStyles from '../styles/skillStyles';
import { useTheme } from '@mui/material/styles';
import AnimatedBox from '../components/AnimatedBox';
import useIsMobile from '../utils/mediaQueries';


const skills = [
  { title: "Customer Support", width: "98%", color: "#1E90FF" },
  { title: "Marketing Strategy", width: "95%", color: "#FF4500" },
  { title: "Social Media Management", width: "90%", color: "#1877F2" },
  { title: "Data Analysis", width: "92%", color: "#4CAF50" },
  { title: "Content Creation", width: "94%", color: "#FF6347" },
  { title: "SEO/SEM", width: "88%", color: "#FFA500" },
  { title: "Email Marketing", width: "90%", color: "#007ACC" },
  { title: "Affiliate Marketing", width: "85%", color: "#8A2BE2" },
];
;

const Skills = () => {

  const theme = useTheme();
  const classes = skillsStyles(theme);
  const isMobile = useIsMobile();

  return (
    <Container style={{
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100%',
      padding: 0,
      color: '#fff',
      backgroundColor: '#191d2b',
      display: 'grid',
      placeItems: 'center'
    }} id="skills">
      <Container style={{ width: isMobile ? '100%': '80%' }}>
        <Box sx={classes.aboutStats}>
          <Typography variant="h4" sx={classes.statTitle}>My Skills</Typography>
          <Grid container spacing={4} sx={classes.progressBars}>
            {skills.map((skill, index) => (
              <Grid item xs={12} key={index}>
                <Box sx={classes.progressBar}>
                  <Typography variant="body1" sx={classes.progTitle}>{skill.title}</Typography>
                  <AnimatedBox variant="slideInLeft">
                    <Box sx={classes.progressCon}>
                      <Box sx={classes.progress}>
                        <Box sx={{ ...classes.progressInner, width: skill.width, backgroundColor: skill.color }} />
                      </Box>
                      <Typography variant="body2" sx={classes.progText}>{skill.width}</Typography>
                    </Box>
                  </AnimatedBox>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container >
  );
};

export default Skills;
