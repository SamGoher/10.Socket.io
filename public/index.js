const socket = io();

window.onload = () => {

  let input = document.getElementById(`input`) ;
  let button = document.getElementById('send');
  let field = document.getElementById(`field`);

  button.addEventListener(`click`, () => {
    socket.emit(`chat`, {
      message: input.value
    });
    input.value = ``;
  });
  
  socket.on(`chat2`, data => {
    if(data.message > ``){
      field.innerHTML += `<fieldset> ${data.message} </fieldset>`;
    }
  });
  
};
