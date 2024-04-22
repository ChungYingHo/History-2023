// 載入套件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// 引入路由、mongoose.js
const app = express()
const port = 3000
const routes = require('./routes')
require('./config/mongoose')

// 設定 handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 使用套件、靜態檔案與路由
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(routes)

// 啟動監聽伺服器
app.listen(port, ()=>{
    console.log(`Express is running on http://localhost:${port}`)
})