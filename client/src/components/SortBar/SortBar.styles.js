import styled from "styled-components"
export const Wrapper = styled.div`
  padding: 0 20px;
  margin-top: 20px;
`
export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: var(--fontMedium);
    padding: 0 20px;
    font-weight: 600;
    color: var(--black);
  }
  select {
    font-size: var(--fontMedium);
    padding: 0 20px;
    font-weight: 600;
    color: var(--black);
    background: var(--white);
    border: 1px solid var(--skyLight);
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :focus {
      border: 1px solid var(--sky);
      transition: all 0.3s ease-in-out;
    }
    :hover {
      background: var(--skyLight);
      transition: all 0.3s ease-in-out;
    }
  }
`
