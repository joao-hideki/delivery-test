import styled from 'styled-components';

export const Container = styled.header`
  background-color: #FB9400;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 9px;

    span {
      font-size: 27px;
      font-weight: bold;
    }
  }
  .shopping-cart-icon {
    svg {
      transform: scaleX(-1);
    }

    div {
      width: 22px;
      height: 22px;
      background-color: #fff;
      position: fixed;
      top: 0;
      margin-top: 10px;
      border-radius: 50%;
      margin-left: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 1000;
    }

  }
`;
