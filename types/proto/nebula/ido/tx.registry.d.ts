import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEnableIDORequest, MsgCommitParticipationRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        enableIDO(value: MsgEnableIDORequest): {
            type_url: string;
            value: Uint8Array;
        };
        commitParticipation(value: MsgCommitParticipationRequest): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        enableIDO(value: MsgEnableIDORequest): {
            typeUrl: string;
            value: MsgEnableIDORequest;
        };
        commitParticipation(value: MsgCommitParticipationRequest): {
            typeUrl: string;
            value: MsgCommitParticipationRequest;
        };
    };
    toJSON: {
        enableIDO(value: MsgEnableIDORequest): {
            typeUrl: string;
            value: unknown;
        };
        commitParticipation(value: MsgCommitParticipationRequest): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        enableIDO(value: any): {
            typeUrl: string;
            value: MsgEnableIDORequest;
        };
        commitParticipation(value: any): {
            typeUrl: string;
            value: MsgCommitParticipationRequest;
        };
    };
    fromPartial: {
        enableIDO(value: MsgEnableIDORequest): {
            typeUrl: string;
            value: MsgEnableIDORequest;
        };
        commitParticipation(value: MsgCommitParticipationRequest): {
            typeUrl: string;
            value: MsgCommitParticipationRequest;
        };
    };
};
