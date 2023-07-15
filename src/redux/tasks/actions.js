export const TASKS_ACTIONS = {
    add: 'task/addTask',
    toggle: 'task/toggleStatus'
};

export const createTask = (taskName) => {
    return{
        type: TASKS_ACTIONS.add,
        payload: taskName,
    }
}

export const toggleTask = (taskId) => {
    return{
        type: TASKS_ACTIONS.toggle,
        payload: taskId
    }
}