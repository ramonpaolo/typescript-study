// Constant with value type number
const constant = 10

// Created type with alias string and number
type Type = string | number

const type: Type = 1;

// Created interface that was object with attrs
interface IInterface {
    x: number[]
}

const interfaec: IInterface = {x: [1, 2]}

// Created enum that basically is a set of names with defaut values
enum Role {
    'admin' = 1,
    'common' = 0
}

console.log(Role.admin)