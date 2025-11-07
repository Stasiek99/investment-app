import "../styles.scss";
import { forwardRef } from "react";

const Input = forwardRef( function Input({ label, textarea, ...props }, ref) {
    return (
        <p className="input">
            <label className="input__label">{label}</label>
            {textarea ? (<textarea ref={ref} className="input__field" {...props} />) : (<input ref={ref} className="input__field" { ...props } />)}
        </p>
    );
})

export default Input;