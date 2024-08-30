'use client'
import React from 'react';
import { Container, Typography, Box, Paper, Grid, styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import createCustomTheme from './../theme';
import AnimatedBox from '../components/AnimatedBox';

// Get theme values
const theme = createCustomTheme();

const EducationContainer = styled(Container)(() => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: '50vh',
  display: 'grid',
  placeItems: 'center',
  marginBottom: '8rem',
}));

const EducationItem = styled(Paper)`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  color: ${theme.palette.common.white};
  background-color: ${theme.palette.primary.main};
  border-radius: 8px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Heading = styled(Typography)`
    color: #beebd0;
    font-size: 2.25rem;
    font-weight: 600;
    max-width: 48rem;
    line-height: 1.375;
    text-align: left;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
    @media (min-width: 1280px) {
      font-size: 3.75rem;
    }
`;

const EducationDetails = styled(Box)`
  margin-left: 1rem;
`;

const SchoolName = styled(Typography)`
  font-weight: bold;
  color: ${theme.palette.common.white};
`;

const Degree = styled(Typography)`
  color: ${theme.palette.common.white};
`;

const Education: React.FC = () => {
  const educationData = [
  {
    "school": "Unity University",
    "degree": "Bachelor of Accounting and Finance",
    "location": "Adama, Ethiopia",
    "year": "09/2018 – 11/2021",
    "details": [
      "GPA: 3.7",
      "Captain of Graduation Committee",
      "English Club Vice President",
      "Facilitator of Sponsorship for Charity Club"
    ]
  },
  {
    "school": "Ethiopian Civil Service University",
    "degree": "Masters of diplomacy and foreign affairs",
    "location": "Addis Ababa, Ethiopia",
    "year": "10/2023 – present"
  }
]
;

  return (
    <Container style={{ width: "100%", maxWidth: "100%", backgroundColor: "#191d2b" }} id="education">

      <EducationContainer>
        <Heading>
          Education
        </Heading>
        <Grid container spacing={4} justifyContent="center">
          {educationData.map((edu, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedBox variant='fadeIn'>
                <EducationItem>
                  <SchoolIcon sx={{ color: '#9BF2EA' }} fontSize="large" />
                  <EducationDetails>
                    <SchoolName variant="h6">{edu.school}</SchoolName>
                    <Degree variant="subtitle1">{edu.degree}</Degree>
                    <Typography variant="body2">{edu.year}</Typography>
                  </EducationDetails>
                </EducationItem>
              </AnimatedBox>
            </Grid>
          ))}
        </Grid>
      </EducationContainer>
    </Container>
  );
};

export default Education;
