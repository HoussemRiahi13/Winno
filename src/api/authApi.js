import axios from 'axios';
export async function test(){
     axios.get('/lol').then(res=>{
        console.log(res)
    }).catch(err=>
        console.log(err))
}


export async function register(data){
    return await axios.post('/users/register',{user:data})
    .then(res=>{
        let authToken = res.data.user.token;
        localStorage.setItem("jwt-token", authToken)    // This will store token on your session
                                                        // You will eventually need send your token 
                                                        // for each request when you're authentified
        return {
            data:res.data,                              // What purpose data serves ? here ? 
                                                        // It should be used to redirect user when
                                                        // he's registred, but that's not the case 
                                                        // for long term, as user needs to do stuff 
                                                        // before his account gets confirmed.
            error:null,
        };
    })
    .catch(err=>{
       return {
           user:null,
           error:err.response.data
       }
    })  
}


// 
export  function login({email,password}){
     axios.get('/users/login',{user:{email,password}})
    .then(res=>{
        let authToken = res.data.user.token;
        localStorage.setItem("jwt-token", authToken)
        return {
            user:res,
            error:null
        }
    })
    .catch(error=>{
        return {
            user:null,
            error
        }
    })
}