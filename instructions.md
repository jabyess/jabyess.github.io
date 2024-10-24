
## Get this repo up and running
`npx @11ty/eleventy --serve`

## how it works
index.html in the root dir serves as the top-level page when you navigate to skelios.com. if you run the eleventy server in the root dir, it will appear as if it's broken, because:

- eleventy input dir is `./content`
- eleventy output dir is `./blog`

so `/` will display what's being generated in `./blog` on localhost:8080

adding anything in `./content` copies it to `./blog`

github pages url structure follows the directory structure of this project. any folder just needs a `.md` or `.html` file in each folder in order to render properly.

i don't know why `/docs` is still being generated, maybe i just gitignore it for now.

## add a new post
- create a .md file in `./content`
- add frontmatter

```md
---
title: foo
date: foo
---
```
- write your shit


# todo

- write first post
- figure out a reasonable process for publishing new posts
    - maybe i can write an obsdian plugin that copies the file from obsidian to this project and git commits it, builds, and pushes
- build templates? so i can show things like
    - posts by date
    - archive of posts, etc
- fix fonts breaking on individual posts
- can i figure out a way to show git diffs of revisions for posts? like have a button that shows a previous version compared to the newest version? that might be neat.
- get footnotes working properly. they work in obsidian but not html. https://stackoverflow.com/questions/66964/how-do-i-create-a-link-to-a-footnote-in-html