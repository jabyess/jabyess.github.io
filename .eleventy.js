require('dotenv').config()

const readingTime = require('reading-time')
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // copy all of these files into the output dir, so they get deployed to GH pages
    eleventyConfig.addPassthroughCopy("./index.css");
    eleventyConfig.addPassthroughCopy("./shared.css");
    eleventyConfig.addPassthroughCopy("./content/blog.css");
    eleventyConfig.addPassthroughCopy("./index.js");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./assets");

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

    eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

    eleventyConfig.addFilter("wordcount", (content) => {
        const stats = readingTime(content);
        
        return `${stats.words} words`
    })

    return {
        debug: process.env.DEBUG || false,
        dir: {
            output: "blog",
            input: "content",
            includes: "../_includes"
        }
    }
}