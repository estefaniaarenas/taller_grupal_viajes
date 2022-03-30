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


/*destinos compra*/

function calcular() {
  let valor = document.getElementById("num").value;
  let plan = 500000;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  //Swal.fire( 'el valor total pagado fue de ' +calculo,'Gracias por preferirnos', 'success',)
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#20284f",
  });
}

function calcularTwo() {
  let valor = document.getElementById("num").value;
  let plan = 1000000;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#20284f",
  });
}

function calcularThree() {
  let valor = document.getElementById("num").value;
  let plan = 800000;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#20284f",
  });
}

function calcularFour() {
  let valor = document.getElementById("num").value;
  let plan = 800000;
  let calculo = valor * plan;
  //alert("Debes pagar: " +calculo);
  Swal.fire({
    icon: "success",
    title: "el valor total pagado fue de " + calculo,
    showConfirmButton: true,
    timer: 1500,
    confirmButtonColor: "#20284f",
  });
  
  valor = document.getElementById("num").value;
  plan = 800000;
  calculo = valor * plan;


}