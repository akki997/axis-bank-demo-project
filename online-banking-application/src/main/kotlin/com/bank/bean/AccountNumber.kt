package com.bank.bean

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document


@Document(collection = "accountDetails")
class AccountNumber {
    @Id
    var customerAccountNumber: String? = null
    var currentAmount: Long = 0
    var customer: Customer? = null

    constructor() {}
    constructor(customerAccountNumber: String?, currentAmount: Long, customer: Customer?) : super() {
        this.customerAccountNumber = customerAccountNumber
        this.currentAmount = currentAmount
        this.customer = customer
    }
}
