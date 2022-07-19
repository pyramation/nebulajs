import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Project } from "./project";
import { Coin } from "../../cosmos/base/v1beta1/coin";
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
export interface ProjectRequest {
    projectId: Long;
}
export interface ProjectResponse {
    project: Project;
}
export interface TotalProjectRequest {
    pagination: PageRequest;
}
export interface TotalProjectResponse {
    projects: Project[];
    pagination: PageResponse;
}
export interface ProjectBalancesRequest {
    projectId: Long;
}
export interface ProjectBalancesResponse {
    balances: Coin[];
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
export declare const ProjectRequest: {
    encode(message: ProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectRequest;
    fromJSON(object: any): ProjectRequest;
    toJSON(message: ProjectRequest): unknown;
    fromPartial(object: DeepPartial<ProjectRequest>): ProjectRequest;
};
export declare const ProjectResponse: {
    encode(message: ProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectResponse;
    fromJSON(object: any): ProjectResponse;
    toJSON(message: ProjectResponse): unknown;
    fromPartial(object: DeepPartial<ProjectResponse>): ProjectResponse;
};
export declare const TotalProjectRequest: {
    encode(message: TotalProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalProjectRequest;
    fromJSON(object: any): TotalProjectRequest;
    toJSON(message: TotalProjectRequest): unknown;
    fromPartial(object: DeepPartial<TotalProjectRequest>): TotalProjectRequest;
};
export declare const TotalProjectResponse: {
    encode(message: TotalProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalProjectResponse;
    fromJSON(object: any): TotalProjectResponse;
    toJSON(message: TotalProjectResponse): unknown;
    fromPartial(object: DeepPartial<TotalProjectResponse>): TotalProjectResponse;
};
export declare const ProjectBalancesRequest: {
    encode(message: ProjectBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectBalancesRequest;
    fromJSON(object: any): ProjectBalancesRequest;
    toJSON(message: ProjectBalancesRequest): unknown;
    fromPartial(object: DeepPartial<ProjectBalancesRequest>): ProjectBalancesRequest;
};
export declare const ProjectBalancesResponse: {
    encode(message: ProjectBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectBalancesResponse;
    fromJSON(object: any): ProjectBalancesResponse;
    toJSON(message: ProjectBalancesResponse): unknown;
    fromPartial(object: DeepPartial<ProjectBalancesResponse>): ProjectBalancesResponse;
};
