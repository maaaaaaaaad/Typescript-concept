{
  type ToDo = {
    title: string;
    subTitle?: string;
    description: string;
    feeling: string;
  };

  function toDoDisplay(todo: Readonly<ToDo>) {
    /* todo.title = "Woong";  Error!
    👉🏻 Readonly<T> = { 
        readonly [P in keyof T]: T[P]; 
      } */
  }
}
