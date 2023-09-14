import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("TC 01 : Validate modules and sub modules for standard ualign user.",async({page,loginPage,standardPage}) =>{
   await page.goto("/login")
   await loginPage.login(data.validstandardusername,data.commonpassword)
   await test.step("Validate all module for align master admin",async()=>{
        await standardPage.verifyEventManagementModule()
        await standardPage.verifyClientsModule()
        await standardPage.verifyEventManagementModule()
        await standardPage.verifyUserManagementModule()
   })
   await test.step("Validate sub module for Events management module",async()=>{
      await standardPage.clickEventManagement()
      await standardPage.clickEventSubModule()
      await standardPage.verifyEventsListText()
   })
   await test.step("Validate sub-modules(Company,Employee User,Vedor) for clients module",async()=>{
     await standardPage.clickClientModule()
     await standardPage.verifyCompanySubmodule()
     await standardPage.clickCompanySubmodule()
     await standardPage.verifyCompanyAccountList()
     await standardPage.verifyEmployeeUserSubmodule()
     await standardPage.clickEmployeeUserSubModule()
     await standardPage.verifyEmployeeListText()
     await standardPage.verifyBrokerSubmodule()
     await standardPage.clickBrokerSubmodule()
     await standardPage.verifyBrokerListText()
   })
   await test.step("Validate sub Module(Vendor) for Vendor",async()=>{
     await standardPage.clickVendorModule()
     await standardPage.verifyvendorListText()
   })
   await test.step("Validate sub module(Alignwelluser,Contractor,Healthcare Provider) for UserManagement Module",async()=>{
      await standardPage.clickuserManagementModule()
      await standardPage.verifyAlignWellUserSubModule()
      await standardPage.clickAlignWellUser()
      await standardPage.verifyUserList()
   })
  
})