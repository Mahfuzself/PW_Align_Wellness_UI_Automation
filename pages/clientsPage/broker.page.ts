import { expect, Page } from "@playwright/test";
export default class brokerPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private brokerPage_Elements = {
        brokerPage : "//a[contains(text(),'Broker')]",
        addbroker : "//button[text()=' Add Broker ']",
        inputbrokerName : "#BrokerName",
        input_BrokerContactpersonFirstname: "#FirstName",
        input_BrokerContactpersonLastname:"#LastName",
        input_BrokerContactpersonEmail:"#Email",
        input_Broker_Suite:"#SuiteAptLocation",
        AddBrokerText:"//h4[text()='Add broker']",
        BrokerInformation: "//h5[text()='Broker Information']",
        AddNewBrokerBtn:"//button[text()=' Add New Broker ']",
        BrokerNameText: "//label[@for='BrokerName']",
        BrokerPopupCloseIcon:"icon-close",
        AdressText:"//label[@for='address']",
        Suit_Apt_Location:"//label[text()=' Suite/apt/location ']",
        ContactPersonText: "//h5[text()='Contact Person']",
        BrokerName_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        BrokerAddress_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        BrokerContactPerson_FirstName_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[3]",
        BrokerContactPerson_LastName_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[4]",
        BrokerContactPerson_Email_EmptyAlert_Icon:"(//i[contains(@class,'icon-warning-o text-danger')])[5]",
        BrokerEmptyNameAlertText:'//div[text()=" Broker Name cannot be empty. "]',
        BrokerEmptyAddressAlertText:"//div[text()=' Please select a valid address after searching. ']",
        BrokerContactPersonEmptyFirstNameAlertText:"//div[text()=' First Name cannot be empty. ']",
        BrokerContactPersonEmptyLastNameAlertText:"//div[text()=' Last Name cannot be empty. ']",
        BrokerContactPersonEmptyEmailAlertText:"//div[text()=' Email cannot be empty. ']",
        BrokerAddress:"#address",
        brokerSearch:"//input[@placeholder='Search ...']",
        RangeCalender:"//span[@type='button']",



    }
    async clickClientsPage(){
        await this.page.locator("//a[.='Client']").click()
        await this.page.waitForTimeout(3000)
    }
    async clickAddbrokerBtn(){
        const ele = this.page.locator(this.brokerPage_Elements.addbroker)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async click_BrokerName_Empty_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerName_EmptyAlert_Icon)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_EmptyAddress_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerAddress_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_ContactPerson_FirstName_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPerson_FirstName_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person first name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_ContactPerson_LastName_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPerson_LastName_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker Contact person last name empty alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBroker_ContactPerson_Email_AlertIcon(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPerson_Email_EmptyAlert_Icon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person empty email alert icon element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerName_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerEmptyNameAlertText)
        try {
            await expect.soft(ele).toContainText("Broker Name cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker address empty alert icon | Broker name empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerAddress_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerEmptyAddressAlertText)
        try {
            await expect.soft(ele).toContainText("Please select a valid address after searching.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker address empty alert icon | Broker address empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerContactPerson_FirstName_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPersonEmptyFirstNameAlertText)
        try {
            await expect.soft(ele).toContainText("First Name cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person First name empty alert icon | Broker contact person first namme empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerContactPerson_LastName_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPersonEmptyLastNameAlertText)
        try {
            await expect.soft(ele).toContainText("Last Name cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person last name empty alert icon | Broker contact person last namme empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async Verify_BrokerContactPerson_Email_EmptyAlert_Text(){
        const ele = this.page.locator(this.brokerPage_Elements.BrokerContactPersonEmptyEmailAlertText)
        try {
            await expect.soft(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add broker Submitt button | Broker contact person email empty alert icon | Broker contact person email empty alert text element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickAddnewBrokerBtn(){
        const ele = this.page.locator(this.brokerPage_Elements.AddNewBrokerBtn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | Add new broker element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async clickBrokerPage(){
        const ele = this.page.locator(this.brokerPage_Elements.brokerPage)
        try {
            await ele.click()
            await this.page.waitForTimeout(7000)
        } catch (error) {
            throw new Error(`Clients | Broker page element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async inputBroker_Name(){
        const ele = await this.page.locator(this.brokerPage_Elements.inputbrokerName)
        try {
            await ele.fill("Automation_Broker")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Broker | Add broker | Broker page input element is not visible , Could not found locotor : ${Error}`)
        }
    }
    async selectBrokerType_Medical(){
        await this.page.locator("#brokerType").selectOption({label:"Medical"})
        await this.page.waitForTimeout(3000)
    }
    async inputBrokerAddress(){
        const ele =  await this.page.locator(this.brokerPage_Elements.BrokerAddress)
        try {
           await ele.fill("Mirpur-1")
           await this.page.waitForTimeout(1000)
           await this.page.keyboard.press("ArrowDown")
           await this.page.waitForTimeout(1000)
           await this.page.keyboard.press("Enter")
           await this.page.waitForTimeout(1000)
        } catch (error) {
         throw new Error(`Clients | Broker | Add Broker | input Broker address  | input Broker address input field element is not visible, could not found locotor : ${error}`)
        }
     }
     async InputBrokerContactPersonFirstName(){
        const ele = await this.page.locator(this.brokerPage_Elements.input_BrokerContactpersonFirstname)
        try {
            await ele.fill("Test")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | input Broker First Name  | Broker First Name input field element is not visible, could not found locotor : ${error}`)
        }

     }
     async InputBrokerContactPersonLastName(){
        const ele = await this.page.locator(this.brokerPage_Elements.input_BrokerContactpersonLastname)
        try {
            await ele.fill("Automation")
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | input Broker Last Name  | Broker Last Name input field element is not visible, could not found locotor : ${error}`)
        }

     }
     async InputBrokerContactPersonEmail(){
        const ele = await this.page.locator(this.brokerPage_Elements.input_BrokerContactpersonEmail)
        let email = "testautomation"+ new Date().getSeconds()
        try {
            await ele.fill(email)
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | input Broker email  | Broker email input field element is not visible, could not found locotor : ${error}`)
        }

     }
     async InputBrokerContactPerson_PhoneNumber_BD(){
       
        await this.page.locator('//span[@class="select2-selection__arrow"]').click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("//input[@type='search']").fill("BD")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(2000)
        await this.page.locator("input[name='InputPhone']").fill("01568703919")
     
 
     }
     async clickAddNewBroker(){
        const ele = await this.page.locator(this.brokerPage_Elements.AddNewBrokerBtn)
        try {
             await ele.click()
             await this.page.waitForTimeout(7000)
        } catch (error) {
            throw new Error(`Clients | Broker | Add Broker | input Broker all information  | Add new broker button element is not visible, could not found locotor : ${error}`)
        }
     }
     async SearchBroker(){
        const ele = this.page.locator(this.brokerPage_Elements.brokerSearch)
        try {
            await ele.fill("Automation_Broker")
            await this.page.waitForTimeout(6000)
        } catch (error)
         {
            throw new Error(`Clients | Broker |broker Search field element is not visible, could not found locotor : ${error}`)
        }
     }
     async verifySearchBroker(){
        const ele = this.page.locator("//p[@class='user-name'])[1]")
        try {
            await expect(this.page.locator("(//div[@class='user-info']//p)[1]")).toBeTruthy()
        } catch (error) {
            throw new Error(`Clients | Broker | Search broker element is not visible, could not found locotor : ${error}`)
        }
        
     }
     async BrokerCategory_FilterBy_Medical_InformationTechnology_EfficientBroker(){
        await this.page.locator("(//select[@class='form-select'])[1]").selectOption({label:"Medical"})
        await this.page.waitForTimeout(4000)
        await this.page.locator("(//select[@class='form-select'])[1]").selectOption({label:"Information Technology"})
        await this.page.waitForTimeout(4000)
        await this.page.locator("(//select[@class='form-select'])[1]").selectOption({label:"Efficient Broker"})
        await this.page.waitForTimeout(4000)
     }
     async clickCalenderBtn(){
        const ele = await this.page.locator(this.brokerPage_Elements.RangeCalender)
        try {
            await ele.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Clients | Broker | DateRangeButton | Date range button elements is visible, Could not found locotor : ${error}`)
        }

     }
     async selectMonth(){
        await this.page.locator('(//select[@class="form-select"])[2]').selectOption({label :"Aug"})
        await this.page.waitForTimeout(2000)
     }
     async selectYear(){
        await this.page.locator('(//select[@class="form-select"])[3]').selectOption({value:"2023"})
        await this.page.waitForTimeout(2000)
     }
     async selectDate_LowRange(){
        await this.page.locator("//div[@aria-label='Tuesday, August 1, 2023']").click()
        await this.page.waitForTimeout(1000)
     }
    async selectDate_HighRange(){
        await this.page.locator("(//div[@aria-label='Thursday, August 31, 2023'])[1]").click()
        await this.page.waitForTimeout(4000)
    }
    async verifySelectedBroker_DateRang(){
        await expect( this.page.locator('//div[@class="user-info"]/p[1]')).toBeTruthy()
    }
    async selectStatus_Pending(){
        await this.page.locator('(//select[@class="form-select"])[2]').selectOption({label : "Pending"})
        await this.page.waitForTimeout(3000)
    }
    async selectStatus_Active(){
        await this.page.locator('(//select[@class="form-select"])[2]').selectOption({label : "Active"})
        await this.page.waitForTimeout(3000)
    }
    async selectStatus_Inactive(){
        await this.page.locator('(//select[@class="form-select"])[2]').selectOption({label : "Inactive"})
        await this.page.waitForTimeout(3000)
    }
    async selectStatus_InProgress(){
        await this.page.locator('(//select[@class="form-select"])[2]').selectOption({label : "InProgress"})
        await this.page.waitForTimeout(3000)
    }
}