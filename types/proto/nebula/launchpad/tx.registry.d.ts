import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProjectRequest, MsgDeleteProjectRequest, MsgWithdrawAllTokensRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createProject(value: MsgCreateProjectRequest): {
            type_url: string;
            value: Uint8Array;
        };
        deleteProject(value: MsgDeleteProjectRequest): {
            type_url: string;
            value: Uint8Array;
        };
        withdrawAllTokens(value: MsgWithdrawAllTokensRequest): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createProject(value: MsgCreateProjectRequest): {
            typeUrl: string;
            value: MsgCreateProjectRequest;
        };
        deleteProject(value: MsgDeleteProjectRequest): {
            typeUrl: string;
            value: MsgDeleteProjectRequest;
        };
        withdrawAllTokens(value: MsgWithdrawAllTokensRequest): {
            typeUrl: string;
            value: MsgWithdrawAllTokensRequest;
        };
    };
    toJSON: {
        createProject(value: MsgCreateProjectRequest): {
            typeUrl: string;
            value: unknown;
        };
        deleteProject(value: MsgDeleteProjectRequest): {
            typeUrl: string;
            value: unknown;
        };
        withdrawAllTokens(value: MsgWithdrawAllTokensRequest): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createProject(value: any): {
            typeUrl: string;
            value: MsgCreateProjectRequest;
        };
        deleteProject(value: any): {
            typeUrl: string;
            value: MsgDeleteProjectRequest;
        };
        withdrawAllTokens(value: any): {
            typeUrl: string;
            value: MsgWithdrawAllTokensRequest;
        };
    };
    fromPartial: {
        createProject(value: MsgCreateProjectRequest): {
            typeUrl: string;
            value: MsgCreateProjectRequest;
        };
        deleteProject(value: MsgDeleteProjectRequest): {
            typeUrl: string;
            value: MsgDeleteProjectRequest;
        };
        withdrawAllTokens(value: MsgWithdrawAllTokensRequest): {
            typeUrl: string;
            value: MsgWithdrawAllTokensRequest;
        };
    };
};
