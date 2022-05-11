import express from 'express';

const app = express();

app.get('/:name', (req, res) => {
  res.json({
    message: `hello ${req.params.name}`,
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `server listening on http://localhost:${process.env.PORT || 3000}`
  )
);
