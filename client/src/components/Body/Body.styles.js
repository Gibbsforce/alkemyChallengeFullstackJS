import styled from "styled-components"
export const Wrapper = styled.div`
  padding: ${({ padW }) => padW || "40px 20px"};
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: var(--gray);
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  h1 {
    color: var(--black);
    font-size: 76px;
  }
  section {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: var(--lightGray);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      background: var(--skyLight);
      transition: all 0.3s ease-in-out;
    }
  }
  svg {
    color: var(--sky);
    width: 150px;
    height: 150px;
  }
  strong {
    font-size: var(--fontSuperbig);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    h1 {
      font-size: 36px;
    }
    svg {
      width: 100px;
      height: 100px;
    }
    strong {
      font-size: var(--fontSmall);
    }
  }
`
export const Table = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  width: 100%;
  .expenses-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 0;
    border-bottom: 5px solid var(--skyLight);
    border-radius: 30px;
  }
  .image svg {
    width: 50px;
    height: 50px;
    color: var(--sky);
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      text-align: left;
    }
    input {
      width: 120px;
      height: 20px;
      font-weight: bold;
      color: black;
    }
  }
  .amount {
    font-size: var(--fontSuperbig);
    text-align: left;
    input {
      width: 75px;
      height: 20px;
      font-weight: bold;
    }
    button {
      cursor: pointer;
      background: var(--sky);
      color: var(--white);
      border: none;
      margin-left: 10px;
      transition: all 0.3s ease-in-out;
      :hover {
        background: var(--skyLight);
        transition: all 0.3s ease-in-out;
        color: black;
      }
    }
  }
  .edit svg {
    width: 50px;
    height: 50px;
    color: var(--sky);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      transition: all 0.3s ease-in-out;
      color: var(--black);
      transform: scale(1.1);
    }
  }
  .delete svg {
    width: 50px;
    height: 50px;
    color: var(--sky);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      transition: all 0.3s ease-in-out;
      color: red;
      transform: scale(1.1);
    }
  }
  .edit button,
  .delete button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    .expenses-container {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 20px 0;
      border-bottom: 10px solid var(--skyLight);
      border-radius: 40px;
    }
    .edit,
    .delete {
      width: 200%;
    }
    .image svg,
    .edit svg,
    .delete svg {
      width: 30px;
      height: 30px;
    }
    .info span {
      font-size: var(--fontSuperSmall);
    }
    .amount strong {
      font-size: var(--fontSmall);
    }
  }
`
