import styled from 'styled-components'

const PostContainer = styled.div`
{
  margin: 20px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.styles.mainBG};
  border: 2px solid ${(props)=>props.styles.mainBorder};
  border-radius: 10px;
  color: ${(props)=>props.styles.mainLink};
}
.wrapper {
  display: flex;
}

.thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.wrapper .post_info {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.post_info time {
  text-align: right;
  color: ${(props)=>props.styles.mainLink};
}
.content {
  margin: 10px;
  margin-top: 0;
  color: ${(props)=>props.styles.hoverLink};
}
`
export default PostContainer;