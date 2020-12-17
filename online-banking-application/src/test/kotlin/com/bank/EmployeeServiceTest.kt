
package com.bank

import com.bank.bean.AccountNumber
import com.bank.bean.Customer
import com.bank.bean.Employee
import com.bank.bean.Loan
import com.bank.repository.*
import com.bank.service.CustomerService
import com.bank.service.EmployeeService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.mockito.MockitoAnnotations

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import java.util.*

@SpringBootTest
class EmployeeServiceTest {
    @BeforeEach
    fun init()
    {
        MockitoAnnotations.initMocks(this)
    }

    @MockBean
    private val  accountNumberRepository: AccountNumberRepository?=null
    @MockBean
    private val loanRepository: LoanRepository?=null
    @MockBean
    private val employeeRepository:EmployeeRepository?=null
    @Autowired
    private val employeeService:EmployeeService?=null

    @Test
    fun addEmployeeTest(){
        var employee= Employee("E01","Akshay","9999512360","Manager")
        Mockito.`when`(employeeRepository!!.save(employee)).thenReturn(employee)
        assertEquals(employee,employeeService!!.addEmployee(employee))
    }
    @Test
    fun getCustomerTest(){
        var customer= Customer("Akshay","9999512350","kumar@gmail.com","New Delhi","1234")
        var accountNumber:AccountNumber? = AccountNumber("160000012360",500,customer)
        Mockito.`when`(accountNumberRepository!!.findByAccountNumber("160000012360")).thenReturn(accountNumber)
        assertEquals(accountNumber,employeeService!!.getCustomer("160000012360"))

    }
    @Test
    fun getAllCustomerTest() {
        var customer = Customer("Akshay", "9999512350", "kumar@gmail.com", "New Delhi", "1234")
        var accountNumber: AccountNumber? = AccountNumber("160000012360", 500, customer)

        var customer1 = Customer("Akshay", "9999512350", "kumar@gmail.com", "New Delhi", "1234")
        var accountNumber2: AccountNumber? = AccountNumber("160000012360", 500, customer)

        var myList: MutableList<AccountNumber?> = mutableListOf()
        myList.add(accountNumber)
        myList.add(accountNumber2)
        Mockito.`when`(accountNumberRepository!!.findAll()).thenReturn(myList)
        assertEquals(myList.size, employeeService!!.getAllCustomers().size)
    }
        @Test
        fun getLoanDetailsTest()
        {
            var loan = Loan(1600012360,"Education Loan",200000.0,10.0,5.0,100000.0,5000.0)
            Mockito.`when`(loanRepository!!.findByCustomerAccountNumber(1600012360)).thenReturn(loan)
            assertEquals(loan,employeeService!!.getLoanDetails(1600012360))
        }
       @Test
        fun getEmployeeTest(){
            var employee= Employee("E01","Akshay","9999512360","Manager")
             Mockito.`when`(employeeRepository!!.findByEmployeeId("E01")).thenReturn(employee)
            assertEquals(employee,employeeService!!.getEmployee("E01"))
        }



}
