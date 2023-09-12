import { expect, Page } from "@playwright/test";
export default class ContractorPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private ContractorPage_Elements = {
        ContractorPage:"//a[contains(.,'Contractor')]",
        AddContractorBtn: "//button[text()=' Add Contractor ']",
        AddNewContractor:"//button[@type='submit']",
        EmailAlertIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        EmptyemailMessage:"//div[text()=' Email cannot be empty. ']",
        inputContarctorEmail: "//input[@placeholder='Please type your email address']",
        InvalidEmailText:"me-3",
        ContractorSerchField : "//input[@placeholder='Search ...']",
        SpecificActionThreeDot:"//td[text()=' zubindeep@yopmail.com ']/following-sibling:: td[3]",
        SpecificActionThreeDotResendLink:"//td[text()=' hellocontractor@yopmial.com ']/following-sibling:: td[3]",
        Activate:"//button[text()=' Activate ']",
        Deactivate:"//div[@class='dropdown-menu show']//button[1]",
        ResendLink: "//div[@class='dropdown-menu show']//button[1]",
        
    }
    async clickContractorPage(){
        const ele = this.page.locator(this.ContractorPage_Elements.ContractorPage)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Contractor page elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async clickAddContactor(){
        const ele = this.page.locator(this.ContractorPage_Elements.AddContractorBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Add contractor button elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async clickAddNewContractor(){
        const ele = this.page.locator(this.ContractorPage_Elements.AddNewContractor)
        try {
             await ele.click({timeout : 2000})
             await this.page.waitForTimeout(30000)
        } catch (error) {
            throw new Error(`Add new contractor button elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async clickEmailAlertIcon(){
        const ele = this.page.locator(this.ContractorPage_Elements.EmailAlertIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Add new contractor email icon elements is not visible , Could not found locator : ${Error}`)
        }
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.ContractorPage_Elements.EmptyemailMessage)
        try {
            await expect.soft(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`Empty email alert message element is not found, Could not found locotor : ${error}`)
        }
    }
    async inputInvalidContractorEmail(){
        const ele = await this.page.locator(this.ContractorPage_Elements.inputContarctorEmail)
        try {
            await ele.fill("testautomation1234")
        } catch (error) {
            throw new Error(`Email input field element is not found, Could not found locotor : ${error}`)
        }
    }
    async VerifyInvalidEmailText(){
        const ele = await this.page.locator(this.ContractorPage_Elements.InvalidEmailText)
        try {
            await this.page.waitForTimeout(2000)
            await expect.soft(ele).toContainText("Email invalid")
        } catch (error) {
            throw new Error(`Invalid email text element is not visible, Could not found locotor : ${error}`)
        }
    }
    async InputRendomEmail(){
        const email = "Test"
        const randomString = new Date().getTime();
        const testEmail = `${email}${randomString}@yopmail.com`;
        await this.page.locator(this.ContractorPage_Elements.inputContarctorEmail).fill(testEmail)
        await this.page.waitForTimeout(2000)
    }
    async SearchContarctor_By_FirstName(){
        const ele = await this.page.locator(this.ContractorPage_Elements.ContractorSerchField)
        try {
             await ele.fill("William")
             await this.page.waitForTimeout(15000)
        } catch (error) {
            throw new Error(`Search first name element is not visible, Could not found locotor : ${error}`)
        }
    }
    async SearchContarctor_By_Email(){
        const ele = await this.page.locator(this.ContractorPage_Elements.ContractorSerchField)
        try {
             await ele.fill("anthonychoi@yopmail.com")
             await this.page.waitForTimeout(15000)
        } catch (error) {
            throw new Error(`Search first name element is not visible, Could not found locotor : ${error}`)
        }
    }
    async SpecificContractorActionThreeDot(){
        const ele = await this.page.locator(this.ContractorPage_Elements.SpecificActionThreeDot)
        try {
             await ele.click()
             await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Action Three dot element is not visible, Could not found locotor : ${error}`)
        }
    }
    async SpecificContractorActionThreeDotForResendLink(){
        const ele = await this.page.locator(this.ContractorPage_Elements.SpecificActionThreeDotResendLink)
        try {
             await ele.click()
             await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Action Three dot element is not visible, Could not found locotor : ${error}`)
        }
    }
    async clickDeActivate(){
        const ele = await this.page.locator(this.ContractorPage_Elements.Deactivate)
        try {
             await ele.click()
             await this.page.waitForTimeout(3000)
             await this.page.locator("//button[text()=' Yes ']").click()
             await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Action Three dot | Deactivate | Yes button element is not visible, Could not found locotor : ${error}`)
        }
    }
    async clickActivate(){
        const ele = await this.page.locator(this.ContractorPage_Elements.Activate)
        try {
             await ele.click()
             await this.page.waitForTimeout(3000)
             await this.page.locator("//button[text()=' Yes ']").click()
             await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Action Three dot | Activate | Yes button element is not visible, Could not found locotor : ${error}`)
        }
    }
    async clickResendLink(){
        const ele = await this.page.locator(this.ContractorPage_Elements.ResendLink)
        try {
            await ele.click()
            await this.page.waitForTimeout(1000)
            await this.page.locator("//button[text()=' Yes ']").click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Action Three dot | Resend Link | resend link button element is not visible, Could not found locotor : ${error}`)
        }
    }
    
}