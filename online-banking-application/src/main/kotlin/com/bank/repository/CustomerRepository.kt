package com.bank.repository

import com.bank.bean.Customer

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface CustomerRepository : MongoRepository<Customer?, Int?> {
     fun findByCustomerPin(customerPin: String?): Customer?

    @Query("{\$and:[{'_id':?0},{'customerPin':?1}]}")
     fun getCustomerAccountDetails(customerAccountNumber: Int?, customerPin: String?): Customer?

}