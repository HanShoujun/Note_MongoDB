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

const bookBaseSchema = new mongoose.Schema({
  name: {
    type: String
  }
})

class BookBaseClass extends mongoose.Model {
  public static async sayHi(){
    console.log('Hi');
  }
}

interface BookBaseDocument extends mongoose.Document {
  name: string
}

interface BookBaseModel extends mongoose.Model<BookBaseDocument> {
  sayHi():void;
}

bookBaseSchema.loadClass(BookBaseClass)
const bookBase = mongoose.model<BookBaseDocument, BookBaseModel>('bookBase', bookBaseSchema)

bookBase.sayHi()

bookBase.create({
  name:"Red drangon"
},(error, book)=>{
  if (error) {
    console.log(error);
  }
  console.log(book);
})

// db.close()
// console.log('closed');
