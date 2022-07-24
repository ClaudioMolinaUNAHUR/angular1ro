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
  empresa = "net";

  esMayor(num: number){return num >= 18 ? "es mayor": "es menor"  }

  constructor() { }

  ngOnInit(): void {
  }

}
