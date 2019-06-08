import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HGCJsonRpcRequest, HGCJsonRpcResponse } from './hgc-rpc-classes';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HgcRPCService {
  private jsonrpcUrl = environment.apiUrl + '/jsonrpc';

  constructor(
    private http: HttpClient,
  ) { }

  sendRpcRequest(rpcmethod: string, rpcparams: any) {
    const jsonrpcreq: HGCJsonRpcRequest = {
      jsonrpc: '2.0',
      id: uuid(),
      method: rpcmethod,
      params: rpcparams
    };
    // TODO: Added Failure checking and handling logic
    return this.http.post(this.jsonrpcUrl, jsonrpcreq)
      .pipe(
        map((x: HGCJsonRpcResponse) => x.result ),
        catchError(error => throwError('Why here'))
      );
  }
}
