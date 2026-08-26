const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('node:dns');
test.describe("Section-2 Button Interactions", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    });

    test("Single Click", async ({ page }) => {
        await page.locator('[data-testid="single-click-btn"]').click()
        await expect(page.getByText('Single clicked!')).toBeVisible();
    });

    test("Double Click", async ({ page }) => {
        await page.locator('[data-testid="double-click-btn"]').dblclick();
        await expect(page.locator('[data-testid="double-click-result"]')).toHaveText('Double clicked!');
    });
    test("Right Click", async ({ page }) => {
        await page.locator('[data-testid="right-click-btn"]').click({ button: 'right' })
        await expect(page.getByText('Right click captured (context menu blocked)')).toBeVisible();
    });

    test("Always Disabled", async ({ page }) => {
        const disabledBtn = page.locator('[data-testid="disabled-btn"]');
        await expect(disabledBtn).toBeDisabled();
    });

    test("Timer Button", async ({ page }) => {
        const startTimerBtn = page.locator('[data-testid="start-delay-btn"]');
        const delayedBtn = page.locator('[data-testid="delayed-enable-btn"]');

        await expect(delayedBtn).toBeDisabled();
        await startTimerBtn.click()
        await expect(delayedBtn).toBeEnabled({ timeout: 4000 })
    });

    test("Clickable Button", async ({ page }) => {
        const clickableBtn = page.locator('[data-testid="relabel-btn"]');
        await expect(clickableBtn).toHaveText("Original Label");
        await clickableBtn.click();
        await expect(clickableBtn).toHaveText("Clicked Label");
    });


});


