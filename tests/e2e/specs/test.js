// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  navbar: (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.navbar')
      .assert.elementCount('.subnav a', 2)
      .assert.containsText('.subnav a:nth-child(1)', 'SIGN IN')
      .assert.containsText('.subnav a:nth-child(2)', 'SIGN UP')
      .end();
  },
};
