import "../styles.css";
import Input from "./Input.tsx";

export default function NewProject() {
    return (
        <div className="new-project">
            <menu className="menu">
                <li><button className="menu-cancel">Cancel</button></li>
                <li><button className="menu-save">Save</button></li>
            </menu>
            <div>
               <Input label="Title" />
               <Input label="Description" textarea />
               <Input label="Due Date" />
            </div>
        </div>
    )
}