import React, {  useState,useEffect } from 'react';
import CustomerService from '../Service/CustomerService';
import ls from 'local-storage';
import firebase from '../firebase';

function DepositComponent()  {
              
             
              const[amount, setAmount]=useState('');
            
              const [customer, setCustomer] = useState(null);
              useEffect(() => {
                setCustomer(ls.get("customer"));
              }, []);
     
 
   function changeAmountHandler(event){
        //this.setState({amount:event.target.value})
        setAmount(event.target.value)
    }
   
    const onSubmission=()=>{

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              CustomerService.depositAmount(customer?.customerAccountNumber,customer?.customerPin,amount).then((res)=>{
                alert("ThankyYou for Depositing Money")
                
            })
            },
            'expired-callback': function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
              
            }
          });
    }
    const deposit=(e)=>{
        e.preventDefault()
        if(amount==="")
        {
            alert("PLease Enter required fields")
        }
        else
        {
    onSubmission()
   // document.getElementById("myForm").reset();
        var phoneNumber = '+919999512360';
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;

              var code = window.prompt("Enter OTP")
confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
  var user = result.user;
   console.log("user signed in")
  
   
  // ...
}).catch(function (error) {
  // User couldn't sign in (bad verification code?)
  alert("Please Enter Valid OTP")
  // ...
});
            }).catch(function (error) {
              // Error; SMS not sent
              // ...
            });
        }
    }

   
  
   
       return (
           
            <div id="recaptcha">
                <div className="container">
                    <div className="row">
                       
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ 'background-color': 'rgb(255, 226, 192)','maxHeight':'35rem'}}>
                            <h3 className="text-center" style={{ 'color': 'rgb(173, 62, 55)'}}>
                                Deposit Amount
                            </h3>
                            
                            <div className="card-body">
                                <form id="myForm">
                                   <div id="recaptcha-container"></div>
                                    <div className="form-group">
                                        <label>Amount:</label>
                                        <input placeholder="Enter Amount" name="amount" className="form-control"
                                        value={amount} onChange={changeAmountHandler}></input>
                                    </div>
                                   
                                      
                                    
                                <button className="btn btn-primary" onClick={deposit}>Deposit</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
  
}

export default DepositComponent;