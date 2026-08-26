const { test, expect } = require('@playwright/test');

test("Checkbox", async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    const selectAllCheckbox = page.locator('[data-testid="select-all"]')
    const optionACheckbox = page.locator('[data-testid="check-a"]')
    const optionBCheckbox = page.locator('[data-testid="check-b"]')
    const optionCCheckbox = page.locator('[data-testid="check-c"]')

    await selectAllCheckbox.click();
    expect(await optionACheckbox.isChecked()).toBeTruthy();
    expect(optionBCheckbox).toBeChecked();
    expect(optionCCheckbox).toBeChecked();
    await page.pause()

})

test.only("RadioButtons", async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    oneRadioBtn = await page.getByRole('radio', { name: 'Choice One' }).check();
    await page.pause()


})
