import app from "./src/app";

export const port = 3000;

app.listen(
    port,
    () => console.log(`App listening on port ${port}!`)
);
