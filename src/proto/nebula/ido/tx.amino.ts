import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AllocationLimit } from "./ido";
import { Timestamp } from "../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/nebula.ido.MsgEnableIDORequest": {
    aminoType: "/nebula.ido.MsgEnableIDORequest",
    toAmino: ({
      owner,
      projectId,
      tokenForDistribution,
      tokenListingPrice,
      allocationLimit,
      startTime
    }: MsgEnableIDORequest): AminoMsgEnableIDORequest["value"] => {
      return {
        owner,
        project_id: projectId.toString(),
        token_for_distribution: tokenForDistribution.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        token_listing_price: tokenListingPrice.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        allocation_limit: allocationLimit.map(el0 => ({
          denom: el0.denom,
          lower_limit: {
            denom: el0.lowerLimit.denom,
            amount: Long.fromNumber(el0.lowerLimit.amount).toString()
          },
          upper_limit: {
            denom: el0.upperLimit.denom,
            amount: Long.fromNumber(el0.upperLimit.amount).toString()
          }
        })),
        start_time: startTime
      };
    },
    fromAmino: ({
      owner,
      project_id,
      token_for_distribution,
      token_listing_price,
      allocation_limit,
      start_time
    }: AminoMsgEnableIDORequest["value"]): MsgEnableIDORequest => {
      return {
        owner,
        projectId: Long.fromString(project_id),
        tokenForDistribution: token_for_distribution.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        tokenListingPrice: token_listing_price.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        allocationLimit: allocation_limit.map(el0 => ({
          denom: el0.denom,
          lowerLimit: {
            denom: el0.lower_limit.denom,
            amount: el0.lower_limit.amount
          },
          upperLimit: {
            denom: el0.upper_limit.denom,
            amount: el0.upper_limit.amount
          }
        })),
        startTime: start_time
      };
    }
  },
  "/nebula.ido.MsgCommitParticipationRequest": {
    aminoType: "/nebula.ido.MsgCommitParticipationRequest",
    toAmino: ({
      participant,
      tokenCommit,
      projectId
    }: MsgCommitParticipationRequest): AminoMsgCommitParticipationRequest["value"] => {
      return {
        participant,
        token_commit: tokenCommit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      participant,
      token_commit,
      project_id
    }: AminoMsgCommitParticipationRequest["value"]): MsgCommitParticipationRequest => {
      return {
        participant,
        tokenCommit: token_commit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        projectId: Long.fromString(project_id)
      };
    }
  }
};