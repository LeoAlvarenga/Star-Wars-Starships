import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;

  .loading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 36px;
  padding: 24px 0;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .buttonsContainer {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-top: 16px;

    button {
      background: transparent;
      border: none;
      color: yellow;
      text-transform: uppercase;
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      grid-template-rows: 1fr;
      gap: 8px;

      svg {
        stroke: yellow;
        fill: yellow;
        max-height: 24px;
        max-width: 24px;
      }
    }
  }
`;

export const SpaceshipList = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
