import LoginPage from '@pages/Login.page';
import { test as baseTest } from '@playwright/test';
import EventsPage from '@pages/Events.page';
import companyPage from '@pages/company.page';
import brokerPage from '@pages/broker.page';
import AlignwelluserPage from '@pages/Alignwelluser.page';
import ContractorPage from '@pages/Contractor.page';
import HealthcareProviderPage from '@pages/HealthcareProvider.page';
import masteradminPage from '@pages/alignuser/MasterAdmin.page';
import standardPage from '@pages/alignuser/Standard.page';
import vendorPage from '@pages/vendor.page';
const test = baseTest.extend<{
    loginPage: LoginPage;
    eventsPage : EventsPage;
    clientsPage : companyPage;
    employeeuserPage : companyPage;
    brokerPage : brokerPage;
    AlignwellPage : AlignwelluserPage;
    ContactorPage : ContractorPage;
    HealthcareProviderPage : HealthcareProviderPage;
    companyPage : companyPage;
    masteradminPage : masteradminPage;
    standardPage : standardPage
    vendorPage : vendorPage

}>(
    {
        loginPage: async ({page }, use) => {
                    await use(new LoginPage(page));
                },
                eventsPage : async({page},use) =>{
                    await use (new EventsPage(page))
                },
                clientsPage : async({page},use) =>{
                    await use (new companyPage(page))
                },
                employeeuserPage : async({page},use) =>{
                    await use (new companyPage(page))
                },
                brokerPage : async({page},use) =>{
                    await use (new brokerPage(page))
                },
                AlignwellPage : async({page},use) =>{
                    await use (new AlignwelluserPage(page))
                },
                ContactorPage : async({page},use) =>{
                    await use (new ContractorPage(page))
                },
                HealthcareProviderPage : async({page},use) =>{
                    await use (new HealthcareProviderPage(page))
                },
                companyPage : async({page},use) =>{
                    await use (new companyPage(page))
                },
                masteradminPage : async({page},use) =>{
                    await use (new masteradminPage(page))
                },
                standardPage : async({page},use) =>{
                    await use (new standardPage(page))
                },
                vendorPage : async({page},use) =>{
                    await use (new vendorPage(page))
                }
            },
)
export default test;
export const expect = test.expect;