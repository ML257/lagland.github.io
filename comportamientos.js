function decirip() {
    alert("IP:147.185.221.20 Puerto:1538");

}



function copiarIP() {
    navigator.clipboard
      .writeText("192.168.1.9:25565")
      .then(() => {
        alert("La IP  del servidor ha sido copiada correctamente");
      })
      .catch(() => {
        console.error("F");
      });
}

function copia() {
  let resultado = window.confirm('Deseas copiar la ip?');

  if (resultado = true) {
    copiarIP()
  } else {
    window.alert('Usted no quizo copiar la ip')
  }
}


