import test from "@playwright/test";

test('ID CSS Selector', async({page})=>{
    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");  // BY id : #idvalue =#username
    await page.locator('#Login').click()
    await page.locator('#password').fill("TestLeaf@2025")/// BY id : #idvalue =#password
    await page.waitForTimeout(2000)

})