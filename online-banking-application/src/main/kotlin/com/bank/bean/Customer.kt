package com.bank.bean

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.SequenceGenerator


@Document(collection = "customerDetails")
class Customer {

    @Id
    var customerAccountNumber:Int?=0
    var currentAmount:Int?=500
    var customerName: String? = null
    var customerPhoneNumber: String? = null
    var customerEmail: String? = null
    var customerAddress: String? = null
    var customerPin: String? = null

    constructor() {}
    constructor(customerAccountNumber:Int ?,currentAmount:Int?,customerName: String?, customerPhoneNumber: String?, customerEmail: String?, customerAddress: String?,
                customerPin: String?) : super() {
        this.customerAccountNumber=customerAccountNumber;
        this.currentAmount=currentAmount
        this.customerName = customerName
        this.customerPhoneNumber = customerPhoneNumber
        this.customerEmail = customerEmail
        this.customerAddress = customerAddress
        this.customerPin = customerPin
    }
    constructor(customerName: String?, customerPhoneNumber: String?, customerEmail: String?, customerAddress: String?,
                customerPin: String?) : super() {
        this.customerName = customerName
        this.customerPhoneNumber = customerPhoneNumber
        this.customerEmail = customerEmail
        this.customerAddress = customerAddress
        this.customerPin = customerPin
    }
}
