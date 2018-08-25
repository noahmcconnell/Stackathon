import User from "../models/user.js";
import Post from "../models/post.js";




let store

let state = {
    user:{},
    currentPost: {},


    
    
    
    
}
function setState(prop, data){
    state[prop] = data
    console.log(state)
}

export default class Store {
    getPost(id){

        return fetch('/api/post/by-id/'+ id)
        .then(res=> res.json())
        .then(data=>{
            setState('post',data.map(post=> new Post(post)))
            
        })
    }
            

    login(creds){
        return fetch('/auth/login',{
        method:'post',
        body: JSON.stringify(creds),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
    })
    .then(res => res.json())
    .then(data => {
        setState('user', new User(data))
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
