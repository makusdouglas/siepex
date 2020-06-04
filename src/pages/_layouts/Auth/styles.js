import styled from 'styled-components';
// import { darken } from 'polished';

export const Wrapper = styled.div`
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    text-align: center;
    h1 {
      font-family: 'Monoton', cursive;
      font-weight: 200;

      color: #fff;
      font-size: 2.5em;
    }
    h2 {
      font-family: 'Monoton', cursive;
      font-weight: 200;

      color: #fff;
      font-size: 1.8em;
    }
    img {
      align-self: center;
      width: 200px;
      height: 200px;
      /* display: block; */
    }
  }

  section {
    max-width: 650px;
    margin: 100px 0;
    > h1 {
      font-size: 2em;
      color: #fff;
      margin-bottom: 5px;
    }
    p {
      font-family: 'Quicksand', sans-serif;
      font-size: 22px;
      text-align: justify;
      margin: 20px 0;
      color: #eee;
      /* max-width: 600px; */
    }
  }
`;
