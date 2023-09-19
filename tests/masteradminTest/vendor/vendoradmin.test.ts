import test,{ expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import * as name from "testData/Name.json"
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
test.only("TC 05 : Validate add new vendor Dentists category successfully created.",async({page,loginPage,vendoradminPage})=>{
    // await page.goto("/login")
    // await loginPage.login(data.validstandardusername, data.commonpassword)
    // await vendoradminPage.clickVendorPage()
    // await vendoradminPage.verifyVendorListText()
    // await vendoradminPage.clickAddVendorBtn()
    // await vendoradminPage.InputVendorName(name.FirstName[0].firstName + " N." + name.LastName[0].lastName)
    // await vendoradminPage.checkedVendorCategory_Dentist()
    // await vendoradminPage.upload_vendor_ProfileImages()
    // await vendoradminPage.upload_vendor_BannerImages()
    // await vendoradminPage.inputVendorContactPersonFirstName(name.FirstName[0].firstName)
    // await vendoradminPage.inputVendorContactPersonLastName(name.LastName[0].lastName)
    // await vendoradminPage.inputVendorContactPersonEmail()
    // await vendoradminPage.InputVendorContactPerson_PhoneNumber_BD()
    // await vendoradminPage.clickAddNewVendorBtn()
    for( let i = 1 ; i < 5; i++){
        await vendoradminPage.generateRendomEmail()
    }
    

})