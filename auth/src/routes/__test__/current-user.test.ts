import request from 'supertest';
import { app } from "../../app";
import { response } from "express";

it('response with detail about the current user', async () => {
    const cookie = await global.signin();

    const response = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .send()
        .expect(200);

    expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('response with null if not authenticated', async () => {
   const response = await request(app)
       .get('/api/users/currentuser')
       .send()
       .expect(200);

   expect(response.body.currentUser).toEqual(null);
});