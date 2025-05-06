let name: string = "John"
let isOpen: boolean = true
let age: number = 30
let data: null = null
let result: undefined
let largeNumber: bigint = 12345678901234567890n
let sym: symbol = Symbol("id")
let something: any = "anything"

let uncertain: unknown
if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase())
}
function infiniteLoop(): never { while(true) {} }
function logMessage(): void { console.log("Hello") }

// -------------------------------------------------

type ID = string | number
const userId1: ID = "abc123"
const userId2: ID = 456

type User = {
  name: string
  age: number
}
const user: User = {
  name: "Somchai",
  age: 30
}

type Greeting = (name: string) => string
const greet: Greeting = (name) => {
  return `Hello, ${name}!`
}
// -------------------------------------------------

interface User {
  name: string
  age: number
}
interface Employee extends User {
  employeeId: string
}
const user: User = {
  name: "Somchai",
  age: 30
}
const employee: Employee = {
  name: "Somsak",
  age: 28,
  employeeId: "EMP123"
}

interface Greeting {
  (name: string): string
}
const greet: Greeting = (name) => `Hello, ${name}!`
// -------------------------------------------------

const numbers: number[] = [1, 2, 3, 4, 5]
const names: string[] = ["Somchai", "Anong", "Somsak"]

interface Person {
  name: string
  age: number
}
const persons: Person[] = [
  { name: "Somchai", age: 30 },
  { name: "Somsri", age: 28 }
]
// -------------------------------------------------

// รับ parameter เป็น string และ return ผลลัพธ์เป็น string
function greet(name: string): string {
  return `Hello, ${name}!`
}
// arrow function รับสอง parameter เป็น number และ return ผลลัพธ์เป็น number
const add = (a: number, b: number): number => {
  return a + b
}
// รับ parameter name แบบ optional และกำหนดค่า default เป็น "Guest"
function greetOptional(name: string): string {
  return `Hello, ${name || "Guest"}!`
}
// -------------------------------------------------

// Type Annotation
let name: string

// Type Assertions
let someValue: any
let strLength: number = (someValue as string).length

// Type Inference
let message = "Hello, TypeScript!"

// Union Type
let value: string | number

// Intersection Type
type A = string | number
type B = number | boolean
type Common = A & B // string, number, boolean
// -------------------------------------------------

function identity<T>(arg: T): T {
  return arg
}
// เรียกใช้หังก์ชัน identity พร้อมระบุ type เป็น number
const num = identity<number>(42)
// เรียกใช้ฟังก์ชัน identity พร้อมระบุ type เป็น string
const str = identity<string>("Hello, TypeScript!")
// -------------------------------------------------

// Psrtial
interface User {
  name: string
  age: number
  email: string
}
const partialUser: Partial<User> = {
  name: "Somchai"
}

// Required
interface Person {
  firstName?: string
  lastName?: string
}
const fullPerson: Required<Person> = {
  firstName: "Jane",
  lastName: "Doe"
}

// Pick
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = Pick<Todo, "title" | "completed">
const todo: TodoPreview = {
  title: "Learn TypeScript",
  completed: false
}

// Omit
type TodoInfo = Omit<Todo, "description">
const todoInfo: TodoInfo = {
  title: "Learn TS Omit",
  completed: true
}

// Array
const fruits: Array<string> = ["apple", "banana", "orange"]

// Record
type Colors = "red" | "green" | "blue"
const colors: Record<Colors, string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
}


let count: number;

let inferred = "string"; // inferred as string

type UserID = number | string
interface Person {
  name: string
  age: number
}

// Bad ❌
let obj: Object = { name: 'John', age: 50 }
// Good ✔️
interface Person { name: string; age: number }
let obj: Person = { name: 'John'; age: 50 }

type Person = {
  name: string
  age: number
}
let obj: Person = {
  name: 'John'
  age: 50
}


// Bad ❌
let str: String = "Hello World"
// Good ✔️
let str: string = "Hello World"

// Bad ❌
let num: Number = 50
// Good ✔️
let num: number = 50

// Bad ❌
let bool: Boolean = true
// Good ✔️
let bool: boolean = false



string[] หรือ Array<string>


function identity<T>(arg: T): T {
  return arg;
}
const result1 = identity<string>("Hello");
const result2 = identity<number>(123);

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
const firstStr = getFirstElement(["a", "b", "c"]) // string
const firstNum = getFirstElement([10, 20, 30]) // number