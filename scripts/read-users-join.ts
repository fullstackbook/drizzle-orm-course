import { eq } from "drizzle-orm";
import db from "../db/drizzle";
import { todo, user } from "../db/schema";

const res = await db
  .select()
  .from(user)
  .leftJoin(todo, eq(todo.userId, user.id));

console.log(res);
