import styled from 'styled-components';

import { darken } from 'polished';

export const Aside = styled.aside`
margin: 0px;
  display: flex;
  flex-direction: column;
  padding: 20px; 
  width: 100%;
  flex: 1;
  background-color: #fff;
  /* border-radius: 20px; */
    
   
    hr {
      display: none;
      content: '';
      border: 0;
      width: 100%;
      height: 3px;
      background: #3e17a7;
      margin: 20px 0;

    }
    > h2 {
        text-align: left;
        font-size: 32px;
        color: #3e17a7;
        /* color: ${darken(0.1, '#579af7')}; */
      }
      >h3 {
        font-weight: lighter;
        margin-top: 8px;
        text-align: center;
        color: #666;
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

      >a {
        font-weight: bold;
        text-align: center;
      color: #666;
      margin-top: 8px;

      &:hover {
        color: #222;
      }
    }
`;
