interface ITodo {
    title: string
    describe: string
}

const updateTodo = (todo: ITodo, someFields: Partial<ITodo>) => {
    console.log(todo)
    console.log(someFields)
}

updateTodo({title: 'eae', describe: 'Opa'}, {title: 's'})