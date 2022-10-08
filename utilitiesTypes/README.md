# Utilities Types

## What is it?

Basically, utilities types are the ways to transform of types, how make the All attributes of an interface in optionals, natively.

It's utilities, are available global in the typescript

---

## Dictionary

1 - `Partial<T>` - `Partial<Interface>` 

- Line 1 to 11

- Basically, this Utility, make the all attributes on interface, be optional.

---

2 - `Required<T>` - `Required<Interface>`  

- Line 15 to 25

- Basically, this Utility, make the all attributes on interface, be required.

---

3 - `Readonly<T>` - `Readonly<Interface>` or  `Readonly<type>`

- Line 29 to 36

- Basically, this Utility, make the all attributes on interface, after was defined or received value, was not able to change the value

---

4 - `Record<type, Interface>` 

- Line 40 to 52

- Basically, this Utility, make the keys be the name of type(strings) and the interface was the object that is the value of key

---

5 - `Pick<Interface, string>` 

- Line 56 to 63

- Basically, this Utility, say to the typescript, get the property/attribute of Interface, defined on the string

---

6 - `Omit<Interface, string>` 

- Line 67 to 75

- Basically, this Utility, make the inverse of Pick.
- Say to the typescript, remove the property/attribute of Interface, defined on the string

---

7 - `Extract<type, union>` 

- Line 79 to 81

- Basically, this Utility, extract the type that make assigne the union

Example: 
```typescript
type TypeExtracted = Extract<"a" | "b" | "c", "a" | "f">;
   
// Get of type that make part of union("a" or "f")
const variable: TypeExtracted = 'a'
```

---

8 - `Exclude<type, union>` 

- Line 85 to 87

- Basically, this Utility, exclude of type that not make part of union

Example: 
```typescript
type TypeExclude = Extract<"a" | "b" | "c", "a" | "c">;
   
// Get of type that NOT make part of union("a" or "c")
const variable: TypeExclude = 'b'
```

---

9 - `NonNullable<type | union>` 

- Line 91 to 93

- Basically, this Utility, exclude the null and undefined from union or type

Example: 
```typescript
type TypeNonNullable = NonNullable<"a" | null | undefined>;
   
// Remove the null and undefined
const variable: TypeNonNullable = 'a'
```

---

9 - `ReturnType<type | union>` 

- Line 97 to 99

- Basically, this Utility, get the type of returned type value of funcion

Example: 
```typescript
type TypeReturnType = ReturnType<() => 'opa'>;
   
// Get the type of returned value of funcion
const variable: TypeReturnType = ''
```

9 - `ReturnType<type | union>` 

- Line 103 to 110

- Basically, this Utility, get the type of returned type value of funcion

Example: 
```typescript
class Class {}

type TypeInstanceType = InstanceType<typeof Class>;
   
// Get the type of Class
const variable: TypeInstanceType = new Class()
```