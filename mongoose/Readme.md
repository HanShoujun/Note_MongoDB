# 简介

编写MongoDB验证，转换和业务逻辑是非常麻烦的. 所以发明了Mongoose.

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
Mongoose为模型提供了一种直接的，基于scheme结构去定义你的数据模型。它内置数据验证， 查询构建，业务逻辑钩子等，开箱即用。

# 安装

```bash
npm install mongoose

// or

yarn mongoose
```

# 连接

```ts
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/spiderdb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},(error)=>{
  if (error) {
    console.log(error);
    return
  }
  console.log("连接成功");
})
```

# Schema
mongoose 都是通过Schema驱动的
```ts
const bookBaseSchema = new mongoose.Schema({
  name: {
    type: String
  }
})
```

# 
