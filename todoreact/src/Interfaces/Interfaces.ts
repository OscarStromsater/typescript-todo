export class Todo {
  readonly id: number;
  constructor(
    public title: string,
    public done: boolean,
    public description?: string,
    public date?: Date
  ) {
    this.id = Date.now();
  }
  static checkUrgent(todo: Todo): boolean {
    return !!todo.date;
  }
  static toggleDone(todo: Todo): void {
    todo.done = !todo.done;
  }
}

export interface InputFields {
  title: string;
  description?: string;
}

export type TodoListSetFunc = (
  callback: (existingState: Todo[]) => Todo[]
) => void;

export interface TodoTestInterface {
  id: number;
  title: string;
  done: boolean;
  description?: string;
}
