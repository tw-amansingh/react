// import { apiKey } from "./utils";
// import apiKey from './utils'

// import * as util from './utils';
// console.log(util.default)

//Spread operator usage
// const user={
//     name:"aman",
//     age:25
// }
// const adminUser={
//     isAdmin:true
// }
// const extendedUser={
//     ...user,
//     ...adminUser,
// }

// console.log(extendedUser)


//passing functions as params
function greeting(greetfn){
    greetfn();
}

greeting(()=>[
    console.log("Hi from other space")
])