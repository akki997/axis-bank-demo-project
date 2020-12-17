import React, { Component, useEffect, useState } from 'react';
import CustomerService from '../Service/CustomerService';
import { useStateValue } from '../StateProvider';
import ls from "local-storage";

function GetCustomerComponent() {
   
    const [customer,setCustomer]=useState(null)
    useEffect(()=>{
        setCustomer(ls.get('customer'))
    },[])

    console.log(customer)

  

  const depositAmount  = (e) => {
        e.preventDefault();
                this.props.history.push('/deposit')
            
    

}
   const withdrawAmount = (e) => {
        e.preventDefault();
        this.props.history.push('/withdraw')
    }
   const applyLoan = (e) => {
        e.preventDefault();
        this.props.history.push('/loan')

    }
   const moneyTransfer = (e) => {
        e.preventDefault();
        this.props.history.push('/moneyTransfer')
    }


   const trackLoan = (customerAccountNumber) => (e) => {
        e.preventDefault();
        CustomerService.getLoanDetails(customerAccountNumber).then((res) => {
            if (res.data === "") {
                window.alert("Loan Details is not present for this account")

            }
            else {
                this.props.history.push(`/loan-details/${customerAccountNumber}`)
            }
        })

    }
   const transactions = (customerAccountNumber) => (e) => {
        e.preventDefault();
        CustomerService.getTransaction(customerAccountNumber).then((res) => {
            console.log(res.data)
            if (res.data.length===0) {
                alert("No Transactions available..!!")
            }
            else {
                this.props.history.push(`/transactions/${customerAccountNumber}`)

            }
        })

    }

   

        return (
           

            <div>
           
                 <div className = "row">
               
                <div className="col-sm-6 offset-sm-3">
               <div className="card" style={{'background-color': 'rgb(255, 226, 192)'}}>
               <h2 id="heading" className = "text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>Customer Details</h2>
               <img className="card-img-top center" style={{'width':'200px','marginLeft':'190px','marginTop':'20px'}} src={'/user3.jpg'} alt="User" height="200px">
          </img>
               <div className="card-body">
            <h2 className="card-title text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>Welcome {customer?.customerName}</h2>
    <p className="card-text font-weight-bold ">Account Number: {customer?.customerAccountNumber}<br/>
    Balance: {customer?.currentAmount}<br/>
    Phone Number: {customer?.customerPhoneNumber}<br/>
    Email Address: {customer?.customerEmail}<br/>
    Address: {customer?.customerAddress}
    </p>
    <button style={{'marginLeft':'50px'}} className="btn btn-info" onClick={depositAmount}>Deposit</button>
                   <button style={{'marginLeft':'5px'}} className="btn btn-info" onClick={withdrawAmount}>Withdraw</button>
                   <button style={{'marginLeft':'5px'}} className="btn btn-info" onClick={applyLoan}>Apply Loan</button>
                   <button style={{'marginLeft':'5px'}} className="btn btn-info" onClick={moneyTransfer}>Money Transfer</button> <br/><br/>
                   <button style={{'marginLeft':'100px'}} className="btn btn-info" onClick={trackLoan(customer?.customerAccountNumber)}>TrackLoan</button>
                   <button  style={{'marginLeft':'10px'}} className="btn btn-info" onClick={transactions(customer?.customerAccountNumber)}>Transaction History</button>


  </div>
</div>
</div>

               </div> 

            </div>
        )


}

export default GetCustomerComponent;