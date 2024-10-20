import Logo from "./logo.png";
import Account from "./account_circle.png";

export const Header = () => {
  return (
    <header className="bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded shadow-lg flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li className="text-lg font-normal leading-[21.48px] text-black hover:text-green-500 ml-2.5">
            Главная
          </li>
          <li className="text-lg font-normal leading-[21.48px] text-black hover:text-green-500 ml-2.5">
            О нас
          </li>
          <li className="text-lg font-normal leading-[21.48px] text-black hover:text-green-500 ml-2.5">
            Помощь
          </li>
          <li className="text-lg font-normal leading-[21.48px] text-black hover:text-green-500 ml-2.5">
            +7 495 967 13 01
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="mr-2 text-black hover:text-green-500">
          Личный кабинет
        </div>
        <img src={Account} alt="Account" className="h-10 w-auto" />
      </div>
    </header>
  );
};
