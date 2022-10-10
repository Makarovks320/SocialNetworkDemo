import styled from 'styled-components'

const NewPostContainer = styled.div`
{
  margin: 20px 0;
  padding: 5px;
  background-color: ${(props) => props.styles.mainBG};
  border: 2px solid ${(props) => props.styles.mainBorder};
  border-radius: 10px;
}

.wrapper {
  display: flex;
}

form {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-right: 20px;
}
textarea {
  margin-bottom: 10px;
}
button {
  float: right;
}
`
export default NewPostContainer;