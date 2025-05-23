
import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
//import LoginPage from "pages/loginPage/Login.page";
import { Page } from '@playwright/test';
import AlignwelluserPage from "@pages/Alignwelluser.page";
test.only("001Login  -> 01 Validate Login all test cases",async({page,loginPage,registrationPage,context,AlignwellPage})=>{
    await page.goto("/login")
    // await test.step("Validate login page design",async()=>{
    //              await loginPage.LoginPageMatch()
    //         })
    // await test.step("01 Validate empty password alert without input password field",async()=>{
    //     await loginPage.inputusernamefield(data.validusername)
    //     await loginPage.clickSubmittBtn()
    //     await loginPage.clickEmptyPasswordIcon()
    //     await loginPage.verifyEmptyPassword_Alert()
    //     await page.waitForTimeout(3000)
    // })
    // await test.step(" 02 Validate empty username alert without input username field.",async()=>{
    //     await page.locator('//input[@placeholder="Email/Username"]').clear()
    //     await loginPage.inputpasswordfield(data.validpassword)
    //     await loginPage.clickSubmittBtn()
    //     await loginPage.clickEmptyUsernameIcon()
    //     await loginPage.verifyEmptyUsername_Alert()
    //     await page.waitForTimeout(3000)
    // })
    // await test.step(" 03 Validate empty username and empty password alert. ",async()=>{  
    //     await page.locator('//input[@placeholder="Password"]').clear()
    //     await loginPage.clickSubmittBtn()
    //     await loginPage.clickEmptyUsernameIcon()
    //     await loginPage.verifyInvalaidUsernameFormat_Alert()
    //     await loginPage.clickEmptyPasswordIcon()
    //     await loginPage.verifyEmptyUsername_Alert()
    //     await page.waitForTimeout(3000)
    // })
    // await test.step("04 Validate invalid format alert for username/email field.",async()=>{
    //     await page.locator('//input[@placeholder="Email/Username"]').clear()
    //     await loginPage.inputusernamefield(data.Invalidformatemail)
    //     await loginPage.clickEmptyUsernameIcon()
    //     await loginPage.verifyInvaliadEMailFormat()
    // })
    // await test.step("05 Validate invalid username alert.",async()=>{
    //     await loginPage.inputDoesnotexistEmail(data.doesnotexistmail)
    //     await loginPage.inputpasswordfield("Test@1234")
    //     await loginPage.clickSubmittBtn()
    //     await loginPage.verifyInvalidUserName()
    //     await page.waitForTimeout(3000)
    // })
    // await test.step("05 Validate invalid password format alert.",async()=>{
    // })
    // await test.step("07 Validate account blocked alert.",async()=>{
    //     await page.locator('//input[@placeholder="Password"]').clear()
    //     await loginPage.inputBlockedEmail(data.inputblockedemail)
    //     await loginPage.inputpasswordfield(data.commonpassword)
    //     await loginPage.clickSubmittBtn()
    //     await page.waitForTimeout(7000)
    //     await loginPage.verifyLockedAccountAlert()
    // })
    await test.step("08 Validate successfully login with valid username and password.",async()=>{
        await page.locator('//input[@placeholder="Password"]').clear()
        await page.locator('//input[@placeholder="Email/Username"]').clear()
       await page.reload()
        await loginPage.inputusernamefield(data["2FAUser"])
        await loginPage.enterLoginPassword("Test@1234")
        await loginPage.clickSubmittBtn()
        await page.waitForTimeout(5000)
        const Page = await context.newPage()
        await registrationPage.gotoForOtpValue(Page,data.OtpLink)
        await registrationPage.fillOtpMail(Page,data["2FAUser"])
        // await Page.locator("#EmailPhone").type(mail,{delay:100})
        await Page.waitForTimeout(5000)
        await registrationPage.clickOtpMailSubmittBtn(Page)
        await Page.locator("#otpValue").selectText();
        await Page.keyboard.press("Control+C");
        await Page.close()
        await  page.bringToFront()
        await loginPage.clickOTPInputField()
        await page.keyboard.press("Control+V")
        await page.waitForTimeout(4000)
    })
    // await test.step("Vaildate Logut work properly",async()=>{
    //     await page.locator("//div[@class='user-thumb']").first().click()
    //     await page.locator("//button[text()=' Logout ']").click()
    //     await page.waitForTimeout(1000)
    // })
})
// test.skip("001Login -> 04 Validate invalid format alert for username/email field.",async({page,loginPage})=>{
//     // await page.goto('/admin/#/sign-in')
//     await page.goto("/login")
//     await loginPage.login(data.validusername,data.validpassword)
//     await page.reload()
//     await page.waitForTimeout(50000)
// })
// test("001Login -> 05 Validate invalid username alert.",async({page,loginPage})=>{
//     // await page.goto('/admin/#/sign-in')
//     await page.goto("/login")
//     await loginPage.inputDoesnotexistEmail(data.doesnotexistmail)
//     await loginPage.inputpasswordfield("Test@1234")
//     await loginPage.clickSubmittBtn()
//     await loginPage.verifyInvalidUserName()
//     await page.waitForTimeout(3000)
// })

// test("001Login -> 06 Validate invalid username or password alert.",async({page,loginPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validadminusername, data.commonpassword)
//     await loginPage.verifyUserListText()
//     await page.waitForTimeout(3000)
// })
// test("001Login -> 07 Validate account blocked alert.",async({page,loginPage})=>{
//     await page.goto("/login")
//     await page.reload()
//     await loginPage.inputBlockedEmail(data.inputblockedemail)
//     await loginPage.inputpasswordfield(data.commonpassword)
//     await loginPage.clickSubmittBtn()
//     await page.waitForTimeout(7000)
//     await loginPage.verifyLockedAccountAlert()
// })
// test("001Login -> 08 Validate successfully login with valid username and password.",async({page,loginPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//     await loginPage.verifyAfterSuccessfullyLoginDashboardText()
//     await page.waitForTimeout(3000)
// })