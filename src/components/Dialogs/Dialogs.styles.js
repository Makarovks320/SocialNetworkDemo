import styled from 'styled-components'
const Wrapper = styled.div`
{
  padding: 5px;

  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 3fr 8fr;
  grid-template-areas: "";
  grid-gap: 10px;

  color: ${(props)=>props.styles.hoverLink};

  border-radius: 10px;
  background-color: ${(props)=>props.styles.mainBG};
  border: 2px solid ${(props)=>props.styles.mainBorder};
}
a {
  text-decoration: none;
  color: ${(props)=>props.styles.mainLink};
}
`
export default Wrapper;