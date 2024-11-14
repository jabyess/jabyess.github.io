
## Get this repo up and running
`npx @11ty/eleventy --serve`

## how it works
github pages follows the directory structure of this repo. so navigate in the browser to skelios.com/why-blog and it will show you the index file in that dir.

each post (a post is a .md file in `./content`) gets outputted into its own subfolder in the root dir

edit your css files inside of `./content`, they will be copied to the root dir

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

- figure out a reasonable process for publishing new posts
    - maybe i can write an obsdian plugin that copies the file from obsidian to this project and git commits it, builds, and pushes
- build templates? so i can show things like
    - posts by date
    - archive of posts, etc
- can i figure out a way to show git diffs of revisions for posts? like have a button that shows a previous version compared to the newest version? that might be neat.
- get footnotes working properly. they work in obsidian but not html. https://stackoverflow.com/questions/66964/how-do-i-create-a-link-to-a-footnote-in-html
- add about me section or something to index page.
- add some css styling to >blockquote sections, currently its just indented