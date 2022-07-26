import { Params } from "./params";
import { IDO } from "./ido";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, IDORequest, IDOResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  iDO(request: IDORequest): Promise<IDOResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.iDO = this.iDO.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.ido.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  iDO(request: IDORequest): Promise<IDOResponse> {
    const data = IDORequest.encode(request).finish();
    const promise = this.rpc.request("nebula.ido.Query", "IDO", data);
    return promise.then(data => IDOResponse.decode(new _m0.Reader(data)));
  }

}