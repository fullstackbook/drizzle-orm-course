import db from "../db/drizzle";
import { todo } from "../db/schema";

const todos = await db.select().from(todo);

console.log(todos);
