export const checkValidateData=(email,pass)=>{


    const isEmailValid=/[A-Za-z0-9\._%+\-]+@[A-Za-z\.\-]+.[A-Za-z]/.test(email)
    const isPasswordValid=/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]/.test(pass)

    // if(name.trim()===''){
    //     return 'Enter your name'
    // }
    
    if(!isEmailValid){
            return 'Email is not Valid'
    }
    if(!isPasswordValid){
        return 'Check Password! Should contain special char,numbers,Caps letter '
    }
    return null
}