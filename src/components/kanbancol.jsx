import React from "react";
import Task from "./task";
import { useDroppable } from '@dnd-kit/core';

const Kanban = ({ colId, title, tasks }) => {
    const { setNodeRef } = useDroppable({  // Fixed setRef to setNodeRef
        id: colId
    });

    return (
        <div className="col">
            <h3>{title}</h3>
            <div 
                ref={setNodeRef}
                className="taskList"
            >
                {tasks.length === 0 ? (
                    <p style={{ color: '#888', textAlign: 'center' }}>
                        No tasks in this column
                    </p>
                ) : (
                    tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Kanban;