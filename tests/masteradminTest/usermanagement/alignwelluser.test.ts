import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import AlignwelluserPage from "@pages/Alignwelluser.page";
import { Browser, Page } from '@playwright/test';
import { url } from "inspector";
// import userRegistrationPage from '../../../pages/userRegistrationPage/registration.page';
const { chromium } = require('playwright');
test("Validate Alignwell user test",async({page,loginPage,AlignwellPage,context,registrationPage})=>{
    let firstname = "",lastname="", rendomemail="",fullname = "";
        await page.goto("/login")
        await page.reload()
        await loginPage.inputusernamefield(data["2FAUser"])
        await loginPage.enterLoginPassword("Test@1234")
        await loginPage.clickSubmittBtn()
        await page.waitForTimeout(5000)
        const Page = await context.newPage()
        await registrationPage.gotoForOtpValue(Page)
        await registrationPage.fillOtpMail(Page,data["2FAUser"])
        // await Page.locator("#EmailPhone").type(mail,{delay:100})
        await Page.waitForTimeout(5000)
        await registrationPage.clickOtpMailSubmittBtn(Page)
        // await Page.locator("#submitBtn").click({force:true})
        await Page.locator("#otpValue").focus();
        await Page.locator("#otpValue").selectText();
        await Page.keyboard.press("Control+C");
        await Page.close()
        await  page.bringToFront()
        await loginPage.clickOTPInputField()
        // await  page.locator("(//input[@placeholder='-'])[1]").click()
        await page.keyboard.press("Control+V")
        await page.waitForTimeout(4000)
        await AlignwellPage.clickUserManagementPage()
        await page.waitForTimeout(1000)
        await AlignwellPage.clickAlignwellUser()
        await test.step("Verify Add New User popup",async()=>{
            await AlignwellPage.clickAddUserBtn()
            await AlignwellPage.verifyAdduserText()
            await AlignwellPage.verifyInputEmailLabelText()
            await AlignwellPage.verifyAddUserPlaceholerText()
            await AlignwellPage.verifyUserRoleLabelText()
            await AlignwellPage.clickCloseAddUserPopup()
        })
        // await test.step("TC - 01 : Validate Add Align User popup.",async() => {
        //             await AlignwellPage.clickUserManagementPage()
        //             await page.waitForTimeout(3000)
        //             await AlignwellPage.clickAlignwellUser()
        //             await AlignwellPage.clickAddUserBtn()
        //             await AlignwellPage.clickAddNewUserBtn()
        //             await AlignwellPage.clickEmptyEmailIcon()
        //             await AlignwellPage.verifyEmptyEmailText()
        //         })
//    await test.step("TC - 01 : Validate Align well user invalid email message.",async() => {
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAddUserBtn()
//         await AlignwellPage.clickAddNewUserBtn()
//         await AlignwellPage.clickEmptyEmailIcon()
//         await AlignwellPage.verifyEmptyEmailText()
//     })
//     await test.step("TC - 02 : Validate Align well user empty role message.",async()=>{
//         await AlignwellPage.clickEmptyRoleIcon()
//         await AlignwellPage.verifyEmptyRoleText()
//     })
//     await test.step("TC - 03 : Validate Align well user invalid email message.",async()=>{
//         await AlignwellPage.inputInvaliduserEmail()
//         await AlignwellPage.selectMasterAdminUser()
//         await AlignwellPage.clickAddNewUserBtn()
//         await page.waitForTimeout(4000)
//         await AlignwellPage.clickEmptyEmailIcon()
//         await AlignwellPage.verifyInvalidEmail()
//         await page.locator("//input[@placeholder='Please type your email address']").clear()
//     })
    await test.step("TC - 04 : Validate Add new user is successfully added.",async()=>{
        firstname = await AlignwellPage.generateFirstName()
        lastname = await AlignwellPage.generateLastName()
        rendomemail = firstname+lastname+"@yopmail.com"
        await AlignwellPage.clickAddUserBtn()
        await AlignwellPage.InputRendomEmail(rendomemail)
        await AlignwellPage.selectMasterAdminUser()
        await AlignwellPage.clickAddNewUserBtn()
        await page.waitForTimeout(5000)
    })
    await test.step("Edit align well user",async()=>{
        rendomemail= rendomemail. toLowerCase( );
         await AlignwellPage.EditAddNewUser(rendomemail)
         firstname = await AlignwellPage.generateFirstName()
        lastname = await AlignwellPage.generateLastName()
        rendomemail = firstname+lastname+"@yopmail.com"
        await AlignwellPage.InputRendomEmail(rendomemail)
        await AlignwellPage.clikUpdateUserBtn()

        //td[text()=" jamiejohnson@yopmail.com "]/following-sibling::td[3]
    })
//     await test.step("TC - 05 : Validate Align well user search by firstname is working.",async()=>{
//         await AlignwellPage.SearchAlignUser_By_FirstName(firstname)
//     })
//     await test.step("TC - 06 : Validate Align well user search by fullname is working.",async()=>{
//         await AlignwellPage.SearchAlignUser_By_FUllname(firstname+lastname)
//     })
//     await test.step("TC - 07 : Validate Align well user search by email is working.",async()=>{
//         await AlignwellPage.SearchAlignUser_By_Email(rendomemail)
//     })
//     await test.step("TC - 08 : Validate Align well user  Resend link is working.",async()=>{
//         await AlignwellPage.ClickResendLink(rendomemail)
//             await AlignwellPage.verifyResendLinkSuccessfullyMessage()
//     })   
    // await test.step("TC - 09 : Validate Align well user  Edit button is working.",async()=>{
    //       await AlignwellPage.ClickEditAlignUser(rendomemail)
    //       firstname = await AlignwellPage.generateFirstName()
    //       lastname = await AlignwellPage.generateLastName()
    //       rendomemail = firstname+lastname+"@yopmail.com"
    //       await AlignwellPage.InputRendomEmail(rendomemail)
    //       await AlignwellPage.selectAdminUser()
    //       await AlignwellPage.clikUpdateUserBtn()
    // })
    // await test.step("TC - 10 : Validate Align well user deactivate button is working.",async()=>{
    //     await AlignwellPage.ClickDeactivateAndActivate("jonathanblunt@yopmail.com")
    // })
    await test.step("Validate successfully registration for alignwell master admin user",async()=>{
        await page.locator("//div[@class='user-thumb']").first().click()
        await page.locator("//button[text()=' Logout ']").click()
        await page.waitForTimeout(1000)
        const Page = await context.newPage()
        await Page.bringToFront()
        const URL   = `https://dev.alignwell.com/registration?Email=${rendomemail}`
        await registrationPage.gotonewRegisteredMail(Page,URL)
        //  await Page.goto(`https://dev.alignwell.com/registration?Email=${rendomemail}`)
        await registrationPage.clickContinueBtn(Page)
            //  await Page.locator("//button[text()=' Continue ']").click()
             await Page.waitForTimeout(5000)
             const page3 = await context.newPage()
             await page3.bringToFront()
            await registrationPage.gotoForOtpValue(page3)
            // await page3.goto("https://dev.alignwell.com/get-key-value/!24@automation")
            await page3.reload()
            rendomemail= rendomemail. toLowerCase( );
            await registrationPage.fillOtpMail(page3,rendomemail)
            // await page3.locator("#EmailPhone").fill(rendomemail)
            await registrationPage.clickOtpMailSubmittBtn(page3)
            await page3.locator("#submitBtn").click({force:true})
            await page3.waitForTimeout(1000)
            // const modifier = await page3.locator("#otpValue")
            // await page3.locator("#otpValue").focus();
            //await page3.keyboard.press('Control+A');
            await page3.locator("#otpValue").selectText()
            await page3.keyboard.press("Control+C")
            await Page.bringToFront()
            await Page.locator("(//input[@placeholder='-'])[1]").click();
            await Page.waitForTimeout(2000)
            await Page.keyboard.press("Control+V")
            await Page.waitForTimeout(5000)
            await Page.locator('//input[@name="InputPhone"]').fill("8057651210")
            
            await Page.locator("//button[text()=' Continue ']").click()
            await Page.waitForTimeout(5000)
            // await page3.bringToFront()
            // await page3.goto("https://dev.alignwell.com/get-key-value/!24@automation")
            await page3.reload()
            await page3.locator("#EmailPhone").fill("+18057651210")
            await page3.waitForTimeout(2000)
            await page3.locator("#submitBtn").click({force:true})
            await page3.bringToFront()
            await page3.locator("#otpValue").selectText()
            await page3.keyboard.press("Control+C")
            await Page.bringToFront()
            await Page.locator("(//input[@placeholder='-'])[1]").click();
            await Page.waitForTimeout(2000)
            await Page.keyboard.press("Control+V")
            await Page.bringToFront()
            await Page.locator("#firstName").fill(firstname)
            await Page.locator('//input[@formcontrolname="LastName"]').fill(lastname)
            await page.waitForTimeout(3000)
            await Page.locator('#gender').selectOption({label:"Male"},{timeout : 1000})
            await Page.waitForTimeout(2000)
            await registrationPage.inputDOB(Page)
            await registrationPage.selectDesignation(Page)
            await registrationPage.selectDepartment(Page)
            await registrationPage.inputAddress(Page)
            await registrationPage.clickContinue(Page)
            await registrationPage.inputPassword(Page)
            await registrationPage.inputConfirmPassword(Page)
            await registrationPage.clickRegisterSubmitBtn(Page)
            fullname = firstname+" "+lastname;
            console.log(fullname)
            await registrationPage.verifyAcoknowledge(Page)
            await registrationPage.clickAcceptBtn(Page)
            // await registrationPage.verifyUserRegisteredSuccessfully(Page)
            await registrationPage.verifyAddNewRegisteredUser(Page,fullname)
            await registrationPage.clickUserManagementPage(Page)
            await registrationPage.clickAlignwellUser(Page)
            await registrationPage.verifyAddNewUserAfterRegistered_Active(Page,rendomemail)

            
            // await Page.locator("//input[@placeholder='Enter your inbox here']").fill(rendomemail)
            // await Page.locator("//i[@class='material-icons-outlined f36']").click()
            // await Page.waitForTimeout(3000)
            // const ele = await Page.frameLocator("#ifmail").locator("(//div[@id='mail']//a)[1]")
            // await expect(ele).toContainText("ACTIVATE YOUR ACCOUNT")
            // await ele.click()

    })
})
// test("TC - 02 : Validate Align well user empty role message.",async({page,loginPage,AlignwellPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//     test.step("Now click usermanagementPage",async() => {
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//     })
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAddUserBtn()
//         await AlignwellPage.inputAdduserEmail()
//         await AlignwellPage.clickAddNewUserBtn()
//         await AlignwellPage.clickEmptyRoleIcon()
//         await AlignwellPage.verifyEmptyRoleText()
// })
// test("TC - 03 : Validate Align well user invalid email message.",async({page,loginPage,AlignwellPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//     test.step("Now click usermanagementPage",async() => {
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//     })
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAddUserBtn()
//         await AlignwellPage.inputInvaliduserEmail()
//         await AlignwellPage.selectMasterAdminUser()
//         await AlignwellPage.clickAddNewUserBtn()
//         await page.waitForTimeout(4000)
//         await AlignwellPage.clickEmptyEmailIcon()
//         await AlignwellPage.verifyInvalidEmail()
// })
// test("TC - 04 : Validate Add new user is successfully added.",async({page,loginPage,AlignwellPage,context})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//     test.step("Now click usermanagementPage",async() => {
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//     })
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAddUserBtn()
//         const firstname = await AlignwellPage.generateFirstName()
//         const lastname = await AlignwellPage.generateLastName()
//         const rendomemail = firstname+lastname+"@yopmail.com"
//         await AlignwellPage.InputRendomEmail(rendomemail)
//         await AlignwellPage.selectMasterAdminUser()
//         await AlignwellPage.clickAddNewUserBtn()
//         await page.waitForTimeout(5000)
//         const Page = await context.newPage()
//         const [newtab] = await Promise.all([
//             await Page.goto("https://yopmail.com/")
//           ])
//     await Page.goto("https://yopmail.com/")
//     await Page.locator("//input[@placeholder='Enter your inbox here']").fill(rendomemail)
//     await Page.locator("//i[@class='material-icons-outlined f36']").click()
//     await Page.waitForTimeout(3000)
//     const ele = await Page.frameLocator("#ifmail").locator("(//div[@id='mail']//a)[1]")
//     await expect(ele).toContainText("ACTIVATE YOUR ACCOUNT")
//     await ele.click()
// })
// test("TC - 05 : Validate Align well user search field is working..",async({page,loginPage,AlignwellPage})=>{
//     //await AlignwellPage.RendomEmail()
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//     test.step("Now click usermanagementPage",async() => {
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//     })
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(3000)
//         // await AlignwellPage.SearchAlignUser_By_FirstName()
// })
// test("TC - 06 : Validate Align well user search field is working.",async({page,loginPage,AlignwellPage})=>{
//     //await AlignwellPage.RendomEmail()
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(4000)
//         await AlignwellPage.Filter_By_MasterAdmin()
//         await AlignwellPage.Filter_By_Admin()
//         await AlignwellPage.Filter_By_Standard()
// })
// test.skip("TC - 07 : Validate Align well user column wise sorting is woorking.",async({page,loginPage,AlignwellPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(4000)
// })
// test("TC - 08 : Validate Align well user  Resend link is working.",async({page,loginPage,AlignwellPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(7000)
//         // await AlignwellPage.ClickResendLink()
//         await AlignwellPage.verifyResendLinkSuccessfullyMessage()
// })
// test.skip("TC - 09 : Validate Align well user edit button is working.",async({page,loginPage,AlignwellPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(7000)
//         // await AlignwellPage.ClickResendLink()
//         await AlignwellPage.verifyResendLinkSuccessfullyMessage()
// })
// test("TC - 10 : Validate Align well user deactivate button is working.",async({page,loginPage,AlignwellPage})=>{
//     await page.goto("/login")
//     await page.waitForTimeout(4000)
//     await page.reload()
//     await loginPage.login(data.validstandardusername, data.commonpassword)
//         await AlignwellPage.clickUserManagementPage()
//         await page.waitForTimeout(3000)
//         await AlignwellPage.clickAlignwellUser()
//         await page.waitForTimeout(7000)
//         await AlignwellPage.ClickDeactivateAndActivate("jonathanblunt@yopmail.com")
// })