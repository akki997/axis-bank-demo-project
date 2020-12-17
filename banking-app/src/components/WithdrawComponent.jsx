import React, {  useState,useEffect } from 'react';
import ls from 'local-storage';
import CustomerService from '../Service/CustomerService';

function WithdrawComponent(props) {


    const[amount, setAmount]=useState('');
    const[pin, setPin]=useState('');
    const [customer, setCustomer] = useState(null);
    useEffect(() => {
      setCustomer(ls.get("customer"));
    }, []);
    const changeAmountHandler=(event)=>{
         //this.setState({amount:event.target.value})
         setAmount(event.target.value)
     }
     const changePinHandler=(event)=>{
         setPin(event.target.value)
     }
   const withdraw=(amount)=>(e)=>{
        e.preventDefault()
       CustomerService.withdrawAmount(customer?.customerAccountNumber,customer?.customerPin,amount).then((res)=>{
           if(res.data==="")
           {
               alert("Invalid credentials or Minimum balance i.e. 500 must be maintained..!!")
           }
           else{
               alert("ThanYou.. Money Successfully withdrawl..!!")
           }
       })

    }
  
    
       return (
            <div>
                
              
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ 'background-color': 'rgb(255, 226, 192)','maxHeight':'35rem'}}>
                            <h3 className="text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>
                                Withdraw Amount
                            </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Amount*:</label>
                                        <input placeholder="Enter Amount" name="amount" className="form-control"
                                        value={amount} onChange={changeAmountHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Secure Pin*:</label>
                                        <input placeholder="Enter 4 digit otp send to your phone number" name="amount" className="form-control"
                                        value={pin} onChange={changePinHandler}></input>
                                    </div>
                                    
                                    <button className="btn btn-primary" onClick={withdraw(amount)}>Debit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    
}

export default WithdrawComponent;