import UserModel from "../model/UserModel.js";
import UserView from "../view/UserView.js";

export default class UserController{
    constructor(){
        this.view = new UserView();
        this.init();
    }

    init(){
        this.view.form.addEventListener("submit", (e)=>{
            e.preventDefault();

            const data = this.view.getUserData();
            const user = new UserModel(data.username,data.password);

            if(!user.isValid()){
                this.view.showError("Usuario o contraseña deben ser ingresados");
                return;
            }
            this.view.showSuccess("Login exitoso");
        });
    }
}