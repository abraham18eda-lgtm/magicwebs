import { Pool } from "pg"

// Conexión a tu base local o tradicional
export const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "db",
  database: process.env.PGDATABASE || "magicwebspro",
  password: process.env.PGPASSWORD || ,
  port: Number(process.env.PGPORT) || 5432,
  // Agregamos esto para usar tu esquema por defecto
  // options: "-c search_path=magicwebspro"
});

// Conexión a Neon
export const pool2 = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
