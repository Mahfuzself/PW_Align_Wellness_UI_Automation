import test,{ expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import * as name from "testData/Name.json"
let browser, page
test("TC - 01 : Verify Empty vendor name alert text.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickAddVendorBtn()
    await vendoradminPage.clickAddNewVendorBtn()
    await vendoradminPage.clickEmptyVendorNameAlertIcon()
    await vendoradminPage.verifyVendorNameCannotBeEmptyText()
})
test("TC 02 : Verify Empty vendor contact person first name alert text.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickAddVendorBtn()
    await vendoradminPage.clickAddNewVendorBtn()
    await vendoradminPage.clickVendorContactPersonFirstNameEmptyAlertIcon()
    await vendoradminPage.verifyVendorContactPersonFirstNameCannotBeEmptyText()
})
test("TC 03 : Verify Empty vendor contact person Last name alert text.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickAddVendorBtn()
    await vendoradminPage.clickAddNewVendorBtn()
    await vendoradminPage.clickVendorContactPersonLastNameEmptyAlertIcon()
    await vendoradminPage.verifyVendorContactPersonLastNameCannotBeEmptyText()
})
test("TC 04 : Verify Empty vendor contact person email alert text.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickAddVendorBtn()
    await vendoradminPage.clickAddNewVendorBtn()
    await vendoradminPage.clickVendorContactPersonEMailEmptyAlertIcon()
    await vendoradminPage.verifyVendorContactPersonEmailCannotBeEmptyText()
})
test("TC 05 : Validate add new vendor Dentists category successfully created.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickAddVendorBtn()
    await vendoradminPage.InputVendorName((await vendoradminPage.generateFirstName())+(await vendoradminPage.generateLastName()))
    await vendoradminPage.checkedVendorCategory_Dentist()
    await vendoradminPage.upload_vendor_ProfileImages()
    await vendoradminPage.upload_vendor_BannerImages()
    await vendoradminPage.inputVendorContactPersonFirstName(await vendoradminPage.generateFirstName())
    await vendoradminPage.inputVendorContactPersonLastName(await vendoradminPage.generateLastName())
    await vendoradminPage.inputVendorContactPersonEmail((await vendoradminPage.generateFirstName())+(await vendoradminPage.generateLastName())+"@yopmail.com")
    await vendoradminPage.InputVendorContactPerson_PhoneNumber_BD()
    await vendoradminPage.clickAddNewVendorBtn()
})
test("TC 06 : Validate crated Dentists category vendor shows on vendor list.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickCreatedvendorDetails()
    await vendoradminPage.clickVendorDetails_EmployeeList()
    await vendoradminPage.copyEmployeeEmail()
    await vendoradminPage.pasteEmployeeEmail()
})
test("TC 07 : Validate add new vendor Physical Therapy  and Nutritionists category successfully created.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickAddVendorBtn()
    const firstname = await vendoradminPage.generateFirstName() 
    const  lastname = await vendoradminPage.generateLastName()
    const VendorName = firstname + " N. "+ lastname
    await vendoradminPage.InputVendorName(VendorName)
    await vendoradminPage.checkedVendorCategory_PhysicalTherapy()
    await vendoradminPage.checkedVendorCategory_Nutritionists()
    await vendoradminPage.upload_vendor_ProfileImages()
    await vendoradminPage.upload_vendor_BannerImages()
    const email = firstname+lastname + "@yopmail.com"
    await vendoradminPage.inputVendorContactPersonFirstName(firstname)
    await vendoradminPage.inputVendorContactPersonLastName(lastname)
    await vendoradminPage.inputVendorContactPersonEmail(email)
    await vendoradminPage.InputVendorContactPerson_PhoneNumber_BD()
    await vendoradminPage.clickAddNewVendorBtn()
})
test.only("TC 08 : Validate crated Physical Therappy and Nutritionists category vendor shows on vendor list.",async({page,loginPage,vendoradminPage})=>{
    await page.goto("/login")
    await loginPage.login(data.validstandardusername, data.commonpassword)
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.clickCreatedvendorDetails()
    await vendoradminPage.clickVendorDetails_EmployeeList()
    await vendoradminPage.copyEmployeeEmail()
    await vendoradminPage.clickVendorPage()
    await vendoradminPage.verifyVendorListText()
    await vendoradminPage.pasteEmployeeEmail()
})