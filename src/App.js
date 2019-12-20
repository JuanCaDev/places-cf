import React from 'react';
import { Button, Card, CardMedia, makeStyles, CardContent } from '@material-ui/core';
import { indigo, red, lightBlue, amber } from '@material-ui/core/colors';

import Title from './components/Title';


import './App.css';

const indigo400 = indigo[400];
const red400 = red[400];
const lightBlue400 = lightBlue[400];
const amber400 = amber[400];

const useStyles = makeStyles(theme => ({
  containerCards: {
    backgroundColor: indigo400,
    padding: '50px',
    display: 'grid',
    gridTemplatesColumns: 'repeat(3, 1fr)',
    gridGap: '1em'
  },
  card: {
    display: 'flex'
  },
  backgroundHeart: {
    backgroundColor: red400,
    display: 'flex',
    alignItems: 'center'
  },
  backgroundWifi: {
    backgroundColor: lightBlue400,
    display: 'flex',
    alignItems: 'center'
  },
  backgroundFavorites: {
    backgroundColor: amber400,
    display: 'flex',
    alignItems: 'center'
  }
}));

function App() {
  const classes = useStyles();
  classes.backgroundHeart += " card-media"
  classes.backgroundWifi += " card-media"
  classes.backgroundFavorites += " card-media"

  return (
    <section>
      <div className="Header-background">
        <div style={{ "width": "80%", "margin": "0 auto" }}>

          <div className="Header-main">
            <Title/>
            <Button variant="contained" color="primary">Crear cuenta gratuita</Button>
            <img className="Header-ilustration" src={ process.env.PUBLIC_URL + '/images/top-background.png' } alt="Background places"/>
          </div>

        </div>
      </div>

      <div className="container-cards">
        <Card className="card">
          <CardMedia className="card-media heart">
            <i className="far fa-heart icon"></i>
          </CardMedia>
          <CardContent>
            <div>
              <h3>Calificaciones con emociones</h3>
              <p>Califica tus lugares con experiencias, no con números</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card">
          <CardMedia className="card-media wifi">
            <i className="fas fa-wifi icon"></i>
          </CardMedia>
          <CardContent>
            <div>
              <h3>¿Sin internet? Sin problemas</h3>
              <p>Places funciona sin internet o en conexiones lentas</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card">
          <CardMedia className="card-media favorite">
            <i className="far fa-star icon"></i>
          </CardMedia>
          <CardContent>
            <div>
              <h3>Tus lugares favoritos</h3>
              <p>Define tu lista de sitios favoritos</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default App;
