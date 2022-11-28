import { FC } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import AlertState from "../utils/alert/AlertState";
import AnswerFairy from "./AnswerFairy";
import "./app.css";
import FinalPage from "./FinalPage";
import Glabels from "./Glabels";
import HomeButton from "./HomeButton";
import MainMenu from "./MainMenu";
import OneMany from "./OneMany";
import Riddles from "./Riddles";
import Tenderly from "./Tenderly";

export const routes = {
  game1: "/game1",
  game2: "/game2",
  game3: "/game3",
  game4: "/game4",
  game5: "/game5",
};

export const App: FC = () => {
  return (
    <div className="app">
      <div className="background" />
      <AlertState>
        <HashRouter>
          <AnswerFairy />
          <HomeButton />
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path={routes.game1} element={<Glabels />} />
            {
              // <Route path="/animalscount" element={<AnimalsCount />} />
              // <Route path="/tenderly" element={<Tenderly />} />
              // <Route path="/family" element={<Family />} />
            }
            <Route path={routes.game4} element={<Tenderly />} />
            <Route path={routes.game5} element={<Riddles />} />
            <Route path={routes.game3} element={<OneMany />} />
            <Route path="/final" element={<FinalPage />} />
          </Routes>
        </HashRouter>
      </AlertState>
      <div className="footer">
        Автор игры: учитель-логопед МАДОУ «Детский сад №390» г. Перми Ковязина
        Светлана Евгеньевна
      </div>
    </div>
  );
};
