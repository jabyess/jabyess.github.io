require('dotenv').config()

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./index.css");
    eleventyConfig.addPassthroughCopy("./shared.css");
    eleventyConfig.addPassthroughCopy("./content/blog.css");
    eleventyConfig.addPassthroughCopy("./index.js");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./assets");

    return {
        debug: process.env.DEBUG || false,
        dir: {
            output: "blog",
            input: "content",
            includes: "../_includes"
        }
    }
}