import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import MyJumbotron from "./components/MyJumbotron";
import MyCard from "./components/MyCard";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prenotazioni from "./components/Prenotazioni";
import PercorsoBenessere from "./components/PercorsoBenessere";
import Massaggi from "./components/Massaggi";
import Saunavista from "./components/SaunaVista";
import PiscinaEsterna from "./components/PiscinaEsterna";
import WellnessFood from "./components/WellnessFood";
import IngressoSerale from "./components/IngressoSerale";
import NewsLetter from "./components/NewsLetter";
import { Modal } from "react-bootstrap";
import TrattamentoCorpo from "./components/TrattamentoCorpo";
import TrattamentoViso from "./components/TrattamentoViso.jsx"
import FesteggiaConNoi from "./components/FesteggiaConNoi";
import WeatherApp from "./components/WeatherApp";
import Contactus from "./components/ContactUs";

const App = () => {
  return ( 
    <div className="App">
        <MyNavbar />
        <BrowserRouter> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyCarousel />
              <MyJumbotron />
              <Contactus />
              <MyFooter />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              <MyCarousel />
              <MyJumbotron />
              <Contactus />
              <MyFooter />
            </>
          }
        />
        <Route
          path="/pacchetti"
          element={
            <>
              <MyCard />
              <MyFooter />
            </>
          }
        />
        <Route
          path="/PercorsoBenessere"
          element={
            <>
              
              <PercorsoBenessere />
              <WeatherApp />
              <Prenotazioni />
            </>
          }
        />
        <Route
          path="/Massaggi"
          element={
            <>
              <Massaggi />
              <Prenotazioni />
            </>
          }
        />
        <Route
          path="/SaunaVista"
          element={
            <>
              <Saunavista />
              <WeatherApp />
              <Prenotazioni />
            </>
          }
        />
        <Route
          path="/PiscinaEsterna"
          element={
            <>
              <PiscinaEsterna />
              <WeatherApp />
              <Prenotazioni />
            </>
          }
        />
        <Route
          path="/WellnessFood"
          element={
            <>
              <WellnessFood />
            </>
          }
        />
        <Route
          path="/IngressoSerale"
          element={
            <>
              
              <IngressoSerale />
              <WeatherApp />
              <Prenotazioni />
            </>
          }
        />
        <Route
          path="/NewsLetter"
          element={
            <>   <NewsLetter />
              <Modal />
            </>
          }
        />
<Route
          path="/TrattamentoCorpo"
          element={
            <>
            
              <TrattamentoCorpo />
              <Prenotazioni/>
            </>
          }
        />
<Route
path="/TrattamentoViso"
          element={
            <>
              <TrattamentoViso />
              <Prenotazioni/>
            </>
          }
        />
<Route
          path="/FesteggiaConNoi"
          element={
            <>
              
              <FesteggiaConNoi/>
              <WeatherApp />
              <Prenotazioni/>
            </>
          }
        />
<Route
          path="/WeatherApp"
          element={
            <>
            <WeatherApp />
            </>
          }
        /> 
<Route
          path="/ContactUs"
          element={
            <>
            
              <Prenotazioni />
              <Contactus />
              <MyFooter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
};
export default App;
