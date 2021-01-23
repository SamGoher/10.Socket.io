exports.ioFunction = (io) => {
  return (socket) => {
    
    // send message
    socket.on(`chat`, data => {
      io.emit(`chat2`, data);
    });

  };
};