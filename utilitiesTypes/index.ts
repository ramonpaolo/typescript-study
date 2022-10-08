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

// ------------------------------------------- Pick

interface ITodo5 {
    title: string
    describe: string
}

type newTodo = Pick<ITodo5, 'title'>

const updateTodo5: newTodo = {title: 'only title'}

// ------------------------------------------- Pick

interface ITodo6 {
    title: string
    describe: string
    date: Date
}

type newTodo2 = Omit<ITodo6, 'date'>

const updateTodo6: newTodo2 = {title: 'title', describe: 'removed field date'}

// ------------------------------------------- Extract

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
   
const g: T0 = 'a'

// ------------------------------------------- Exclude

type T1 = Exclude<"a" | "b" | "c", "a" | "c">;
   
const e: T1 = 'b'