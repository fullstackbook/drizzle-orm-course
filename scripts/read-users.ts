import db from "../db/drizzle";
import util from "util";

const users = await db.query.user.findMany({
  with: {
    todos: true,
  },
});

console.log(util.inspect(users, { depth: null, colors: true }));
