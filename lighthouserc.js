module.exports = {
  ci: {
    // ...
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'service-worker': 'off',
        'maskable-icon': 'off',
      },
    },
  },
};
