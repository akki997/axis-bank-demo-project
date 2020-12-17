import React, {  useState,useEffect } from 'react';
import CustomerService from '../Service/CustomerService';
import ls  from 'local-storage';

function MoneyTransferComponent(props) {


    const[amount, setAmount]=useState('');
    const[accountNumber,setAccountNumber]=useState('');
    const[pin,setPin]=useState('');
    const [customer, setCustomer] = useState(null);
    useEffect(() => {
      setCustomer(ls.get("customer"));
    }, []);

   
   const changeAmountHandler=(event)=>{
        //this.setState({amount:event.target.value})
        setAmount(event.target.value)
    }
   const changeAccountNumberHandler=(event)=>{
        //this.setState({accontNumber:event.target.value})
        setAccountNumber(event.target.value)
    }
    const changePinHandler=(event)=>{
        setPin(event.target.value)
    }
   const transfer=(amount,accontNumber)=>(e)=>{
        e.preventDefault()
        CustomerService.moneyTransfer(customer?.customerAccountNumber,customer?.customerPin,amount,accontNumber).then((res)=>{
            if(res.data==="")
            {
                alert("Invalid credentials or Minimum balance i.e. 500 must be maintained..!!")
            }
            else
            {
                alert("Money Transfered Successfully...!!!")
            }
        })

    }
  
    
       return (
            <div>
              
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ 'background-color': 'rgb(255, 226, 192)','maxHeight':'35rem'}}>
                            <h3 className="text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>
                                 Money Transfer
                            </h3>
                            <div className="card-body">
                                <form>
                                    
                                    <div className="form-group">
                                        <label>Amount*:</label>
                                        <input placeholder="Enter Amount" name="amount" className="form-control"
                                        value={amount} onChange={changeAmountHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Benificiary AccountNumber*:</label>
                                        <input placeholder="Enter Benificiary Account Number " name="accountNumber" className="form-control"
                                        value={accountNumber} onChange={changeAccountNumberHandler}></input>
                                    </div>
                                    
                                    <button className="btn btn-primary" onClick={transfer(amount,accountNumber)}>Transfer</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    
}

export default MoneyTransferComponent;