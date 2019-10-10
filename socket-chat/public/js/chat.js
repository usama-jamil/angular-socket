const socket = io();

socket.on("countUpdated", (count) => {
  console.log("The count has been Updated",count);
});


document.querySelector('#increment').addEventListener('click',()=>{
    console.log('button clicked')
    socket.emit('increment')
})