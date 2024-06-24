export const checkValidateData=(ema,pass)=>{
    console.log(ema,pass)

    const isEmailValid=/[A-Za-z0-9\._%+\-]+@[A-Za-z\.\-]+.[A-Za-z]/.test(ema)
    const isPasswordValid=/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/.test(pass)

    // if(name.trim()===''){
    //     return 'Enter your name'
    // }
    
    if(!isEmailValid){
            return 'Email is not Valid'
    }
    if(!isPasswordValid){
        return 'Password is not Valid'
    }
    return null
}