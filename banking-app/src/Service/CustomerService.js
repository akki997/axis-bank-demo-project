import axios from 'axios'
const Customer_URL = "http://localhost:9090/banking/customer"
class CustomerService{

    createAccount(customer){
        return axios.post(Customer_URL,customer)
    }
    getCustomerById(id)
    {
        return axios.get(Customer_URL+'/'+id)
    }
    depositAmount(customerAccountNumber,customerPin,amount)
    {
        return axios.put(Customer_URL+'/'+customerAccountNumber+'/'+customerPin+'/'+amount)
    }
    withdrawAmount(customerAccountNumber,customerPin,amount)
    {
        return axios.put(Customer_URL+'/withdraw/'+customerAccountNumber+'/'+customerPin+'/'+amount)
    }
    getLoan(loan){
        return axios.post(Customer_URL+'/loan',loan)
    }
    getLoanDetails(customerAccountNumber)
    {
        return axios.get(Customer_URL+'/loan/'+customerAccountNumber)
    }
    moneyTransfer(customerAccountNumber,customerPin,amount,accountNumber)
    {
        return axios.put(Customer_URL+'/moneyTransfer/'+customerAccountNumber+'/'+customerPin+'/'+amount+'/'+accountNumber)
    }

    getCustomer(customerAccountNumber,customerPin)
    {
        return axios.get(Customer_URL+'/'+customerAccountNumber+'/'+customerPin)
    }

    getTransaction(customerAccountNumber)
    {
       return axios.get(Customer_URL+'/transaction/'+customerAccountNumber)
    }
}
export default new CustomerService()
