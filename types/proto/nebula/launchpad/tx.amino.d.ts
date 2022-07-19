import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateProjectRequest, MsgDeleteProjectRequest, MsgWithdrawAllTokensRequest } from "./tx";
export interface AminoMsgCreateProjectRequest extends AminoMsg {
    type: "/nebula.launchpad.MsgCreateProjectRequest";
    value: {
        owner: string;
        project_title: string;
        project_information: string;
    };
}
export interface AminoMsgDeleteProjectRequest extends AminoMsg {
    type: "/nebula.launchpad.MsgDeleteProjectRequest";
    value: {
        owner: string;
        project_id: string;
    };
}
export interface AminoMsgWithdrawAllTokensRequest extends AminoMsg {
    type: "/nebula.launchpad.MsgWithdrawAllTokensRequest";
    value: {
        owner: string;
        project_id: string;
    };
}
export declare const AminoConverter: {
    "/nebula.launchpad.MsgCreateProjectRequest": {
        aminoType: string;
        toAmino: ({ owner, projectTitle, projectInformation }: MsgCreateProjectRequest) => AminoMsgCreateProjectRequest["value"];
        fromAmino: ({ owner, project_title, project_information }: AminoMsgCreateProjectRequest["value"]) => MsgCreateProjectRequest;
    };
    "/nebula.launchpad.MsgDeleteProjectRequest": {
        aminoType: string;
        toAmino: ({ owner, projectId }: MsgDeleteProjectRequest) => AminoMsgDeleteProjectRequest["value"];
        fromAmino: ({ owner, project_id }: AminoMsgDeleteProjectRequest["value"]) => MsgDeleteProjectRequest;
    };
    "/nebula.launchpad.MsgWithdrawAllTokensRequest": {
        aminoType: string;
        toAmino: ({ owner, projectId }: MsgWithdrawAllTokensRequest) => AminoMsgWithdrawAllTokensRequest["value"];
        fromAmino: ({ owner, project_id }: AminoMsgWithdrawAllTokensRequest["value"]) => MsgWithdrawAllTokensRequest;
    };
};
