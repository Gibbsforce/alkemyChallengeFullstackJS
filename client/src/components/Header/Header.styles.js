import styled from "styled-components"
export const Wrapper = styled.nav`
  background: linear-gradient(to left, var(--skyLight), var(--sky));
  padding: 0 20px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 60px 0;
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
    font-size: var(--fontSuperbig);
  }
  a:hover {
    color: var(--black);
  }
  h1 {
    margin: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
    text-align: right;
    font-size: var(--fontMedium);
  }
  button {
    border: none;
    cursor: pointer;
    padding: 15px;
    width: 150px;
    font-size: var(--fontMedium);
    font-weight: 600;
    background: var(--sky);
    color: var(--white);
    transition: all 0.3s ease-in-out;
    :hover {
      background: var(--skyLight);
      transition: all 0.3s ease-in-out;
    }
  }
`
