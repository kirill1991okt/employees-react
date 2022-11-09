import './app-info.css';

const AppInfo = (props) => {
  const { amountOfEmployees, takePremium } = props;

  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании 'SuperTech'</h1>
      <h2>Общее число сотрудников: {amountOfEmployees}</h2>
      <h2>Премию получат: {takePremium}</h2>
    </div>
  );
};

export default AppInfo;
