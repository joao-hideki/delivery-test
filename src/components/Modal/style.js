import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background-color: #fff;
  height: 500px;
  width: 500px;
  overflow-y: scroll;

  .background-color {
    background: #FB9400;
    width: 100%;
    height: 230px;

    svg{
      width: 30px;
      height: 30px;
      color: #fff;
      margin: 15px 0 0 15px;
    }
  }

  .product-image {
    display: flex;
    justify-content: center;
    margin-top: -200px;

    img {
      width: 350px;
      height: 350px;
    }
  }

  .product-infos {
    width: 100%;
    padding: 0 12px 0;

    h1 {
      font-size: 40px;
      padding-bottom: 5px;
    }

    p {
      padding-top: 8px;
      font-size: 24px;
      margin-bottom: 22px;
      color: #1B1B1B80
    }

    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 400;
    }

    div {
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;

      h1 {
        color: #FB9400;
      }
    }

    > button{
      width: 100%;
      background-color: #FB9400;
      height: 50px;
      border: none;
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      margin-bottom: 30px;
      border-radius: 4px;
    }
  }
`;
