import { useState } from 'react';
import { checkTransport } from '../../services'
import { Header } from '../../components/layout';
import { CustomForm } from '../../components/forms';

export function Main() {

  const [carNumber, setCarNumber] = useState();
  const [carData, setCarData] = useState({});

  async function checkCar() {
    const data = await checkTransport(carNumber);
    if (data?.code === 404) {
      setCarData('not found');
    } else {
      setCarData(data);
    }
  }

  return (
    <>
      <Header />
      <CustomForm checkCar={checkCar} carNumber={carNumber} setCarNumber={setCarNumber} formTitle={''} />
      {carData === 'not found' ? <p>Транспортний засіб не знайдено</p> :
        <>
          <div>Автомобільний номер: {carData.number}</div>
          <div>Марка: {carData.model}</div>
          <div>Тип: {carData.body}</div>
          <div>Колір: {carData.color}</div>
          <div>Тип: {carData.kind}</div>
          <div>Рік випуску: {carData.year}</div>
          <div>Потужність двигуна: {carData.capacity}</div>
          <div>Вага: {carData.ownWeight}</div>
          <div>Останні правочини: {carData.registration}</div>
          <div>Дата реєстрації: {carData.date}</div>
          <div>Центр: {carData.dep}</div>
        </>
      }
    </>
  );
}
