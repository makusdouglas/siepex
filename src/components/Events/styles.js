import styled from 'styled-components';
import { darken } from 'polished';
export const Ul = styled.ul`
  position: relative;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 30px;
  grid-row-gap: 30px;

  h1,
  h3 {
    color: #ffffff;
  }

  h1 {
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    /* background: linear-gradient(90deg, rgb(19, 203, 165), rgb(93, 221, 163)); */
    background: linear-gradient(90deg, #6600cc, #3399ff);
    /* background-color: #579af7; */
    border-radius: 50px;
    /* border: 1px solid #99ff99; */

    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.19);

    /* box-shadow: -1px 1px #99ff99, -2px 2px #99ff99, -3px 3px #99ff99,
      -4px 4px #99ff99, -5px 5px #99ff99; */
    padding: 10px 0;
  }
  li {
    background: ${darken(0.05, '#579af7')};
    padding: 30px 20px 5px 20px;
    border-radius: 4px;
    /* box-shadow: 1px -2px 5px 5px rgba(0, 0, 0, 0.19); */
    position: relative;
    font-family: 'Quicksand', sans-serif;
    color: #fff;

    h3 {
      font-family: 'Roboto', sans-serif;
      color: #fff;
      position: absolute;
      top: 5px;
      left: -20px;
      display: block;
      height: 35px;
      padding: 8px;
      background: linear-gradient(90deg, #3a4dc9, #9900ff);
      box-shadow: 1px -2px 5px 5px rgba(0, 0, 0, 0.19);
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    hr {
      border: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 10px 0;
    }
    p {
      font-size: 16px;
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      margin-top: 18px;
    }
    section {
      display: flex;
      justify-content: space-between;
      margin: 0 0 10px;

      span,
      strong {
        display: block;
      }

      div:first-child strong {
        padding: 3px;
        background: #6600cc;
      }
      div:last-child strong {
        padding: 3px;
        background: #9900ff;
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
