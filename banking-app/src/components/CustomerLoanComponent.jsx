import React, { Component, useEffect, useState } from 'react';
import CustomerService from '../Service/CustomerService';
import ls from 'local-storage';

function CustomerLoanComponent({type}) {
    const [principalAmount,setPrincipalAmount]=useState('');
    const [time,setTime]=useState('');
    const [customer,setCustomer]=useState(null)

    useEffect(()=>{
        setCustomer(ls.get("customer"))

        console.log(type)
    },[])
   
       
   
   const changePrincipalAmountHandler = (event) => {
        //.setState({ principalAmount: event.target.value })
        setPrincipalAmount(event.target.value)

    }
   const changeTimeHandler = (event) => {
        //this.setState({ time: event.target.value })
        setTime(event.target.value)
    }

   const applyLoan = () => (e) => {
        e.preventDefault()
        let loan = {
            customerAccountNumber: customer?.customerAccountNumber, loanType: type,
            principalAmount: principalAmount, time:time
        }

        CustomerService.getLoan(loan).then((res) => {
            alert("ThankYou for applying Loan")
        })
    }
  
  
        return (
            <div>
              
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ 'background-color': 'rgb(255, 226, 192)', 'maxHeight': '35rem' }}>
                            <h3 className="text-center" style={{ 'color': 'rgb(173, 62, 55)' }}>
                                Apply Loan
                            </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>AccountNumber:</label>
                                        <input  name="customerAccountNumber" className="form-control"
                                            value={customer?.customerAccountNumber} ></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Loan Type:</label>
                                        <input  name="loanType" className="form-control"
                                            value={type}></input>
                                            
                                        
                                    </div>
                                    {/* <div className="form-group">
                                        <label>Loan Type:</label>
                                        <input placeholder="Enter Loan Type" name="loanType" className="form-control"
                                            value={this.state.loanType} onChange={this.changeLoanTypeHandler}></input>
                                    </div> */}
                                    <div className="form-group">
                                        <label>Amount:</label>
                                        <input placeholder="Enter Amount" name="principalAmount" className="form-control"
                                            value={principalAmount} onChange={changePrincipalAmountHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Time:</label>
                                        <input placeholder="Enter Time" name="time" className="form-control"
                                            value={time} onChange={changeTimeHandler}></input>
                                    </div>

                                    <button className="btn btn-primary" onClick={applyLoan()}>Apply Loan</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    
}

export default CustomerLoanComponent;