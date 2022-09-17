import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-tranferencia.components.html',
  styleUrls: ['./nova-tranferencia.components.scss'],
})
export class NovaTransferenciaComponents {

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
