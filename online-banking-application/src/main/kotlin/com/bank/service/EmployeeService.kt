package com.bank.service

import com.bank.bean.AccountNumber
import com.bank.bean.Employee
import com.bank.bean.Loan
import com.bank.repository.AccountNumberRepository
import com.bank.repository.EmployeeRepository
import com.bank.repository.LoanRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class EmployeeService {
    @Autowired
    var employeeRepository: EmployeeRepository? = null

    @Autowired
    var accountRepository: AccountNumberRepository? = null

    @Autowired
    var loanRepository: LoanRepository? = null

    fun addEmployee(employee: Employee): Employee? {

        return employeeRepository!!.save(employee)
    }

    fun getCustomer(customerAccountNumber: String): AccountNumber? {

        return accountRepository!!.findByAccountNumber(customerAccountNumber)
    }


    fun getAllCustomers(): MutableList<AccountNumber?> {
        return accountRepository!!.findAll();
    }

    fun getLoanDetails(customerAccountNumber: Int): Loan {

        return loanRepository!!.findByCustomerAccountNumber(customerAccountNumber)
    }

    fun getEmployee(employeeId: String): Employee? {

        return employeeRepository!!.findByEmployeeId(employeeId)
    }
}
