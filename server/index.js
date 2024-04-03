import express from 'express';
const app = express()
app.use(express.json())
const PORT = 5000;

app.get('/health', (req, res) => {
    res.json({status: 'All Good!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})