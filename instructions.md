
## Get this repo up and running
`npx @11ty/eleventy --serve`

## how it works
index.html in the root dir serves as the top-level page when you navigate to skelios.com. if you run the eleventy server in the root dir, it will appear as if it's broken, because:

- eleventy input dir is ./content
- eleventy output dir is ./blog

adding anything in ./content copies it to ./blog

github pages url structure follows the directory structure of ./content, just needs a .md or .html file in each folder in order to render properly. 

i don't know why /docs is still being generated, maybe i just gitignore it for now.

## add a new post


# todo

- fix blog so the files actually appear
- write first post
- figure out a reasonable process for publishing new posts
- build templates? so i can show things like
    - posts by date
    - archive of posts, etc

