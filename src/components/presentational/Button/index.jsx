export const Button = function(props) {
    return(
        <button type="button" className="btn btn-primary">
            {props.label}
        </button>
    );
};