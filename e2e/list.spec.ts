/* eslint-disable testing-library/prefer-screen-queries */
import { Page, expect, test } from '@playwright/test';
export const antDrawerScreenshot = async (page: Page, name: string) => {
  return await getModalScreenshot('.ant-drawer-body')(page, name)
}

const getModalScreenshot =  (locator) => async (page: Page, name: string) => {
  const element = await page.$(locator);
  if (!element) {
    throw new Error('Modal body element not found');
  }
  const height = await element.evaluate((node: HTMLElement) => node.scrollHeight);
  // 获取.modal-content的可视高度
  const perHeight = await element.evaluate((node: HTMLElement) => node.offsetHeight);
  const imgCount = Math.ceil(height / perHeight)
  for (let i = 0; i < imgCount; i++) {
    await expect(page.locator(locator)).toHaveScreenshot(`${name}${i}.png`);
    await element.evaluate((node, y) => {
      node.scrollBy(0, y);
    }, (i + 1) * perHeight);
  }
}

test('list', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: '添加通知' }).click();
  await antDrawerScreenshot(page, 'list')
})