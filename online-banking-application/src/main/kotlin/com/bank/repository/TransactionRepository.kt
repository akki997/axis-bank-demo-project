package com.bank.repository

import com.bank.bean.Transaction

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface TransactionRepository : MongoRepository<Transaction?, Int?> {
    @Query("{'customerAccountNumber':?0}")
    fun getTransactionHistory(customerAccountNumber: Int?): List<Transaction?>?
}
