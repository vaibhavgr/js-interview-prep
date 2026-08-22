const { test, expect } = require('@playwright/test')

test("Section-1 Basic Form Elements", async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice")
    await page.getByRole('textbox', { name: 'Text input' }).fill("Vaibhav")
    await page.getByRole('textbox', { name: 'Password input' }).fill("Vaibhav")
    await page.getByRole('textbox', { name: 'Email input' }).fill("abc@gmail.com")
    await page.getByRole('textbox', { name: 'Phone input' }).fill("0000000000")
    await page.getByRole('textbox', { name: 'Bio textarea' }).fill("wasssup buddyy i am practicing testing")
    await page.locator('[data-testid="form-submit"]').click()

    //assertion form submitted successfully
    const fetchSubmitText = await page.getByText('Form submitted successfully').textContent();
    expect(fetchSubmitText).toBe('Form submitted successfully');

    //reset
    //await page.locator('[data-testid="form-reset"]').click()

});
