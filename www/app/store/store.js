import User from "../models/user.js";
import Goal from "../models/goal.js";
import Post from "../models/post.js";


let store

let state = {
    currentPost: {},
    
    
    
    
}
function setState(prop, data){
    state[prop] = data
    console.log(state)
}

export default class Store {
    getPost(draw){
        fetch('/api/post/by-user/'+ state.user._id)
        .then(res=> res.json())
        .then(data=>{
            setState('post',data.map(post=> new Post(post)))
            draw()
        })

    }
    login(creds, draw){
        fetch('/auth/login',{
        method:'post',
        body: JSON.stringify(creds),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
    })
    .then(res => res.json())
    .then(data => {
        setState('user', new User(data))
        draw()
    })
    .catch(console.error)
}




//dis dat SINGLETON
    
    
    constructor() {
        if (store) {
            return store
        }
        store = this
    }
    get state() {
        return {
            ...state
        }
    }
    
}
