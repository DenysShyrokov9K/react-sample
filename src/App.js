import HeaderNav from './components/HeaderNav';
import TextBoxBlock from './components/TextBoxBlock';
import CarousalBlock from './components/CarousalBlock';
import WhatIs from './components/WhatIs';
import HowIT from './components/HowIt';
import FAQ from './components/FAQ';
import Account from './components/Account';

import './App.css';
import Grid from '@mui/material/Grid'; // Grid version 1


function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ backgroundColor: "black" }}>
        <Grid xs={6}>
          <TextBoxBlock />
        </Grid>
        <Grid xs={6}>
          <CarousalBlock />
        </Grid>
      </Grid>
      <WhatIs id="whatis" />
      <HowIT id="howit" />
      <FAQ id="faq" />
      <Account id="account" />
    </div>
  );
}

export default App;
