const form=document.querySelector('#form')
const uname=document.querySelector('#username')
const email=document.querySelector('#email')
const pass=document.querySelector('#password')
const cpass=document.querySelector('#cpassword')


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    validateInput();
})

function validateInput(){
    const username = uname.value.trim();
    const useremail =email.value.trim();
    const userpass =pass.value.trim();
    const usercpass =cpass.value.trim();
    
    if(username===''){
        seterror(uname,'username is requried')
    }else{
        setsuccess(uname)
    }

    if(useremail===''){
        seterror(email,'Enter the email')
    }else if(!validateemail(useremail)){
       seterror(email,'Enter valid ');
    }else{
        setsuccess(email);
    }

    if(userpass===''){
        seterror(pass,'Enter the password')
    }else if(userpass.length<8){
         seterror(pass,'Password should be maximum 8 character')
    }else{
        setsuccess(pass)
    }

    if(usercpass===''){
        seterror(cpass,'password requried')
    }else if(usercpass!==userpass){
        seterror(cpass,'password mismatch')
    }else{
        setsuccess(cpass)
    }


}

function seterror(ele,errormsg){

    const inputgroup =ele.parentElement;
    const errorelemnt =inputgroup.querySelector('.error')
    errorelemnt.innerText=errormsg;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}

function setsuccess(ele){

    const inputgroup =ele.parentElement;
    const errorelemnt =inputgroup.querySelector('.error')
    errorelemnt.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}

const validateemail=(email)=>{
   return String(email)
   .toLowerCase()
   .match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ );
};

