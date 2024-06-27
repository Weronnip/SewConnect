import { defineConfig } from 'drizzle-kit'

// export model database
export default defineConfig({
  schema: './models/item.ts',
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'demofort',
    port: 3306,
    database: 'SewConnection',
  },
  verbose: true,
  strict: true,
  out: './drizzle'
});