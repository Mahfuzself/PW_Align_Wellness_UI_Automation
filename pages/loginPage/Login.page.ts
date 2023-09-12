import { expect, Page } from "@playwright/test";
export default class LoginPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private LoginPage_Elements  ={
        email : '//input[@placeholder="Email/Username"]',
        submittBtn: '//button[text()=" Submit "]',
        PasswordEmptyIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        EmptyPasswordText:"//div[text()=' Password cannot be empty. ']",
        EmptyusernameIcon:"//i[contains(@class,'icon-warning-o text-danger')]",
        EmptyUsernameText:"//div[text()=' Email address cannot be empty. ']",
        InvalidUsernameAlert:"//div[text()=' Email address is not a valid email. ']",
        UserListText : "//h1[text()='User List']",
        incorrectUserName: "//h4[text()='Incorrect user name ']",
        AccountBlockedAlert: "//h4[text()='Your account has been Locked. Please contact the system administrator. ']"
    }
    async inputusernamefield(uname : string){
        await this.enterEmail(uname);
    }
    async inputpasswordfield(password : string){
        await this.enterLoginPassword(password);
    }
    async login(username: string, password: string) {
        await this.enterEmail(username);
        await this.enterLoginPassword(password);
        await this.page.waitForLoadState()
        await this.clickSubmittBtn();
        await this.page.waitForTimeout(25000)
         //await this.page.reload()
    }
    async loginNegative(invalidusername: string, invalidpassword: string) {
        await this.enterEmail(invalidusername);
        await this.enterLoginPassword(invalidpassword);
        await this.clickSubmittBtn();
    }
    async enterEmail(emailaddress: string) {
        await this.page.locator(this.LoginPage_Elements.email).type(emailaddress);
            // input[type='text'] 
    }
    async enterLoginPassword(password: string) {
        await this.page.locator('//input[@placeholder="Password"]')
            .type(password);
            // "input[type='password']"
            
    }
    async clickLogoutBtn() {
        await this.page.locator("//p[text()='Logout']")
            .click()
    }
    async shouldBeshowInvalidCredentials() {
        const ele = this.page.locator("text=Invalid credentials")
        expect(ele).toContainText("Invalid credentials")
    }
    async shouldShowUserNameIsNotEmpty() {
        const ele = this.page.locator(`//p[text()='"username" is not allowed to be empty']`)
        expect(ele).toContainText(`"username" is not allowed to be empty`)
    }
    async clickInvalidCredantialsWindowOkBtn() {
        const ele = this.page.locator("text=Ok")
        expect(ele).toContainText("Ok")
        await ele.click()
    }
    async clickSubmittBtn() {
        await Promise.all([
            this.page.waitForNavigation,
            // this.page.click("button:has-text('Login')"),
            await this.page.locator('//button[text()=" Submit "]').click()
        ])
    }
    async verifyCueLogoIsVisible() {
        const ele = this.page.locator("//h1/preceding::div[@class='MuiBox-root css-uycfjs']")
        expect(ele).toBeVisible()
    }
    async verifySigninTextIsVisible() {
        const ele = this.page.locator("//h1[text()='Sign in']")
        expect(ele).toBeVisible()
    }
    async verifySigninPageTitleTextIsVisible() {
        const ele = this.page.locator("//p[text()='Sign in and start managing your Games!']")
        expect(ele).toBeVisible()
    }
    async verifyIdLabelIsVisible() {
        const ele = this.page.locator("//label[text()='Id']")
        expect(ele).toBeVisible()
    }
    async verifySecretLabelIsVisible() {
        const ele = this.page.locator("//label[text()='Secret']")
        expect(ele).toBeVisible()
    }
    async inputSecret() {
        const ele = this.page.locator("//input[@type='password']")
        await ele.fill("Demo Data")
    }
    async clickEyeBtn() {
        const ele = this.page.locator("//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]")
        expect(ele).toBeVisible()
        await ele.click()
    }
    async invalidusernameformat(){
        await this.page.locator(this.LoginPage_Elements.email).fill("qa_automation")
    }
    async verifyEmpltyPassword_Alert(){
         const ele = await this.page.locator(this.LoginPage_Elements.EmptyPasswordText)
         if(await ele.isVisible()){
            await expect(ele).toContainText("Password cannot be empty.")
         }

    }
    async clickEmptyPasswordIcon(){
        const ele = await this.page.locator(this.LoginPage_Elements.PasswordEmptyIcon)
        if(await ele.isVisible()){
           await ele.click()
        }

   }
   async clickEmptyUsernameIcon(){
    const ele = await this.page.locator(this.LoginPage_Elements.EmptyusernameIcon)
    if(await ele.isVisible()){
       await ele.click()
    }

}
async verifyEmptyUsername_Alert(){
    const ele = await this.page.locator(this.LoginPage_Elements.EmptyUsernameText)
    if(await ele.isVisible()){
       await expect(ele).toContainText("Email address cannot be empty.")
    }

}
async verifyInvalaidUsernameFormat_Alert(){
    const ele = await this.page.locator(this.LoginPage_Elements.InvalidUsernameAlert)
    if(await ele.isVisible()){
       await expect(ele).toContainText("Email address is not a valid email.")
       await this.page.waitForTimeout(1000)
    }
}
async verifyUserListText(){
    const ele = await this.page.locator(this.LoginPage_Elements.UserListText)
    if(await ele.isVisible()){
       await expect(ele).toContainText("User List")
    }
    else throw new Error('User list text is not visible')
}
async inputDoesnotexistEmail(wrongemail : string){
    const ele = await this.page.locator(this.LoginPage_Elements.email)
    if(await ele.isVisible()){
        await ele.fill(wrongemail)

    }
}
async inputBlockedEmail(blockedemail : string){
    const ele = await this.page.locator(this.LoginPage_Elements.email)
    if(await ele.isVisible()){
        await ele.fill(blockedemail)

    }
}
async verifyInvalidUserName(){
    const ele = await this.page.locator(this.LoginPage_Elements.incorrectUserName)
    try {
        await expect(ele).toContainText("Incorrect user name")
    } catch (error) {
        throw new Error(`Wrong user name alert is not visible : ${Error}`)
    }
}
async verifyLockedAccountAlert(){
    const ele = await this.page.locator(this.LoginPage_Elements.AccountBlockedAlert)
    try {
        await expect(ele).toContainText("Your account has been Locked. Please contact the system administrator.")
    } catch (error) {
        throw new Error(`Blocked account alert is not visible : ${Error}`)
    }
}
 
}