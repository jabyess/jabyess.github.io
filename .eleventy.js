import { count } from "@wordpress/wordcount";

export default async function (eleventyConfig) {
  // copy all of these files into the output dir, so they get deployed to GH pages
  // eleventyConfig.addPassthroughCopy("./index.css");
  // eleventyConfig.addPassthroughCopy("./shared.css");
  // eleventyConfig.addPassthroughCopy("./content/blog.css");
  // eleventyConfig.addPassthroughCopy("./index.js");
  // eleventyConfig.addPassthroughCopy("./fonts");
  // eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addAsyncFilter("htmlDateString", async (dateObj) => {
    // use sv-SE locale to comply with iso 8601 date format yyyy-mm-dd
    return Intl.DateTimeFormat("sv-SE").format(dateObj);
  });

  eleventyConfig.addAsyncFilter("readableDate", async (dateObj) => {
    // use en-US format and configuration for pretty dates visible to user
    const options = {
      month: "long",
      year: "numeric",
      day: "numeric",
    };
    return Intl.DateTimeFormat("en-US", options).format(dateObj);
  });

  eleventyConfig.addFilter("wordcount", (content) => {
    const words = count(content, "words");

    return `${words} words`;
  });

  return {
    debug: process.env.DEBUG || false,
    dir: {
      output: ".",
      input: "content",
      includes: "../_includes",
    },
  };
}
