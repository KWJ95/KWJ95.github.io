import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

// Check if we're in a test environment
const isTest = process.env.NODE_ENV === 'test';

let client;

if (!env.DATABASE_URL && !isTest) {
  throw new Error('DATABASE_URL is not set');
}

if (isTest && !env.DATABASE_URL) {
  // Use an in-memory database for testing
  console.log('Using in-memory database for testing');
  client = createClient({ url: 'file::memory:' });
} else {
  client = createClient({ url: env.DATABASE_URL });
}

export const db = drizzle(client, { schema });
