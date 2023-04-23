import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (max-width: 480px) {
    /* width: 100%; */
    height: auto;
    min-height: auto;
    width: 100%;
  }
`;

export const Header = styled.header<{ background: string, backgroundMobile: string }>`
  background-color: transparent;
  color: white;
  height: 50.625rem;
  display: flex;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0rem 20rem;

  @media screen and (max-width: 480px) {
    background-size: cover;
    margin: 0rem;
    background-position: top center;
    text-align: center;
    background-image: url(${({ backgroundMobile }) => backgroundMobile});
    height: auto;
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 20rem;

  @media screen and (max-width: 480px) {
    margin: 0rem;
    text-align: center;
  }
`;

export const Footer = styled.footer`
  /* background-color: #333; */
  /* color: white; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 20rem; */
  margin: 0rem 20rem;

  @media screen and (max-width: 480px) {
    margin: 0rem;
    text-align: center;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 3.375rem 5rem;

  .content-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .content-header-link-action {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 0.5rem;
      align-items: center;

      .content-header-link-default  {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 0.688rem 1.938rem 0.438rem 1.875rem;

        span {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #FFFFFF;
        }
      }

      .content-header-link-cta {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F4BC00;
        border-radius: 3px;
        text-decoration: none;
        padding: 0.688rem 1.938rem 0.438rem 1.875rem;

        span {
          font-family: 'Avenir';
          font-style: normal;
          font-weight: 900;
          font-size: 16px;
          line-height: 22px;
          color: #FFFFFF;
        }
      }
    }
  }

  .content-body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content-body-description {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      height: 100%;

      .content-body-description-hovered {
        cursor: pointer;
      }

      .content-body-description-cta {
        display: none;
      }

      p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        color: #FFFFFF;
        text-align: justify;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0rem;

    .content-header {
      width: auto;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
    }

    .content-body {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;

      .content-body-description {
        justify-content: center;
        align-items: center;
        p {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 10px;
          color: #FFFFFF;
          text-align: center;
        }

        .content-body-description-hovered {
          display: none;
        }

        .content-body-description-cta {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #F4BC00;
          box-shadow: 2px 3px 5px rgba(255, 255, 255, 0.157043);
          border-radius: 3.125px;
          width: 100px;
          height: 35px;
          margin-top: 15px;

          span {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 10px;
            color: #FFFFFF;
          }
        }

        img {
          width: 50px;
          height: 50px;
        }
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const ContentMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding: 3.375rem 5rem;

  .content-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 0rem 2rem;

    .content-body-card {
      .content-body-card-header {

      }

      .content-body-card-sub-heading {

      }

      .content-body-card-copy {
        p {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #808080;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 0rem;

    .content-image {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 80%;

      img {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 300px;
      }
    }

    .content-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0rem;
      grid-gap: 0rem;

      .content-body-card-header {
        img {
          width: 15px;
          height: 15px;
        }
      }

      .content-body-card-copy {
        p {
          font-size: 14px !important;
          line-height: 21px !important;
        }
      }
    }
  }
`;

export const ContentFooter = styled.div`
  padding: 3.375rem 5rem;

  .slick-next:before, .slick-prev:before {
    color: #F4BC00;
  }

  .slick-track {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 0rem;
  }
`;