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
})

test("RadioButtons", async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    const selectedText = page.locator('[data-testid="radio-result"]');
    await expect(selectedText).toHaveText("Selected: none")
    const oneRadioBtn = await page.getByRole('radio', { name: 'Radio One' }).check();
    await expect(selectedText).toHaveText("Selected: one")
    const twoRadioBtn = await page.getByRole('radio', { name: 'Radio two' }).check();
    await expect(selectedText).toHaveText("Selected: two")
})
test.only("Hidden Text", async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice");

    const hiddenCheckBox = page.locator('[data-testid="reveal-checkbox"]')
    const hiddenText = page.locator('[data-testid="revealed-text"]')

    await expect(hiddenText).toBeHidden()
    await hiddenCheckBox.check()
    await expect(hiddenText).toBeVisible()
})
