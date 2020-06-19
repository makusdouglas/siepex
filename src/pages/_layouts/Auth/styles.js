import styled from 'styled-components';

export const Wrapper = styled.div`
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  /* min-width: 100px; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    overflow: hidden;
    margin: 40px 10px;
    background: #fbfbfb;
    box-shadow: -1px 1px 5px 3px rgba(0, 0, 0, 0.09);
    justify-content: space-around;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    #content {
      display: flex;
      flex-direction: row;
    }

    #univerTitle {
      background: #3e17a7;
      padding: 10px;
      display: flex;
      flex: 1;
      width: 100%;
      align-items: center;
      text-align: center;
      justify-content: center;

      img {
        border: 1px solid #ddd;
        background: #fff;
        padding: 5px;
        object-fit: cover;
        border-radius: 50%;
        align-self: center;
        width: 50px;
        height: 50px;
      }
      > hr {
        width: 1px;
        height: 50px;
        border: 0;
        background: #ddd;
        margin: 0 8px;
      }
      div {
        display: flex;
        flex-direction: column;
        h1 {
          font-family: Roboto, cursive;
          font-weight: bold;
          font-size: 26px;
          margin-right: 5px;
          color: #fff;
        }
        h2 {
          font-family: Quicksand, cursive;
          font-size: 18px;
          font-weight: bold;
          margin-left: 5px;
          color: #fff;
        }
      }
    }

    section {
      flex: 1;
      background: #fff;
      max-width: 650px;
      padding: 15px;
      margin-right: 10px;
      > h1 {
        font-family: 'Quicksand', sans-serif;

        font-weight: bold;
        color: #555;
        margin-top: 30px;
      }
      p {
        font-family: 'Quicksand', sans-serif;
        /* font-size: 22px; */
        text-align: justify;
        margin: 20px 0;
        color: #555;
        /* max-width: 600px; */
      }
    }
  }

  ul {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    main {
      margin: 20px 10px;
      #content {
        flex-direction: column;
        aside {
          padding: 30px;
          hr {
            display: block;
          }
        }
        section {
          margin-right: 0;
        }
      }

      ul {
        grid-template-columns: 1fr;
      }
    }
  }
`;
