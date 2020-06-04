import styled from 'styled-components';

import { darken } from 'polished';

export const Aside = styled.aside`
  
    width: 100%;
    flex: 1;
    position: absolute;
    right: 0;
    top: 20%;
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
        color: #666;
        
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

        &:hover{
          background: ${darken(0.03, '#3e17a7')};
        }

      }
      a {
        color: #ddd;
        margin-top: 8px;

        &:hover{
          color: #fff;
        }
      }
    }
  
`;
