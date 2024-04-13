import { eq } from "drizzle-orm";
import db from "../db/drizzle";
import { todo } from "../db/schema";

const todos = await db.query.todo.findMany({ limit: 10 });

for (let t of todos) {
  await db.update(todo).set({ userId: 1 }).where(eq(todo.id, t.id));
}
