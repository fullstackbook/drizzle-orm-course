import { eq } from "drizzle-orm";
import db from "../db/drizzle";
import { todo } from "../db/schema";

await db.delete(todo).where(eq(todo.id, 99));
