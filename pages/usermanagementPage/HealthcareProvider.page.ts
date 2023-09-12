import { expect, Page } from "@playwright/test";
export default class HealthcareProviderPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private HealtcareProviderElements = {
        healthcareprovider : "//a[contains(.,'Healthcare Providers')]",
        AddProviderBtn:"//button[text()=' Add Provider ']",
        AddnewProvider:"//button[text()=' Add New Provider ']",
        EmptyEmailAlertIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmailCannotbeEmptyText:"//div[text()=' Email cannot be empty. ']",
        EmptyCategoryIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        EmptyProviderCategoryText:"//div[text()=' Provider Type cannot be empty. ']",
        InputHealthcareProviderEmail : "//input[@placeholder='Please type your email address']",
        ProviderTypedropdown:"#employeeTypeId",
        ProviderStatusDropdown:"#status",
        HealthCareProviderSearchField:"//input[@placeholder='Search ...']",
        HealthcareProviderTypeDropdown:"#typeId",
        HealthCareProviderColumn_ArrowDown:"//i[@class='d-inline-flex icon-arrow-down']",
        HealthCareProviderColumn_ArrowUp:"//i[@class='d-inline-flex icon-arrow-up']",
        ProviderName_sortingOrder:' (//th[text()=" Provider Name "]//i)[1]',
        ProviderMobileNumber_sortingOrder:' (//th[text()=" Mobile Number "]//i)[1]',
        ProviderEmailAddress_sortingOrder:'(//th[text()=" Email Address "]//i)[1]',
        ProviderType_sortingOrdered:'(//th[text()=" Provider Type "]//i)[1]',
        ProviderTaskCompletion_sortingOrder:'(//th[text()=" Task Completion "]//i)[1]',
        ProviderStatus_sortingOrder:'(//th[text()=" Status "]//i)[1]',
        
    }
    async clickHealthcareProviderPage(){
        const ele = await this.page.locator(this.HealtcareProviderElements.healthcareprovider)
        try {
            await ele.click()
            await this.page.waitForTimeout(7000)
        } catch (error) {
            throw new Error(`Healthcare provider element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickAddProviderBtn(){
        const ele = await this.page.locator(this.HealtcareProviderElements.AddProviderBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add provider element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickAddNewProviderBtn(){
        const ele = await this.page.locator(this.HealtcareProviderElements.AddnewProvider)
        try {
            await ele.click()
            await this.page.waitForTimeout(7000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add new provider element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickEmptyEmailAlertIcon(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmptyEmailAlertIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Email Icon element is not visible, could not find locotor : ${error}`)
        }
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmailCannotbeEmptyText)
        try {
            await expect(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Email Icon | Email cannot be Empty text element is not visible, could not find locotor : ${error}`)
        }
    }
    async clickEmptyProvidercategoryAlertIcon(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmptyCategoryIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Provider category Icon element is not visible, could not find locotor : ${error}`)
        }
    }
    async verifyEmptyProviderCategoryText(){
        const ele = await this.page.locator(this.HealtcareProviderElements.EmptyProviderCategoryText)
        try {
            await expect(ele).toContainText("Provider Type cannot be empty.")
        } catch (error) {
            throw new Error(`Healthcare provider page | Add Provider | Add new Provider | Empty Provider category Icon | Provider type cannot be Empty text element is not visible, could not find locotor : ${error}`)
        }
    }
    async InputRendomEmail(){
        const email = "Testautomation"
        const randomString = new Date().getSeconds();
        const testEmail = `${email}${randomString}@yopmail.com`;
        await this.page.locator(this.HealtcareProviderElements.InputHealthcareProviderEmail).fill(testEmail)
        await this.page.waitForTimeout(2000)
    }
    async SelectHealthProvider_Doctor(){
        await this.page.locator(this.HealtcareProviderElements.ProviderTypedropdown).selectOption({label : "Doctor"})
        await this.page.waitForTimeout(2000)
    }
    async SelectHealthProvider_FemaleNurse(){
        await this.page.locator(this.HealtcareProviderElements.ProviderTypedropdown).selectOption({label : "Female Nurse"})
        await this.page.waitForTimeout(2000)
    }
    async SelectStatus_Active(){
        await this.page.locator(this.HealtcareProviderElements.ProviderStatusDropdown).selectOption({label : "Active"})
        await this.page.waitForTimeout(5000)
    }
    async SelectStatus_Inactive(){
        await this.page.locator(this.HealtcareProviderElements.ProviderStatusDropdown).selectOption({label : "Inactive"})
        await this.page.waitForTimeout(5000)
    }
    async SelectStatus_Pending(){
        await this.page.locator(this.HealtcareProviderElements.ProviderStatusDropdown).selectOption({label : "Pending"})
        await this.page.waitForTimeout(5000)
    }
    async SelectStatus(){
        await this.page.locator(this.HealtcareProviderElements.ProviderStatusDropdown).selectOption({label : "Select Status"})
        await this.page.waitForTimeout(5000)
    }
    async SearchBy_HealthCareProvider_FirstName(){
        const ele = await this.page.locator(this.HealtcareProviderElements.HealthCareProviderSearchField)
        try {
            await ele.fill("Salvador")
            await this.page.waitForTimeout(15000)
            await expect("//td[text()=' Salvador Valenzuela ']").toContain("Salvador Valenzuela")
        } catch (error) {
            throw new Error(`Healthcare provider page | Search Provider  element is not visible, could not find locotor : ${error}`)
        }
    }
    async HealthCareProviderType_Doctor(){
        await this.page.locator(this.HealtcareProviderElements.HealthcareProviderTypeDropdown).selectOption({label : "Doctor"})
        await this.page.waitForTimeout(10000)
    }
    async HealthCareProviderType_FemaleNurse(){
        await this.page.locator(this.HealtcareProviderElements.HealthcareProviderTypeDropdown).selectOption({label : "Female Nurse"})
        await this.page.waitForTimeout(10000)
    }
    async HealthCareProviderType_MaleNurse(){
        await this.page.locator(this.HealtcareProviderElements.HealthcareProviderTypeDropdown).selectOption({label : "Male Nurse"})
        await this.page.waitForTimeout(10000)
    }
    async HealthProviderName_sortingOrder(){
        const ele = await this.page.locator(this.HealtcareProviderElements.ProviderName_sortingOrder)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`User Management | Healthcare Provider | Provider name sorting order element is not visible , could not found locotor  : ${Error}`)
        }
    }
    async HealthycareProvider_PhoneNumber_sorting(){
        const ele = await this.page.locator(this.HealtcareProviderElements.ProviderMobileNumber_sortingOrder)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`User Management | Healthcare Provider | Provider Phone number sorting order element is not visible , could not found locotor  : ${Error}`)
        }
    }
    async Healtcareprovider_EmailAddress_sortingOrder(){
        const ele = await this.page.locator(this.HealtcareProviderElements.ProviderEmailAddress_sortingOrder)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`User Management | Healthcare Provider | Provider email address sorting order element is not visible , could not found locotor  : ${Error}`)
        }
    }   
    async Healtcareprovider_ProviderType_sortingOrder(){
        const ele = await this.page.locator(this.HealtcareProviderElements.ProviderType_sortingOrdered)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`User Management | Healthcare Provider | Provider type sorting order element is not visible , could not found locotor  : ${Error}`)
        }
    }   
    async Healtcareprovider_TaskCompletion_sortingOrder(){
        const ele = await this.page.locator(this.HealtcareProviderElements.ProviderTaskCompletion_sortingOrder)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`User Management | Healthcare Provider | Provider task completion sorting order element is not visible , could not found locotor  : ${Error}`)
        }
    }  
    async Healtcareprovider_Status_sortingOrder(){
        const ele = await this.page.locator(this.HealtcareProviderElements.ProviderStatus_sortingOrder)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`User Management | Healthcare Provider | Provider status sorting order element is not visible , could not found locotor  : ${Error}`)
        }
    }  
}