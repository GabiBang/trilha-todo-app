import { FormControl } from "../FormControl";

export const PasswordField = function({label, placeholder}) {
    return(
        <FormControl label={label}>
            <input type="password" className="form-control" placeholder={placeholder}/>
        </FormControl>
    );
};