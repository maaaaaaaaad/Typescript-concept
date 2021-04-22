{
  type ToDo = {
    title: string;
    subTitle?: string;
    description: string;
    feeling?: string;
    prioritry: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "Typescript",
    subTitle: "Type",
    description: "Learn Typescript",
    feeling: "Lovely",
    prioritry: "high",
  };

  const fieldsToUpdate = {
    title: "nono",
    message: "Awesome to Typescript !!",
  };

  const updated = updateTodo(todo, fieldsToUpdate);

  // const updated = updateTodo(todo, {
  //   subTitle: "WoongScript",
  //   prioritry: "low",
  // });

  console.log(updated);
}
