import { FC } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./app.css";
import MainMenu from "./MainMenu";

export const App: FC = () => {
  return (
    <div className="app">
      <div className="background" />
      <HashRouter>
        <Routes>
          { <Route path="/" element={<MainMenu />} />
          // <Route path="/glabels" element={<Glabels />} />
          // <Route path="/animalscount" element={<AnimalsCount />} />
          // <Route path="/tenderly" element={<Tenderly />} />
          // <Route path="/family" element={<Family />} />
          // <Route path="/onemany" element={<OneMany />} />
          // <Route path="/final" element={<FinalPage />} />
        }
        </Routes>
      </HashRouter>
      <div className="footer">
        Автор игры: учитель-логопед МАДОУ «Детский сад №390» г. Перми Ковязина
        Светлана Евгеньевна
      </div>
    </div>
  );
};
