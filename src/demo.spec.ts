import { env } from 'process';
import { describe, it, expect } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe('show env', () => {
	it('show env', () => {
		expect(env.DATABASE_URL).toBe('file:local.db');
	})	
});
