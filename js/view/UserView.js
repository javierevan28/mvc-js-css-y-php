export default class UserView{
    constructor(){
        this.form = document.querySelector(".form");
        this.usernameInput = document.querySelector(".input-username");
        this.passwordInput = document.querySelector(".input-password");
        this.errorMessage = document.querySelector(".message-error");
        this.successMessage = document.querySelector(".message-success");
    }

    // Obtenemos los valores y los pasamos al objeto
    getUserData(){
        return {
            username:this.usernameInput.value,
            password:this.passwordInput.value
        };
    }

    // Errores
    showError(message){
        this.errorMessage.textContent = message;
        this.errorMessage.classList.add("visible");

        this.successMessage.classList.remove("visble");

        this.usernameInput.classList.add("input-error");
        this.passwordInput.classList.add("input-error");
    }

    // Confirmación
    showSuccess(message){
        this.successMessage.textContent = message;
        this.successMessage.classList.add("visible");

        this.errorMessage.classList.remove("visible");
        
        this.usernameInput.classList.remove("input-error");
        this.passwordInput.classList.remove("input-error");
    }

    //quitar errores y confirmación
    clear(){
        this.errorMessage.classList.remove("visible");
        this.successMessage.classList.remove("visble");

        this.usernameInput.classList.remove("input-error");
        this.passwordInput.classList.remove("input-error");
    }
}