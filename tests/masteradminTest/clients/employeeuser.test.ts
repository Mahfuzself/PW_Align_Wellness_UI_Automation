import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
import { Page } from '@playwright/test';
test("Validate employee user added successfully",async({page,loginPage,employeeuserPage}) =>{
  await page.goto("/login")
  await loginPage.login(data.validusername,data.validpassword)
})