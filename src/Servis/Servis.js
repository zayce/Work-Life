import "./Servis.scss";

export const Servis = () => {
  const firstBlock = [
    {
      id: 1,
      simvol: "-",
      name: "круглосуточный колл-центр по консультациям терапевта или педиатра",
    },
    {
      id: 2,
      simvol: "-",
      name: "консультация терапевта или педиатра по телефону или по видеосвязи",
    },
    {
      id: 3,
      simvol: "-",
      name: "предварительная запись к выбранному узкому специалисту по телефону или через личный кабинет пациента",
    },
    {
      id: 4,
      simvol: "-",
      name: "консультация узкого специалиста по видеосвязи",
    },
    {
      id: 5,
      simvol: "-",
      name: "выбор лаборатории, запись на прием в лабораторию",
    },
    {
      id: 6,
      simvol: "-",
      name: "комплексный отчет о состоянии здоровья пациента от врача после получения результатов анализов от пациента",
    },
    { id: 7, simvol: "-", name: "никаких чат-ботов" },
    {
      id: 8,
      simvol: "-",
      name: "на связи 24/7 только высококвалифицированные врачи",
    },
    {
      id: 9,
      simvol: "-",
      name: "удобное приложение с простым интерфейсом BestDoctor",
    },
    { id: 10, simvol: "-", name: "общие (клинические) анализы" },
    { id: 11, simvol: "-", name: "ультразвуковые исследования" },
    { id: 12, simvol: "-", name: "рентгенологические исследования" },
  ];

  const SecondBlock = [
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "+" },
    { simvol: "-" },
    { simvol: "-" },
    { simvol: "-" },
  ];
  return (
    <>
      <div className="Servis">
        <div className="Servis-title">У нас есть 2 пакета услуг</div>
        <div className="Servis-Blocks">
          <div className="Servis-First-block">
            <div className="Servis-First-block-Title">Что мы предлогаем:</div>
            <div className="FirstBlocks">
              {firstBlock.map((element, index) => (
                <div className="FirstBlock" key={index}>
                  <div className="Simvol">{element.simvol}</div>
                  <div className="Name">{element.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="Servis-Second-block">
            <div className="Servis-Second-block-Title">
              Защита + виртуальная клиника
            </div>
            <div className="SecondBlocks">
              {SecondBlock.map((element, index) => (
                <div className="SecondBlock" key={index}>
                  <div className="Simvol">{element.simvol}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="Servis-Second-block">
            <div className="Servis-Second-block-Title">
              Защита + виртуальная клиника
            </div>
            <div className="SecondBlocks">
              {SecondBlock.map((element, index) => (
                <div className="SecondBlock" key={index}>
                  <div className="Simvol">{element.simvol}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
