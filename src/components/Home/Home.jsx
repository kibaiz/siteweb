import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from "typewriter-effect";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

import Carousel1 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Home.css';
const Home = () =>{
  //fonction carousel
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };

  return(
    <>
    <Container className="fluid pt-5 mt-5">
      <Row>
        <Col>
        <Card>
          <Card.Img className="img" variant="top" src="./images/cedii8.jpg" />
            <div className="content">
              <Row>
                <Col className="Left-style">
                  <h1 className="h1">C.E.D.I.I FIANARANTSOA</h1>
                  <Typewriter className="h2"
                        onInit={(typewriter)=>{
                        typewriter.typeString("MAMPITA HEVITRA, MAMPITA VAOVAO, MAMPITA HEVITRA VAOVAO")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Centre d’Echanges, de Documentation et d’Information Interinstitutionnelles")
                        .start();
                      }}
                    />
                </Col>
              </Row>
            </div>
        </Card>
        </Col>
      </Row>
      <Row className="mt-3">
      <Col>
      <div className="wrapper">
        <h2>Historique</h2>
        <p className="shadow-none p-3 mb-5 bg-light rounded actualite">
        <img src="./images/logo.jpg" alt="logocedii" className="alignImg"/>
        Le CEDII a été créé le 03 octobre 2000 par 34 associations membres fondatrices et est agréé le 06 décembre 2000. La création, découlait des aspirations des fondateurs et des acteurs locaux, de faire face aux problématiques générales suivantes concernant l’ex-province de Fianarantsoa en matière d’informations :<br/>
        -	le cloisonnement des systèmes d'informations existants qui a engendré le manque de circulation et de fluidité dans ce domaine<br/>
        -	l'absence de politique régionale cohérente et transparente en matière d'information<br/>
        -	le manque de moyen matériel et financier pour gérer les informations (collecte, traitement et diffusion)<br/>
        -	le manque de sensibilisation sur l'importance des informations<br/>
        -	le développement insuffisant de l'utilisation de la NTIC<br/>
        -	l'absence d'espace d'échanges et de dialogue en matière d'informations<br/>
        Le CEDII a pu être ouvert au public pour la première fois en septembre 2001, grâce à l’impulsion et à l’appui technique et financier de PACT Madagascar à travers les  projets de promotion de la gouvernance financés par USAID, tels  RARY, et ILO… Et suite à des améliorations internes, il a pu être entièrement opérationnel à la mi-2002.
        </p>
      </div>
      </Col>
      </Row>
      <Row className="mt-3">
        <Col>
            <h2>Info</h2>
          <Accordion className="Accordion-style">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Centre d’Echanges</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Centre de Documentation</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Centre d’Information</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>A propos de nous</Accordion.Header>
                  <Accordion.Body>
                    <p className="text-center">
                    <span className="font">Centre d’Echanges, de Documentation et d’Information Interinstitutionnelles</span><br/>
                    Boulevard Philibert TSIRANANA <br/>
                    BP. 166 Tsianolondroa 301 - FIANARANTSOA MADAGASCAR <br/>
                    Tel (261) 20 75 509 34 / (261) 20 75 509 68 Fax : (261) 20 75 511 06 <br/>
                    Email : cedii@cedii.mg ;  cedii.fia@moov.mg
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
          </Accordion>
          <div className="mt-4">
            <Card className="shadow-none p-3 mb-5 bg-light rounded">
              <Card.Body>
                <Card.Title>Nos activités</Card.Title>
                  <Card.Text>
                    <p className="actualite">
                      <span className="font">« Le développement équilibré et harmonieux,
                      permettant aux différentes forces vives d’accéder à l’information et de contribuer au mieux vivre et au mieux être,
                      et de participer à l’éradication de l’exclusion et de la pauvreté sous toutes  leurs  formes ».
                      </span>
                      <br/>
                      Les acquis  en matière d’expériences :
                      Ces acquis revêtent un caractère très significatif dans les domaines de la mobilisation, de la coopération, du développement de réseaux, le développement des appuis-conseils, et le développement de systèmes d’informations :
                      La mobilisation interinstitutionnelle : le développement de synergie entre Institutions publiques, Institutions privées, société civile et société rurale, sur des sujets bien précis
                    </p>
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className="shadow-none p-3 mb-5 bg-light rounded">
        <h3>
        <Spinner animation="grow" size="sm" className="spin"/>
          Actualités
        </h3>
        <p className="actualite">
          L’avenir de CEDII pourra se concrétiser dans le développement de nouveaux services innovants,
          face à des problèmes relativement nouveaux ou récents des jeunes, des collectivités,
          des professionnels du secteur privé ou de la société civile, etc. Par exemple,
          l’appui-conseil dans la création d’activités génératrices de revenus pour des jeunes marginalisés ou en situation de réinsertion sociale,
          la connexion internet dans les communes rurales éloignées,
          la lisibilité des informations commerciales sur une filière donnée pour une association de paysans illettrés ou vivant dans une localité non électrifiée, etc.
        </p>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/cedii8.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Centre d'Echanges</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/cedii7.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Centre de Documentation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/cedii6.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Centre d'Information</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/cedii3.jpg"
                    alt="for slide"
                  />

                  <Carousel.Caption>
                    <h3>Culturel</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

          </Carousel>
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <h2 className="mb-3">Nos partenaires</h2>
          <Carousel1 responsive={responsive}>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/logo.jpg" className="logoCEDI" />
                <Card.Body>
                <Card.Title>C.E.D.I.I</Card.Title>
                <Card.Text className="TextAlign pb-2">
                  Le CEDII participe activement aux divers évènements importants nationaux et locaux,
                  tels que la mobilisation sociale autour des élections,
                  la célébration des journées mondiaux (Environnement, etc.).
                </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Eaurizon.png" className="logo" />
                <Card.Body>
                <Card.Title>Eaurizon</Card.Title>
                <Card.Text className="TextAlign pb-2">
                  Le programme Eaurizon, porté par la coopération décentralisée de la Région Haute Matsiatra et de la Métropole de Lyon,
                  a publié une traduction en malgache de son ouvrage de
                  capitalisation sur le métier de gestionnaire professionnel de réseau d'eau potable.
                  réalisé dans le cadre du programme Eaurizon phase I,
                  a été inauguré le mardi 30 juin 2021.
                </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/agencedeleau.png" className="logo" style={{height: "15rem"}}/>
                <Card.Body>
                  <Card.Title>Agence de l'Eau</Card.Title>
                  <Card.Text className="TextAlign pb-3">
                    L’agence de l’eau renforce son soutien aux territoires des bassins Rhône-Méditerranée et de Corse.
                    En savoir plus sur les appels à projets de l'agence de l'eau.
                    réalisé par Eaurizon phase I
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/CUF.jpg" className="logo" />
                <Card.Body>
                  <Card.Title>Commune urbaine Fianarantsoa</Card.Title>
                  <Card.Text className="TextAlign">
                    La Commune Urbaine de Fianarantsoa est le chef lieu de la région Haute Matsiatra.
                    Elle compte 200.925 habitants.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/logo_uf.png" className="logoUf" />
                <Card.Body>
                  <Card.Title>Université de Fianarantsoa</Card.Title>
                  <Card.Text className="TextAlign">
                    L'Université de Fianarantsoa est une université publique de Madagascar.
                    Le campus est sis à la sortie Est de la ville de Fianarantsoa.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./images/resaeu.png" className="logoRe" />
              <Card.Body>
                <Card.Title>Res'Eau</Card.Title>
                <Card.Text className="pb-1 TextAlign">
                Res’Eau est un réseau des acteurs du secteur Eau et Assainissement dans la région Haute Matsiatra.
                Les activités de Res’Eau sont généralement basées sur l’organisation d’espaces d’échange et de travail,
                la coordination du secteur, l’appui et formation des acteurs.Crée en 2017.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/CIDST.png" className="logoCI" />
                <Card.Body>
                  <Card.Title>C.I.D.S.T</Card.Title>
                  <Card.Text className="TextAlign">
                    Le CIDST, c’est d’abord un espace ouvert, un site accessible à tous, pour les professionnels scientifiques et économiques, les enseignants et les chercheurs, les étudiants et les usagers particuliers et publics.
                    Le centre regorge de ressources documentaires et d’informations variées multidisciplinaires.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/LogoRegionHM.jpg" className="logoHM" />
                <Card.Body>
                  <Card.Title>Haute Matsiatra</Card.Title>
                  <Card.Text className="TextAlign">
                  Haute Matsiatra est une des 22 régions de Madagascar.
                  Elle fait partie de la province de Fianarantsoa et son chef-lieu est Fianarantsoa.
                  Son nom vient de celui de sa principale rivière, la Matsiatra.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/LogoOIF.jpg"className="LogoOIF"/>
                <Card.Body>
                  <Card.Title>La phraconphonie</Card.Title>
                  <Card.Text className="pb-4 TextAlign">
                    L’Organisation internationale de la francophonie est une organisation,
                    personne morale de droit international public, créée en 1970,
                    L'Organisation internationale de la Francophonie
                    (OIF) met en oeuvre la coopération multilatérale francophone au service de ses 88 Etats et gouvernements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel1>
      </Row>
    </Container>
    </>
  );
}

export default Home;
