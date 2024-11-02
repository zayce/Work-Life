import Doc from "./Doctor.png";
import Phone from "./Phone.png";
import Per from "./People.png";

import "./Conditions.scss";

export const Conditions = () => {
  return (
    <>
      <div className="Conditions">
        <div className="Conditions-Title">
          Условия которые мы предоставим Вам
        </div>
        <div className="Conditions-Blocks">
          <div className="Conditions-Left">
            <div className="Conditions-Left-img">
              <img src={Doc} />
            </div>
            <div className="Conditions-Left-block">
              <div className="Conditions-Left-block-title">20+</div>
              <div className="Conditions-Left-block-Desc">
                Высококвалифицированных врачей к которым вы можете обращаться{" "}
                <span className="Desc">24/7</span>
              </div>
            </div>
          </div>
          <div className="Conditions-Right">
            <div className="Conditions-Right-block">
              <div className="Conditions-Right-block-title">BestDoctor</div>
              <div className="Conditions-Right-block-Desc">
                Доступ в один из лучших медицинских сервисов в России
              </div>
            </div>
            <div className="Conditions-Right-img">
              <img src={Phone} />
            </div>
          </div>
          <div className="Conditions-Left">
            <div className="Conditions-Left-img">
              <img src={Per} />
            </div>
            <div className="Conditions-Left-block">
              <div className="Conditions-Left-block-title">600 000₽</div>
              <div className="Conditions-Left-block-Desc">
                Сумма страховой защиты от нещастного случая
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
