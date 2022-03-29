function Enviar (){
   
    let nombre = document.getElementById("inputName").value;
    let apellido = document.getElementById("inputLast").value;
    let email = document.getElementById("inputEmail").value;
    let telefono = document.getElementById("inputPhone").value;

    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Tú información ha sido enviada',
        showConfirmButton: false,
        timer: 3500,
        text: `El usuario envio los siguientes datos: \n nombre: ${nombre} \n apellido: ${apellido} \n email: ${email} \n phone: ${telefono}`
      })
      document.getElementById(`inputName`).value = "";
      document.getElementById(`inputLast`).value = "";
      document.getElementById(`inputEmail`).value = "";
      document.getElementById(`inputPhone`).value = "";
}