import styled from "styled-components"
import variables from "../../data/variables"

export const Intro = styled.div`
  padding: 3rem 0 4rem 0;
  text-align: left;
`

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
`

export const ArticlePost = styled.article`
  margin-bottom: 5rem;
  padding-bottom: 1rem;
  max-width: 60rem;
  margin: auto;
  text-align: left;
  img[src$="imgresponsive"] {
    max-width: 80%;
  }
`
export const SmallText = styled.small`
  font-size: 0.89rem;
  padding-right: 10px;
  font-family: "GT-Walsheim-Pro-Regular";
  > span {
    padding-left: 5px;
  }
`
export const ArticleBody = styled.div`
  margin-top: 5rem;
  p {
    font-size: 1.1rem;
    margin: 0.5em;
    font-family: "GT-Walsheim-Pro-Regular";
  }
  h1 {
    font-size: 3em;
  }
  strong {
    text-decoration: underline;
    color: ${variables.primary};
  }
  ul,
  ol {
    text-align: left;
    font-size: 1em;
  }
  a {
    font-size: 1.3em;
    text-decoration: underline;
  }
`

export const NaviagtionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  list-style: none;
  padding: 0;
  border-top: 4px solid #07ab77;
  border-bottom: 4px solid #07ab77;
`
export const NaviagtionLi = styled.li`
  padding: 2rem 0;
  &:last-child {
    text-align: right;
  }
  a {
    font-size: 1.3rem;
    font-family: "GT-Walsheim-Pro-Medium";
  }
`
