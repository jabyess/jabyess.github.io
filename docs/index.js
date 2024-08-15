
document.addEventListener('DOMContentLoaded', () => {
    onLoad()
})

 
const onLoad = () => {
    console.log("hey, thanks for opening the devtools and checking me out. you're a real pro!")
    
    const main = document.getElementById('main')
    const email = document.getElementById('email')
    const blog = document.getElementById('blog')
    const github = document.getElementById('github')
    const about = document.getElementById('about')
    
    email.addEventListener("click", () => {
        main.innerHTML = 'jimmy@skelios.com'
    })
    blog.addEventListener("click", () => {
        window.location.href = window.location.href += 'README'
    })
    github.addEventListener("click", () => {
        main.innerHTML = '<a href="https://github.com/jabyess">github</a>'
    })
    about.addEventListener("click", () => {
        main.innerHTML = 'computer person who wants to write more, and also teaches sometimes'
    })


}