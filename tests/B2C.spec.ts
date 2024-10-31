import {test, expect, Page} from '@playwright/test'
import MailSlurp from "mailslurp-client";

test.describe('B2C Integration', () => {
    test('Login with empty Customer number and Password', async ({ page }) => {
      await page.goto('https://test.customer.pioneercredit.com.au/account');
      await expect(page.getByRole('link', { name: 'Logo of Pioneer Credit' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
      await expect(page.getByText('Customer Number', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Customer Number')).toBeVisible();
      await expect(page.getByText('Password', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Password')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up now' })).toBeVisible();
      await expect(page.getByLabel('Launch chat button')).toBeVisible();
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByText('Please enter your Customer Number')).toBeVisible();
      await expect(page.getByText('Please enter your password')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Verify your account' })).toBeHidden();
    });

    test('Login with correct Customer number and empty Password', async ({ page }) => {
      await page.goto('https://test.customer.pioneercredit.com.au/account');
      await expect(page.getByRole('link', { name: 'Logo of Pioneer Credit' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
      await expect(page.getByText('Customer Number', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Customer Number')).toBeVisible();
      await expect(page.getByText('Password', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Password')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up now' })).toBeVisible();
      await expect(page.getByLabel('Launch chat button')).toBeVisible();
      await page.getByPlaceholder('Customer Number').click();
      await page.getByPlaceholder('Customer Number').fill('1019620');
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByText('Please enter your password')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Verify your account' })).toBeHidden();
    });

    test('Login with correct Customer number and incorrect Password', async ({ page }) => {
      await page.goto('https://test.customer.pioneercredit.com.au/account');
      await expect(page.getByRole('link', { name: 'Logo of Pioneer Credit' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
      await expect(page.getByText('Customer Number', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Customer Number')).toBeVisible();
      await expect(page.getByText('Password', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Password')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up now' })).toBeVisible();
      await expect(page.getByLabel('Launch chat button')).toBeVisible();
      await page.getByPlaceholder('Customer Number').click();
      await page.getByPlaceholder('Customer Number').fill('1019620');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('Banana011');
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByText('Sorry, the login info you\'ve')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Verify your account' })).toBeHidden();
    });

    test('Login with incorrect Customer number and correct Password', async ({ page }) => {
      await page.goto('https://test.customer.pioneercredit.com.au/account');
      await expect(page.getByRole('link', { name: 'Logo of Pioneer Credit' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
      await expect(page.getByText('Customer Number', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Customer Number')).toBeVisible();
      await expect(page.getByText('Password', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Password')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up now' })).toBeVisible();
      await expect(page.getByLabel('Launch chat button')).toBeVisible();
      await page.getByPlaceholder('Customer Number').click();
      await page.getByPlaceholder('Customer Number').fill('1019629');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('Banana01');
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByText('We can\'t seem to find your')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Verify your account' })).toBeHidden();
    })

    test('Login with Customer that missing MFA preferences', async ({ page }) => {
      await page.goto('https://test.customer.pioneercredit.com.au/account');
      await expect(page.getByRole('link', { name: 'Logo of Pioneer Credit' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
      await expect(page.getByText('Customer Number', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Customer Number')).toBeVisible();
      await expect(page.getByText('Password', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Password')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up now' })).toBeVisible();
      await expect(page.getByLabel('Launch chat button')).toBeVisible();
      await page.getByPlaceholder('Customer Number').click();
      await page.getByPlaceholder('Customer Number').fill('1019624');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('Banana01');
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page.getByLabel('Sorry, the login info you\'ve')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
      await page.getByRole('button', { name: 'Back' }).click();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
    })

    test('Login success with email as MFA preferences', async ({ page }) => {
      test.slow;
      const customerNumber = '1018621'
      const password = 'Banana04'
      
      // go to login screen
      await page.goto('https://test.customer.pioneercredit.com.au/account');
  
      // fill login form
      await expect(page.getByRole('link', { name: 'Logo of Pioneer Credit' })).toBeVisible({ timeout: 30000 });
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await expect(page.getByText('Important message from Pioneer Our sign in process has changed. Please use your')).toBeVisible();
      await expect(page.getByText('Customer Number', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Customer Number')).toBeVisible();
      await expect(page.getByText('Password', { exact: true })).toBeVisible();
      await expect(page.getByPlaceholder('Password')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sign up now' })).toBeVisible();
      await page.getByPlaceholder('Customer Number').click();
      await page.getByPlaceholder('Customer Number').fill(customerNumber);
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill(password);
      await page.getByRole('button', { name: 'Log in' }).click();

      // verify Verify your account screen is displayed and click on send code button
      await expect(page.getByRole('heading', { name: 'Verify your account' })).toBeVisible({ timeout: 30000 });
      await expect(page.getByText('A verification code will be')).toBeVisible();
      await expect(page.getByText('Email', { exact: true })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Send code' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Having trouble? Contact us' })).toBeVisible();
      await page.getByRole('button', { name: 'Send code' }).click();
      
      // verify Verification code field is displayed
      await expect(page.getByText('Verification code', { exact: true })).toBeVisible({ timeout: 30000 });
      await expect(page.getByPlaceholder('Verification code')).toBeVisible();
      await expect(page.getByLabel('Verify code')).toBeVisible();
      await expect(page.getByLabel('Send new code')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Having trouble? Contact us' })).toBeVisible();
      
      // wait for email verification code
      const mailslurp = new MailSlurp({ apiKey: '47295b12e8eb2a3fb28df0315be755040c9e6236a5507a629e2d417858fe4805'})
      const latestEmail = await mailslurp.waitController.waitForLatestEmail({
          inboxId: 'f11c22c2-8240-421d-9406-4524ef61bcb4',
          unreadOnly: true,
      });
      expect(latestEmail.subject).toContain('PNC Customer DEV account email verification code');

      // extract the confirmation code (so we can confirm the user)
      const pattern = '([0-9]{6})';
      const matchResults = await mailslurp.emailController.getEmailContentMatch({
        contentMatchOptions: { pattern },
        emailId: latestEmail.id,
      })
      
      // enter confirmation code
      await page.getByPlaceholder('Verification code').click();
      await page.getByPlaceholder('Verification code').fill(matchResults.matches[0]);
      await page.getByLabel('Verify code').click();

      // verify redirected to dashboard page
      await page.waitForURL('https:\/\/test\.customer\.pioneercredit\.com\.au\/account\?id_token=*', { timeout: 60000 })
      await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible({ timeout: 120000 });

    });
  
  });