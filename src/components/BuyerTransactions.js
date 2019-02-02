import React, {Component} from 'react';

class Transaction extends Component {
  render() {
    let actionComponent = '';

    switch (this.props.action) {
      case 'pending':
        actionComponent = <button className="btn btn-info rounded m-1" disabled>Pending</button>;
        break;
      case 'payment':
        actionComponent = <span><input type="text" placeholder="Amount" className="form-control "></input><button className="btn btn-warning rounded  m-1"> Pay</button></span>;
        break;
      case 'verify' : 
        actionComponent = <button className="btn btn-success rounded  m-1">Verify</button>;
        break;
    }
    console.log(actionComponent);
    return(
      <tr>
        <td>John Doe</td>
        <td>John Doe</td>
        <td>John Doe</td>
        <td className="form-inline">
        {actionComponent}
        </td>
      </tr>
    );
  }
}

class BuyerTransactions extends Component {
  render() {
    return (
      <div className="container">
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Investment Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Transaction action={'pending'}/>
            <Transaction action={'payment'}/>
            <Transaction action={'verify' }/>

          </tbody>
        </table>
      </div>
    );
  }
}

export default BuyerTransactions;