import { and, eq } from "drizzle-orm";
import db from "../db/drizzle";
import { todo } from "../db/schema";

const isDone = undefined;

const todos = await db
  .select()
  .from(todo)
  .where(
    and(
      eq(todo.userId, 1),
      typeof isDone === "boolean" ? eq(todo.done, isDone) : undefined
    )
  );

console.log(todos);
