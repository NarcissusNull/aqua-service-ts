
import * as express from 'express';
import { createConnection, getConnection } from 'typeorm';
import app from '../app';
import * as request from 'supertest';
beforeAll(async () => {
  // 在所有测试开始前创建连接
  await createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [__dirname + '/entity/*.ts'],
    synchronize: true,
    logging: false,
  });
});

afterAll(async () => {
  // 在所有测试结束后关闭连接
  await getConnection().close();
});

describe('GET /api/code', () => {
  it('should respond with a JSON object', async () => {
    const res = await request(app).get('/api/code');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('code');
    expect(res.body).toHaveProperty('userId');
  });
});