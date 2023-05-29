import React from "react";
import Header from "../components/Header";
import {
  Section,
  Container,
  Title,
  Description,
  TeamTitle,
  ImageContainer,
  ImageWrapper,
  Image,
  ImageCaption,
} from "../styles/pages/AboutUs";
import fauzan from "../assets/images/fauzan.jpg";
import fito from "../assets/images/fito.jpg";
import syahri from "../assets/images/syahri.jpg";
import reinhard from "../assets/images/reinhard.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Section>
        <Container>
          <Title>About Us</Title>
          <Description>
            At ADSIC, we are passionate about music and dedicated to bringing
            the joy of music to people around the world. Our mission is to
            create a platform that connects music lovers, artists, and industry
            professionals in a seamless and enjoyable way. Whether you are a
            music enthusiast looking for your favorite tunes, an aspiring artist
            seeking opportunities to showcase your talent, or a music industry
            professional wanting to discover new talent and collaborate, ADSIC
            is here to fulfill your needs. We offer a vast collection of songs
            from various genres, ensuring that there is something for everyone.
            Our advanced search and recommendation algorithms help you discover
            new music based on your preferences, allowing you to expand your
            musical horizons. Our team consists of dedicated music enthusiasts
            who work tirelessly to curate and deliver the best music experience
            to our users. From discovering emerging artists to organizing live
            performances and events, we are committed to promoting and
            supporting the music community. Join ADSIC today and immerse
            yourself in the world of music. Let's create, connect, and celebrate
            the universal language of music together!
          </Description>
        </Container>
      </Section>
      <div>
        <TeamTitle>Our Team</TeamTitle>
        <ImageContainer>
          <ImageWrapper>
            <Image src={fauzan} alt="Muhammad Fauzan Albari" />
            <ImageCaption>Muhammad Fauzan Albari / 00000081605
</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={fito} alt="Arfito Saputra" />
            <ImageCaption>Arfito Saputra / 00000082190</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={reinhard} alt="Rainhard Januardo Simamora" />
            <ImageCaption>Rainhard Januardo Simamora / 00000080970
</ImageCaption>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={syahri} alt="Syahri Yusni Nasution" />
            <ImageCaption>Syahri Yusni Nasution / 00000082375</ImageCaption>
          </ImageWrapper>
        </ImageContainer>
      </div>
    </div>
  );
};

export default AboutUs;
