import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.components.html',
  styleUrls: ['./nova-tranferencia.components.scss'],
})
export class NovaTranferenciaComponents {

  transferir() {
    console.log("transfer")
  }
}
