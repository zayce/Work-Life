import { Header } from "./Header";
import "./App.css";
import { Baner } from "./Baner";

export const App = () => {
  return (
    <>
      <div className="Wrapper-Site">
        <div className="Inner-Site">
          <Header />
          <Baner />
        </div>
      </div>
    </>
  );
};
