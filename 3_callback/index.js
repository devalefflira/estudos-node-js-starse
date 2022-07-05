function mensagemAleff(callback) {
  setTimeout(() => {
    console.log('Bebam água');
    callback();
  }, 0);
}

function mensagemRafael() {
  console.log('Hidratando! Bora pra cima!');
}

mensagemAleff(mensagemRafael);
