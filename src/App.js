import React, {Component} from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New  Belford'],
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              251045,
              183060,
              126519,
              105162,
              85072
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 06)',
              'rgba(54, 162, 235, 06)',
              'rgba(255, 206, 86, 06)',
              'rgba(75, 192, 192, 06)',
              'rgba(153, 102, 255, 06)',
              'rgba(255, 140, 64, 06)',
              'rgba(255, 79, 64, 06)',
            ]
          }
        ]
      }
    });
  }
render() {
  return (

    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="chart" style={{justifyContent: "center", display: "inline-flex"}}>
        <Chart
        chartData={this.state.chartData} 
        Location="Massachusetts"
        legendPosition="bottom" 
        />
      </div>
    </div>
  );
}
}

export default App;
