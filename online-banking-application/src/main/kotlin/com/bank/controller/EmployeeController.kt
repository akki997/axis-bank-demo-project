package com.bank.controller

import com.bank.bean.AccountNumber
import com.bank.bean.Employee
import com.bank.bean.Loan
import com.bank.service.EmployeeService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException


@RestController
class EmployeeController {
    @Autowired
    var employeeService: EmployeeService? = null

    @PostMapping("/employee")
    fun addEmployee(@RequestBody employee:Employee): Employee? {
        return employeeService?.addEmployee(employee)
    }

    @GetMapping("/employee/customerDetail/{customerAccountNumber}")
    fun getCustomer(@PathVariable customerAccountNumber: String): AccountNumber? {
        var accountNumber : AccountNumber?= AccountNumber()
       accountNumber=  employeeService!!.getCustomer(customerAccountNumber)
        if(accountNumber!=null)
            return accountNumber
        else {
            throw ResponseStatusException(
                    HttpStatus.NOT_FOUND, " Account does not existss....!!!")
        }
    }

    @get:GetMapping("/employee/customers")
    val allCustomers: List<Any?>
        get() = employeeService!!.getAllCustomers()

    @GetMapping("/employee/customerLoan/{customerAccountNumber}")
    fun getLoanDetails(@PathVariable customerAccountNumber: Int): Loan {
        var loan = Loan()
        loan= employeeService!!.getLoanDetails(customerAccountNumber)
        if(loan!=null)
            return loan
        else {
            throw ResponseStatusException(
                    HttpStatus.NOT_FOUND, " Loan for this Account does not existss....!!!")
        }
    }

    @GetMapping("employee/{employeeId}")
    fun getEmployee(@PathVariable employeeId: String): Employee? {
        var employee : Employee? = Employee()
        employee =  employeeService!!.getEmployee(employeeId)
        if(employee!=null)
            return employee
        else {
            throw ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Employee does not existss....!!!")
        }
    }
}
