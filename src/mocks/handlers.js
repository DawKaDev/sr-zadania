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
  })
]