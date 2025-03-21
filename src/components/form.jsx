import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "./taskSlice";

const TaskForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {  // Fixed typo in handleSUbmmit
        e.preventDefault();
        dispatch(addTask({
            id: Date.now().toString(),
            title,
            desc,
            status: "todo"
        }));
        setTitle("");
        setDesc("");
        setIsOpen(false);
    };

    return (
        <>
            <button className="addTask" onClick={() => setIsOpen(true)}>
                Add Task
            </button>
            {isOpen && (
                <form className="taskForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required
                    />
                    <textarea 
                        placeholder="Description" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        required
                    />
                    <button type="submit">Add Task</button>
                    <button type="button" onClick={() => setIsOpen(false)}>
                        Cancel
                    </button>
                </form>
            )}
        </>
    );
};

export default TaskForm;