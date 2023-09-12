import { expect, Page } from "@playwright/test";
export default class EventsPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private eventsPage_Elements = {
        Eventsmanagement : "//a[.='Event Management']",
        Events: "//a[contains(text(),'Events')]",
        AddEvents:"//button[text()=' Add Event ']",
        CompanyDropdown:"//select[contains(@class,'form-select ng-pristine')]",
        Company : "//select[@formcontrolname='clientName']",
    }
    async clickEventsmanagement(){
        const ele = await this.page.locator(this.eventsPage_Elements.Eventsmanagement)
        try {
            await ele.click({button:"left",delay:1000})
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Event management page elements is not visible : ${error}`)
        }
    }
    async clickEvent(){
        const ele = await this.page.locator(this.eventsPage_Elements.Events)
        try {
            await ele.click({button:"left",delay:1000})
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Events | Event page elements is not visible : ${error}`)
        }
    }
    async clickAddEventBtn(){
        const ele = await this.page.locator(this.eventsPage_Elements.AddEvents)
        try {
            await ele.click({button:"left",delay:1000})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Events | Add Event page elements is not visible : ${error}`)
        }
    }
    async clickforselectCompany(){
        const ele = await this.page.locator(this.eventsPage_Elements.CompanyDropdown)
        try {
            await this.page.waitForTimeout(2000)
            // await this.page.selectOption(ele,{value: "Bkash"})
            await this.page.waitForTimeout(2000)
            // await this.page.locator(this.eventsPage_Elements.Company).selectOption(})
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Events | Add Event page elements is not visible : ${error}`)
        }
    }
    
 
}