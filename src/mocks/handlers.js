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
    const { data } = req.body;
    if(data.name.toLowerCase() === 'adam') {
      return res(
        ctx.status(200),
        ctx.json({
          type: 'success',
          message: 'Message send successful!'
        })
      )
    }
    return res(
      ctx.status(400),
      ctx.json({
        type: 'error',
        message: 'Message send failed! Try with name Adam'
      })
    )
  })
]