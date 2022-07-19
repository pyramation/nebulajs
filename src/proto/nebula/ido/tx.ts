import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AllocationLimit } from "./ido";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";

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
export interface MsgEnableIDOResponse {}
export interface MsgCommitParticipationRequest {
  participant: string;
  tokenCommit: Coin[];
  projectId: Long;
}
export interface MsgCommitParticipationResponse {}

function createBaseMsgEnableIDORequest(): MsgEnableIDORequest {
  return {
    owner: "",
    projectId: Long.UZERO,
    tokenForDistribution: [],
    tokenListingPrice: [],
    allocationLimit: [],
    startTime: undefined
  };
}

export const MsgEnableIDORequest = {
  encode(message: MsgEnableIDORequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    for (const v of message.tokenForDistribution) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.tokenListingPrice) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.allocationLimit) {
      AllocationLimit.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableIDORequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableIDORequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.tokenForDistribution.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.tokenListingPrice.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.allocationLimit.push(AllocationLimit.decode(reader, reader.uint32()));
          break;

        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEnableIDORequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO,
      tokenForDistribution: Array.isArray(object?.tokenForDistribution) ? object.tokenForDistribution.map((e: any) => Coin.fromJSON(e)) : [],
      tokenListingPrice: Array.isArray(object?.tokenListingPrice) ? object.tokenListingPrice.map((e: any) => Coin.fromJSON(e)) : [],
      allocationLimit: Array.isArray(object?.allocationLimit) ? object.allocationLimit.map((e: any) => AllocationLimit.fromJSON(e)) : [],
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },

  toJSON(message: MsgEnableIDORequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());

    if (message.tokenForDistribution) {
      obj.tokenForDistribution = message.tokenForDistribution.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenForDistribution = [];
    }

    if (message.tokenListingPrice) {
      obj.tokenListingPrice = message.tokenListingPrice.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenListingPrice = [];
    }

    if (message.allocationLimit) {
      obj.allocationLimit = message.allocationLimit.map(e => e ? AllocationLimit.toJSON(e) : undefined);
    } else {
      obj.allocationLimit = [];
    }

    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEnableIDORequest>): MsgEnableIDORequest {
    const message = createBaseMsgEnableIDORequest();
    message.owner = object.owner ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.tokenForDistribution = object.tokenForDistribution?.map(e => Coin.fromPartial(e)) || [];
    message.tokenListingPrice = object.tokenListingPrice?.map(e => Coin.fromPartial(e)) || [];
    message.allocationLimit = object.allocationLimit?.map(e => AllocationLimit.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    return message;
  }

};

function createBaseMsgEnableIDOResponse(): MsgEnableIDOResponse {
  return {};
}

export const MsgEnableIDOResponse = {
  encode(_: MsgEnableIDOResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableIDOResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableIDOResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgEnableIDOResponse {
    return {};
  },

  toJSON(_: MsgEnableIDOResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEnableIDOResponse>): MsgEnableIDOResponse {
    const message = createBaseMsgEnableIDOResponse();
    return message;
  }

};

function createBaseMsgCommitParticipationRequest(): MsgCommitParticipationRequest {
  return {
    participant: "",
    tokenCommit: [],
    projectId: Long.UZERO
  };
}

export const MsgCommitParticipationRequest = {
  encode(message: MsgCommitParticipationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== "") {
      writer.uint32(10).string(message.participant);
    }

    for (const v of message.tokenCommit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.projectId.isZero()) {
      writer.uint32(24).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitParticipationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitParticipationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.participant = reader.string();
          break;

        case 2:
          message.tokenCommit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCommitParticipationRequest {
    return {
      participant: isSet(object.participant) ? String(object.participant) : "",
      tokenCommit: Array.isArray(object?.tokenCommit) ? object.tokenCommit.map((e: any) => Coin.fromJSON(e)) : [],
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO
    };
  },

  toJSON(message: MsgCommitParticipationRequest): unknown {
    const obj: any = {};
    message.participant !== undefined && (obj.participant = message.participant);

    if (message.tokenCommit) {
      obj.tokenCommit = message.tokenCommit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenCommit = [];
    }

    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCommitParticipationRequest>): MsgCommitParticipationRequest {
    const message = createBaseMsgCommitParticipationRequest();
    message.participant = object.participant ?? "";
    message.tokenCommit = object.tokenCommit?.map(e => Coin.fromPartial(e)) || [];
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCommitParticipationResponse(): MsgCommitParticipationResponse {
  return {};
}

export const MsgCommitParticipationResponse = {
  encode(_: MsgCommitParticipationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommitParticipationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitParticipationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCommitParticipationResponse {
    return {};
  },

  toJSON(_: MsgCommitParticipationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCommitParticipationResponse>): MsgCommitParticipationResponse {
    const message = createBaseMsgCommitParticipationResponse();
    return message;
  }

};