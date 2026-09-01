const { test, expect } = require('@playwright/test');

test.describe("Section-4 Dropdowns", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    });

    test("Standard Dropdown", async ({ page }) => {
        const dropdown = page.locator('[data-testid="standard-select"]');
        const resultText = page.locator('[data-testid="standard-select-result"]');

        // Value (e.g., 'green') ya Label (e.g., 'Green') ke basis par select kar sakte hain
        await dropdown.selectOption('green');

        // Check karo ki text update hua ki nahi
        await expect(resultText).toHaveText('Selected: green');
    });

    test("Multi-Select Dropdown", async ({ page }) => {
        const multiSelect = page.locator('[data-testid="multi-select"]');
        const resultText = page.locator('[data-testid="multi-select-result"]');

        // Multiple options select karne ke liye Array paas karna hota hai
        await multiSelect.selectOption(['java', 'python']);

        // Check karo ki dono values select hui ya nahi
        await expect(resultText).toHaveText('Selected: java, python');
    });

    test("Dynamic Select (State-based)", async ({ page }) => {
        const dynamicSelect = page.locator('[data-testid="dynamic-select"]');
        const resultText = page.locator('[data-testid="dynamic-select-result"]');


        await dynamicSelect.selectOption('Playwright');

        await expect(resultText).toHaveText('Selected: Playwright');
    });

    test("Custom Div Dropdown", async ({ page }) => {
        const customDropdownBtn = page.locator('[data-testid="custom-dropdown-toggle"]');
        const resultText = page.locator('[data-testid="custom-dropdown-result"]');


        await customDropdownBtn.click();


        await page.getByText('Beta', { exact: true }).click();


        await expect(resultText).toHaveText('Selected: Beta');
    });

});
