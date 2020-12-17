import React, { Component, useEffect, useState } from 'react';
import CustomerService from '../Service/CustomerService';
import ls from 'local-storage';
import { CodeSharp } from '@material-ui/icons';

function TransactionComponent()  {

    const [customer,setCustomer]=useState(null)
    const [transactions,setTransaction]=useState([])
    useEffect(()=>{
        setCustomer(ls.get("customer"))
        console.log(customer?.customerAccountNumber)
        CustomerService.getTransaction(customer?.customerAccountNumber).then((res)=>{
            setTransaction(res.data)
        })
    },[customer?.customerAccountNumber])
   
   
   
        return (
            

            <div className="container">
               <h2 className = "text-center">Transaction History</h2>
               <div className = "row">
                   <table className = "table table-striped table-bordered">
                       <thead className="thead-dark">
                           <tr>
                               <th>Account Number</th>
                               <th>Balance</th>
                               <th>Transaction</th>
                               <th>Time</th>
                              
                           </tr>

                       </thead>
                       <tbody>
                          {
                              transactions.map(
                                  transacation =>
                                  
                                  <tr key = {transacation.dateTime}>
                                      <td> {transacation.customerAccountNumber}</td>
                                      <td> {transacation.balance}</td>
                                      <td> {transacation.amount}</td>
                                      <td> {transacation.dateTime}</td>
                                     
                                      
                                    </tr>
                
                                     
                              )
                          }
                          
                          
                          
                       </tbody>
                   </table>
               </div>
            </div>
        )
    
}

export default TransactionComponent;