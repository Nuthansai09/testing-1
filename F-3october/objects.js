// delete key word

// let obj = {
//     name : "sai",
//     age : 23
// }

// delete obj.name

// console.log(obj)
//---------------------------------------------------------------------------------
// // key with spaces

// const user = {
//     nam: 'pc',
//     age: 23,
//     // workAtWalmart: true,
//     'work at walmart': true,
// }

// console.log(user['age']);have to declare using "" within []

//------------------------------------------------------------------------------------------
// // Dynamic Keys****************************************
// const property = 'firstName';
// const nam = 'pc';

// const user = {
//     firstName: 'pc',
// }

// const user_mid = {
//     property: nam,
// }

// const user2 = {
//     [property]: nam,
// }

// // key name here is still property
// // firstName
// console.log(user);
// console.log(user_mid);
// console.log(user2);
//-------------------------------------------------------------------------------------------------------

// let obj = {
//     name:"sai",
//     age:23,
//     isWorking : false,
//     ni:"ya"
// }

// for(key in obj){
//     console.log(key ,obj[key])
// }

//ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

// let obj = {
//     name:"sai",
//     age:23,
//     isWorking : false,
//     ni:"ya"
// }
// for(key in obj){
//     console.log(key,"=",obj[key])
// }

//ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

//--------------------------------------------------------------------------------------------------

// let obj = {
//         name:"sai",
//         age:23,
//         isWorking : false,
//         ni:"ya"
//     }


// localStorage.setItem("obj",JSON.stringify(obj))

// JSON.stringify(obj)

//-----------------------------------------------------------------------------------------------------

// let arr = [1,2,3]

// let arr2 = [4,5,6]



// let arr3 = [7,8,9,...arr2,...arr]


// console.log(arr3)

//----------------------------------------------------------------------------


// let obj = {
//         age:23,
//         isWorking : false,
//         ni:"ya"
//     }


//     let obj2 = {
//         namee:"sai",
//         ...obj
//     }

//     console.log(obj2)

    //********************************************************************** */ 
//pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp */
    // let obj1 = {
    //     name: "king",
    //     lname: "khan",
    //     mnam: "jawan",
    //     song : {
    //         one : "title",
    //         two : "cheleya"
    //     }
    // }

    // let strObj = JSON.stringify(obj1);

    // let finalObj = JSON.parse(strObj)

    // console.log(obj1);

    //  finalObj.song.one = null
    // console.log(finalObj);

    //*************************************************************************************** */
    
    // let property = "firstName";
    // let nam = "pc"

    // let user = {
    //     [property] : nam
    // } 
    // console.log(user)
    //*******--------------------************************************** */

    // let user = {
    //     nam : "sai",
    //     age : 22,
    //     hight :  6,
    // }

    // for(let key in user){
    //     console.log(key , user[key])
    // }

