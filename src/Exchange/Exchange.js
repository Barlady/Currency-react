import React from 'react';
import image from './exchange.jpeg';
import './Exchange.css';


class Exchange extends React.Component {

  render() {
  	let exchangeOffice = {
  		'Leningradskaya' : 'office № 1',
  		'Kirova' : 'office № 2',
  		'Lenina' : 'office № 3',
  		'Pobeda' : 'office № 4'
  	};

  return (
    <div className="exchange">
    <h1>Пункты обмена</h1>
    <div className="exchange-office">
    <ul>
    {Object.keys(exchangeOffice).map(elem => {
     return <li key={elem}><span>{elem} street</span> : {exchangeOffice[elem]}</li>;
     })}
      </ul>
      <img src={image} className ="foto" alt="logo" />
      </div>
    </div>
  );
 }
}

export default Exchange;
