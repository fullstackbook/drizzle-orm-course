// /api/todos
// /api/todos?done=false
// /api/todos?done=true

import { and, eq } from "drizzle-orm";
import db from "../db/drizzle";
import { todo } from "../db/schema";

const isDone = false;

const query = db.select().from(todo).where(eq(todo.userId, 1));

// query.where(eq(todo.done, false));

const dynamicQuery = query.$dynamic();

if (typeof isDone === "boolean") {
  dynamicQuery.where(and(eq(todo.done, isDone), eq(todo.userId, 1)));
}

const todos = await dynamicQuery;

console.log(todos);
