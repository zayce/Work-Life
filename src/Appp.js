import { Header } from "./Header";
import "./App.css";
import { Baner } from "./Baner";
import { AboutInsurance } from "./AboutInsurance/AboutInsurance";
import { Conditions } from "./Conditions/Conditions";

export const App = () => {
  return (
    <>
      <div className="Wrapper-Site">
        <div className="Inner-Site">
          <Header />
          <Baner />
          <AboutInsurance />
          <Conditions />
        </div>
      </div>
    </>
  );
};
