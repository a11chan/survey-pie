import styled from "styled-components";

// 특별한 기능을 하지 않으므로 styled 컴포넌트만 export 해도 된다.
// children은 styled 컴포넌트에도 전달됨
// function Desc({ children }) {
//   return <DescWrapper>{children}</DescWrapper>;
// }

const Desc = styled.h4`
  font-size: 18px;
  line-height: 21px;
  color: #463c3c;
  font-weight: normal;
  margin-top: 16px;
  margin-bottom: 60px;
  margin-left: 38px;
`;

export default Desc;
