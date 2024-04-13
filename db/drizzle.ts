import "dotenv/config";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const sql = neon(process.env.NEON_DATABASE_URL!);

const db = drizzle(sql, { schema });

export default db;
