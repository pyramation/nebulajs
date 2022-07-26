import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateProjectRequest, MsgCreateProjectResponse, MsgDeleteProjectRequest, MsgDeleteProjectResponse, MsgWithdrawAllTokensRequest, MsgWithdrawAllTokensResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createProject(request: MsgCreateProjectRequest): Promise<MsgCreateProjectResponse>;
  /*null*/

  deleteProject(request: MsgDeleteProjectRequest): Promise<MsgDeleteProjectResponse>;
  /*null*/

  withdrawAllTokens(request: MsgWithdrawAllTokensRequest): Promise<MsgWithdrawAllTokensResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProject = this.createProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.withdrawAllTokens = this.withdrawAllTokens.bind(this);
  }

  createProject(request: MsgCreateProjectRequest): Promise<MsgCreateProjectResponse> {
    const data = MsgCreateProjectRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Msg", "CreateProject", data);
    return promise.then(data => MsgCreateProjectResponse.decode(new _m0.Reader(data)));
  }

  deleteProject(request: MsgDeleteProjectRequest): Promise<MsgDeleteProjectResponse> {
    const data = MsgDeleteProjectRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Msg", "DeleteProject", data);
    return promise.then(data => MsgDeleteProjectResponse.decode(new _m0.Reader(data)));
  }

  withdrawAllTokens(request: MsgWithdrawAllTokensRequest): Promise<MsgWithdrawAllTokensResponse> {
    const data = MsgWithdrawAllTokensRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.launchpad.Msg", "WithdrawAllTokens", data);
    return promise.then(data => MsgWithdrawAllTokensResponse.decode(new _m0.Reader(data)));
  }

}