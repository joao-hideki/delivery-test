import styled from 'styled-components';

export default styled.div`
  border: 1.5px solid #96A3AB;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 4px;
  font-size: 30px;

  span {
    padding: 20px;
    font-weight: bold;
  }
  button {
    width: 50px;
    height: 100%;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: none;
    color: grey;


    &:last-child {
      background-color: #FB9400;
      color: #fff;
    }
  }


`;
