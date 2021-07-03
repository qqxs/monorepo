import Koa from "koa";
import Fn from "@mono/common";
const app = new Koa();

const port = 3003;
// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx) => {
  Fn("koa server import @mono/common");
  ctx.body = "Hello World";
});

app.listen(port, () => {
  console.log(`listen: http://localhost:${port}`);
});
