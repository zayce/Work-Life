import twenty from "./24.png";
import calendar from "./calendar.png";
import insyr from "./insurance.png";
import lab from "./lab.png";
import But from "./But.png";

import "./AboutInsurance.scss";

export const AboutInsurance = () => {
  const Products = [
    { img: twenty, name: "обращения к доктору24/7 ", title: "без ограничений" },
    {
      img: calendar,
      name: "обращения к врачам-специалистам",
      title: "без ограничений",
    },
    {
      img: insyr,
      name: "защита от несчастного случая + медицинский онлайн-сервис ",
      title: "24/7",
    },
    { img: lab, name: "лабораторные исследования ", title: "до 2-х раз год" },
    { img: But, name: "упрощенная система", title: "до 10 мин." },
  ];
  return (
    <>
      <div className="AboutInsurance">
        <div className="AboutInsurance-Title">О страховании</div>
        <div className="AboutInsurance-Blocks">
          {Products.map((element, index) => (
            <div className="AboutInsurance-Block">
              <div className="AboutInsurance-titles" key={index}>
                {element.title}
              </div>
              <div className="AboutInsurance-desc" key={index}>
                <div className="Img">
                  <img src={element.img} />
                </div>
                <div className="AboutInsurance-name">{element.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
