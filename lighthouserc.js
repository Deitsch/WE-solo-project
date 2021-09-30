module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'service-worker': 'off',
        'maskable-icon': 'off',
        'csp-xss': 'off',
        'uses-responsive-images': 'off', // cause i don't care for displaying the min size possible in this project
      },
      upload: {
        target: 'filesystem',
        outputDir: './dist/_lighthouse',
        reportFilenamePattern: '_.report.%%EXTENSION%%',
        // reportFilenamePattern: "%%PATHNAME%%.report.%%EXTENSION%%",
      },
    },
  },
};
