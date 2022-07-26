import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Project } from "./project";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, ProjectRequest, ProjectResponse, TotalProjectRequest, TotalProjectResponse, ProjectBalancesRequest, ProjectBalancesResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  project(request: ProjectRequest): Promise<ProjectResponse>;
  /*null*/

  totalProject(request: TotalProjectRequest): Promise<TotalProjectResponse>;
  /*null*/

  projectBalances(request: ProjectBalancesRequest): Promise<ProjectBalancesResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.project = this.project.bind(this);
    this.totalProject = this.totalProject.bind(this);
    this.projectBalances = this.projectBalances.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  project(request: ProjectRequest): Promise<ProjectResponse> {
    const data = ProjectRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Query", "Project", data);
    return promise.then(data => ProjectResponse.decode(new _m0.Reader(data)));
  }

  totalProject(request: TotalProjectRequest): Promise<TotalProjectResponse> {
    const data = TotalProjectRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Query", "TotalProject", data);
    return promise.then(data => TotalProjectResponse.decode(new _m0.Reader(data)));
  }

  projectBalances(request: ProjectBalancesRequest): Promise<ProjectBalancesResponse> {
    const data = ProjectBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Query", "ProjectBalances", data);
    return promise.then(data => ProjectBalancesResponse.decode(new _m0.Reader(data)));
  }

}