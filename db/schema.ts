import { relations } from "drizzle-orm";
import { text, boolean, pgTable, serial, integer } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId: integer("user_id").references(() => user.id),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const usersRelations = relations(user, ({ many }) => ({
  todos: many(todo),
}));

export const todosRelations = relations(todo, ({ one }) => ({
  user: one(user, {
    fields: [todo.userId],
    references: [user.id],
  }),
}));
