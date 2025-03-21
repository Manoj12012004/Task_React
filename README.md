
# **Kanban Board Setup Documentation**

### **Setup**

This section guides you through installing and running the Kanban board application on your local machine.

#### **Prerequisites**
- **Node.js**: Version 14.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: Version 6.0.0 or higher (comes with Node.js) or **yarn** (optional)
- A modern web browser (Chrome, Firefox, Edge, etc.)

#### **Installation Steps**

1. **Clone the Repository**
   - Open a terminal or command prompt
   - Run the following command, replacing `<your-repository-url>` with your actual repository URL:
     ```bash
     git clone <your-repository-url>
     cd kanban-board
     ```

2. **Install Dependencies**
   - Ensure you're in the project directory (`kanban-board`)
   - Install required packages:
     ```bash
     npm install
     ```
     This installs:
     - React and React DOM
     - Redux Toolkit and React-Redux
     - @dnd-kit/core and @dnd-kit/sortable

3. **Verify Project Structure**
   - Confirm the following files exist in `src/`:
     ```
     src/
     ├── components/
     │   ├── Dashboard.jsx
     │   ├── form.jsx
     │   ├── kanbancol.jsx
     │   ├── search.jsx
     │   └── task.jsx
     ├── redux/
     │   ├── store.js
     │   └── taskSlice.js
     ├── styles.css
     └── index.js
     ```

4. **Configure Entry Point**
   - Ensure `src/App.js` includes the Redux Provider:
     ```javascript
     import {React} from 'react';
    import {HTML5Backend} from 'react-dnd-html5-backend';
    import {DndProvider} from 'react-dnd';
    import Dashboard from './components/dash';
    import { Provider } from 'react-redux';
    import { store } from './components/store';
    import './App.css';

    const App=()=>{
    return(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
        <Dashboard />
        </DndProvider>
        </Provider>
    );
    }
    export default App;
     ```

5. **Run the Application**
   - Start the development server:
     ```bash
     npm start
     ```
   - The app should automatically open in your default browser at `http://localhost:3000`. If it doesn't, manually navigate to this URL.

#### **Troubleshooting Setup**
- **Command `npm start` fails**: Ensure `react-scripts` is in `package.json` dependencies. Run `npm install react-scripts` if missing.
- **Port Conflict**: If port 3000 is in use, you'll be prompted to use another port (e.g., 3001).
- **Dependencies Fail**: Delete `node_modules/` and `package-lock.json`, then rerun `npm install`.

### **Usage**

This section explains how to interact with the Kanban board application once it's running.

#### **Accessing the Application**
- Open your browser at `http://localhost:3000`
- You’ll see four columns: "To Do", "In Progress", "Peer Review", and "Done"

#### **Adding a New Task**
1. Click the "Add Task" button (typically at the bottom-right)
2. A modal form appears:
   - **Title**: Enter a brief task name (required)
   - **Description**: Add task details (required)
3. Click "Add Task" to save
   - The new task appears in the "To Do" column
4. Click "Cancel" to close without saving

#### **Moving Tasks**
- **Between Columns**:
  1. Click and hold a task card
  2. Drag it to another column
  3. Release to drop it in the new column
  - The task’s status updates automatically
- **Within a Column**:
  1. Drag a task up or down within its current column
  2. Drop it in the desired position
  - Tasks reorder within the same column

#### **Searching Tasks**
1. Locate the search bar at the top of the dashboard
2. Type a keyword or phrase
   - Tasks filter in real-time based on title (case-insensitive)
3. Clear the search input to show all tasks

#### **Visual Feedback**
- During drag: Tasks show a slight movement animation
- Empty columns display "No tasks in this column"
- Form appears centered on screen when adding tasks

#### **Example Workflow**
1. Add a task: "Implement Login" with description "Create login page UI"
2. Drag it from "To Do" to "In Progress" when you start working
3. Move to "Peer Review" when ready for review
4. Finally, drag to "Done" when complete
5. Search "Login" to filter tasks

#### **Notes**
- Tasks are stored in memory via Redux; refreshing the page clears all tasks
- No persistence to a database (yet!)

#### **Troubleshooting Usage**
- **Task Not Moving**: Ensure you’re dragging over a valid column; check console for errors
- **Search Not Working**: Verify text input updates the search state
- **Form Issues**: Ensure all fields are filled before submitting

---

