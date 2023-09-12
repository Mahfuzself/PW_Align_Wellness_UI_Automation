import { expect, Page } from "@playwright/test";
export default class AlignwelluserPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private AlignwellnessuserElements = {
        AlignwellUser: "//a[contains(text(),'Align Well User')]",
        AddUser : "//button[text()=' Add User ']",
        emptyEmailText:"//div[text()=' Email cannot be empty. ']",
        EmptyEmailIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmptyRoleIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        usermanagementPage : "//a[.='User Management']",
        AddNewUser: "//button[text()=' Add New User ']",
        AddUserEmailField: "//input[@placeholder='Please type your email address']",
        EmptyUserRoleText: "//div[text()=' User role cannot be empty. ']",
        MasterAdmin : "#userRole",
        InvalidEmailText:"//h4[text()='Email invalid ']",
        AlignWellUserSearch: "//input[@placeholder='Search ...']",
        SerchFirstName : "//p[@class='user-name']",
        columnArrowup:"//i[@class='d-inline-flex icon-arrow-up']",
        columnArrowdown:"//i[@class='d-inline-flex icon-arrow-down']",
        Status_Active:"//div[text()=' Active ']",
        Status_Deactive:"//div[text()=' Pending ']",
        ActionThreeDot:'//div[@class="dropdown"]',//td[text()='Adam Gilchrist']/following-sibling::td,ralphmcmillen@yopmail.com
        ActionThreeForResendLink:"//td[text()=' ralphmcmillen@yopmail.com ']/following-sibling::td[3]",
        ResendLinkSuccessfullyMessage:"//h4[text()='Link has been resend successfully']",
        DeactivateAlignUser:"//td[text()=' jonathanblunt@yopmail.com ']/following-sibling::td[3]",

    }
    async clickAlignwellUser(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AlignwellUser)
            await ele.click()
            await this.page.waitForTimeout(5000)
       

    }
    async clickAddUserBtn(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddUser)
        try {
            await ele.click({button:"left",delay: 1000})
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Align well add user element is not visible, Could not found loctor  : ${Error}`)
        }
    }
    async clickEmptyEmailIcon(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyEmailIcon)
        try {
            await ele.click({button:"left",delay: 1000})
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align well user empty email icon element is not visible, Could not found loctor: ${Error}`)
        }
    }
    async clickEmptyRoleIcon(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyRoleIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align well user empty Role icon element is not visible, Could not found loctor: ${Error}`)
        }
    }
    async clickUserManagementPage(){
        await this.page.waitForTimeout(1000)
        const ele = await this.page.locator(this.AlignwellnessuserElements.usermanagementPage)
            await ele.click()
            console.log("Hello")
    }
    async verifyEmptyRoleText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyUserRoleText)
        try {
            await this.page.waitForTimeout(1000)
             await expect.soft(ele).toContainText("User role cannot be empty.")
             console.log("Successfully verified!")
        } catch (error) {
            throw new Error(`Align well add user empty role text element is not visible, Could not found loctor : ${Error}`)
        }
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.emptyEmailText)
        try {
            await this.page.waitForTimeout(1000)
             await expect.soft(ele).toContainText("Email cannot be empty.")
             console.log("Successfully verified!")
        } catch (error) {
            throw new Error(`Align well add user empty email message element is not visible, Could not found loctor : ${Error}`)
        }
    }
    async clickAddNewUserBtn(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddNewUser)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Add new user button element is not visible , Could not found locator : ${Error}`)
        }
    }
    async inputAdduserEmail(){
        const ele  = await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField)
        try {
            await ele.fill('testautomation@yopmail.com')
        } catch (error) {
             throw new Error(`Add user email field element is not visible , Could not found locator : ${Error}`)
        }
    }
    async inputInvaliduserEmail(){
        const ele  = await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField)
        try {
            await ele.fill('testautomation@')
        } catch (error) {
             throw new Error(`Add user email field element is not visible , Could not found locator : ${Error}`)
        }
    }
    async selectMasterAdminUser(){
       await this.page.locator(this.AlignwellnessuserElements.MasterAdmin).selectOption({label:"Master Admin"})
       await this.page.waitForTimeout(2000)
    }
    async verifyInvalidEmail(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.InvalidEmailText)
        //await this.page.waitForSelector(this.AlignwellnessuserElements.InvalidEmailText)
        try {
            await expect.soft(ele).toContainText("Email invalid ")
        } catch (error) {
            throw new Error(`Invalid email text element is not visible, Could not found locotor : ${Error}`)
        }
    }
    async InputRendomEmail(){
        const email = "Test"
        const randomString = new Date().getTime();
        const testEmail = `${email}${randomString}@yopmail.com`;
        await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField).fill(testEmail)
    }
    async SearchAlignUser_By_FirstName(){
      const ele = await this.page.locator(this.AlignwellnessuserElements.AlignWellUserSearch)
     if(await ele.isVisible()){
        await ele.fill("Kevin")
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(15000)
        
     }
     await expect(await this.page.locator(this.AlignwellnessuserElements.SerchFirstName)).toContainText("Kevin")
    }
    async Filter_By_MasterAdmin(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Master Admin"})
        await this.page.waitForTimeout(10000)
     }
     async Filter_By_Admin(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Admin"})
        await this.page.waitForTimeout(10000)
     }
     async Filter_By_Standard(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Standard"})
        await this.page.waitForTimeout(10000)
     }
     async ClickResendLink(){
        await this.page.locator(this.AlignwellnessuserElements.ActionThreeForResendLink).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("//button[text()=' Yes ']").click()
        await this.page.waitForTimeout(5000)
     }
     async verifyResendLinkSuccessfullyMessage(){
        await expect(this.page.locator(this.AlignwellnessuserElements.ResendLinkSuccessfullyMessage)).toContainText("Link has been resend successfully")
        await this.page.waitForTimeout(1000)
     }
     async ClickDeactivateAndActivate(){
        await this.page.locator(this.AlignwellnessuserElements.DeactivateAlignUser).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
        await this.page.waitForTimeout(3000)
        await this.page.locator("//button[text()=' Yes ']").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.AlignwellnessuserElements.DeactivateAlignUser).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
        await this.page.waitForTimeout(3000)
        await this.page.locator("//button[text()=' Yes ']").click()
        await this.page.waitForTimeout(2000)
     }
}