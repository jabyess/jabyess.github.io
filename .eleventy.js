import { count } from "@wordpress/wordcount";
import { feedPlugin } from '@11ty/eleventy-plugin-rss';
import footnotes from 'eleventy-plugin-footnotes'

// const testFootnotePlugin = (eleventyConfig) => {
//   // console.log(eleventyConfig)

//   eleventyConfig.addTransform("footnotes", (content) => {
//     // console.log(content)

//     const footnotes = content.matchAll(/\[\^\d\]/g)
//     console.log([...footnotes])
//   })

  
// }

export default async function (eleventyConfig) {

  // eleventyConfig.addPlugin(testFootnotePlugin)

  // atom feed config
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // "atom, "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "skelios' blog",
			subtitle: "A blog about humans, careers, maybe some technology",
			base: "https://skelios.com/",
			author: {
				name: "Jimmy Byess",
				email: "jimmy@skelios.com", // Optional
			}
		}
	});


  // copy all of these files into the output dir, so they get deployed to GH pages
  eleventyConfig.addPassthroughCopy("./content/*.css");

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
