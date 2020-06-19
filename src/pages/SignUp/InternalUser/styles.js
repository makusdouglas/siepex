import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 8px 0;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 220px;
    text-align: center;

    > h3 {
      font-weight: lighter;
      color: #666;
    }
    a {
      font-weight: bold;
      color: #3e17a7;
    }

    select {
      color: #666;
      background: rgba(0, 0, 0, 0.03);
      border-radius: 4px;
      height: 44px;
      padding: 5px 4px;
      border: 0;
      margin-top: 8px;
      option {
        color: black;
        background: white;
        min-height: 30px;
      }
    }
    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 5px 4px;
      margin-top: 8px;
      background: rgba(0, 0, 0, 0.03);
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

      background: #3e17a7;
      margin-top: 15px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.03, '#3e17a7')};
      }
    }
  }
`;
