import React from "react";
import Slider from "react-slick";
import { Container, Header, Main, Footer, ContentHeader, ContentMain, ContentFooter } from "./styled";
import useMarvel from '../../hooks/useMarvel';
import Background from '../../assets/images/background-ironman.png';
import BackgroundMobile from '../../assets/images/background-ironman-mobile.png';
import Logo from '../../assets/images/logo-iroman.svg';
import IronMan from '../../assets/images/iron-man-cartoon.png';
import Hovered from '../../assets/images/hovered.png';
import EngineerIcon from '../../assets/images/engineer-icon.svg';
import GeniusIcon from '../../assets/images/genius-icon.svg';
import BusinessmanIcon from '../../assets/images/businessman-icon.svg';
import TacticianIcon from '../../assets/images/tactician-icon.svg';

import { getUrlImage } from "../../utils/getUrlImage";
import { MARVEL_IMAGE_PORTRAIT_UNCANNY } from "../../constants/api";
import ComicCard from "../../components/ComicCard";
import Comic from "../../entities/comic";

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  const { loading, error, comics, character } = useMarvel();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!character) return <p>Not found</p>;

  const handleClick = (comic: Comic) => () => {
    console.log(comic);
  };

  return (
    <Container>
      <Header background={Background} backgroundMobile={BackgroundMobile}>
        <ContentHeader>
          <div className="content-header">
            <div>
              <img src={Logo} alt={character.name} />
            </div>
            <div className="content-header-link-action">
              <a href="javscript:void(0);" className="content-header-link-default">
                <span>Sign In</span>
              </a>
              <a href="javscript:void(0);" className="content-header-link-cta">
                <span>Sign Up</span>
              </a>
            </div>
          </div>
          <div className="content-body">
            <div className="content-body-description">
              <div>
                <p>{character.description}</p>
              </div>
              <div className="content-body-description-hovered">
                <img src={Hovered} alt="" />
              </div>
              <div className="content-body-description-cta">
                <span>Get Started</span>
              </div>
            </div>
            <div>
              <img src={IronMan} alt={character.name} />
            </div>
          </div>
        </ContentHeader>
      </Header>
      <Main>
        <ContentMain>
          <div className="content-image">
            <img src={getUrlImage(character.thumbnail.path, character.thumbnail.extension, MARVEL_IMAGE_PORTRAIT_UNCANNY)} alt={character.name} />
          </div>
          <div className="content-body">
            <div className="content-body-card">
              <div className="content-body-card-header">
                <img src={GeniusIcon} alt="" />
              </div>
              <div className="content-body-card-sub-heading">
                <h2> </h2>
              </div>
              <div className="content-body-card-copy">
                <p>Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.</p>
              </div>
            </div>
            <div className="content-body-card">
              <div className="content-body-card-header">
                <img src={EngineerIcon} alt="" />
              </div>
              <div className="content-body-card-sub-heading">
                <h2> </h2>
              </div>
              <div className="content-body-card-copy">
                <p>He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.</p>
              </div>
            </div>
            <div className="content-body-card">
              <div className="content-body-card-header">
                <img src={BusinessmanIcon} alt="" />
              </div>
              <div className="content-body-card-sub-heading">
                <h2> </h2>
              </div>
              <div className="content-body-card-copy">
                <p>Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  He has built up several multi-million dollar companies from virtually nothing.</p>
              </div>
            </div>
            <div className="content-body-card">
              <div className="content-body-card-header">
                <img src={TacticianIcon} alt="" />
              </div>
              <div className="content-body-card-sub-heading">
                <h2> </h2>
              </div>
              <div className="content-body-card-copy">
                <p>He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies.</p>
              </div>
            </div>
          </div>
        </ContentMain>
      </Main>
      <Footer>
        <ContentFooter>
          <Slider {...settings}>
            {(comics && comics.length) && (
              comics.map((comic: Comic) => <ComicCard key={comic.id} {...comic} onClick={() => handleClick(comic)} />)
            )}
          </Slider>
        </ContentFooter>
      </Footer>
    </Container>
  );
}

export default Home;