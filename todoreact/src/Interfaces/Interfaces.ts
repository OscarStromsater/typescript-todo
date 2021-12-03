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
  checkUrgent() {
    return !!this.date;
  }
  toggleDone() {
    console.log(this);
    this.done = !this.done;
  }
}

export interface InputFields {
  title: string;
  description?: string;
}

export type TodoListSetFunc = (
  callback: (existingState: Todo[]) => Todo[]
) => void;
