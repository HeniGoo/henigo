
import React from 'react';
import {
  Header,
  HeaderContent,
  LeftHeader,
  HShape,
  ImageContainer,
  RightHeader,
  Name,
  Description,
  MainButton
} from '../styles/HomeStyles';
import Image from 'next/image';
import AnimatedBox from '../components/AnimatedBox';

const HomeHeader = () => {
  return (
    <Header className="cnt header active" id="home">
      <HeaderContent className="header-content">
        <LeftHeader className="left-header">
          <HShape className="h-shape"></HShape>
          <ImageContainer>
            <Image
              src="/Henok.jpg"
              alt=""
              layout="fill" // Fill the container
              objectFit="cover"
            />
          </ImageContainer>
        </LeftHeader>
        <RightHeader className="right-header">
          <AnimatedBox variant="fadeInUp">
            <Name className="name">
              Henok Berhanu
              <br />
              <span>Customer Support</span>
            </Name>
          </AnimatedBox>
          <AnimatedBox variant="fadeIn">
            <Description style={{ fontStyle: "italic" }}>
              &quot;I am dedicated customer support with a high level skill of
              virtual assistant and enthuhist in blockchain and crypto. I excel in
              hubspot, slack and different crm tools .
            </Description>
          </AnimatedBox>
          <MainButton
            href="./Henok Berhanu resume edited.pdf"
            className="main-btn"
            download
          >
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="fas fa-download"></i>
            </span>
          </MainButton>
        </RightHeader>
      </HeaderContent>
    </Header>
  );
};

export default HomeHeader;
