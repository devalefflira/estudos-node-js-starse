function mensagemAleff() {
  const promiseMensagemAleff = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bebam água');
      resolve();
    }, 0);
  });
  return promiseMensagemAleff;
}

function mensagemRafael() {
  console.log('Hidratando! Bora pra cima!');
}

mensagemAleff().then(mensagemRafael);
