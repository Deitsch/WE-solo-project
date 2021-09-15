/* eslint-disable quotes */
module.exports = {
  ci: {
    // ...
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'service-worker': 'off',
        'maskable-icon': 'off',
        'csp-xss': 'off',
      },
      upload: {
        target: 'filesystem',
        outputDir: './dist/_lighthouse',
        reportFilenamePattern: "_.report.%%EXTENSION%%",
        // reportFilenamePattern: "%%PATHNAME%%.report.%%EXTENSION%%",
      },
    },
  },
};
