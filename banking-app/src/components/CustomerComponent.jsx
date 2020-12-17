import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import CustomerService from '../Service/CustomerService';
import { useStateValue } from '../StateProvider';


function CustomerComponent() {
    const [customerName,setCustomerName]=useState("")
    const [customerPhoneNumber,setCustomerPhoneNumber]=useState("")
    const [customerEmail,setCustomerEmail]=useState("")
    const [customerAddress,setCustomerAddress]=useState("")
    const [customerPin,setCustomerPin]=useState("")
    const history=useHistory()
    const [{},dispatch]= useStateValue();
   
   const changeCustomerNameHandler=(event)=>{
       // this.setState({customerName: event.target.value})
       setCustomerName(event.target.value)
        
    }
   const changeCustomerPhoneNumberHandler=(event)=>{
        //this.setState({customerPhoneNumber: event.target.value})
        setCustomerPhoneNumber(event.target.value)
    }
   const changeCustomerEmailHandler=(event)=>{
       // this.setState({customerEmail: event.target.value})
       setCustomerEmail(event.target.value)

    }
   const changeCustomerAddressHandler=(event)=>{
      //  this.setState({customerAddress: event.target.value})
      setCustomerAddress(event.target.value)
    }
   const changeCustomerPinHandler=(event)=>{
       // this.setState({customerPin: event.target.value})
       setCustomerPin(event.target.value)
    }
   const saveCustomer=()=>(e)=>{
          e.preventDefault()
          if(!customerName || !customerPhoneNumber|| !customerEmail || !customerAddress || !customerPin)
          {
            alert("Please fill the required fields")
          }
         
          else
          {
        let customer={customerName:customerName, customerPhoneNumber:customerPhoneNumber,
        customerEmail:customerEmail, customerAddress:customerAddress, customerPin:customerPin}
        CustomerService.createAccount(customer).then((res)=>{
            dispatch(
                {
                    type:actionTypes.SET_USER,
                    customer:res.data,
                }
            )
        })
        history.push("customer-details")
        
          }
    }
   const cancel=()=>(e)=>{
       e.preventDefault()
        history.push('/home')
    }
    
        return (
            <div>
        
                <hr></hr>
                <hr></hr>
                <div className="container" >
                
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ 'background-color': 'rgb(255, 226, 192)','maxHeight':'35rem'}}>
                            <h3 className="text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>
                                Customer Registeration
                            </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name*:</label>
                                        <input placeholder="Enter Name" name="customerName" className="form-control" required
                                        value={customerName} onChange={changeCustomerNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number*:</label>
                                        <input placeholder="Enter Phone Number" name="customerPhoneNumber" className="form-control"
                                        value={customerPhoneNumber} onChange={changeCustomerPhoneNumberHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email*:</label>
                                        <input type="email" placeholder="Enter Email Address" name="customerEmail" className="form-control"
                                        value={customerEmail} onChange={changeCustomerEmailHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Address*:</label>
                                        <input  placeholder="Enter Address" name="customerAddress" className="form-control"
                                        value={customerAddress} onChange={changeCustomerAddressHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Pin*:</label>
                                        <input type="password" placeholder="Enter Pin" name="customerPin" className="form-control"
                                        value={customerPin} onChange={changeCustomerPinHandler}></input>
                                    </div>
                                    <button className="btn btn-primary" onClick={saveCustomer()}>Register</button>
                                    <button className="btn btn-danger" onClick={cancel()} style={{marginLeft:"10px"}}>Cancel</button>
                                    <a style={{marginLeft:"10px"}} href="/signIn">Already Registered?</a>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );

}

export default CustomerComponent;