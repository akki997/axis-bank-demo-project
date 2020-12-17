package com.bank.repository

import com.bank.bean.Loan

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface LoanRepository : MongoRepository<Loan?, Int?> {
    @Query("{'_id':?0}")
     fun findByCustomerAccountNumber(customerAccountNumber: Int): Loan
}