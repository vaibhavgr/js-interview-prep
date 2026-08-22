const { test, expect } = require('@playwright/test')
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
        await expect(page.getByText('Double-clicked!')).toBeVisible();
    });
    test.only("Right Click", async ({ page }) => {
        await page.locator('[data-testid="right-click-btn"]').click({ button: 'right' })
        await expect(page.getByText('Right click captured (context menu blocked)')).toBeVisible();
    });

     test.only("Right Click", async ({ page }) => {
        await page.locator('[data-testid="right-click-btn"]').click({ button: 'right' })
        await expect(page.getByText('Right click captured (context menu blocked)')).toBeVisible();
    });


});


