import styled from 'styled-components'

const StyledWrapper = styled.div`
.head {
  margin: 10px;
}
{
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => props.styles.mainBG};
  border: 2px solid ${(props) => props.styles.mainBorder};
  border-radius: 10px;
}
.info {
  background-color: rgb(228, 158, 158);
  border: 2px solid black;
  border-radius: 10px;
}
.avatar {
  margin-bottom: 10px;
  overflow: hidden;
  text-align: center;
  vertical-align: top;
  width: 120px;
  max-height: 200px;
  border: 2px solid black;
}
.avatar img {
width: 100%;
}`

export default StyledWrapper;