import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AllocationLimit } from "./ido";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgEnableIDORequest, MsgEnableIDOResponse, MsgCommitParticipationRequest, MsgCommitParticipationResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  enableIDO(request: MsgEnableIDORequest): Promise<MsgEnableIDOResponse>;
  /*null*/

  commitParticipation(request: MsgCommitParticipationRequest): Promise<MsgCommitParticipationResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.enableIDO = this.enableIDO.bind(this);
    this.commitParticipation = this.commitParticipation.bind(this);
  }

  enableIDO(request: MsgEnableIDORequest): Promise<MsgEnableIDOResponse> {
    const data = MsgEnableIDORequest.encode(request).finish();
    const promise = this.rpc.request("nebula.ido.Msg", "EnableIDO", data);
    return promise.then(data => MsgEnableIDOResponse.decode(new _m0.Reader(data)));
  }

  commitParticipation(request: MsgCommitParticipationRequest): Promise<MsgCommitParticipationResponse> {
    const data = MsgCommitParticipationRequest.encode(request).finish();
    const promise = this.rpc.request("nebula.ido.Msg", "CommitParticipation", data);
    return promise.then(data => MsgCommitParticipationResponse.decode(new _m0.Reader(data)));
  }

}