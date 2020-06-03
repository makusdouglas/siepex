import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #579af7, #3a4dc9);

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  img {
    align-self: center;
    width: 250px;
    height: 250px;
    display: block;
  }
  h1, h2 {
    color: #fff;
    margin-bottom: 5px;
  }
  p {
    color: #ddd;
    max-width: 600px;
  }

  aside {
    width: 100%;
    flex: 1;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10px;
    max-width: 300px;

    > h2 {
      font-size: 40px;
      color: #fff;
      /* color: ${darken(0.1, '#579af7')}; */
    }
    form {
      text-align: center;
      display: flex;
      flex-direction: column;

      select {
        
        border-radius: 4px;
        height: 40px;
        padding: 5px 4px;
        border: 2px solid #579af7;
        margin-top: 8px;
      }
      input {
        border: 2px solid #579af7;
        border-radius: 4px;
        height: 40px;
        padding: 5px 4px;
        margin-top: 8px;
       }
       span {
         padding: 4px 0;
         color: #eee;
        background: #f64c75;
       }
      button {
        color: #fff;
        border: 0;
        border-radius: 4px;
        height: 40px;
        padding: 5px 4px;
        background: #579af7;
        margin-top: 15px;
        font-weight: bold;

        &:hover{
          background: ${darken(0.03, '#579af7')};
        }

      }
      a {
        color: #fff;
        margin-top: 8px;
      }
    }
  }
`;
