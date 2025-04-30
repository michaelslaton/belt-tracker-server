import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

let crudData: any[] = [];

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('data', (data) => {
    // crudData.push(data);
    // socket.emit('crudData', crudData);
  });

  socket.on('editData', (response) => {
    // console.log(response);
    // let currentIndex = crudData.findIndex((data) => data.id === response.id);
    // if (currentIndex !== -1) crudData[currentIndex] = { ...crudData[currentIndex], ...response };
  });

  setInterval(() => {
    socket.emit('crudData', crudData);
  }, 1000);
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});