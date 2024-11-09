import { Header } from "./Header";
import "./App.css";
import { Baner } from "./Baner";
import { AboutInsurance } from "./AboutInsurance/AboutInsurance";
import { Conditions } from "./Conditions/Conditions";
import { Servis } from "./Servis/Servis";
import { Quations } from "./Quations/Quations";
import { Form } from "./Form/Form";

export const App = () => {
  return (
    <>
      <div className="Wrapper-Site">
        <div className="Inner-Site">
          <Header />
          <Baner />
          <AboutInsurance />
          <Conditions />
          <Servis />
          <Quations />
          <Form />
        </div>
      </div>
    </>
  );
};
