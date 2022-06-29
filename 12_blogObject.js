//Create a blog simulating being online with a live instance and
//receiving messages


class Blog {
    constructor (live=false) {
    this.live = live
    if (this.live) {
        console.log('Live on')
    } else {
        console.log('Live off')
    }
    this.post = class Post {
        constructor (title, message, author){
            this.title = title
            this.message = message
            this.author = author
            this.obj = {msg : message , a: author}
        }
    }
    this.commentsArray = []
   }
}

const blog = new Blog(live=true,saveComments=true)
let p1 = new blog.post('hello','Love it', 'Renan')
blog.commentsArray.push(p1)
let p2 = new blog.post('Hiii','Love it too', 'Nina')
blog.commentsArray.push(p2)
console.log(blog.commentsArray)





