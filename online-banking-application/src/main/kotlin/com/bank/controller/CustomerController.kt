package com.bank.controller

import com.bank.bean.Customer
import com.bank.bean.Loan
import com.bank.bean.Transaction
import com.bank.service.CustomerService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime


@RestController
@RequestMapping("/banking")
@CrossOrigin("http://localhost:3000")

class CustomerController {
    //var counter:Int=3
    private val logger: Logger = LoggerFactory.getLogger(CustomerController::class.java)
    @Autowired
    var customerService: CustomerService? = null

    @PostMapping("/customer")
    fun addCustomer(@RequestBody customer: Customer): Customer {

        customer.customerAccountNumber=1600000990+Integer.parseInt(customer.customerPhoneNumber!!.substring(5,10))
        return customerService!!.addCustomer(customer)
    }


    @GetMapping("/customer/{customerPin}")
    fun getAccountDetails(@PathVariable customerPin: String?): Customer? {

        return customerService!!.getCustomerDetails(customerPin)
    }

    @GetMapping("/customer/{customerAccountNumber}/{customerPin}")
     fun getCustomerAccountDetails(@PathVariable customerAccountNumber:Int?,@PathVariable customerPin: String?): Customer? {
        return customerService!!.getCustomerAccountDetails(customerAccountNumber,customerPin)
    }

    @PutMapping("/customer/{customerAccountNumber}/{customerPin}/{amount}")
    fun depositAmount(@PathVariable customerAccountNumber: Int?, @PathVariable customerPin: String?, @PathVariable amount: Int): Customer?{
        val accountNumber:Customer?= customerService!!.getCustomerAccountDetails(customerAccountNumber,customerPin)
        if(accountNumber!=null) {
            val updatedAmount: Int? = accountNumber.currentAmount!! +amount;
            accountNumber.currentAmount = updatedAmount
            val transaction = Transaction(customerAccountNumber, customerPin, updatedAmount, LocalDateTime.now(), "+$amount")
            customerService!!.updateTransactionHistory(transaction)
            return customerService!!.addCustomer(accountNumber)
        }
       return null
    }

    @PutMapping("/customer/withdraw/{customerAccountNumber}/{customerPin}/{amount}")
    fun withdrawAmount(@PathVariable customerAccountNumber: Int?, @PathVariable customerPin: String?, @PathVariable amount: Int): Customer? {
        val accountNumber: Customer? = customerService!!.getCustomerAccountDetails(customerAccountNumber,customerPin)
        if(accountNumber!=null) {
            val balance: Int = accountNumber.currentAmount!! - amount
            if (balance >= 500) {
                accountNumber.currentAmount = balance
                val transaction = Transaction(customerAccountNumber, customerPin, balance, LocalDateTime.now(), "-$amount")
                customerService!!.updateTransactionHistory(transaction)
            } else {
                return null;
            }
            return customerService!!.addCustomer(accountNumber)
        }
     return null;
    }

    @PostMapping("/customer/loan")
    fun getLoan(@RequestBody loan:Loan): Loan? {
        return customerService!!.getLoan(loan.customerAccountNumber,loan.loanType,loan.principalAmount,loan.time);
    }

    @GetMapping("/customer/loan/{customerAccountNumber}")
    fun getLoanDetails(@PathVariable customerAccountNumber: Int): Loan? {
        return customerService!!.getLoanDetails(customerAccountNumber)
    }

   @PutMapping("/customer/moneyTransfer/{customerAccountNumber}/{customerPin}/{amount}/{acountNumber}")
    fun moneyTransfer(@PathVariable customerAccountNumber: Int?, @PathVariable customerPin: String?, @PathVariable amount: Int, @PathVariable acountNumber: Int): Customer? {
        val accountNumber: Customer? = customerService!!.getCustomerAccountDetails(customerAccountNumber, customerPin)
        if (accountNumber != null) {
            val balance: Int = accountNumber!!.currentAmount!! - amount
            if (balance >= 500) {
                accountNumber!!.currentAmount = balance
                val transaction = Transaction(customerAccountNumber, customerPin, balance, LocalDateTime.now(), "-$amount")
                customerService!!.updateTransactionHistory(transaction)
                val acNumber: Customer? = customerService!!.findByCustomerAccountNumber(acountNumber)
                val updatedAmount: Int = acNumber!!.currentAmount!! + amount
                acNumber.currentAmount = updatedAmount
                customerService!!.addCustomer(acNumber)
            } else {
                return null
           }
            return customerService!!.addCustomer(accountNumber)
        } else {
            return null
        }
    }

    @GetMapping("/customer/transaction/{customerAccountNumber}")
    fun getTransaction(@PathVariable customerAccountNumber: Int?): List<Transaction?>? {

        return customerService!!.getTransactionHistory(customerAccountNumber)
    }

}