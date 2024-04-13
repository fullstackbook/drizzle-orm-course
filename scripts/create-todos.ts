import db from "../db/drizzle";
import { todo } from "../db/schema";

for (let i = 0; i < 100; i++) {
  await db.insert(todo).values({ text: "todo " + i });
}
