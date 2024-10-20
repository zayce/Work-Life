import Art from "./Art.png";

export const Baner = () => {
  return (
    <div className="flex border border-grey rounded-[30px] py-[40px] px-[40px] mt-6">
      <div>
        <div className="text-lg font-bold leading-[43px] text-black hover:text-green-700 mb-[30px]">
          Страховая программа ЗАЩИТА +
        </div>

        <div className=" text-gray-400 font-light mb-[150px] ">
          Одна из самых удобных и выгодных страховых программ, предоставляемых
          гражданам России и иностранным гражданам.
        </div>

        <button className="w-[265px] h-[59px] p-[20px] gap-[27px] rounded-tl-[6px] border border-solid border-[#4A607A] text-center bg-primary hover:bg-secondary font-bold py-4 px-6 rounded shadow-lg">
          Kупить
        </button>
      </div>
      <div>
        <img src={Art} />
      </div>
    </div>
  );
};
