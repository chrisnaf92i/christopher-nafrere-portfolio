import express from "express"
import { Server } from "socket.io"
import ExpressWs from "express-ws"

var expressWs = ExpressWs(express())
var app = expressWs.app;

app.use(express.json())

app.get("/api", (req, res) => {
    res.send("Bienvenu sur l'api du portfolio de Christopher Nafrere")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Lancement du server sur le port ${PORT}`))
