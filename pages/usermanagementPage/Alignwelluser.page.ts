import { expect, Page } from "@playwright/test";
export default class AlignwelluserPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private AlignwellnessuserElements = {
        AlignwellUser: "//a[contains(text(),'Align Well User')]",
        AddUser : "//button[text()=' Add User ']",
        emptyEmailText:"//div[text()=' Email cannot be empty. ']",
        EmptyEmailIcon: "(//i[contains(@class,'icon-warning-o text-danger')])[1]",
        EmptyRoleIcon: "//i[contains(@class,'icon-warning-o text-danger')]",
        usermanagementPage : "//a[.='User Management']",
        AddNewUser: "//button[text()=' Add New User ']",
        AddUserEmailField: "//input[@placeholder='Please type your email address']",
        EmptyUserRoleText: "//div[text()=' User role cannot be empty. ']",
        MasterAdmin : "#userRole",
        InvalidEmailText:'//span[text()="Invalid email format"]',
        AlignWellUserSearch: "//input[@placeholder='Search ...']",
        SerchFirstName : "//p[@class='user-name']",
        columnArrowup:"//i[@class='d-inline-flex icon-arrow-up']",
        columnArrowdown:"//i[@class='d-inline-flex icon-arrow-down']",
        Status_Active:"//div[text()=' Active ']",
        Status_Deactive:"//div[text()=' Pending ']",
        ActionThreeDot:'//div[@class="dropdown"]',//td[text()='Adam Gilchrist']/following-sibling::td,ralphmcmillen@yopmail.com
        ActionThreeForResendLink:"//td[text()=' ralphmcmillen@yopmail.com ']/following-sibling::td[3]",
        ResendLinkSuccessfullyMessage:"//h4[text()='Link has been resend successfully']",
        DeactivateAlignUser:"//td[text()=' jonathanblunt@yopmail.com ']/following-sibling::td[3]",
        AddUserText:'//h4[text()="Add User"]',
        EmailLabel:'//label[@for="Email"]',
        UserRoleLabe:'//label[@for="userRole"]',
        EmailPlaceHolder:'//input[@placeholder="Please type your email address"]',
        AddUserButtoonText:'//button[text()=" Add New User "]',
        AddUserPopupCloseBtn:' //i[@class="icon-close"]',
        //td[text()=' jonathanblunt@yopmail.com ']/following-sibling::td[3]

    }
    async clickAlignwellUser(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AlignwellUser)
            await ele.click({delay:1000})
            await this.page.waitForTimeout(1000)
    }
    async clickAddUserBtn(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddUser)
        try {
            await ele.click({button:"left",delay: 1000})
        } catch (error) {
            throw new Error(`Align well add user element is not visible, Could not found loctor  : ${Error}`)
        }
    }
    async clickEmptyEmailIcon(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyEmailIcon)
        try {
            await ele.click({button:"left",delay: 1000})
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align well user empty email icon element is not visible, Could not found loctor: ${Error}`)
        }
    }
    async clickEmptyRoleIcon(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyRoleIcon).last()
        try {
            await ele.last().click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Align well user empty Role icon element is not visible, Could not found loctor: ${Error}`)
        }
    }
    async clickUserManagementPage(){
        await this.page.waitForTimeout(1000)
        const ele = await this.page.locator(this.AlignwellnessuserElements.usermanagementPage)
            await ele.click()
    }
    async verifyEmptyRoleText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmptyUserRoleText)
        try {
            await this.page.waitForTimeout(1000)
             await expect.soft(ele).toContainText("User role cannot be empty.")
             console.log("Successfully verified!")
        } catch (error) {
            throw new Error(`Align well add user empty role text element is not visible, Could not found loctor : ${error}`)
        }
    }
    async verifyEmptyEmailText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.emptyEmailText)
        try {
            await this.page.waitForTimeout(1000)
             await expect.soft(ele).toContainText("Email cannot be empty.")
             console.log("Successfully verified!")
        } catch (error) {
            throw new Error(`Align well add user empty email message element is not visible, Could not found loctor : ${Error}`)
        }
    }
    async clickAddNewUserBtn(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddNewUser)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Add new user button element is not visible , Could not found locator : ${Error}`)
        }
    }
    async inputAdduserEmail(){
        const ele  = await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField)
        try {
            await ele.fill('testautomation@yopmail.com')
        } catch (error) {
             throw new Error(`Add user email field element is not visible , Could not found locator : ${Error}`)
        }
    }
    async inputInvaliduserEmail(){
        const ele  = await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField)
        try {
            await ele.fill('testautomation@')
        } catch (error) {
             throw new Error(`Add user email field element is not visible , Could not found locator : ${Error}`)
        }
    }
    async selectMasterAdminUser(){
        await this.page.waitForTimeout(1000)
       await this.page.locator(this.AlignwellnessuserElements.MasterAdmin).selectOption({label:"Master Admin"},{timeout:1000})
       await this.page.waitForTimeout(2000)
    }
    async selectAdminUser(){
        await this.page.locator(this.AlignwellnessuserElements.MasterAdmin).selectOption({label:"Admin"})
        await this.page.waitForTimeout(2000)
     }
    async verifyInvalidEmail(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.InvalidEmailText)
        //await this.page.waitForSelector(this.AlignwellnessuserElements.InvalidEmailText)
        try {
            await expect.soft(ele).toContainText("Invalid email format")
        } catch (error) {
            throw new Error(`Usermanagement || Alignwell User || Add User || Input invaliad email || click Add new User || Invalid email text element is not visible, Could not found locotor : ${Error}`)
        }
    }
    async InputRendomEmail(rendomemail : string){
        // const email = "Test"
        // const randomString = new Date().getTime();
        // const testEmail = `${email}${randomString}@yopmail.com`;
        await this.page.locator(this.AlignwellnessuserElements.AddUserEmailField).fill(rendomemail)
    }
    async SearchAlignUser_By_FirstName(firstname : string){
      const ele = await this.page.locator(this.AlignwellnessuserElements.AlignWellUserSearch)
     if(await ele.isVisible()){
        await ele.fill(firstname)
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(5000)
        await ele.clear()
     }
     
    }
    async SearchAlignUser_By_Email(email : string){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AlignWellUserSearch)
       if(await ele.isVisible()){
          await ele.fill(email)
          await this.page.waitForLoadState()
          await this.page.waitForTimeout(5000)
          await ele.clear()
          await this.page.waitForTimeout(2000)
          
       }
     
      }
      async EditAddNewUser(searchmail : string){
        await this.page.waitForTimeout(3000)
        const ele = await this.page.locator(`//td[text()=" ${searchmail} "]/following-sibling::td[3]`)
        console.log(ele)
        //td[text()=" jamiejohnson@yopmail.com "]/following-sibling::td[3]//
            await this.page.locator("//input[@placeholder='Search ...']").type(searchmail,{delay:100})
            await this.page.locator("//input[@placeholder='Search ...']").clear()
            await this.page.waitForTimeout(1000)
            await this.page.locator("//input[@placeholder='Search ...']").type(searchmail,{delay:100})
            await this.page.waitForTimeout(1000)
            await ele.click({delay : 500})
            await this.page.locator("//button[text()=' Edit ']").first().click()

      }
      async SearchAlignUser_By_FUllname(fullname : string){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AlignWellUserSearch)
       if(await ele.isVisible()){
          await ele.fill(fullname)
          await this.page.waitForLoadState()
          await this.page.waitForTimeout(5000)
          await ele.clear()
          
       }
     
      }
    async Filter_By_MasterAdmin(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Master Admin"})
        await this.page.waitForTimeout(10000)
     }
     async Filter_By_Admin(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Admin"})
        await this.page.waitForTimeout(10000)
     }
     async Filter_By_Standard(){
        await this.page.locator('//select[@class="form-select"]').selectOption({label:"Standard"})
        await this.page.waitForTimeout(10000)
     }
     async ClickResendLink(rendomemail : string){
       rendomemail = rendomemail.toLowerCase()
    //    console.log(`//td[text()=' ${rendomemail} ']/following-sibling::td[3]`)
        await this.page.locator(`//td[text()=' ${rendomemail} ']/following-sibling::td[3]`).click()
        // console.log(`//td[text()=' ${rendomemail} ']/following-sibling::td[3]`)
        await this.page.waitForTimeout(5000)
        await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("//button[text()=' Yes ']").click()
        await this.page.waitForTimeout(5000)
     }
     async ClickEditAlignUser(rendomemail : string){
        rendomemail = rendomemail.toLowerCase()
     //    console.log(`//td[text()=' ${rendomemail} ']/following-sibling::td[3]`)
         await this.page.locator(`//td[text()=' ${rendomemail} ']/following-sibling::td[3]`).click()
         // console.log(`//td[text()=' ${rendomemail} ']/following-sibling::td[3]`)
         await this.page.waitForTimeout(5000)
         await this.page.locator("(//div[@class='dropdown-menu show']//button)[1]").click()
         await this.page.waitForTimeout(1000)
        //  await this.page.locator("//button[text()=' Yes ']").click()
        //  await this.page.waitForTimeout(5000)
      }
      async clikUpdateUserBtn(){
        const ele = await this.page.locator("//button[text()=' Update User ']")
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`UserManagement | Align User | Specefic User | Action Three Dot | Edit | Update user button locotor is not visible : ${Error}`);
        }
      }
     async verifyResendLinkSuccessfullyMessage(){
        await expect(this.page.locator(this.AlignwellnessuserElements.ResendLinkSuccessfullyMessage)).toContainText("Link has been resend successfully")
        await this.page.waitForTimeout(1000)
     }
     async ClickDeactivateAndActivate(email : string){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AlignWellUserSearch)
        if(await ele.isVisible()){
           await ele.fill(email)
           await this.page.waitForLoadState()
           await this.page.waitForTimeout(2000)
           
        }
        await this.page.locator(this.AlignwellnessuserElements.DeactivateAlignUser).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
        await this.page.waitForTimeout(3000)
        await this.page.locator("//button[text()=' Yes ']").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.AlignwellnessuserElements.DeactivateAlignUser).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("(//div[@class='dropdown-menu show']//button)[2]").click()
        await this.page.waitForTimeout(3000)
        await this.page.locator("//button[text()=' Yes ']").click()
        await this.page.waitForTimeout(5000)
     }
     async  getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
  }
     async capFirst(string:String) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
    async verifyAdduserText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddUserText)
        try {
            await expect(ele).toContainText("Add User")

        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User | Add user text is not visible in Add user: ${Error}`)
        }
    }
    async verifyInputEmailLabelText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmailLabel)
        try {
            await expect(ele).toContainText("Email")

        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User | Input email label Email text is not visible in Add user : ${Error}`)
        }
    }
    async verifyUserRoleLabelText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.UserRoleLabe)
        try {
            await expect(ele).toContainText("Role")

        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User |Use Role label Role text is not visible in Add user:${Error}`)
        }
    }
    async verifyAddUserPlaceholerText(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.EmailPlaceHolder)
        try {
            await this.page.getByPlaceholder("Please type your email address")
            // await expect(ele).toConta("Please type your email address")

        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User |Input Align User Placeholder text is not visible in Add user :${Error}`)
        }
    }
    async verifyAddNewUserBtntext(){
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddUserButtoonText)
        try {
            await expect(ele).toContainText("Add New User")

        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User | Add New User button text is not visible in Add user :${Error}`)
        }
    }
    async clickCloseAddUserPopup(){
        
        const ele = await this.page.locator(this.AlignwellnessuserElements.AddUserPopupCloseBtn)
        try {
            await ele.click({delay:1000})

        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User | Add New User popup close button locator is not visible in Add user :${Error}`)
        }
    }
    async clickForUpdateUser(){
        const ele = await this.page.locator('//button[text()=" Update User "]')
        try {
              await ele.click({delay : 1000})
        } catch (error) {
            throw new Error(`Login | UserManagement | Align User | Add User | Added user Three Dot | Edit User | Add New User Update user button locator is not visible in Add user :${Error}`)
        }
    }
}