export const FormControl = function({label, children}) {
    return(
        <div>
            <label className="form-label">
                {label}
            </label>

            {children}
        </div>
    );
};