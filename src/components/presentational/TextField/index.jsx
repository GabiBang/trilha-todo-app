import { FormControl } from "../FormControl";

export const TextField = function({label, placeholder}) {
    return(
        <FormControl label={label}>
            <input type="text" className="form-control" placeholder={placeholder}/>
        </FormControl>
    );
};