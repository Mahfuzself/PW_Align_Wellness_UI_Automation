import { expect, Page } from "@playwright/test";
export default class masteradminPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private masteradminPage_Elements = {
      EventManagement:"//span[text()='Event Management']",
      clients:"//span[text()='Client']",
      vendor:"//span[text()='Vendor']",
      usermanagement:"//span[text()='User Management']",
      Events:"//a[contains(text(),'Events')]",
      Company:"//a[contains(text(),'Company')]",
      EmployeeUser:"//a[contains(text(),'Employee User')]",
      Broker:"//a[contains(text(),'Broker')]",
      BrokerList:"//h1[text()='Broker list']",
      EventsListText:"//h1[text()='Event List']",
      VendorListText:"//h1[text()='Vendor List']",
      EmployeeUserList: "//h1[text()='Employee list']",
      CompanyList : "//h1[text()='Company Account List']",
      UserList:"//h1[text()='User List']",
      Alignwelluser:"//a[contains(.,'Align Well User')]",
      Contractor:"//a[contains(text(),'Contractor')]",
      ContractorListText:"//h1[text()='Contractor List']",
      healthCareProvider:"//a[contains(.,'Healthcare Providers')]",
      ProvidersText:"//h1[text()='Providers']",
      MasterAdminUserName:"//h5[text()='Andrew Miller']"
      
    }
    async verifyEventManagementModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EventManagement)
        try {
            await expect.soft(ele).toContainText("Event Management")
        } catch (error) {
            throw new Error(`Master Admin User | Login | Event Management module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyClientsModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.clients)
        try {
            await expect.soft(ele).toContainText("Client")
        } catch (error) {
            throw new Error(`Master Admin User | Login | Clients module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyVendorModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.vendor)
        try {
            await expect.soft(ele).toContainText("Vendor")
        } catch (error) {
            throw new Error(`Master Admin User | Login | vendor module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyUserManagementModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.usermanagement)
        try {
            await expect.soft(ele).toContainText("User Management")
        } catch (error) {
            throw new Error(`Master Admin User | Login | User Management module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyMasterAdminUserName_AndrewMiller(){
        const ele = await this.page.locator(this.masteradminPage_Elements.MasterAdminUserName)
        try {
            await expect.soft(ele).toContainText("Andrew Miller")
        } catch (error) {
            throw new Error(`Master Admin User | Login | Andrew Miller name align user element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyEventsSubModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Events)
        try {
            await expect.soft(ele).toContainText("User Management")
        } catch (error) {
            throw new Error(`Master Admin User | Login | Events Management | Events sub-module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyEventsListText(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EventsListText)
        try {
            await expect.soft(ele).toContainText("Event List")
        } catch (error) {
            throw new Error(`Master Admin User | Login | Events Management | Events | Event list text element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickEventManagement(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EventManagement)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Master Admin User | Login | Events Management | Event mmanagement element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickClientModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.clients)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | CLient | Client element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyCompanySubmodule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Company)
        try {
            await expect.soft(ele).toContainText("Company")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Company text element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickCompanySubmodule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Company)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Company element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyCompanyAccountList(){
        const ele = await this.page.locator(this.masteradminPage_Elements.CompanyList)
        try {
            await expect.soft(ele).toContainText("Company Account List")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Company sub module | Company Account list text element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyEmployeeUserSubmodule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EmployeeUser)
        try {
            await expect.soft(ele).toContainText("Employee User")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Employee User text element is not visible,could not found locotor : ${error}`)
        }
    }
    async ClikEmployeeUserSubmodule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EmployeeUser)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Employee User sub module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyEmployeeListText(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EmployeeUserList)
        try {
            await expect.soft(ele).toContainText("Employee list")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Employee User | EMployee list text element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyBrokerSubmodule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Broker)
        try {
            await expect.soft(ele).toContainText("Broker")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Broker text element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickBrokerSubmodule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Broker)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Broker sub-module element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyBrokerListText(){
        const ele = await this.page.locator(this.masteradminPage_Elements.BrokerList)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Broker | Broker List Text element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickVendorModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.vendor)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Vendor | Vendor element is not visible,could not found locotor : ${error}`)
        }
    }

    async verifyvendorListText(){
        const ele = await this.page.locator(this.masteradminPage_Elements.VendorListText)
        try {
            await expect.soft(ele).toContainText("Vendor List")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Vendor | Vendor List text element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickuserManagementModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.usermanagement)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | User Management | User Management element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickEventSubModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Events)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Event Management | Event | Event element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyEmployeeUserList(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EmployeeUserList)
        try {
            await expect.soft(ele).toContainText("Employee List")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Employee User | Employee list text element is not visible,could not found locotor : ${error}`)
        }
    }
    async clickEmployeeUserSubModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.EmployeeUser)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | Client | Employee user element is not visible,could not found locotor : ${error}`)
        }
    }
    async verifyAlignWellUserSubModule(){
        const ele = await this.page.locator(this.masteradminPage_Elements.Alignwelluser)
        try {
            await expect.soft(ele).toContainText("Align Well User")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Master Admin User | Login | AlihgnWell User | Align Well user text element is not visible,could not found locotor : ${error}`)
        }
    }
   async clickAlignWellUser(){
           const ele = this.page.locator(this.masteradminPage_Elements.Alignwelluser)
           try {
             await ele.click({button:"left",delay:1000})
             await this.page.waitForTimeout(3000)
           } catch (error) {
             throw new Error(`Master Admin | login | userManagement | Alignwell User | Alignwell user element is not visible, Could not found locotor : ${error}`)
           }
    }
    async verifyUserList(){
        const ele = await this.page.locator(this.masteradminPage_Elements.UserList)
        try {
            await expect.soft(ele).toContainText("User List")
        } catch (error) {
            throw new Error(`Master Admin | Login | User Management | Align Well User | user List text element is not visible : ${error}`)
        }
    }
    async clickContractorSubModule(){
        const ele = this.page.locator(this.masteradminPage_Elements.Contractor)
        try {
          await ele.click({button:"left",delay:1000})
          await this.page.waitForTimeout(3000)
        } catch (error) {
          throw new Error(`Master Admin | login | User Management | COntractor | COntractor element is not visible, Could not found locotor : ${error}`)
        }
 }
 async verifyContractorList(){
    const ele = await this.page.locator(this.masteradminPage_Elements.ContractorListText)
    try {
        await expect.soft(ele).toContainText("Contractor List")
    } catch (error) {
        throw new Error(`Master Admin | Login | User Management | Contractor | Contractor List text element is not visible : ${error}`)
    }
}
async verifyContractorSubModule(){
    const ele = await this.page.locator(this.masteradminPage_Elements.Contractor)
    try {
        await expect.soft(ele).toContainText("Contracto")
    } catch (error) {
        throw new Error(`Master Admin | Login | User Management | Contractor | Contractor text element is not visible : ${error}`)
    }
}
async clickHealthcareProvidersSubModule(){
    const ele = this.page.locator(this.masteradminPage_Elements.Contractor)
    try {
      await ele.click({button:"left",delay:1000})
      await this.page.waitForTimeout(3000)
    } catch (error) {
      throw new Error(`Master Admin | login | User Management | Healthcare Provider | Healthcare Provider element is not visible, Could not found locotor : ${error}`)
    }
}
async verifyProvidersText(){
const ele = await this.page.locator(this.masteradminPage_Elements.ProvidersText)
try {
    await expect.soft(ele).toContainText("Providers")
} catch (error) {
    throw new Error(`Master Admin | Login | User Management |Health Care Providers | Providers List text element is not visible : ${error}`)
}
}
async verifyProviderSubModule(){
const ele = await this.page.locator(this.masteradminPage_Elements.healthCareProvider)
try {
    await expect.soft(ele).toContainText("Healthcare Providers")
} catch (error) {
    throw new Error(`Master Admin | Login | User Management | Healthcare Providers | Healthcare Providers text element is not visible : ${error}`)
}
}
    
}