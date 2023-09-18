import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC - 01 : Validate empty company name alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertCompanynameIcon()
  await companyPage.verifyEmptyComapnyNameAlertText()
  
})
test("TC - 02 : Validate company contact person empty address empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertAddressIcon()
  await companyPage.verifyEmptyAddressAlertText()
  
})
test("TC - 03 : Validate company contact person First name empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertFirstNameIcon()
  await companyPage.verifyEmptyFirstNameAlertText()
  
})
test("TC - 04 : Validate company contact person Last name  empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertLastnameIcon()
  await companyPage.verifyEmptyLastNameAlertText()
  
})
test("TC - 05 : Validate company contact person email empty alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.clickEmptyAlertEmailIcon()
  await companyPage.verifyEmailAlertText()
  
})
test("TC - 06 : Validate invalid email address format alert message.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.clickAddCompanySubmittBtn()
  await companyPage.InputInvalidEmail()
  await companyPage.clickEmptyAlertEmailIcon()
  await companyPage.verifyInvalidEmailFormatText()
  
})
test("TC - 07 : Validate company name successfully added.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickAddCompany()
  await companyPage.InputCompanyName()
  await companyPage.SelectCompanyType_Fintech()
  await companyPage.upload_Company_ProfileImages()
  await companyPage.upload_Company_BannerImages()
  await companyPage.Select_Automation_broker()
  await companyPage.InputCompanyContactPerson_FirstName()
  await companyPage.InputCompanyContactPerson_LastName()
  await companyPage.InputCompanyContactPerson_Email()
  await companyPage.InputCompanyContactPerson_PhoneNumber_BD()
  await companyPage.inputCompanyAddress()
  await companyPage.clickAddCompanySubmittBtn()
  
})
test("TC - 08 : Validate Company name search field is working.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.CompanyNameSearch_By_FullName()
  
})
test("TC - 09 : Validate Compnay name status wise filtering working.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.StatuswiseFiler_Pending()
  await companyPage.StatuswiseFiler_Active()
  await companyPage.StatuswiseFiler_Inactive()
  await companyPage.StatuswiseFiler_Inprogress()
  
})
test("TC - 10 : Validate company name information column wise sorting is working.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.ColumnWise_Soring_CompanyName()
  await companyPage.ColumnWise_Soring_CompanyName_Address()
  await companyPage.ColumnWise_Soring_Company_TotalEmployee()
  await companyPage.ColumnWise_Soring_Company_Status()
  
})
test("TC - 11 : Validate company activate link successfully resend.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickCompany_NeoGen_ActionThreeDot()
  await companyPage.clickResendLink()
  await companyPage.verifyResendLinkSuccessfully()
  
  
})
test("TC - 12 : Validate company user successfully deactivated.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickCompany_PostPay_ActionThreeDot_ForDeActivated()
  await companyPage.clickDeactivatedBtn()
  await companyPage.verifyCompanyDeActivatedSuccessfully()

  
  
})
test("TC - 13 : Validate company user successfully activated.",async({page,loginPage,companyPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validstandardusername, data.commonpassword)
  await companyPage.clickClientsPage()
  await companyPage.clickCompany()
  await companyPage.clickCompany_PostPay_ActionThreeDot_ForActivated()
  await companyPage.clickActivatedBtn()
  await companyPage.verifyCompanyActivatedSuccessfully()
  
  
})