import { mergeConfig } from "vite";

const config = {
  stories: [
    "../stories/**/*.mdx",
    '../stories/**/*.stories.ts',
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["jsdoc-type-pratt-parser"],
      },
      // Ensure proper resolution of dependencies
      resolve: {
        alias: {
          "jsdoc-type-pratt-parser": require.resolve("jsdoc-type-pratt-parser"),
        },
      },
    });
  },
};
export default config;
