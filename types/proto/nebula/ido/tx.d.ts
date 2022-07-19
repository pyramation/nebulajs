import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AllocationLimit } from "./ido";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** ====== MessageEnableIDO */
export interface MsgEnableIDORequest {
    owner: string;
    /** Project unique id of each project */
    projectId: Long;
    tokenForDistribution: Coin[];
    tokenListingPrice: Coin[];
    allocationLimit: AllocationLimit[];
    /** Begin time for this ido */
    startTime: Date;
}
export interface MsgEnableIDOResponse {
}
export interface MsgCommitParticipationRequest {
    participant: string;
    tokenCommit: Coin[];
    projectId: Long;
}
export interface MsgCommitParticipationResponse {
}
export declare const MsgEnableIDORequest: {
    encode(message: MsgEnableIDORequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableIDORequest;
    fromJSON(object: any): MsgEnableIDORequest;
    toJSON(message: MsgEnableIDORequest): unknown;
    fromPartial(object: DeepPartial<MsgEnableIDORequest>): MsgEnableIDORequest;
};
export declare const MsgEnableIDOResponse: {
    encode(_: MsgEnableIDOResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableIDOResponse;
    fromJSON(_: any): MsgEnableIDOResponse;
    toJSON(_: MsgEnableIDOResponse): unknown;
    fromPartial(_: DeepPartial<MsgEnableIDOResponse>): MsgEnableIDOResponse;
};
export declare const MsgCommitParticipationRequest: {
    encode(message: MsgCommitParticipationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitParticipationRequest;
    fromJSON(object: any): MsgCommitParticipationRequest;
    toJSON(message: MsgCommitParticipationRequest): unknown;
    fromPartial(object: DeepPartial<MsgCommitParticipationRequest>): MsgCommitParticipationRequest;
};
export declare const MsgCommitParticipationResponse: {
    encode(_: MsgCommitParticipationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitParticipationResponse;
    fromJSON(_: any): MsgCommitParticipationResponse;
    toJSON(_: MsgCommitParticipationResponse): unknown;
    fromPartial(_: DeepPartial<MsgCommitParticipationResponse>): MsgCommitParticipationResponse;
};
