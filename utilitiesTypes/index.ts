interface ITodo {
    title: string
    describe: string
}

const updateTodo = (todo: ITodo, someFields: Partial<ITodo>) => {
    console.log(todo)
    console.log(someFields)
}

updateTodo({title: 'eae', describe: 'Opa'}, {title: 's'})

// ------------------------------------------- Required

interface ITodo2 {
    title?: string
    describe?: string
}

const updateTodo2 = (todo: ITodo2, someFields: Required<ITodo2>) => {
    console.log(todo)
    console.log(someFields)
}

updateTodo2({title: 'eae', describe: 'Opa'}, {title: 's', describe: 'required'})

// ------------------------------------------- Readonly

interface ITodo3 {
    title: string
    describe: string
}

const updateTodo3: Readonly<ITodo3> = {title: 'title readonly', describe: 'describe readonly'}

updateTodo3.title = 'try update title';

// ------------------------------------------- Record

interface ITodo4 {
    title: string
    describe: string
}

type Name = 'Ramon' | 'Rodolfo'

const updateTodo4: Record<Name, ITodo4> = {
    Ramon: {title: 'Title of Ramon', describe: 'describe of Ramon'},
    Rodolfo: {title: 'Title of Rodolfo', describe: 'describe of Rodolfo'}
}

updateTodo4.Ramon.describe = 'try update title of Ramon';