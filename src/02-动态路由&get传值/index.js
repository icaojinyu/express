let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('首页');
});

// 动态路由
app.get('/user/:username', (req, res) => {
  // 通过req.params获取动态路由参数
  console.log(req.params);
  res.send(`用户${req.params.username}访问了我们的网站`);
});

// get传值
app.get('/news', (req, res) => {
  // 通过req.query获取查询字符串
  console.log(req.query);
  if (req.query.name)
    res.send(`这是关于${req.query.name}的新闻`);
  else
    res.redirect('/');
});

app.listen(3000);