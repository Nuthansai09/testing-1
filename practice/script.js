let user = {
    nam:"sai",
    age:22,
    mail:"nuthansai09@gmail.com",
}

function test(nam,proff,d1,d2){
    console.log(this)
    // console.log(this.nam,this.mail,age,proff)
    console.log(nam,proff,d1,d2)

}

// test.call(user,21,"cc");
// test.call(user,21,"cc");
let bindedFn = test.bind("user","nam")

bindedFn("proff","d1","d2")