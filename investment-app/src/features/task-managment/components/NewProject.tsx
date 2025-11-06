import "../styles.scss";
import { useRef } from "react";

import Input from "./Input.tsx";
import Modal from "./Modal.tsx";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay" classList="modal">
                <h2>Invalid Input</h2>
                <p>Oops ... looks like you forgot to enter a value.</p>
                <p>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="new-project">
                <menu className="new-project__menu">
                    <li><button className="new-project__button--cancel" onClick={onCancel}>Cancel</button></li>
                    <li><button className="new-project__button--save" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                   <Input type="text" ref={title} label="Title" />
                   <Input ref={description} label="Description" textarea />
                   <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}