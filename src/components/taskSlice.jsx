import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],  // Array of tasks
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        moveTask: (state, action) => {
            const { taskId, newStatus } = action.payload;
            const taskIndex = state.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state[taskIndex].status = newStatus;
            }
        }
    }
});

export const { addTask, moveTask } = taskSlice.actions;  // Fixed export name
export default taskSlice.reducer;