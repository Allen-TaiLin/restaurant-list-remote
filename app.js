// require packages used in the projects
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  // past the restaurant data into 'index' partial template
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  //取得restaurant_id
  const restaurantID = req.params.restaurant_id
  //查詢符合restaurant_id的店家
  const restaurant = restaurantList.results.find((item) => {
    return item.id.toString() === restaurantID
  })
  //讀取show檔案、渲染畫面
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  //取得keyword
  const keyword = req.query.keyword
  //查詢符合keyword的店家
  const restaurants = restaurantList.results.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase())
  })
  //讀取index檔案、渲染畫面
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})