import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
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
export interface MsgDeleteProjectResponse {}
export interface MsgWithdrawAllTokensRequest {
  /** owner of this project */
  owner: string;
  projectId: Long;
}
export interface MsgWithdrawAllTokensResponse {}

function createBaseMsgCreateProjectRequest(): MsgCreateProjectRequest {
  return {
    owner: "",
    projectTitle: "",
    projectInformation: ""
  };
}

export const MsgCreateProjectRequest = {
  encode(message: MsgCreateProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.projectTitle !== "") {
      writer.uint32(18).string(message.projectTitle);
    }

    if (message.projectInformation !== "") {
      writer.uint32(26).string(message.projectInformation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.projectTitle = reader.string();
          break;

        case 3:
          message.projectInformation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateProjectRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      projectTitle: isSet(object.projectTitle) ? String(object.projectTitle) : "",
      projectInformation: isSet(object.projectInformation) ? String(object.projectInformation) : ""
    };
  },

  toJSON(message: MsgCreateProjectRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.projectTitle !== undefined && (obj.projectTitle = message.projectTitle);
    message.projectInformation !== undefined && (obj.projectInformation = message.projectInformation);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProjectRequest>): MsgCreateProjectRequest {
    const message = createBaseMsgCreateProjectRequest();
    message.owner = object.owner ?? "";
    message.projectTitle = object.projectTitle ?? "";
    message.projectInformation = object.projectInformation ?? "";
    return message;
  }

};

function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return {
    projectId: Long.UZERO
  };
}

export const MsgCreateProjectResponse = {
  encode(message: MsgCreateProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateProjectResponse {
    return {
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateProjectResponse): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDeleteProjectRequest(): MsgDeleteProjectRequest {
  return {
    owner: "",
    projectId: Long.UZERO
  };
}

export const MsgDeleteProjectRequest = {
  encode(message: MsgDeleteProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProjectRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteProjectRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO
    };
  },

  toJSON(message: MsgDeleteProjectRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProjectRequest>): MsgDeleteProjectRequest {
    const message = createBaseMsgDeleteProjectRequest();
    message.owner = object.owner ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDeleteProjectResponse(): MsgDeleteProjectResponse {
  return {};
}

export const MsgDeleteProjectResponse = {
  encode(_: MsgDeleteProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProjectResponse();

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

  fromJSON(_: any): MsgDeleteProjectResponse {
    return {};
  },

  toJSON(_: MsgDeleteProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteProjectResponse>): MsgDeleteProjectResponse {
    const message = createBaseMsgDeleteProjectResponse();
    return message;
  }

};

function createBaseMsgWithdrawAllTokensRequest(): MsgWithdrawAllTokensRequest {
  return {
    owner: "",
    projectId: Long.UZERO
  };
}

export const MsgWithdrawAllTokensRequest = {
  encode(message: MsgWithdrawAllTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokensRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawAllTokensRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO
    };
  },

  toJSON(message: MsgWithdrawAllTokensRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawAllTokensRequest>): MsgWithdrawAllTokensRequest {
    const message = createBaseMsgWithdrawAllTokensRequest();
    message.owner = object.owner ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgWithdrawAllTokensResponse(): MsgWithdrawAllTokensResponse {
  return {};
}

export const MsgWithdrawAllTokensResponse = {
  encode(_: MsgWithdrawAllTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokensResponse();

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

  fromJSON(_: any): MsgWithdrawAllTokensResponse {
    return {};
  },

  toJSON(_: MsgWithdrawAllTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWithdrawAllTokensResponse>): MsgWithdrawAllTokensResponse {
    const message = createBaseMsgWithdrawAllTokensResponse();
    return message;
  }

};