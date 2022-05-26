import styled from "styled-components"
export const Wrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, var(--skyLight), var(--sky));
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    position: relative;
  }
  @media (max-height: 900px) {
    position: relative;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--fontMedium);
  color: var(--black);
  h1 {
    margin: 0;
    @media (max-width: 768px) {
      font-size: var(--fonSuperSmall);
    }
  }
`
