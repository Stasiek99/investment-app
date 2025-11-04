import "../styles.css";

export default function Input({ label, textarea, ...props }) {
    return (
        <p style={{ margin: "1rem 0" }}>
            <label className="input-label">{label}</label>
            {textarea ? <textarea className="input" {...props} /> : <input className="input" { ...props } />}
        </p>
    );
}