
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class FacturaService {

  private urlEndPoint: string = environment.urlService + 'Factura';

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<any> {
    return this.http.get(this.urlEndPoint);
  }

}
