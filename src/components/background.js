import styled from "styled-components";

const Background = styled.section`
  background: url(${props => props.back});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
`;

export default Background;
