import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  margin: 20px auto;
  padding: 20px;
`;
export const Title = styled.h1`
  /* width: 100%; */
  margin-bottom: 14px;
  /* flex: 1; */
  display: flex;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;

  background-color: #3e17a7;
  border-radius: 4px;
  box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, 0.15);
  padding: 10px;
`;

export const Ul = styled.ul`
  position: relative;
  min-width: 300px;
  
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px; 
  

  li {
    &::before {
      content:'';

      height:  calc(100% + 2px);
      width: 6px;
      
      /* background: #3a4dc9; */
      background: #6600cc;

      position: absolute;
      left: -6px;
      top: -1px;

      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    
    /* background: ${darken(0.1, '#9900ff')}; */
    margin-left: 8px;
    border: 1px solid #ddd;
    max-width: 600px;
    background: #fff;
    padding: 30px 20px 5px 20px;
    border-radius:0  4px 4px 0;
    /* box-shadow: 1px -2px 5px 5px rgba(0, 0, 0, 0.15); */
    position: relative;
    font-family: 'Quicksand', sans-serif;
    color: #424242;

    h3 {
      font-family: 'Roboto', sans-serif;
      color: #fff;
      position: absolute;
      top: 5px;
      left: -10px;
      display: block;
      /* height: 35px; */
      padding: 8px;
      /* background: #6600cc; */
      /* background: #3a4dc9; */
      background: linear-gradient(-90deg, #3a4dc9, #6600cc);
      
    }
    p {
      font-size: 16px;
      font-family: 'Quicksand', sans-serif;
      text-align: justify;
      font-weight: 600;
      margin-top: 40px;
    }
    hr {
      border: 0;
      width: 100%;
      height: 1px;
      background: #ddd;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 0 10px;

      span,
      strong {
        display: block;
      }
      strong{

        color: #3a4dc9;
      }

    }

    .subscriptions {
      margin-bottom: 50px;
      strong:last-child {
        color: #09C023;
      }
    }
  }
  button {
    background-color: #2054dd;
    /* background: linear-gradient(90deg, #6600cc, #3399ff); */
    border: 0;
    bottom: 5px;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    position: absolute;
    right: 5px;
    transition: background 0.4s;
    :hover {
      background: ${darken(0.06, '#2054dd')};
    }
  }
`;
