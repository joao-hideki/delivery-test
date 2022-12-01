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
  border-right: 2px solid grey;

  header {
    height: 70px;
    display: flex;
    align-items: center;

    svg {
      width: 40px;
      height: 40px;
      margin-left: 10px;
      animation-name: addProduct;
      animation-duration: 1.1s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  div {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 35px;
        width: 100%;
        border-bottom: 2px solid grey;
        padding: 15px;
        animation-name: showCloseButton;
        animation-duration: 1.7s;

        &:hover {
          opacity: 0.5;
        }
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
      opacity: 0;
    } to {
      opacity: 1
    }
  }
`;
