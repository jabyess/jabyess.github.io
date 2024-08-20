
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./index.css");
    eleventyConfig.addPassthroughCopy("./index.js");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./assets");

    return {
        // dir: {
        //     // output: "docs",
        //     // input: "content",
        //     // includes: '../_includes'
        // }
    }
}