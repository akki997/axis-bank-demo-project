package com.bank.bean

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "employee")
class Employee{

     @Id
     var employeeId: String? = null
     var employeeName: String? = null
     var employeePhoneNumber: String? = null
     var employeeDesignation: String? = null
    constructor(){}
    constructor(employeeId: String?,employeeName:String?,employeePhoneNumber:String?,employeeDesignation:String?):super()
    {
        this.employeeId=employeeId
        this.employeeName=employeeName;
        this.employeePhoneNumber=employeePhoneNumber
        this.employeeDesignation=employeeDesignation
    }
}
