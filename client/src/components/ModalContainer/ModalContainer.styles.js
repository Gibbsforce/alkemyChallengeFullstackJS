import styled from "styled-components"
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`
export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 75%;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 48px;
    font-weight: 600;
    color: var(--sky);
    text-transform: uppercase;
  }
  .image-modal svg {
    width: 150px;
    height: 150px;
  }
  label {
    font-size: var(--fontMedium);
    font-weight: 600;
    color: var(--sky);
    text-transform: uppercase;
  }
  input {
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: var(--gray);
    font-size: var(--fontMedium);
    color: var(--black);
    padding: 0 20px;
    margin-top: 20px;
    :focus {
      outline: solid var(--skyLight);
    }
  }
  p {
    font-size: 60px;
    color: var(--black);
    margin: 20px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    input {
      width: 200px;
      font-size: var(--fontMedium);
    }
    .image-modal svg {
      width: 100px;
      height: 100px;
    }
    p {
      font-size: 30px;
    }
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--sky);
  transition: all 0.3s ease-in-out;
  svg {
    width: 50px;
    height: 50px;
  }
  :hover {
    color: var(--skyLight);
    transition: all 0.3s ease-in-out;
  }
`
