import { expect, FileChooser, Page } from "@playwright/test";
export default class companyPage{
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private CompanyPage_Elements = {
        Company:"//a[contains(text(),'Company')]",
        AddCompany:"//button[text()=' Add Company ']",
        inputCompanyName:"#Companyname",
        inputAdress:"address",
        inputSuite_Apt_Location:"SuitAptLocation",
        inputContactprsonFirstName:"Firstname",
        inputContactprsonLastName:"Lastname",
        inputContactprsonEmail:"Email",
        inputContactprsonPhoneNumber:"InputPhone",
        UploadCompanyProfilePhoto:"(//i[@class='icon-upload'])[1]",
        UploadCompanyCoverPhoto:"(//i[@class='icon-upload'])[2]",
        AddCompanyText:"//h4[text()='Add Company']",
        CompanyInformationText:"//h5[text()='Company Information']",
        EmptyComapanyNameAlertIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmptyAddressAlertIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        EmptyFirstNameAlertIcon: "//input-field[@placeholder='Please enter your first name']//i[1]",
        EmptyLastNameAlertIcon: "//input-field[@placeholder='Please enter your last name']//i[1]",
        EmptyEmailAlertIcon: "//input-field[@placeholder='Please enter your email']//i[1]",
        EmptyAlertCompanyNameText:"//div[text()=' Company name cannot be empty. ']",
        AddCompanySubmittBtn:"//button[@type='submit']",
        EmptyAddressAlerttext: "//div[text()=' Please select a valid address after searching. ']",
        FirstNameAlerttext:"//div[text()=' First name cannot be empty. ']",
        LastNameAlerttext:"//div[text()=' Last name cannot be empty. ']",
        EmailAlerttext:"//div[text()=' Email cannot be empty. ']",
        InvalidEmailFormatText:"//span[text()='Invalid email format']",
        CompanyContactPersonEmailField:"//input[@placeholder='Please enter your email']",
        CompanyNameInputField: "//input[@placeholder='Please type your company name']",
        ContactPerson_FirstName:"#Firstname",
        ContactPerson_LastName:"#Lastname",
        ContactPerson_Email:"#Email",
        ContactPerson_PhoneNumber:"#InputPhone",
        CompanyAddress:"//input[@placeholder='Please enter your company address']",
        CompanyName_Sorting:"//th[text()=' Company Name ']//i",
        Address_Sorting:"//th[text()=' Address ']//i",
        TotalEmployee_Sorting:"//th[text()=' Total Employee ']//i",
        Status_Sorting : "//th[text()=' Status ']//i",
        CompanyName_NeoGen_ActionThreedot:'(//tr[@class="cursor-pointer"])[15]/td[7]',
        CompanyName_Postepay_ActionThreedot:"//tr[14]/td[2]/following-sibling:: td[5]"
        


    }
    async clickClientsPage(){
        await this.page.locator("//a[.='Client']").click()
        await this.page.waitForTimeout(3000)
    }
    async clickCompany(){
        const ele = await this.page.locator(this.CompanyPage_Elements.Company)
        try {
            await ele.click()
            await this.page.waitForTimeout(5000)
        } catch (error) {
            throw new Error(`Clients | Company element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickAddCompany(){
        await this.page.waitForTimeout(8000)
        const ele = await this.page.locator(this.CompanyPage_Elements.AddCompany)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add company element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertCompanynameIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyComapanyNameAlertIcon)
        try {
            await ele.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Company name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertAddressIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyAddressAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Address icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertFirstNameIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyFirstNameAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert First name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertLastnameIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyLastNameAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Last name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async clickEmptyAlertEmailIcon(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyEmailAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Alert Last name icon element is not visible, could not found locetor : ${error}`)
        }
    }
    async verifyEmptyComapnyNameAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyAlertCompanyNameText)
        try {
            await expect.soft(ele).toContainText("Company name cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Empty Company name Alert Icon | Empty company name text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async clickAddCompanySubmittBtn(){
        const ele = await this.page.locator(this.CompanyPage_Elements.AddCompanySubmittBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(10000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Add company submitt | Add company save button element is not visible, could not found locetor : ${error}`)
        }
    }
    async verifyEmptyAddressAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmptyAddressAlerttext)
        try {
            await expect.soft(ele).toContainText("Please select a valid address after searching.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty address text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyEmptyFirstNameAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.FirstNameAlerttext)
        try {
            await expect.soft(ele).toContainText("First name cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty First name text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyEmptyLastNameAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.LastNameAlerttext)
        try {
            await expect.soft(ele).toContainText("Last name cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty Last name text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyEmailAlertText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.EmailAlerttext)
        try {
            await expect.soft(ele).toContainText("Email cannot be empty.")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Address Alert Icon | Empty Email text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async verifyInvalidEmailFormatText(){
        const ele = await this.page.locator(this.CompanyPage_Elements.InvalidEmailFormatText)
        try {
            await expect.soft(ele).toContainText("Invalid email format")
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | Email Alert Icon | Invalid  Email text alert element is not visible, could not found locotor : ${error}`)
        }
    }
    async InputInvalidEmail(){
        const ele = await this.page.locator(this.CompanyPage_Elements.CompanyContactPersonEmailField)
        try {
            await ele.fill("invalidemail")
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | input email field | Company name email field element is not visible, could not found locotor : ${error}`)
        }
    }
    async InputCompanyName(){
        const rendomComapnyName =("TestAutomation").concat((new Date().getTime()).toString());
        const ele = await this.page.locator(this.CompanyPage_Elements.inputCompanyName)
        try {
             await ele.fill(rendomComapnyName)
             await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | input company field | Company name field element is not visible, could not found locotor : ${error}`)
        }

    }
    async SelectCompanyType_Fintech(){
       const ele = await this.page.locator("#companyType")
       try {
        await this.page.locator("#companyType").selectOption({label:"Fintech"})
        await this.page.waitForTimeout(2000)
       } catch (error) {
        throw new Error(`Clients | Company | Add Company | input company field | Company name field element is not visible, could not found locotor : ${error}`)
       }
    }
    async upload_Company_ProfileImages() {
        // const filePath0 = "testData/Images/company.jpg"
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator("(//div[contains(@class,'col-12 col-md-6')])[1]").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./testData/Images/company.jpg');
         await this.page.waitForTimeout(15000)
         await this.page.waitForLoadState()
        
    }
    async upload_Company_BannerImages() {
        // const filePath0 = "testData/Images/banner.jpg"
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator("(//div[contains(@class,'col-12 col-md-6')])[2]").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./testData/Images/banner.jpg');
         await this.page.waitForTimeout(15000)
         await this.page.keyboard.press('ArrowDown')
         await this.page.waitForLoadState()
    }
    async Select_Automation_broker(){
        await this.page.locator("#broker").selectOption({label:"Automation_Broker"})
        await this.page.waitForTimeout(2000)
    }
    async InputCompanyContactPerson_FirstName(){
        const rendomContactFirstName = "FirstName"+new Date().getSeconds()
        const ele = await this.page.locator(this.CompanyPage_Elements.ContactPerson_FirstName)
        try {
             await ele.fill(rendomContactFirstName)
             await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | input contact person first name  | input contact person first name field element is not visible, could not found locotor : ${error}`)
        }

    }
    async InputCompanyContactPerson_LastName(){
        const rendomContactLastName = "LastName"+new Date().getSeconds()
        const ele = await this.page.locator(this.CompanyPage_Elements.ContactPerson_LastName)
        try {
             await ele.fill(rendomContactLastName)
             await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | input contact person last name  | input contact person last name field element is not visible, could not found locotor : ${error}`)
        }

    }
    async InputCompanyContactPerson_Email(){
        let rendomEmail = "lastName+firstname"+new Date().getSeconds()
        const ele = await this.page.locator(this.CompanyPage_Elements.ContactPerson_Email)
        try {
            rendomEmail = rendomEmail+"@yopmail.com"
             await ele.fill(rendomEmail)
             await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`Clients | Company | Add Company | input contact person email  | input contact person email field element is not visible, could not found locotor : ${error}`)
        }

    }
    async InputCompanyContactPerson_PhoneNumber_BD(){
       
       await this.page.locator('//span[@class="select2-selection__arrow"]').click()
       await this.page.waitForTimeout(1000)
       await this.page.locator("//input[@type='search']").fill("BD")
       await this.page.keyboard.press("Enter")
       await this.page.waitForTimeout(2000)
       await this.page.locator("input[name='InputPhone']").fill("01568703919")
    

    }
    async inputCompanyAddress(){
       const ele =  await this.page.locator(this.CompanyPage_Elements.CompanyAddress)
       try {
          await ele.fill("Mirpur-1")
          await this.page.waitForTimeout(1000)
          await this.page.keyboard.press("ArrowDown")
          await this.page.waitForTimeout(1000)
          await this.page.keyboard.press("Enter")
          await this.page.waitForTimeout(1000)
       } catch (error) {
        throw new Error(`Clients | Company | Add Company | input company address  | input company address input field element is not visible, could not found locotor : ${error}`)
       }
    }
    async CompanyNameSearch_By_FullName(){
        await this.page.locator("//input[@placeholder='Search ...']").fill("Gentale Park")
        await this.page.waitForTimeout(2000)
        const ele = await this.page.locator('//p[text()="Gentale Park"]')
        await expect.soft(ele).toContainText("Gentale Park")
        await this.page.waitForTimeout(2000)
    }
    async StatuswiseFiler_Pending(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Pending"})
        await this.page.waitForTimeout(5000)
    }
    async StatuswiseFiler_Active(){
        await this.page.locator('//select[@class="form-select"]').selectOption({value:"2"})
        await this.page.waitForTimeout(5000)
    }
    async StatuswiseFiler_Inactive(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Inactive"})
        await this.page.waitForTimeout(5000)
    }
    async StatuswiseFiler_Inprogress(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"InProgress"})
        await this.page.waitForTimeout(5000)
    }
    async ColumnWise_Soring_CompanyName(){
        await this.page.locator(this.CompanyPage_Elements.CompanyName_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.CompanyName_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.CompanyName_Sorting).click()
        await this.page.waitForTimeout(1000)
    }
    async ColumnWise_Soring_CompanyName_Address(){
        await this.page.locator(this.CompanyPage_Elements.Address_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.Address_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.Address_Sorting).click()
        await this.page.waitForTimeout(1000)
    }
    async ColumnWise_Soring_Company_TotalEmployee(){
        await this.page.locator(this.CompanyPage_Elements.TotalEmployee_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.TotalEmployee_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.TotalEmployee_Sorting).click()
        await this.page.waitForTimeout(1000)
    }
    async ColumnWise_Soring_Company_Status(){
        await this.page.locator(this.CompanyPage_Elements.Status_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.Status_Sorting).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.CompanyPage_Elements.Status_Sorting).click()
        await this.page.waitForTimeout(1000)
    }
    async clickCompany_NeoGen_ActionThreeDot(){
        const ele =  await this.page.locator(`(//tr[@class="cursor-pointer"])[15]//div[text()=' In Progress ']`).isVisible()
        if( ele == true){
            await this.page.locator(this.CompanyPage_Elements.CompanyName_NeoGen_ActionThreedot).click()
            await this.page.waitForTimeout(1000)
            console.log("Hellow")
            
        }
        
    }
    async clickCompany_PostPay_ActionThreeDot_ForActivated(){
        const ele =  await this.page.locator(`(//tr[@class="cursor-pointer"])[14]//div[text()=' Inactive ']`).isVisible()
        if( ele == true){
            await this.page.locator(`(//tr[@class="cursor-pointer"])[14]/td[7]`).click()
            await this.page.waitForTimeout(1000)
            console.log("Hellow")
            
        }
        
    }
    async clickCompany_PostPay_ActionThreeDot_ForDeActivated(){
        const ele =  await this.page.locator(`(//tr[@class="cursor-pointer"])[14]//div[text()=' Active ']`).isVisible()
        if( ele == true){
            await this.page.locator(`(//tr[@class="cursor-pointer"])[14]/td[7]`).click()
            await this.page.waitForTimeout(1000)
            console.log("Hellow")
            
        }
        
    }
    async clickCompany_Postepay_ActionThreeDot(){
        const ele =  await this.page.locator('//tr[14]/td[2]/following-sibling:: td[4]/div[text()=" Active "]').isVisible()
           if(ele == true){
            await this.page.locator(this.CompanyPage_Elements.CompanyName_Postepay_ActionThreedot).click()
            await this.page.waitForTimeout(1000)
           }
    }
   async clickResendLink(){
     await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
     await this.page.waitForTimeout(1000)
     const ele = await this.page.locator("//div[text()=' Do you want to resend link to this company? ']")
     await expect.soft(ele).toContainText("Do you want to resend link to this company?")
     await this.page.locator("//button[text()=' Yes ']").click()
     await this.page.waitForTimeout(1000)

   }
   async verifyResendLinkSuccessfully(){
      const ele = await this.page.locator("//h4[text()='Link has been resend successfully']")
      await expect.soft(ele).toContainText("Link has been resend successfully")
      await this.page.waitForTimeout(1000)
   }
   async clickDeactivatedBtn(){
    await this.page.locator("//div[@class='dropdown-menu show']//button[1]").click()
    await this.page.waitForTimeout(1000)
    const ele = await this.page.locator("//div[text()=' Do you want to deactivate this company? ']")
    await expect.soft(ele).toContainText("Do you want to deactivate this company?")
    //click yes
    await this.page.locator("//button[text()=' Yes ']").click()
    await this.page.waitForTimeout(1000)
   }
   async clickActivatedBtn(){
    await this.page.locator("//div[@class='dropdown-menu show']//button[1]").click()
    await this.page.waitForTimeout(1000)
    const ele = await this.page.locator("//div[text()=' Do you want to activate this company? ']")
    await this.page.waitForTimeout(1000)
    await expect.soft(ele).toContainText("Do you want to activate this company?")
    //click yes
    await this.page.locator("//button[text()=' Yes ']").click()
    await this.page.waitForTimeout(1000)
   }
   async verifyCompanyActivatedSuccessfully(){
    const ele = await this.page.locator("//h4[text()='The User has been activated']")
    await expect.soft(ele).toContainText("The User has been activated")
    await this.page.waitForTimeout(1000)
 }
 async verifyCompanyDeActivatedSuccessfully(){
    const ele = await this.page.locator("//h4[text()='The User has been deactivated']")
    await expect.soft(ele).toContainText("The User has been deactivated")
    await this.page.waitForTimeout(1000)
 }
   
}