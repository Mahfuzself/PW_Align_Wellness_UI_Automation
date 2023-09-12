import { expect, Page } from "@playwright/test";
export default class vendorPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private vendorPortalPage_Elements ={
        vendorAvatar: '//div[@class="header-user"]/div[1]',
        vendorName:'//h5[text()="Don Strickland"]',
        Myprofile:'//button[text()=" My profile "]',
        PersonalInformationText : '//h2[text()="PERSONAL Information"]',
        VendorProfile:'//button[text()=" Vendor profile "]',
        vendorinformationText : "//h2[text()='Vendor Information']",
    }
    async clickVendorAvatar(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.vendorAvatar)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor avatar element is not visible : ${error}`)
        }
    }
    async verifyvendorName(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.vendorName)
        try {
            await expect.soft(ele).toContainText("Don Strickland")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor name (Don Strickland) element is not visible : ${error}`)
        }
    }
    async verifyMyProfile(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.Myprofile)
        try {
            await expect.soft(ele).toContainText("My profile")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor Avatar | My profile element is not visible : ${error}`)
        }
    }
    async clickMyProfile(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.Myprofile)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor Avatar | My profile element is not visible : ${error}`)
        }
    }
    async verifyMyProfile_PersonalInformationtext(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.PersonalInformationText)
        try {
            await expect.soft(ele).toContainText("PERSONAL Information")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor Avatar | My profile | Personal Information element is not visible : ${error}`)
        }
    }
    async verifyVendorProfile(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.VendorProfile)
        try {
            await expect.soft(ele).toContainText("Vendor profile")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor Avatar | Vendor profile element is not visible : ${error}`)
        }
    }
    async clickVendorProfile(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.VendorProfile)
        try {
            await ele.click()
            await this.page.waitForTimeout(6000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor Avatar | vendor profile element is not visible : ${error}`)
        }
    }
    async verifyVendorProfile_VendorInformation(){
        const ele = await this.page.locator(this.vendorPortalPage_Elements.vendorinformationText)
        try {
            await expect.soft(ele).toContainText("Vendor Information")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Vendor portal | Vendor Avatar | Vendor profile  | Vendor Information textelement is not visible : ${error}`)
        }
    }
    
}