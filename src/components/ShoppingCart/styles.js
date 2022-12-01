import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Container = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
  animation-name: openSidebar;
  animation-duration: 1.1s;
  position: fixed;
  top: 0;
  right: 0;

  header {
    height: 70px;
    display: flex;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
      margin-left: 6px;
      animation-name: addProduct;
      animation-duration: 1.1s;
    }
  }

  @keyframes openSidebar {
    from {
      width: 0;
    } to {
      width: 400px;
    }
  }

  @keyframes showCloseButton {
    from {
      opacity: 0.1;
    } to {
      opacity: 1
    }
  }
`;
export const RequestContainer = styled.div`
  padding: 0 10px;

  > div{
    padding-right: 10px;
    border-radius: 10px;
    border: 2px solid grey;
    overflow-y: scrool;
    margin: 0 12px;
    display: flex;
    align-items: center;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;



    > div {
      color: grey;
      display: flex;
      flex-direction: column;

      p {
        margin-left: -25px;
        font-weight: bold;
      }

      span {
        font-size: 12px;
      }
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
  button {
    width: 100%;
    height: 50px;
    background-color: #FB9400;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    line-height: 40px;
    margin-top: 15px;
    border: none;
    border-radius: 16px;
  }
  .price {
    margin-top: 10px;
    border: none;

    p {
      font-weight: bold;
    }
  }
`;
