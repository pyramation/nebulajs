import { Params } from "./params";
import { IDO } from "./ido";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** ====== IDO */
export interface IDORequest {
    /** Project unique id of each project */
    projectId: Long;
}
export interface IDOResponse {
    ido: IDO;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const IDORequest: {
    encode(message: IDORequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDORequest;
    fromJSON(object: any): IDORequest;
    toJSON(message: IDORequest): unknown;
    fromPartial(object: DeepPartial<IDORequest>): IDORequest;
};
export declare const IDOResponse: {
    encode(message: IDOResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDOResponse;
    fromJSON(object: any): IDOResponse;
    toJSON(message: IDOResponse): unknown;
    fromPartial(object: DeepPartial<IDOResponse>): IDOResponse;
};
