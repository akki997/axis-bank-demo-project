import React, { Component, useEffect, useState } from 'react';
import CustomerService from '../Service/CustomerService';
import ls from 'local-storage';

function GetLoanComponent(props)  {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         LoanDetails : [],
    //         customerAccountNumber:'',
    //         loanType:'',
    //         principalAmount:'',
    //         time:'',
    //         interestRate:'',
    //         simpleInterest:'',
    //         installment:'',
            
    //         id: this.props.match.params.id
           
            
    //     }
             const[customerAccountNumber,setCustomeraccountNumber]=useState('');
             const[loanType,setLoanType]=useState('');
             const[principalAmount,setPrincipalAmount]=useState('');
             const[time,setTime]=useState('');
             const[interestRate,setInterestRate]=useState('');
             const[simpleInterest,setSimpleInterest]=useState('');
             const[installment,setInstallment]=useState('');
             const[customer,setCustomer]=useState(null)
             
             
        useEffect(()=>{
            setCustomer(ls.get("customer"))
            CustomerService.getLoanDetails(customer?.customerAccountNumber).then((res)=>{
                setCustomeraccountNumber(res.data.customerAccountNumber);
                setLoanType(res.data.loanType)
                setPrincipalAmount(res.data.principalAmount)
                setTime(res.data.time)
                setInterestRate(res.data.interestRate)
                setSimpleInterest(res.data.simpleInterest)
                setInstallment(res.data.installment)
            })
        },[customer?.customerAccountNumber])

        
    
    // componentDidMount(){
        
    //     CustomerService.getLoanDetails(this.state.id).then((res)=>{
    //         console.log(res.data)
    //         this.setState({customerAccountNumber:res.data.customerAccountNumber})
    //         this.setState({loanType:res.data.loanType})
    //         this.setState({principalAmount:res.data.principalAmount})
    //         this.setState({time:res.data.time})
    //         this.setState({interestRate:res.data.interestRate})
    //         this.setState({installment:res.data.installment})
           
            
            
    //        });
    // }
   
        
           
        return (
            <div>
               <h2 className = "text-center">Loan Details</h2>
               
               <div className = "row">
                   <table className = "table table-striped table-bordered">
                       <thead className="thead-dark">
                           <tr>
                               <th>Account Number</th>
                               <th>Loan Type</th>
                               <th>Loan Amount</th>
                               <th>Time(Year)</th>
                               <th>ROI %</th>
                               <th>Simple Interest</th>
                               <th>EMI(per month)</th>
                              
                           </tr>

                       </thead>
                       <tbody>
                          {
                             
                                  <tr>
                                      <td> {customerAccountNumber}</td>
                                      <td> {loanType}</td>
                                      <td> {principalAmount}</td>
                                      <td> {time}</td>
                                      <td> {interestRate}</td>
                                      <td> {simpleInterest}</td>
                                      <td> {installment}</td>

                                      
                                      

                                  </tr>
                            
                          }
                       </tbody>
                   </table>
               </div>
 
            </div>
        )
    
}

export default GetLoanComponent;