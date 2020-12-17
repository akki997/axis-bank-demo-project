package com.bank.repository

import com.bank.bean.Employee

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface EmployeeRepository : MongoRepository<Employee?, String?> {



     fun findByEmployeeId(employeeId: String?): Employee
}
