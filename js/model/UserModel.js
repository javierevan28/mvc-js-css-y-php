export default class UserModel{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    // Validacion
    isValid(){
        return this.username.trim() !== "" && this.password.trim() !== "";
    }
}