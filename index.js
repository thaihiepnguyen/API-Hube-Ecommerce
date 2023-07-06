import express from 'express'

const PORT = 3001

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`sever is listening in PORT ${3000}`);
})
