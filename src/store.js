import { create } from "zustand";

/* eslint-disable no-unused-vars */
const store = (set) => ({
    tasks: [{ title: "TestTask", state: 'state' }],
    draggedTask: null,

    addTask: (title, state) => 
        set((store) => ({
            tasks: [...store.tasks, { title: title, state: state }]
        })),
    
    deleteTask: (title) =>
        set((store) => ({ tasks: store.tasks.filter(task => task.title !== title) })),
    
    setDraggedTask: (title) => set({ draggedTask: title }),
    
    moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
    
    
});

export const useStore = create(store);
