
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./content/index.css");
    eleventyConfig.addPassthroughCopy("./content/index.js");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./assets");

    return {
        dir: {
            output: "docs",
            input: "content",
            includes: '../_includes'
        }
    }
}