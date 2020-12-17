package com.bank.repository

import com.bank.bean.AccountNumber
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface AccountNumberRepository : MongoRepository<AccountNumber?, String?> {
    @Query("{\$and:[{'_id':?0},{'customer.customerPin':?1}]}")
    fun getAccountDetails(customerAccountNumber: String?, customerPin: String?): AccountNumber?

    @Query("{'_id':?0},{'_id':1,'currentAmount':1}")
    fun checkBalance(customerAccountNumber: String?): AccountNumber?


    @Query("{'_id':?0}")
     fun findByAccountNumber(customerAccountNumber: String): AccountNumber?

    fun findByCustomerAccountNumber(accountNumber: String?): AccountNumber?
}