let fs = require('fs');

// __dirname	动态获取 当前文档模块所属目录的绝对路径
// __filname 动态获取 当前文件的绝对路径

// fs.stat 检测是文件还是目录
// fs.stat(__dirname + '/test.html', (err, stats) => {
//   if (err) throw err;
//   console.log(`文件:${stats.isFile()}`);
//   console.log(`目录:${stats.isDirectory()}`);
// });

// ---------------------------

// fs.mkdir 创建目录
// fs.mkdir(__dirname + '/css', (err) => {
//   if (err) throw err;
//   console.log('创建目录成功');
// });

// ---------------------------

// fs.writeFile 写入文件
// 会覆盖原有内容
// fs.writeFile(__dirname + '/test2.html', '我是写入的内容1',{encoding:"utf8"},(err) => {
//   if (err) throw err;
//   console.log('写入成功');
// });

// ----------------------

// fs.appendFile 追加文件
// fs.appendFile(__dirname + '/test2.html', '我是追加的内容2', 'utf8', (err) => {
//   if (err) throw err;
//   console.log('追加内容成功');
// });


// ----------------------

// fs.readFile 读文件

// fs.readFile(__dirname + '/test.html', 'utf8', (err, data) => {
//   if (err) throw err;
//   // data的默认值是一个buffer,指定了encoding为utf8自动转换为字符串
//   // console.log(data);
//   // console.log(data.toString());
// });

// -------------------

// fs.readdir

// fs.readdir(__dirname+'/html',(err,data)=>{
//   if(err) throw err;
//   console.log(data); // [ 'css', 'index.html', 'js' ]
// });

// -------------------

// fs.rename 
// 1.改名  2.剪切文件
// fs.rename(__dirname+'/html/index.html',__dirname+'/html/news.html',(err)=>{
//   if(err) throw err;
//   console.log('修改成功');
// });

// fs.rename(__dirname+'/test2.html',__dirname+'/html/test3.html',(err)=>{
//   if(err) throw err;
//   console.log('剪切成功');
// })

// -------------------

// fs.rmdir 删除目录

// fs.rmdir(__dirname+'/html2',(err)=>{
//   if(err) throw err;
//   console.log('删除目录成功');
// });

// fs.unlink 删除文件
// fs.unlink(__dirname+'/test100.html',(err)=>{
//   if(err) throw err;
//   console.log('删除文件成功');
// })