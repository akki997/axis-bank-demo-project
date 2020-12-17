import React, { Component } from 'react';

class LoanComponent extends Component {

    constructor(props){
        super(props)
        this.state= {
           
            loanList : [
                {
                    accountNumber:"01600001234",
                    loanType:"Education Loan",
                    principal:"200000",
                    time:"5",
                    simpleInterest:"100000",
                    emi:"5000"
                },
                {
                    accountNumber:"01600001235",
                    loanType:"Vehicle Loan",
                    principal:"200000",
                    time:"3",
                    simpleInterest:"150000",
                    emi:"7000"
                },
                {
                    accountNumber:"01600001236",
                    loanType:"Housing Loan",
                    principal:"2000000",
                    time:"5",
                    simpleInterest:"1000000",
                    emi:"50000"
                }
            ]
        }
        this.editEmployee=this.editEmployee.bind(this);
    }
    editEmployee(id){
        this.props.history.push(`/update-loan/${id}`);
    }
    render() {
        return (
            <div>
               <h2 className = "text-center">Loan List</h2>
               
               <div className = "row">
                   <table className = "table table-striped table-bordered">
                       <thead className="thead-dark">
                           <tr>
                               <th>Account Number</th>
                               <th>Loan Type</th>
                               <th>Loan Amount</th>
                               <th>Time(Year)</th>
                               <th>Simple Interest</th>
                               <th>EMI(per month)</th>
                               <th>Actions</th>
                              
                           </tr>

                       </thead>
                       <tbody>
                          {
                              this.state.loanList.map(
                                  loan =>
                                  <tr key = {loan.accountNumber}>
                                      <td> {loan.accountNumber}</td>
                                      <td> {loan.loanType}</td>
                                      <td> {loan.time}</td>
                                      <td> {loan.principal}</td>
                                      <td> {loan.simpleInterest}</td>
                                      <td> {loan.emi}</td>
                                      
                                      <td>
                                          <button className="btn btn-info" onClick={() => this.editEmployee(loan.accountNumber)}>Update</button>
                                      </td>

                                  </tr>
                              )
                          }
                       </tbody>
                   </table>
               </div>
 
            </div>
        )
    }
}

export default LoanComponent;