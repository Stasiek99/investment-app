import "../styles.css";

import { forwardRef } from "react";

const Input = forwardRef( function Input({ label, textarea, ...props }, ref) {
    return (
        <p style={{ margin: "1rem 0" }}>
            <label className="input-label">{label}</label>
            {textarea ? (<textarea ref={ref} className="input" {...props} />) : (<input ref={ref} className="input" { ...props } />)}
        </p>
    );
})

export default Input;