import { pgTable, serial, text, foreignKey, boolean, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const user = pgTable("user", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
});

export const todo = pgTable("todo", {
	id: serial("id").primaryKey().notNull(),
	text: text("text").notNull(),
	done: boolean("done").default(false).notNull(),
	userId: integer("user_id").references(() => user.id),
});