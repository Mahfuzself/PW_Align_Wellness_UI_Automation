import { expect, Page } from "@playwright/test";
import { TIMEOUT } from 'dns';
import AlignwelluserPage from '../usermanagementPage/Alignwelluser.page';

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
        clientList:"#clientList",
        inputEventName:"#EventName",
        EventNameLabel:' //label[text()=" Event Name "]',
        EventFlayerNote : "#eventFlyerNote",
        AditionalinfoChecked:'//input[@type="checkbox"]',
        BloodSugar:'//label[text()="Bio Metrics"] /following-sibling::div[1]/label',
        BloodPresure:'//label[text()="Bio Metrics"] /following-sibling::div[2]/label',
        // Venutype_Indor:"venueType"
        No_Of_vendor_Event : '//input[@id="Howmanyvendorswouldyoulikeatyourevent?"]',
        Submitt: '//button[@type="submit"]',
        
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
        const ele = await this.page.locator(this.eventsPage_Elements.clientList)
        try {
            await this.page.waitForTimeout(2000)
            await this.page.locator(this.eventsPage_Elements.clientList).selectOption({label: "KhelaGhor"})
            //  await this.page.selectOption(`${ele}{value: "Bkash"}`)
            await this.page.waitForTimeout(1000)
            // await this.page.locator(this.eventsPage_Elements.Company).selectOption(})
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Events | Add Event page elements is not visible : ${error}`)
        }
    }
    async InputEventName(){
        const ele = await this.page.locator(this.eventsPage_Elements.inputEventName)
        const EventName = await this.getRendomEventName()
        try {
            await ele.fill(EventName)
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Events | Add Event | Input event elements is not visible : ${error}`)
        }
    }
    async getRendomEventName(){
        const EventName = "TestEvent"
        const randomString = new Date().getTime();
        const testEmail = `${EventName}${randomString}`;
        return testEmail;
    }
    async inputEvent_Date(){
        await this.page.locator('//i[@class="icon-calendar"]').click({delay : 1000})
        await this.page.locator('//select[@title="Select month"]').selectOption({label : "Jan"},{timeout : 1000})
        await this.page.locator('//select[@title="Select year"]').selectOption({label : "2024"},{timeout : 1000})
        await this.page.locator('(//div[@class="btn-light"])[1]').click({timeout : 1000})
  
      }
      async selectEventStartTime(){
        await this.page.locator('//i[@class="icon-time"]').first().click({delay:500})
        await this.page.locator('(//input[@inputmode="numeric"])[1]').fill("06")
        await this.page.locator('(//input[@inputmode="numeric"])[2]').fill("00")
        const ele = await this.page.locator('(//button[text()="AM"])[1]')
        if(ele){
            await this.page.locator('(//button[@class="btn btn-outline-primary"])[1]').click()
            await this.page.waitForTimeout(1000)
        }
       
        await this.page.locator('(//input[@inputmode="numeric"])[3]').fill("10")
        await this.page.locator('(//input[@inputmode="numeric"])[4]').fill("00")
        const ele2 = await this.page.locator('(//button[text()="AM"])[2]')
        if(ele2){
            await this.page.locator('(//button[@class="btn btn-outline-primary"])[2]').click()
            await this.page.waitForTimeout(1000)
        }
        await this.page.locator('//button[text()=" OK "]').first().click({timeout: 500})
      }
      async checkAditionalInfo(){
        const ele = await this.page.locator(this.eventsPage_Elements.AditionalinfoChecked)
        try {
            await ele.click({button:"left",delay:1000})
        } catch (error) {
            throw new Error(`Align wellness | Events ManageMent | Events | Add Evets >> Add Event page Aditional info checked elements is not working : ${error}`)
        }
    }
    async AditionalInfo_BioMetrics_BloodSugar(){
        const ele = await this.page.locator(this.eventsPage_Elements.BloodSugar)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Align wellness >> Events ManageMent >> Events >> Add Evets >> Add Event page Aditional info checked >> Blood sugar checkbox is not working : ${error}`)
        }

    }
    async AditionalInfo_BioMetrics_BloodPresure(){
        const ele = await this.page.locator(this.eventsPage_Elements.BloodPresure)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Align wellness >> Events ManageMent >> Events >> Add Evets >> Add Event page Aditional info checked >> Blood Presure checkbox is not working : ${error}`)
            await this.page.waitForTimeout(1000)
        }

    }
    async EventVanueType_Indoor(){
       await this.page.locator("#venueType").selectOption({label:"Indoor"})

    }
    async EventVanueType_OutDoor(){
        await this.page.locator("#venueType").selectOption({label:"Outdoor"})
 
     }
     async Select_Wifi_Yes(){
        await this.page.locator("#wifi").selectOption({label:"Yes"})
        
     }
     async Select_Electricity_Yes(){
        await this.page.locator("#electricity").selectOption({label:"Yes"})
        
 
     }
     async InputNo_Of_Vendor_Event(){
        const ele = await this.page.locator(this.eventsPage_Elements.No_Of_vendor_Event)
        try {
             await ele.fill('5')
        } catch (error) {
            throw new Error(`Align wellness >> Events ManageMent >> Events >> Add Evets >> Add Event page No Of vendor In event Input is not working : ${error}`)
        }
     }
     async ClickSubmitt(){
        const ele = await this.page.locator(this.eventsPage_Elements.Submitt)
        try {
             await ele.click()
             await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Align wellness >> Events ManageMent >> Events >> Add Evets >> Next button is not working : ${error}`)
        }
     }
     async inputAddress(){
        await this.page.locator('//input[@id="address"]').type("Dhaka",{timeout:200})
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(2000)
      }
      async selectEMployeeForEvent(){
        await this.page.locator('//input[@placeholder="Employee Name"]').click()
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(2000)
      }
      async verifyVendorCategoryRequiredText(){
           await expect(this.page.locator('//h2[text()="Vendor Category Requirement"]')).toContainText("VENDOR CATEGORY REQUIREMENT")
      }
      async verifyCompanyPreferedVendor(){
        await expect(this.page.locator('//label[text()=" Company Preferred Vendor"]')).toContainText("Company Preferred Vendor")
   }
   async selectCompanyPreferedVendorType_Dentists(){
        await this.page.locator("#vendorTypeId").selectOption({label : "Dentists"})
        await this.page.waitForTimeout(1000)
   }
   async clickVendorNameField(){
        await this.page.locator('//input[@name="acDD"]').click()
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(2000)
   }
   async ClickCompanyPreferedVendor_AddButton(){
    await this.page.locator('//button[text()=" Add "]').click({timeout:1000})
   }
   async ClickNextButton(){
    await this.page.waitForTimeout(2000)
    await this.page.locator('//button[text()=" Next "]').click({timeout:1000})
    await this.page.waitForTimeout(2000)
   }
   async verifyInsuranceEnrollment(){
    await expect(this.page.locator('//label[text()="Insurance Enrollment"]')).toContainText("Insurance Enrollment")
}
async OpenEnrollmentDate(){
    await this.page.locator('//i[@class="icon-calendar"]').click({delay : 1000})
    await this.page.locator('//select[@title="Select month"]').selectOption({label : "Jan"},{timeout : 1000})
    await this.page.locator('//select[@title="Select year"]').selectOption({label : "2024"},{timeout : 1000})
    await this.page.locator('(//div[@class="btn-light"])[1]').click({timeout : 1000})

  }
  async verifyCompanyInsuranceProvidersText(){
    await expect(this.page.locator('//label[text()="Company Insurance Providers"]')).toContainText("Company Insurance Providers")
}
  async selectInsuranceCompany(){
    await this.page.locator('#insuranceCompany').selectOption({label:"MET-LIFE"})
    await this.page.waitForTimeout(500)
  }
  async select_InsuranceType(){
    await this.page.locator('#typeOfInsurance').click({timeout:1000})
    await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(1000)
  }
  async inputCompanyInsuranceProvider_Designation(){
    await this.page.locator('#Designation').fill("Software Engineer")
  }
  async inputContactPesrsonName(name : string){
    //  var  ContactName  : String = this.generateFirstName()+" "+this.generateLastName()
     await this.page.locator('#Contactname').fill(name)
  }
  async inputContactPesrsonEmail(email : string){
    email+="@yopmail.com"
    await this.page.locator('#Email').fill(email)
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
async capFirst(string:String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
async  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
async InputContactPerson_PhoneNumber_BD(){
       
    await this.page.locator('//span[@class="select2-selection__arrow"]').click()
    await this.page.waitForTimeout(1000)
    await this.page.locator("//input[@type='search']").fill("BD")
    await this.page.keyboard.press("Enter")
    await this.page.waitForTimeout(2000)
    await this.page.locator("input[name='InputPhone']").fill("01568703919")
 

 }
 async checkedPPO(){
    await this.page.locator('//input[@formcontrolname="ppo"]').click({timeout:500})
    await this.page.locator('//input-field[@formcontrolname="ppoEmployeePercentage"]').click({timeout:500})
    await this.page.locator('//input-field[@formcontrolname="ppoEmployeePercentage"]').type('60')
 }
 async checkedHMO(){
    await this.page.locator('//input[@formcontrolname="hmo"]').click({timeout:500})
    await this.page.locator('//input-field[@formcontrolname="hmoEmployeePercentage"]').click({timeout:500})
    await this.page.locator('//input-field[@formcontrolname="hmoEmployeePercentage"]').type('40')
    await this.page.waitForTimeout(1000)
 }
//  async inputPPO(){
//     await this.page.locator('//input-field[@formcontrolname="ppoEmployeePercentage"]').click({timeout:500})
//     await this.page.locator('//input[@class="form-control ng-valid ng-touched ng-dirty"]').fill('60')
//  }
//  async inputHMO(){
//     await this.page.locator('//input-field[@formcontrolname="hmoEmployeePercentage"]').click({timeout:500})
//     await this.page.locator('//input[@class="form-control ng-valid ng-touched ng-dirty"]').fill('40')
//  }
   //label[text()="Insurance Enrollment"]
   async verifyEventFourthPage(){
    const ele =  await this.page.locator('//label[text()="Do you offer your employees the following benefits?"]')
    await expect(ele).toContainText('Do you offer your employees the following benefits?')
   }
   async Click_ChiropracticCoverage_Yes(){
     await this.page.locator('//label[text()="Chiropractic Coverage"]/following-sibling::div[1]/input').click({timeout:100})
   }
   async Click_AcupunctureCoverage_NO(){
    await this.page.locator('//label[text()="Acupuncture Coverage"]/following-sibling::div[2]/input').click({timeout:100})
  }
  async Click_PhysicalTherap_Yes(){
    await this.page.locator('//label[text()="Physical Therapy Coverage"]/following-sibling::div[1]/input').click({timeout:100})
  }
  async Click_PodiatryCoverage_NO(){
    await this.page.locator('//label[text()="Podiatry Coverage"]/following-sibling::div[2]/input').click({timeout:200})
  }
  async Click_OrthodontistCoverage_YES(){
    await this.page.locator('(//label[text()="Orthodontist Coverage"]/following-sibling::div[1]/input)[1]').click({timeout:100})
  }
  async Click_MentalHealth_NO(){
    await this.page.locator('//label[text()="Mental Health"]/following-sibling::div[1]/input').click({timeout:100})
  }
  async clickFinalSubmitt(){
    await this.page.locator('//button[text()=" Submit "]').click()
    await this.page.waitForTimeout(2000)
  }
  async verifyEventAddedSuccessfully(){
    const ele = await this.page.locator('//h4[text()="Event has been added successfully"]')
    try {
           await expect(ele).toContainText('Event has been added successfully')
    } catch (error) {
        throw new Error(`Align wellness | Events ManageMent | Events | Add Event | Input page 1 to Page 4 >> event is not added successfully : ${error}`)
    }
  }
  async upload_Event_ProfileImages() {
    //  const filePath0 = "testData/Images/company.jpg"
     const fileChooserPromise = this.page.waitForEvent('filechooser');
   const ele=  await this.page.locator('(//div[@id="dropzone-area"])[1]').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('./testData/images/Event.jpg');
     await this.page.waitForTimeout(5000)
     await this.page.locator('//button[@class="btn btn-secondary text-white fw-bold mt-3 me-3 btn-with-loader"]').click({timeout:1000})
     await this.page.waitForTimeout(1000)
    //  await this.page.mouse.click(5,6)
    
}
    
 
}