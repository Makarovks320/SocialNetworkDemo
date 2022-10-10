import styled from 'styled-components'

export const Info = styled.div`
  padding: 10px;
  background-color: ${(props) => props.isFollowed ? props.styles.followedBG : props.styles.unfollowedBG};
  border: 2px solid black;
  border-radius: 10px;
  color: ${(props) => props.styles.hoverMainText}
  //{(props)=>props.isFollowed ? props.styles.mainLink : props.styles.hoverMainText};
`;

