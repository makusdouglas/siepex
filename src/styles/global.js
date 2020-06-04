import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 *:focus {
   outline: 0;
 }

 html, body, #root {
   height: 100%;
 }
 body {
  background: linear-gradient(90deg, #579af7, #3a4dc9);
   -webkit-font-smoothing: antialiased;
   font-family: 'Roboto', sans-serif;
 }
 body, select, input, button {
   font-size: 16px;
 }
 a{
   text-decoration: none;
 }
 ul {
   list-style: none;
 }
 button {
   cursor: pointer;
 }


`;
