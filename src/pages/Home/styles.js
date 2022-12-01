import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  display: grid;
  justify-content: center;
  margin: 150px auto;

  input {
    height: 50px;
    width: 600px;
    padding: 0 16px;
    border-radius: 8px;
    margin: 0 auto 20px;
    outline: none;
    font-size: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border: none;
  }

  > h1 {
    color: #FB9400;
    margin: 70px 0 20px;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 50px;
  align-items: center;

  .category-card{
    height: 50px;
    border: 2px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    text-decoration: none;
    width: 180px;
    height: 70px;
    background-color: #fff;

    img {
      height: 100%;
      width: 80px;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
      color: grey;
    }

  }
`;
