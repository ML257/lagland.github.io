function decirip() {
    alert("IP:147.185.221.20 Puerto:1538");

}



function copiar() {

  let resultado = window.confirm("Deseas copiar la IP?")

  if (resultado === true) {

    navigator.clipboard.writeText("192.168.1.1:25565")
    window.alert("La ip ha sido copiada con exito!")
  } else if (resultado === false) {
    window.alert("No se ha copiado la ip")
  }  else {
    window.alert("No ha pasado nada")
  }
}


