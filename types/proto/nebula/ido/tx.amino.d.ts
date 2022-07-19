import { AminoMsg } from "@cosmjs/amino";
import { MsgEnableIDORequest, MsgCommitParticipationRequest } from "./tx";
export interface AminoMsgEnableIDORequest extends AminoMsg {
    type: "/nebula.ido.MsgEnableIDORequest";
    value: {
        owner: string;
        project_id: string;
        token_for_distribution: {
            denom: string;
            amount: string;
        }[];
        token_listing_price: {
            denom: string;
            amount: string;
        }[];
        allocation_limit: {
            denom: string;
            lower_limit: {
                denom: string;
                amount: string;
            };
            upper_limit: {
                denom: string;
                amount: string;
            };
        }[];
        start_time: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface AminoMsgCommitParticipationRequest extends AminoMsg {
    type: "/nebula.ido.MsgCommitParticipationRequest";
    value: {
        participant: string;
        token_commit: {
            denom: string;
            amount: string;
        }[];
        project_id: string;
    };
}
export declare const AminoConverter: {
    "/nebula.ido.MsgEnableIDORequest": {
        aminoType: string;
        toAmino: ({ owner, projectId, tokenForDistribution, tokenListingPrice, allocationLimit, startTime }: MsgEnableIDORequest) => AminoMsgEnableIDORequest["value"];
        fromAmino: ({ owner, project_id, token_for_distribution, token_listing_price, allocation_limit, start_time }: AminoMsgEnableIDORequest["value"]) => MsgEnableIDORequest;
    };
    "/nebula.ido.MsgCommitParticipationRequest": {
        aminoType: string;
        toAmino: ({ participant, tokenCommit, projectId }: MsgCommitParticipationRequest) => AminoMsgCommitParticipationRequest["value"];
        fromAmino: ({ participant, token_commit, project_id }: AminoMsgCommitParticipationRequest["value"]) => MsgCommitParticipationRequest;
    };
};
