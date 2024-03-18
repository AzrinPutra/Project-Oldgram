const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let containerEl = document.getElementById("container")

function renderPost() {
    let postJs = ""
    
    for (let i=0; i < posts.length; i++) {
        postJs += `
        <div class="newPost">
            <section class="post-header">
                <img class="user-avatar" src=${posts[i].avatar} alt="profile picture">
                <div class="user-wrapper">
                    <p class="user-name">${posts[i].name}<p>
                    <p class="user-location">${posts[i].location}<p>
                </div>
            </section>
            <section>
                <img class="post-img" src=${posts[i].post}>
                <div class="post-footer">
                    <img class="post-icons" src="images/icon-heart.png">
                    <img class="post-icons" src="images/icon-comment.png">
                    <img class="post-icons" src="images/icon-dm.png">
                    <p class="post-text"><span id="bold-text">${posts[i].likes} likes</span><p>
                    <p class="post-text"><span id="bold-text">${posts[i].username}</span> ${posts[i].comment}<p>
                    <br>
                </div>
            </section>
        </div>`
    }
    containerEl.innerHTML += postJs
}
renderPost()