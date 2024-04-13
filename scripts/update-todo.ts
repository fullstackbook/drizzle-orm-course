import { eq } from "drizzle-orm";
import db from "../db/drizzle";
import { todo } from "../db/schema";

const id = parseInt(process.argv[2]);

await db.update(todo).set({ done: true }).where(eq(todo.id, id));
