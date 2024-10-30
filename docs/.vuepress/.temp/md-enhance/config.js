import CodeDemo from "/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.5_typescript@5.6_zod73aeefg2jay5gml52sw66cu/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/data/data/com.termux/files/home/my-project1/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.5_typescript@5.6_zod73aeefg2jay5gml52sw66cu/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
