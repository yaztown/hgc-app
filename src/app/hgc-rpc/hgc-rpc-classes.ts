
export class HGCJsonRpcRequest {
  jsonrpc: string;
  method: string;
  params: any;
  id: string;
}

export class HGCJsonRpcResponse {
  id: string;
  jsonrpc: string;
  result: any;
}
