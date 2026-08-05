import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
  // Copy everything in assets straight through to the built site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Lets headings carry an id, written as: ## Heading {#anchor}
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk"
  };
}
