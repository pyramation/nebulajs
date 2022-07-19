import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/nebula.launchpad.MsgCreateProjectRequest": {
    aminoType: "/nebula.launchpad.MsgCreateProjectRequest",
    toAmino: ({
      owner,
      projectTitle,
      projectInformation
    }: MsgCreateProjectRequest): AminoMsgCreateProjectRequest["value"] => {
      return {
        owner,
        project_title: projectTitle,
        project_information: projectInformation
      };
    },
    fromAmino: ({
      owner,
      project_title,
      project_information
    }: AminoMsgCreateProjectRequest["value"]): MsgCreateProjectRequest => {
      return {
        owner,
        projectTitle: project_title,
        projectInformation: project_information
      };
    }
  },
  "/nebula.launchpad.MsgDeleteProjectRequest": {
    aminoType: "/nebula.launchpad.MsgDeleteProjectRequest",
    toAmino: ({
      owner,
      projectId
    }: MsgDeleteProjectRequest): AminoMsgDeleteProjectRequest["value"] => {
      return {
        owner,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      owner,
      project_id
    }: AminoMsgDeleteProjectRequest["value"]): MsgDeleteProjectRequest => {
      return {
        owner,
        projectId: Long.fromString(project_id)
      };
    }
  },
  "/nebula.launchpad.MsgWithdrawAllTokensRequest": {
    aminoType: "/nebula.launchpad.MsgWithdrawAllTokensRequest",
    toAmino: ({
      owner,
      projectId
    }: MsgWithdrawAllTokensRequest): AminoMsgWithdrawAllTokensRequest["value"] => {
      return {
        owner,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      owner,
      project_id
    }: AminoMsgWithdrawAllTokensRequest["value"]): MsgWithdrawAllTokensRequest => {
      return {
        owner,
        projectId: Long.fromString(project_id)
      };
    }
  }
};