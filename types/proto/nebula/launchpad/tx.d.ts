import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateProjectRequest {
    /** owner of this project */
    owner: string;
    /** the title of project */
    projectTitle: string;
    /** Project information */
    projectInformation: string;
}
export interface MsgCreateProjectResponse {
    projectId: Long;
}
export interface MsgDeleteProjectRequest {
    /** owner of this project */
    owner: string;
    projectId: Long;
}
export interface MsgDeleteProjectResponse {
}
export interface MsgWithdrawAllTokensRequest {
    /** owner of this project */
    owner: string;
    projectId: Long;
}
export interface MsgWithdrawAllTokensResponse {
}
export declare const MsgCreateProjectRequest: {
    encode(message: MsgCreateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectRequest;
    fromJSON(object: any): MsgCreateProjectRequest;
    toJSON(message: MsgCreateProjectRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateProjectRequest>): MsgCreateProjectRequest;
};
export declare const MsgCreateProjectResponse: {
    encode(message: MsgCreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromJSON(object: any): MsgCreateProjectResponse;
    toJSON(message: MsgCreateProjectResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgDeleteProjectRequest: {
    encode(message: MsgDeleteProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProjectRequest;
    fromJSON(object: any): MsgDeleteProjectRequest;
    toJSON(message: MsgDeleteProjectRequest): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProjectRequest>): MsgDeleteProjectRequest;
};
export declare const MsgDeleteProjectResponse: {
    encode(_: MsgDeleteProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProjectResponse;
    fromJSON(_: any): MsgDeleteProjectResponse;
    toJSON(_: MsgDeleteProjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProjectResponse>): MsgDeleteProjectResponse;
};
export declare const MsgWithdrawAllTokensRequest: {
    encode(message: MsgWithdrawAllTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokensRequest;
    fromJSON(object: any): MsgWithdrawAllTokensRequest;
    toJSON(message: MsgWithdrawAllTokensRequest): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawAllTokensRequest>): MsgWithdrawAllTokensRequest;
};
export declare const MsgWithdrawAllTokensResponse: {
    encode(_: MsgWithdrawAllTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokensResponse;
    fromJSON(_: any): MsgWithdrawAllTokensResponse;
    toJSON(_: MsgWithdrawAllTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawAllTokensResponse>): MsgWithdrawAllTokensResponse;
};
