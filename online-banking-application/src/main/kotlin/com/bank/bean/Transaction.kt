package com.bank.bean

import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime


@Document(collection = "transaction")
class Transaction {

    var customerAccountNumber: Int? = 0
    var customerPin: String? = null
    var balance: Int? = 0
    var amount:String?=null
     private lateinit var dateTime:LocalDateTime

    constructor() {}
    constructor(customerAccountNumber: Int?, customerPin: String?, balance: Int?, dateTime: LocalDateTime, amount:String?) : super() {
        this.customerAccountNumber = customerAccountNumber
        this.customerPin = customerPin
        this.balance = balance
        this.amount=amount
        this.dateTime=dateTime


    }
}
