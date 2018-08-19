import React, { Component } from 'react';
import {
  Typography,
  withStyles
} from '@material-ui/core';
const styles = {
  root: {
    textAlign: 'center',
  },
};
class Home extends Component {
  render() {
      return (
        <section className="home">
        <div className="Container">
        <div className="container-title">
          <h1 className="title">Home  </h1>         
          </div>
          </div>
           <div className="row">
            <div className="text center">
              <p> <b>U bent op zoek naar een leuke reis? Bekijk dan ons onderstaand aanbod </b></p>
              <p className="justify">Dit zijn Material cards, een clean way om uitgelichte content te tonen. De inhoud wordt geladen vanuit een SQLdatabase, zoals een admin het eerder ingaf op de 'postmanager' pagina.
                De foto's worden geladen via de Unsplash api. Probeer eens een reload, je zal zien dat het thema hetzelfde blijft, maar de foto is veranderd!
                Ideaal voor een reiswebsite om de aandacht van nieuwe bezoekers te blijven trekken!</p>

            </div>
        
          </div>
          </section>
      );
    }
  }
export default Home;
