import styled from 'styled-components'

export const FooterContainer = styled.footer`

  background-color: ${(props) => props.styles.mainBG};
  color: ${(props) => props.styles.mainText};
  padding-bottom: 5px;

h4 {
  color: ${(props) => props.styles.hoverLink}
}
p {
  margin-bottom: 0px;
}
li a {
  color: ${(props) => props.styles.mainLink}
}
li a:hover {
  color: ${(props) => props.styles.hoverLink};
  text-decoration: none;
}
`