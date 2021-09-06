module.exports = {
  stories: [
    "../packages/react/src/stories/**/*.stories.mdx",
    "../packages/react/src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};