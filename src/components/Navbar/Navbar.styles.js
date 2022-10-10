import styled from 'styled-components'

export const AsideNavBar = styled.div`
.nav {
background-color: ${(props) => props.styles.mainBG};
color: ${(props) => props.styles.mainLink};
border-radius: 10px;
border: 2px solid ${(props) => props.styles.mainBorder};
margin-bottom: 10px;
}
.item {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
}
.item:hover {
  color: ${(props) => props.styles.hoverLink};
}
.list {
  padding-left: 0px;
}

li {
  display: block;
  list-style: none;
}
a {
  display: block;
  text-decoration: none;
  color: ${(props) => props.styles.mainLink};
}
.activeLink {
  color: ${(props) => props.styles.checkedLink};
}
`