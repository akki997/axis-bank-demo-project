package com.bank

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class OnlineBankingApplication

fun main(args: Array<String>) {
	runApplication<OnlineBankingApplication>(*args)
}
