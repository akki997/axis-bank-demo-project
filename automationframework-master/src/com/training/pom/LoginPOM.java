package com.training.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPOM {
	private WebDriver driver; 
	
	public LoginPOM(WebDriver driver) {
		this.driver = driver; 
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[@id='about']")
	private WebElement aboutUS; 
	
	@FindBy(xpath="//a[@id='contactus']")
	private WebElement contactUs;
	
	@FindBy(xpath="//a[@id='sign']")
	private WebElement register; 
	
	@FindBy(xpath="//input[@name='customerName']")
	private WebElement customerName;
	
	@FindBy(xpath="//input[@name='customerPhoneNumber']")
	private WebElement customerPhoneNumber;
	
	@FindBy(xpath="//input[@name='customerEmail']")
	private WebElement customerEmail;
	
	@FindBy(xpath="//input[@name='customerAddress']")
	private WebElement customerAddress;
	
	@FindBy(xpath="//input[@name='customerPin']")
	private WebElement customerPin;
	
	@FindBy(xpath="//input[@value='2']")
	private WebElement male;
	
	@FindBy(xpath="//button[@name='websubmit']")
	private WebElement signUp;
	
	public void aboutUs() 
	{
		this.aboutUS.click();
		
	}
	public void contactUs()
	{
		this.contactUs.click();
		
	}
	public void register() {
		this.register.click();
		
	}
	
	public void customerName(String customerName)
	{
		this.customerName.clear();
		this.customerName.sendKeys(customerName);
	}
	
	public void customerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber.clear();
		this.customerPhoneNumber.sendKeys(customerPhoneNumber);
	}
	
	
	public void customerEmail(String customerEmail)
	{
		this.customerEmail.clear();
		this.customerEmail.sendKeys(customerEmail);
	}
	

	public void customerAddress(String customerAddress)
	{
		this.customerAddress.clear();
		this.customerAddress.sendKeys(customerAddress);
	}
	

	public void customerPin(String customerPin)
	{
		this.customerPin.clear();
		this.customerPin.sendKeys(customerPin);
	}
	
	public void sendGender()
	{
		this.male.click();
	}
	public void clickSignUp() {
		this.signUp.click(); 
	}
}
