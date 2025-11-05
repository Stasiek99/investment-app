import "../styles.css";
import { useRef } from "react";

import Input from "./Input.tsx";

export default function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <div className="new-project">
            <menu className="menu">
                <li><button className="menu-cancel">Cancel</button></li>
                <li><button className="menu-save" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
               <Input type="text" ref={title} label="Title" />
               <Input ref={description} label="Description" textarea />
               <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    )
}