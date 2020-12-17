package com.bank.bean

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document


@Document(collection = "loan")
class Loan {

    @Id
    var customerAccountNumber: Int? = 0
    var loanType: String? = null
    var principalAmount = 0.0
    var interestRate = 0.0
    var time = 0.0
    var simpleInterest = 0.0
    var installment = 0.0

    constructor() {}
    constructor(customerAccountNumber: Int?, loanType: String?, principalAmount: Double, interestRate: Double, time: Double,
                simpleInterest: Double, installment: Double) : super() {
        this.customerAccountNumber = customerAccountNumber
        this.loanType = loanType
        this.principalAmount = principalAmount
        this.interestRate = interestRate
        this.time = time
        this.simpleInterest = simpleInterest
        this.installment = installment
    }
}
