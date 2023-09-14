import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import ContractorPage from '@pages/Contractor.page';
test("TC -01 : Validate contractor empty email message.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.clickAddContactor()
    await ContactorPage.clickAddNewContractor()
    await ContactorPage.clickEmailAlertIcon()
    await ContactorPage.verifyEmptyEmailText()
})
test("TC -02 : Validate add new contarctor invalid email format message.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.clickAddContactor()
    await ContactorPage.inputInvalidContractorEmail()
    await ContactorPage.clickAddNewContractor()
    //await ContactorPage.VerifyInvalidEmailText()
})
test("TC -03 : Validate add new contractor is successfully added.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.clickAddContactor()
    await ContactorPage.InputRendomEmail()
    await ContactorPage.clickAddNewContractor()
})
test("TC -04 : Validate contractor search field is working.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.SearchContarctor_By_FirstName()
})
test("TC -05 : Validate contractor page column wise sorting is working..",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.SearchContarctor_By_FirstName()
    await ContactorPage.SearchContarctor_By_Email()
})
test("TC -06 : Validate contractor successfully deactivated.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.SpecificContractorActionThreeDot()
    await ContactorPage.clickDeActivate()
    await ContactorPage.SpecificContractorActionThreeDot()
    await ContactorPage.clickActivate()
    
})
test.only("TC -07 : Validate contractor mail resend link button is working.",async({page,loginPage,ContactorPage,AlignwellPage})=>{
    await page.goto("/login")
    await page.waitForTimeout(4000)
    await page.reload()
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await AlignwellPage.clickUserManagementPage()
    await ContactorPage.clickContractorPage()
    await ContactorPage.SpecificContractorActionThreeDotForResendLink()
    await ContactorPage.clickResendLink()
    //await ContactorPage.clickActivate()
    
})