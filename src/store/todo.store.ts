import {
    observable,
    action,
    reaction,
    computed
} from 'mobx';

export interface Todo {
    task: string,
    isComplete: boolean
}

export class TodoStore {
    @observable
    todoList: Todo[] = []

    constructor() {
        reaction(
            () => this.todoList.filter(todo => !todo.isComplete),
            incompletedTasks => {
                if (incompletedTasks.length > 5) {
                    console.log(`Shaun. You've got too much your plate.`)
                }
            }
        )
    }

    @computed
    get completedTasks(): number {
        return this.todoList.filter(todo => todo.isComplete).length;
    }

    @action
    addTodo(task: string) {
        this.todoList.push({ task, isComplete: false })
    }

    @action
    completeTodo(completeTodo: Todo) {
        this.todoList.find(todo => todo === completeTodo).isComplete = true
    }
}

export const todoStore = new TodoStore();
