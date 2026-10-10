import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import { connectDB } from './config/db.js';

let PORT = process.env.PORT || 5005;

const server = http.createServer(app);

// Initialize Socket.io for Realtime Leaderboard & Peer Chat
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log(`[Socket.io] User connected: ${socket.id}`);

  socket.on('join-room', (room) => {
    socket.join(room);
  });

  socket.on('send-message', (data) => {
    io.emit('receive-message', data);
  });

  socket.on('disconnect', () => {
    console.log(`[Socket.io] User disconnected: ${socket.id}`);
  });
});

const startServer = async (portToUse) => {
  await connectDB();
  
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Port ${portToUse} in use] Retrying server start on port ${portToUse + 1}...`);
      setTimeout(() => {
        server.close();
        server.listen(portToUse + 1);
      }, 500);
    } else {
      console.error(err);
    }
  });

  server.listen(portToUse, () => {
    console.log(`🚀 LevelUp NITK Server running on http://localhost:${portToUse}`);
  });
};

startServer(PORT);
