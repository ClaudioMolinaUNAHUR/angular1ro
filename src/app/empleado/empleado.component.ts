import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: `<p>
  //     Aqui es inline empleado
  //   </p>`,
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Andres";
  apellido = "Molina";
  edad=32;
  empresa = "";
  deshabilitar=true;
  registrado=false;
  textoDeRegistro="";
  esMayor(num: number){return num >= 18 ? "es mayor": "es menor"  }

  setEmpresa(value: string){
    this.deshabilitar = true;
    if (this.registrado){
      this.deshabilitar = false;
      this.empresa = value;
    }
  }

  setUserRegistrado(event: Event){
    if((<HTMLInputElement>event.target).value == "no"){
      this.textoDeRegistro="no hay nadie registrado";
      this.registrado = false;
    }else if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro="usuario registrado";
      this.registrado = true;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
