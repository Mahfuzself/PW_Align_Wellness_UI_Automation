import { expect, Page } from "@playwright/test";
import * as name from "testData/Name.json"
export default class vendoradminPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private vendorAdminPage_Elements = {
        vedorPage : "//a[.='Vendor']",
        vendorListText: "//h1[text()='Vendor List']",
        AddVendor:"//button[text()=' Add Vendor ']",
        AddNewVendorBtn:"//button[text()=' Add new Vendor ']",
        VendorNameIconAlert:"(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        VendorNameCannotEmptyText:"//div[text()=' Vendor name cannot be empty. ']",
        VendorContactPersonFirstNameAlertIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[2]",
        VendorContactPersonLastNameAlertIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[3]",
        VendorContactPersonEmailAlertIcon:"(//i[contains(@class,'icon-warning-o text-danger')])[4]",
        FirstNameCannotBeEmptyText:"//div[text()=' First name cannot be empty. ']",
        lastNameCannotBeEmptyText:"//div[text()=' Last name cannot be empty. ']",
        EmailCannotBeEmptyText:"//div[text()=' Email cannot be empty. ']",
        InputVendorName:"//input[@placeholder='Please enter your vendor name']",
        InputFirstName:"//input[@placeholder='Please enter your first name']",
        InputLastName:"//input[@placeholder='Please enter your last name']",
        InputEmail:"//input[@placeholder='Please enter your email address']",
        EmployeeList:"//span[text()='Employee List']",


    }
    async clickVendorPage(){
        
        const ele = this.page.locator(this.vendorAdminPage_Elements.vedorPage)
        
        try {
            await ele.click({force:true})
            await this.page.waitForTimeout(5000)
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Vendor Page elements is not visible , Could not found locotor : ${error}`)
        }
        await this.page.waitForTimeout(10000)
    }
    async clickAddVendorBtn(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.AddVendor)
        try {
            await ele.click()
            await this.page.waitForTimeout(4000)
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Add Vendor | Add Vendor Page elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async clickAddNewVendorBtn(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.AddNewVendorBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(20000)
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Add Vendor | Add new Vendor Page elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async clickEmptyVendorNameAlertIcon(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.VendorNameIconAlert)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Add Vendor | Add new Vendor | Empty vendor name alert icon elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async verifyVendorListText(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.vendorListText)
        try {
            await expect(ele).toContainText("Vendor List")
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Vendor List text elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async verifyVendorNameCannotBeEmptyText(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.VendorNameCannotEmptyText)
        try {
            await expect(ele).toContainText("Vendor name cannot be empty.")
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor | Add New Vendor Btn | Empty vendor Alert Icon |Empty vendor Alert text elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async clickVendorContactPersonFirstNameEmptyAlertIcon(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.VendorContactPersonFirstNameAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Add Vendor | Add new Vendor | Empty vendor Contact person First name alert icon elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async clickVendorContactPersonLastNameEmptyAlertIcon(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.VendorContactPersonLastNameAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Add Vendor | Add new Vendor | Empty vendor Contact person Last name alert icon elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async clickVendorContactPersonEMailEmptyAlertIcon(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.VendorContactPersonEmailAlertIcon)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor | Add Vendor | Add new Vendor | Empty vendor Contact person Email alert icon elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async verifyVendorContactPersonFirstNameCannotBeEmptyText(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.FirstNameCannotBeEmptyText)
        try {
            await expect(ele).toContainText("First name cannot be empty.")
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor | Add New Vendor Btn | First Name Alert Icon | Empty vendor contact first name text elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async verifyVendorContactPersonLastNameCannotBeEmptyText(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.lastNameCannotBeEmptyText)
        try {
            await expect(ele).toContainText("Last name cannot be empty.")
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor | Add New Vendor Btn | Last Name Alert Icon | Empty vendor contact first name text elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async verifyVendorContactPersonEmailCannotBeEmptyText(){
        const ele = this.page.locator(this.vendorAdminPage_Elements.EmailCannotBeEmptyText)
        try {
            await expect(ele).toContainText("Email cannot be empty.")
        } catch (error) {
            throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor | Add New Vendor Btn |Email Alert Icon | Empty vendor contact first name text elements is not visible , Could not found locotor : ${error}`)
        }
    }
    async InputVendorName(Vname : string){
        // var VendorName = Name[0].firstName + Name[0].lastName
        await this.page.locator(this.vendorAdminPage_Elements.InputVendorName).fill(Vname)
    }
    // async clickVendorCategoryField(){
    //     await this.page.locator("//input[@placeholder='vendor categories']").click()
    //     await this.page.waitForTimeout(1000)
    // }
    async checkedVendorCategory_Dentist(){
        await this.page.locator("//input[@placeholder='vendor categories']").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("#Dentists").check()
    }
    async checkedVendorCategory_PhysicalTherapy(){
        await this.page.locator("//input[@placeholder='vendor categories']").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("//input[@id='Physical Therapy']").check()
    }
    async checkedVendorCategory_Nutritionists (){
        await this.page.locator("//input[@placeholder='vendor categories']").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("#Nutritionists").check()
        await this.page.waitForTimeout(1000)
    }
    async upload_vendor_ProfileImages() {
        // const filePath0 = "testData/Images/company.jpg"
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator("(//i[@class='icon-upload'])[1]").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./testData/images/vendor.png');
         await this.page.waitForTimeout(10000)
         await this.page.mouse.click(5,6)
        
    }
    async upload_vendor_BannerImages() {
        // const filePath0 = "testData/Images/company.jpg"
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator("(//i[@class='icon-upload'])[2]").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./testData/images/vendor-logo.jpg');
         await this.page.waitForTimeout(10000)
         await this.page.mouse.click(5,6)
        
    }
    async inputVendorContactPersonFirstName(FirstName : string){
       const ele =  await this.page.locator(this.vendorAdminPage_Elements.InputFirstName)
       try {
        await ele.click()
          await ele.fill(FirstName)
       } catch (error) {
         throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor |contact person first name input elements is not visible , Could not found locotor : ${error}`)
       }
    }
    async inputVendorContactPersonLastName(LastName : string){
        const ele =  await this.page.locator(this.vendorAdminPage_Elements.InputLastName)
        try {
            await ele.click()
           await ele.fill(LastName)
        } catch (error) {
          throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor |contact person last name input elements is not visible , Could not found locotor : ${error}`)
        }
     }
     async inputVendorContactPersonEmail(email : string){
        const ele =  await this.page.locator(this.vendorAdminPage_Elements.InputEmail)
        try {
           await ele.fill(email)
        } catch (error) {
          throw new Error(`AlignWellNess | Master Admin User Login | Vendor page | Add Vendor |contact person email input elements is not visible , Could not found locotor : ${error}`)
        }
     }
     async InputVendorContactPerson_PhoneNumber_BD(){
       
        await this.page.locator('//span[@class="select2-selection__arrow"]').click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("//input[@type='search']").fill("BD")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(2000)
        await this.page.locator("input[name='InputPhone']").fill("01568703919")
     
 
     }
     

     async capFirst(string:String) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    async  getRandomInt(min: number, max: number) {
          return Math.floor(Math.random() * (max - min)) + min;
    }
    
    async generateFullName(){
        let name1 = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter","Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
    
        let name2 = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde"];
    
        let fullname = await this.capFirst(name1[ await this.getRandomInt(0, name1.length + 1)]) + ' ' + await this.capFirst(name2[await this.getRandomInt(0, name2.length + 1)]);
    
    }
    async generateRendomEmail(){
        
        
        let name1 = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter","Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
    
        let name2 = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde"];
    
        let email = await this.capFirst(name1[ await this.getRandomInt(0, name1.length + 1)]) + await this.capFirst(name2[await this.getRandomInt(0, name2.length + 1)])+"@yopmail.com";
        console.log(email)
        return email;
    
    }
    async generateFirstName(){
        let name1 = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter","Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
        let firstname =  await this.capFirst(name1[ await this.getRandomInt(0, name1.length + 1)])
        return firstname;
        
    }
    async generateLastName(){
        let name2 = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde"];
        let lastname =  await this.capFirst(name2[ await this.getRandomInt(0, name2.length + 1)])
        return lastname
        
    }
    async clickCreatedvendorDetails(){
        await this.page.locator('//td[text()=" 1 "]').dblclick()
        // await this.page.locator('//td[text()=" 1 "]').click({force:true})
        await this.page.waitForTimeout(3000)
    }
    async clickVendorDetails_EmployeeList(){
        await this.page.locator(this.vendorAdminPage_Elements.EmployeeList).click()
        await this.page.waitForTimeout(2000)
       
    }
    async copyEmployeeEmail(){
        const ele = await this.page.locator("((//tbody[@class='border-top-0']//td)[3])[1]").selectText()
       await this.page.keyboard.press("Control+C")
       const clipboardText1 = await this.page.evaluate("navigator.clipboard.readText()");
       return clipboardText1;
    }
    async pasteEmployeeEmail(){
        await this.page.locator("//input[@placeholder='Search ...']").click()
        await this.page.keyboard.press("Control+V")
        await this.page.waitForTimeout(5000)
    }
    async LogoutUser(){
        await this.page.locator("//h5[@class='user-name']").click()
        await this.page.waitForTimeout(3000)
        await this.page.locator("//button[text()=' Logout ']").click()
        await this.page.waitForTimeout(3000)
    }
     
}