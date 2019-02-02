import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Earnings',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 84, 61, 92]
    }
  ]
};

class PreviousTransactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevTransactions : [
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},
        {'investor': 'Investor ABC','project': 'Project Lambda', 'amount': 999},

      ]};

    this.renderTableRows = this.renderTableRows.bind(this);
  }

  renderTableRows() {
    return this.state.prevTransactions
    .map(row => 
    <tr>
      <td>{row.investor}</td>
      <td>{row.project}</td>
      <td>{row.amount}</td>
    </tr>);

  }

  render() {
    return(
    <div className="container-fluid mx-3">
      <br />
      <div className="row">
        <div className="col-md-8">
          <br />
          <br />
          <Line data = {data} />
        </div>
        <div className="col-md-4">
          <br/>
          <br/>
          <h2>Previous Transactions</h2>
          <table className="table table-striped table-responsive" style={{height:'280px', overflowY:'scroll', width:'100%'}}>
            <thead>
              <tr>
                <th>Investor</th>
                <th>Project</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
}

export default PreviousTransactions;