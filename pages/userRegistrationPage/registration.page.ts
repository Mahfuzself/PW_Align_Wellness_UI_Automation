import { expect, Page } from "@playwright/test";
export default class userRegistrationPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
}