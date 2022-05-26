import styled from "styled-components"
export const Wrapper = styled.button`
  display: block;
  background: var(--black);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 15px;
  color: var(--white);
  font-size: var(--fontBig);
  margin: 20px auto;
  transform: all 0.3s;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background: var(--skyLight);
    transform: scale(1.1, 1.1);
    transition: all 0.5s;
    color: var(--black);
  }
`
