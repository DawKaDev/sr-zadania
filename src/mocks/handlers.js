import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1,
        name: "Adam",
        gender: "male"
      })
    )
  }),
  rest.post('/message', (req, res, ctx) => {
    const { type } = req.body;
    if(type === 'success') {
      return res(
        ctx.status(200),
        ctx.json({
          type: type,
          message: 'Message send successful!'
        })
      )
    }
    return res(
      ctx.status(400),
      ctx.json({
        type: type,
        message: 'Message send failed!'
      })
    )
  })
]