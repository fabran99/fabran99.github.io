import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import { Link } from "gatsby"


const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Full Stack Developer</SubTitle>
            </div> 
            <div>
              <Title> Hola, soy Facundo</Title>
              <Text> Me especializo en desarrollo backend, con un fuerte foco en el análisis de datos utilizando principalmente <b className="text-primary lined-link">Python</b> como lenguaje de programación.</Text>
              <Text> Desarrollo también interfaces con <b className="text-primary lined-link">ReactJS</b>, haciendo que las aplicaciones sean ágiles y responsivas.</Text>
              
              <Text>Algunas de las tecnologías con las que estoy familiarizado son: 	&nbsp;
              <b className="text-primary lined-link">Python</b>, <b className="text-primary lined-link">ReactJS</b>, <b className="text-primary lined-link">MongoDB</b>, <b className="text-primary lined-link">PostgreSQL</b>,
              &nbsp;<b className="text-primary lined-link">Redis</b>, <b className="text-primary lined-link">Electron</b>, <b className="text-primary lined-link">Firebase</b>, <b className="text-primary lined-link">Django</b>,
              <b className="text-primary lined-link">Pandas y GeoPandas</b>, <b className="text-primary lined-link">Celery</b>.
              </Text>
              
              <Link to="/works" target="_blank"> Algunos de mis trabajos </Link>  
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
