import React from "react";
import { useDraggable } from '@dnd-kit/core';

const Task = ({ task }) => {
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform 
    } = useDraggable({
        id: task.id
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: 'transform 0.2s ease'
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="task"
        >
            <h3>{task.title}</h3>
            <p>{task.desc.substring(0, 50)}...</p>
        </div>
    );
};

export default Task;