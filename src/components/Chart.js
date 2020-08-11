import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps ={
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    Location:'City'

  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display: this.props.displayTitle,
              text:'Largest Citities in '+this.props.Location,
              fontSize: 25
            },
            legend:{
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />


        <Line
          data={this.state.chartData}
          options={{
            title:{
              display: this.props.displayTitle,
              text:'Largest Citities in '+this.props.Location,
              fontSize: 25
            },
            legend:{
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display: this.props.displayTitle,
              text:'Largest Citities in '+this.props.Location,
              fontSize: 25
            },
            legend:{
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
      
    )
  }
}

export default Chart;