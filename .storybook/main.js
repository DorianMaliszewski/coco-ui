module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/react',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    // Add SVGR Loader
    // ========================================================
    const assetRule = config.module.rules.find(({ test }) => test?.test('.svg'))

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    // Return the altered config
    return config
  },
}
