import { expect, Page, Browser } from '@playwright/test';
import { BrowserContext } from "@playwright/test";
import path = require('path');
import { Url } from 'url';
export default class userRegistrationPage {
  private page : Page
    constructor(page: Page) {
        this.page = page
    }
    async gotoForOtpValue(Page : Page,Url: string){
      await Page.waitForTimeout(2000)
         await Page.goto(Url)
        //  await Page.waitForTimeout(1000)
    }
    async gotonewRegisteredMail(Page : Page,URL : string){
      await Page.goto(URL)
    }
    async clickContinueBtn(Page : Page){
        await Page.locator("//button[text()=' Continue ']").click()
    }
    async fillOtpMail(Page : Page,mail : string){
      await Page.locator("#EmailPhone").fill(mail)
    }
    async clickOtpMailSubmittBtn(Page : Page){
      await Page.locator("#submitBtn").click({force:true})
    }
    async inputDOB(Page : Page){
      await Page.locator('//input[@placeholder="Date of birth (mm/dd/yy)"]').click({delay : 1000})
      await Page.locator('//select[@title="Select month"]').selectOption({label : "Jan"},{timeout : 1000})
      await Page.locator('//select[@title="Select year"]').selectOption({label : "2000"},{timeout : 1000})
      await Page.locator('(//div[@class="btn-light"])[1]').click({timeout : 1000})

    }
    async selectDesignation(Page : Page){
      await Page.locator("#designation").selectOption({label : "SQA"},{timeout : 1000})
    }
    async selectDepartment(Page : Page){
      await Page.locator("#department").selectOption({label : "Software Development"},{timeout : 1000})
    }
    async inputAddress(Page : Page){
      await Page.locator('//input[@id="address"]').type("Dhaka",{timeout:200})
      await Page.waitForTimeout(2000)
      await Page.keyboard.press("ArrowDown")
      await Page.waitForTimeout(1000)
      await Page.keyboard.press("Enter")
    }
    async clickContinue(Page : Page){
      await Page.locator('//button[@type="submit"]').click({delay:1000})
      await Page.waitForTimeout(4000)
    }
    async inputPassword(Page : Page){
      await Page.locator("#password").type("Test@1234",{timeout:100})
    }
    async inputConfirmPassword(Page : Page){
      await Page.locator("#confirmPassword").type("Test@1234",{timeout:100})
    }
    async inputSuite_Apt(Page : Page){
      await Page.locator('//input[@placeholder="Suite/Apt/Location"]').type("Mirpur-2")
    }
    async clickTermsAndCondutions(Page : Page){
      const ele = await Page.locator(" //a[text()=' Terms & Conditions ']")
      await expect(ele).toContainText("Terms & Conditions")
      await ele.click()
      // await Page.locator(" //a[text()=' Terms & Conditions ']").click()
    }
    async clickTermsAndCondutionsCloseBtn(Page : Page){
      const ele = await Page.locator('i.icon-close')
      try {
          ele.click({delay : 500})
      } catch (error) {
        throw new Error(`Align User registrations terms and condutions close popup buttons locotor could not found : ${Error} `)
      }
    }
    async clickRegisterSubmitBtn(Page : Page){
      const ele = await Page.locator('button[type="submit"]')
      try {
          ele.click({delay : 500})
          await Page.waitForTimeout(4000)
      } catch (error) {
        throw new Error(`Align User registrations submitt buttons locotor could not found : ${Error} `)
        
      }
      //h5[text()="Andrew Miller"]
    }
    async verifyAddNewRegisteredUser(Page : Page, name : string){
      //h5[text()="Andrew Miller"]
      const ele = await Page.locator(`//h5[text()="${name}"]`)
      try {
          await expect(ele).toContainText(`${name}`)
          await Page.waitForTimeout(2000)
      } catch (error) {
        throw new Error(`Align User Add new registrered user could not found : ${Error} `)
        
      }
      //h5[text()="Andrew Miller"]
    }
    async verifyAconologement(Page : Page){
      const ele = await Page.locator('//h4[text()="Acknowledgement"]')
      try {
         await expect(ele).toContainText("Acknowledgement")
      } catch (error) {
        throw new Error(`Align User Add new registrered user could not found : ${Error} `)
      }

    }
    async verifyAcoknowledge(Page : Page){
      const ele = await Page.locator('//h4[text()="Acknowledgement"]')
      try {
          await expect(ele).toContainText("Acknowledgement")
      } catch (error) {
         throw new Error(`Acknowledgement page text is not visible , Could not fould locotor : ${Error}`)      }
    }
    async clickAcceptBtn(Page : Page){
      const ele = await Page.locator('//button[@class="btn btn-with-icon btn-secondary my-3 text-white d-flex gap-2"]')
      try {
          await ele.click({delay:1000})
          await Page.waitForTimeout(10000)
      } catch (error) {
         throw new Error(`Acknowledgement  | Accept button locotor is not visible , Could not fould locotor : ${Error}`)}
    }
    async verifyUserRegisteredSuccessfully(Page : Page){
      const ele = await Page.locator('//h4[text()="Your account has been created successfully"]')
      try {
             await expect(ele).toContainText("Your account has been created successfully")
      } catch (error) {
        throw new Error(`Add Align User | Register User | Add user successfully mmessage could not found : could not found locotor ${Error}`)
      }
    }
    async verifyBussinessEmailAlredyInUse_Alert(Page : Page){
      const ele = await Page.locator('//h4[text()="Business Email already in use"]')
      try {
          await expect(ele).toContainText("Business Email already in use")
      } catch (error) {
        throw new Error(`Login Align Master Admin | User Management | Align User | Input Exit Email | Business Email already in use message could not found : ${Error}`)
      }
    }
    async verifyAddNewUserAfterRegistered_Active(Page : Page,user : string){
      //td[text()=" reyesuddin@yopmail.com "]/following-sibling::td[3]
      //td[text()=" matthewvail@yopmail.com "]/following-sibling::td[2]/div[text()=" Active "]
      console.log(`//td[text()=" ${user} "]/following-sibling::td[2]/div`)
      const ele =   await Page.locator(`//td[text()=" ${user} "]/following-sibling::td[2]/div[text()=" Active "]`)
      try {
            await expect(ele).toHaveScreenshot("Active.png")
      } catch (error) {
        throw new Error(`Login Align Master Admin | User Management | Align User | Added new user | Edit User mail | Completed user registration | Add new user stutus "Active" could not found : ${Error}`)
      }
    }
    async clickUserManagementPage(Page : Page){
      await this.page.waitForTimeout(1000)
      const ele = await Page.locator("//a[.='User Management']")
          await ele.click()
  }
  async clickAlignwellUser(Page : Page){
    await Page.reload()
    const ele = await Page.locator("//a[contains(text(),'Align Well User')]")
        await ele.click({delay:1000})
        await this.page.waitForTimeout(1000)
        await Page.reload()
}

}
