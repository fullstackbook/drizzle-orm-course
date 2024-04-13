import db from "../db/drizzle";
import { user } from "../db/schema";

await db.insert(user).values({ name: "foo" });
