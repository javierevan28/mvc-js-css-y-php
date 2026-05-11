import UserModel from "../model/UserModel.js";
import UserView from "../view/UserView.js";

export default class UserController {
    constructor() {
        this.view = new UserView();
        this.init();
    }

    init() {
        this.view.form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = this.view.getUserData();
            const user = new UserModel(data.username, data.password);

            if (!user.isValid()) {
                this.view.showError("Usuario o contraseña deben de ser ingresados");
                return;
            }

            try {
                const response = await fetch("backend/api/login.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    this.view.showSuccess(result.message);
                } else {
                    this.view.showError(result.message);
                }

            } catch (error) {
                this.view.showError("Error en el servidor");
            }
        });
    }
}