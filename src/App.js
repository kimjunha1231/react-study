import { etc } from "./asset/Sources";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background: #7ab8f3;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavImg = styled.img`
  width: 36px;
`;
export default function App() {
  return (
    <Nav>
      <NavImg src={etc.github}></NavImg>
    </Nav>
  );
}
