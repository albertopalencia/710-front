import { Component, OnInit } from '@angular/core';
import { Factura } from './factura';
import { FacturaService } from './factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})
export class FacturasComponent implements OnInit {

  facturas: Factura[];

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
      this.facturaService.getFacturas()
        .subscribe(response => {

          this.facturas = response.data as Factura[];
        });
    };

}
