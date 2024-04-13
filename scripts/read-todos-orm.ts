import db from "../db/drizzle";

const todos = await db.query.todo.findMany();

console.log(todos);

const todo = await db.query.todo.findFirst();

console.log(todo);
