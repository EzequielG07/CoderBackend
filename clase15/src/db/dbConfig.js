import mongoose from 'mongoose';

const URI =
  'mongodb+srv://dbEze:1553314398@cluster0.qbr9pr4.mongodb.net/school51125DB?retryWrites=true&w=majority';
// 'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/school51125DB?retryWrites=true&w=majority'

mongoose
  .connect(URI)
  .then(() => console.log('Conectado a la base de datos'))
  .catch((error) => console.log(error));
