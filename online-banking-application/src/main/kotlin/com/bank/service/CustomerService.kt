package com.bank.service

import com.bank.bean.AccountNumber
import com.bank.bean.Customer
import com.bank.bean.Loan
import com.bank.bean.Transaction
import com.bank.repository.AccountNumberRepository
import com.bank.repository.CustomerRepository
import com.bank.repository.LoanRepository
import com.bank.repository.TransactionRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class CustomerService {
    @Autowired
    var customerRepository: CustomerRepository? = null

    @Autowired
    var accountNumberRepository: AccountNumberRepository? = null

    @Autowired
    var transactionRepository: TransactionRepository? = null

    @Autowired
    var loanRepository: LoanRepository? = null


    fun addCustomer(customer: Customer): Customer {

        return customerRepository!!.save(customer)
    }

    fun accountDetails(accountNumber: AccountNumber): AccountNumber? {

        return accountNumberRepository!!.save(accountNumber)
    }

    fun getAccountDetails(customerAccountNumber: String?, customerPin: String?): AccountNumber? {

        return accountNumberRepository!!.getAccountDetails(customerAccountNumber, customerPin)

    }

    fun checkBalance(customerAccountNumber: String?): AccountNumber? {

        return accountNumberRepository!!.checkBalance(customerAccountNumber)
    }

    fun updateTransactionHistory(transaction: Transaction) {

        transactionRepository!!.save(transaction)
    }

    fun getTransactionHistory(customerAccountNumber: Int?): List<Transaction?>? {

        return transactionRepository!!.getTransactionHistory(customerAccountNumber)
    }

    fun getLoan(customerAccountNumber: Int?, loanType: String?, principalAmount: Double, time: Double): Loan {

        val loan = Loan()
        loan.customerAccountNumber = customerAccountNumber
        loan.loanType = loanType
        loan.principalAmount = principalAmount
        loan.time = time
        if (loanType.equals("Housing Loan", ignoreCase = true)) {
            loan.interestRate = 8.0
            val simpleInterest = principalAmount * 8 * time / 100
            loan.simpleInterest = simpleInterest
            val installment = (principalAmount + simpleInterest) / time
            loan.installment = installment / 12
        } else if (loanType.equals("Education Loan", ignoreCase = true)) {
            loan.interestRate = 10.0
            val simpleInterest = principalAmount * 10 * time / 100
            loan.simpleInterest = simpleInterest
            val installment = (principalAmount + simpleInterest) / time
            loan.installment = installment / 12
        } else if (loanType.equals("Vehicle Loan", ignoreCase = true)) {
            loan.interestRate = 6.0
            val simpleInterest = principalAmount * 6 * time / 100
            loan.simpleInterest = simpleInterest
            val installment = (principalAmount + simpleInterest) / time
            loan.installment = installment / 12
        }
        return loanRepository!!.save(loan)
    }

    fun getLoanDetails(customerAccountNumber: Int):Loan? {

        return loanRepository!!.findById(customerAccountNumber).orElse(null)
    }

    fun findByCustomerAccountNumber(accountNumber:Int): Customer? {

        return customerRepository!!.findById(accountNumber).orElse(null)
    }

    fun getCustomerDetails(customerPin:String?): Customer? {
       return customerRepository!!.findByCustomerPin(customerPin)
    }

    fun getCustomerAccountDetails(customerAccountNumber: Int?, customerPin: String?): Customer? {
             return customerRepository!!.getCustomerAccountDetails(customerAccountNumber,customerPin)
    }
}