import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';


class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['RUB', 'USD', 'PHP', 'CAD'];
    this.getRate();
  }

  getRate = () => {
    const api_key = '7f69728967123946767ef7bb9f190c96';
    //http://api.exchangeratesapi.io/v1/latest?access_key=d3769d1d61a2655298ee26b3a1b8f860
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=d3769d1d61a2655298ee26b3a1b8f860')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        console.log(result);
        this.setState({ currencyRate: result });
      });
  }


  render() {
    return (
      <div className="rate">
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) =>
          (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
              <p>* Стоимость за 1 EUR</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
