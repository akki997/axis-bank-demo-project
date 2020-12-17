import React, { Component,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import CustomerService from '../Service/CustomerService';
import { useStateValue } from '../StateProvider';
function SignInCompoment()  {
   const [customerAccountNumber,setCustomerAccountNumber]=useState('')
   const [customerPin,setCustomerPin]=useState('')
   const [{},dispatch]=useStateValue()
   const history= useHistory();

   const changeCustomerAccountNumberHandler=(event)=>{
       // this.setState({customerAccountNumber: event.target.value})
       setCustomerAccountNumber(event.target.value)
    }
  
   const changeCustomerPinHandler=(event)=>{
        //this.setState({customerPin: event.target.value})
        setCustomerPin(event.target.value)
    }
   const SignIn=(customerAccountNumber,customerPin)=>(e)=>{
          e.preventDefault()
          CustomerService.getCustomer(customerAccountNumber,customerPin).then((res)=>{
             console.log("hello "+ res.data)
              if(res.data==="")
              {
                  alert("Invalid Credentials..!!")
              }
              else{
                  dispatch({
                    type:actionTypes.SET_USER,
                    customer:res.data,
                  })
                  history.push('/customer-details')
              }
          })
         
    }
    const cancel=(e)=>{
        e.preventDefault()
history.push('/home')

    }

        return (
            <div>
    
                <div className="container" style={{marginTop:"200px"}}>
                
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ 'backgroundColor': 'rgb(255, 226, 192)','maxHeight':'35rem'}}>
                            <h3 className="text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>
                                Sign In
                            </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Account Number:</label>
                                        <input placeholder="Enter Name" name="customerAccountNumber" className="form-control"
                                        value={customerAccountNumber} onChange={changeCustomerAccountNumberHandler}></input>
                                    </div>
                                
                                    <div className="form-group">
                                        <label>Pin:</label>
                                        <input type="password" placeholder="Enter Pin" name="customerPin"  className="form-control"
                                        value={customerPin} onChange={changeCustomerPinHandler}></input>
                                    </div>
                                    <button className="btn btn-primary" onClick={SignIn(customerAccountNumber,customerPin)}>Sign In</button>
                                    <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
                                   
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );

}

export default SignInCompoment;