const express = require('express')
const app = express()
app.on('uncaughtException',()=>{
    app.close()
})
