
package com.bank

import com.bank.bean.AccountNumber
import com.bank.bean.Customer
import com.bank.bean.Loan
import com.bank.bean.Transaction
import com.bank.repository.AccountNumberRepository
import com.bank.repository.CustomerRepository
import com.bank.repository.LoanRepository
import com.bank.repository.TransactionRepository
import com.bank.service.CustomerService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.mockito.MockitoAnnotations
import org.mockito.internal.verification.VerificationModeFactory.atLeastOnce
import org.mockito.internal.verification.VerificationModeFactory.atMostOnce
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import java.time.LocalDateTime

@SpringBootTest
class CustomerServiceTest {
    @BeforeEach
    fun init() {
        MockitoAnnotations.initMocks(this)
    }

    @Autowired
    private val customerService: CustomerService? = null

    @MockBean
    private val accountNumberRepository: AccountNumberRepository? = null

    @MockBean
    private val customerRepository: CustomerRepository? = null

    @MockBean
    private val transactionRepository: TransactionRepository? = null

    @MockBean
    private val loanRepository: LoanRepository? = null


    @Test
    fun accountDetailsTest() {
        var customer = Customer("Akshay", "9999512350", "kumar@gmail.com", "New Delhi", "1234")
        var accountNumber = AccountNumber("160000012360", 500, customer)
        Mockito.`when`(accountNumberRepository!!.save(accountNumber)).thenReturn(accountNumber)
        assertEquals(accountNumber, customerService!!.accountDetails(accountNumber))
    }

    @Test
    fun getAccountDetailsTest() {
        var customer = Customer("Akshay", "9999512350", "kumar@gmail.com", "New Delhi", "1234")
        var accountNumber = AccountNumber("160000012360", 500, customer)
        var customerAccountNumber: String? = "160000012360"
        var customerPin: String? = "1234"
        Mockito.`when`(accountNumberRepository!!.getAccountDetails(customerAccountNumber, customerPin)).thenReturn(accountNumber)
        assertEquals(accountNumber, customerService!!.getAccountDetails(customerAccountNumber, customerPin))

    }

    @Test
    fun checkBalanceTest() {
        var customer = Customer("Akshay", "9999512350", "kumar@gmail.com", "New Delhi", "1234")
        var accountNumber = AccountNumber("160000012360", 500, customer)
        var customerAccountNumber: String? = "160000012360"
        Mockito.`when`(accountNumberRepository!!.checkBalance(customerAccountNumber)).thenReturn(accountNumber)
        assertEquals(accountNumber, customerService!!.checkBalance(customerAccountNumber))
    }


    @Test
    fun updateTransactionHistoryTest() {
        var transaction = Transaction(1600012360, "1234", 500, LocalDateTime.now(), "+500")
        customerService!!.updateTransactionHistory(transaction)
        Mockito.verify(transactionRepository, atMostOnce())!!.save(transaction);
    }

    @Test
    fun getTransactionHistoryTest() {
        var transaction = Transaction(1600012360, "1234", 500, LocalDateTime.now(), "+500")
        var transaction2 = Transaction(1600012360, "1234", 1000, LocalDateTime.now(), "+500")
        var transaction3 = Transaction(1600012360, "1234", 1500, LocalDateTime.now(), "+500")
        var mylist: MutableList<Transaction> = mutableListOf()
        mylist.add(transaction)
        mylist.add(transaction2)
        mylist.add(transaction3)
        var customerAccountNumber: Int? = 1600012360
        Mockito.`when`(transactionRepository!!.getTransactionHistory(customerAccountNumber)).thenReturn(mylist)
        assertEquals(mylist.size, customerService!!.getTransactionHistory(customerAccountNumber)?.size)

    }

//    @Test
//    fun getLoanTest() {
//        val loan = Loan()
//        customerService!!.getLoan(1600012360, "Education Loan", 20000.0, 5.0)
//        Mockito.verify(loanRepository, atLeastOnce())!!.save(loan)
//    }
}/*

    @Test
    fun findByCustomerAccountNumberTest()
    {
        var customer= Customer("Akshay","9999512350","kumar@gmail.com","New Delhi","1234")
        var accountNumber=AccountNumber("160000012360",500,customer)
        Mockito.`when`(accountNumberRepository!!.findByCustomerAccountNumber("160000012360")).thenReturn(accountNumber)
        assertEquals(accountNumber,customerService!!.findByCustomerAccountNumber("160000012360"))
    }

}

*/
