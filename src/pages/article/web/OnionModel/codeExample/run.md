const app = new App();

app.use(async function(ctx, next) {
  console.log(0);
  await next();
  console.log(2);
});

app.use(async function(ctx, next) {
  console.log(1);
  await next();
});

app.run();