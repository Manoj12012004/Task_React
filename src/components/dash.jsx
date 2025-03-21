import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from "./form";
import Kanban from "./kanbancol";
import SearchBar from "./search";
import { moveTask } from "./taskSlice";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from '@dnd-kit/sortable';

const Dashboard = () => {  
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks || []);
    
    const cols = {
        'todo': "To Do",
        'inProgress': "In Progress",
        'peerReview': "Peer Review",
        'done': "Done"
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        const sourceTask = tasks.find(t => t.id === activeId);
        if (!sourceTask) return;

        const sourceCol = sourceTask.status;
        const destCol = Object.keys(cols).find(col => col === overId) || 
                       tasks.find(t => t.id === overId)?.status;

        if (!destCol) return;

        if (sourceCol === destCol) {
            const columnTasks = tasks.filter(t => t.status === sourceCol);
            const oldIndex = columnTasks.findIndex(t => t.id === activeId);
            const newIndex = columnTasks.findIndex(t => t.id === overId);
            
            if (oldIndex !== newIndex) {
                const reorderedTasks = arrayMove(columnTasks, oldIndex, newIndex);
                reorderedTasks.forEach((task, index) => {
                    dispatch(moveTask({
                        taskId: task.id,
                        newStatus: sourceCol
                    }));
                });
            }
        } else {
            dispatch(moveTask({
                taskId: activeId,
                newStatus: destCol
            }));
        }
    };

    return (
        <div className="dashboard">  
            <SearchBar search={setSearch} />  
            <DndContext 
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <div className="cols-container">  
                    {Object.entries(cols).map(([colId, title]) => (
                        <Kanban
                            key={colId}
                            colId={colId}
                            title={title}
                            tasks={tasks.filter(task => 
                                task.status === colId && 
                                task.title.toLowerCase().includes(search.toLowerCase())
                            )}
                        />
                    ))}
                </div>
            </DndContext>
            <TaskForm />
        </div>
    );
};

export default Dashboard;