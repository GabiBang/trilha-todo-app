import { TextField } from "../../presentational/TextField";
import { PasswordField } from "../../presentational/PasswordField";
import { PrimaryButton } from "../../presentational/PrimaryButton";
import { SecondaryButton } from "../../presentational/SecondaryButton";



export const Login = function() {
    return(
        <div className="container">
            <div className="modal d-block">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-tittle">
                                Login
                            </h5>
                        </div>
                        <div className="modal-body">
                            <TextField label="nome de usuário" placeholder="digite seu nome de usuário"/>
                            <PasswordField label="senha" placeholder="digite sua senha"/>
                        </div>
                        <div className="modal-footer">
                            <PrimaryButton label="entrar"/>
                            <SecondaryButton label="esqueci minha senha"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};