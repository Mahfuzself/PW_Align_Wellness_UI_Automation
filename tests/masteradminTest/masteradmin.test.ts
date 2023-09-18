import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC - 01 : Validate modules and sub modules for master admin. ",async({page,loginPage,masteradminPage}) =>{
   await page.goto("/login")
   await loginPage.login(data.validmasteradminusername,data.commonpassword)
   await test.step("Validate all module for align master admin",async()=>{
        await masteradminPage.verifyEventManagementModule()
        await masteradminPage.verifyClientsModule()
        await masteradminPage.verifyEventManagementModule()
        await masteradminPage.verifyUserManagementModule()
   })
   await test.step("Validate sub module for Events management module",async()=>{
      await masteradminPage.clickEventManagement()
      await masteradminPage.clickEventSubModule()
      await masteradminPage.verifyEventsListText()
   })
   await test.step("Validate sub-modules(Company,Employee User,Vedor) for clients module",async()=>{
     await masteradminPage.clickClientModule()
     await masteradminPage.verifyCompanySubmodule()
     await masteradminPage.clickCompanySubmodule()
     await masteradminPage.verifyCompanyAccountList()
     await masteradminPage.verifyEmployeeUserSubmodule()
     await masteradminPage.clickEmployeeUserSubModule()
     await masteradminPage.verifyEmployeeListText()
     await masteradminPage.verifyBrokerSubmodule()
     await masteradminPage.clickBrokerSubmodule()
     await masteradminPage.verifyBrokerListText()
   })
   await test.step("Validate sub Module(Vendor) for Vendor",async()=>{
     await masteradminPage.clickVendorModule()
     await masteradminPage.verifyvendorListText()
   })
   await test.step("Validate sub module(Alignwelluser,Contractor,Healthcare Provider) for UserManagement Module",async()=>{
      await masteradminPage.clickuserManagementModule()
      await masteradminPage.verifyAlignWellUserSubModule()
      await masteradminPage.clickAlignWellUser()
      await masteradminPage.verifyUserList()
      await masteradminPage.verifyContractorSubModule()
      await masteradminPage.clickContractorSubModule()
      await masteradminPage.verifyContractorSubModule()
      await masteradminPage.verifyProviderSubModule()
      await masteradminPage.clickHealthcareProvidersSubModule()
      await masteradminPage.verifyProvidersText()
   })
  
})
test("TC - 01 : Validate master admin align user succefully login.",async({page,loginPage,masteradminPage})=>{
   await page.goto("/login")
   await loginPage.login(data.validmasteradminusername,data.commonpassword)
   await masteradminPage.verifyMasterAdminUserName_AndrewMiller()
})
test.only("TC - 02 : Validate master admin event management module is visible.",async({page,loginPage,masteradminPage})=>{
   await page.goto("/login")
   await loginPage.login(data.validmasteradminusername,data.commonpassword)
   await masteradminPage.verifyMasterAdminUserName_AndrewMiller()
   await test.step("Now validate event management module is visible.",async()=>{
      await masteradminPage.verifyEventManagementModule()
      await masteradminPage.clickEventManagement()
 })
})