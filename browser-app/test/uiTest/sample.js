const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')

let driver

describe('入力フォーム デモ', () => {
  // テスト実行前に呼ばれる処理
  before(() => {
    driver = new Builder().forBrowser('chrome').build()
    process.on('unhandledRejection', console.dir)
  })

  // テスト実行後に呼ばれる処理
  after(() => {
    return driver.quit()
  })

  // ---テスト自体の処理はitに書く---

  it('新規タスク作成機能チェック', async () => {
    await driver.get('http://localhost:3000')
    // フォームへの入力
    // TODO: 現状は未入力の状態を検知してるだけなので、修正が必要
    const initialFormText = await driver
      .findElement(By.id('taskNameForm'))
      .getText()
    assert.equal(initialFormText, '')
  })
})