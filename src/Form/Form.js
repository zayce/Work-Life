import "./Form.scss";
import Fon from "./Fo.png";
import First from "./First.png";

export const Form = () => {
  return (
    <>
      <div className="Form">
        <div className="Form-Title">Уточнить детали</div>
        <div className="Form-Desc">
          Если вы не нашли ответа на свой вопрос, заполните эту форму, а мы как
          можно быстрее ответим вам.
        </div>
        <div className="Form-Opis">
          <div className="Registr">
            <div className="Registr-Foto">
              <img src={First} />
            </div>
            <label className="Label">
              <div className="Label-Name">ФИО*</div>
              <input
                typeof="text"
                placeholder="Имя Фамилия"
                className="input"
              />
            </label>
            <label className="Label">
              <div className="Label-Name">Номер телефона*</div>
              <input
                typeof="text"
                placeholder="+7 (495) 453 33 41"
                className="input"
              />
            </label>
            <label className="Label">
              <div className="Label-Name">Email*</div>
              <input
                typeof="text"
                placeholder="delolive@mail.ru"
                className="input"
              />
            </label>
            <label className="Label">
              <div className="Label-Name">Регион*</div>
              <select className="input">
                <option>Baku</option>
                <option>Санкт-Петербург</option>
                <option>Moscow</option>
                <option>Istambul</option>
                <option>Ankara</option>
                <option>Madrid</option>
                <option>London</option>
                <option>Milan</option>
                <option>Berlin</option>
                <option>Glasgow</option>
                <option>Dublin</option>
                <option>Otava</option>
                <option>Niger</option>
                <option>New-York</option>
                <option>Tblisi</option>
              </select>
            </label>
            <div className="Buttons">
              <button className="get">
                <span>Очистить</span>
              </button>
              <button className="get">
                <span>Далее</span>
              </button>
            </div>
          </div>
          <div>
            <img src={Fon} />
          </div>
        </div>
      </div>
    </>
  );
};
