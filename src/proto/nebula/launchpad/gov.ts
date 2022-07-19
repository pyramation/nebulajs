import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetProjectVerifiedProposal {
  title: string;
  description: string;

  /** Project owner */
  projectOwner: string;

  /** Project unique id of each project (incremental from 1) */
  projectId: Long;
}

function createBaseSetProjectVerifiedProposal(): SetProjectVerifiedProposal {
  return {
    title: "",
    description: "",
    projectOwner: "",
    projectId: Long.UZERO
  };
}

export const SetProjectVerifiedProposal = {
  encode(message: SetProjectVerifiedProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.projectOwner !== "") {
      writer.uint32(26).string(message.projectOwner);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(32).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProjectVerifiedProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProjectVerifiedProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.projectOwner = reader.string();
          break;

        case 4:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SetProjectVerifiedProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      projectOwner: isSet(object.projectOwner) ? String(object.projectOwner) : "",
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO
    };
  },

  toJSON(message: SetProjectVerifiedProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.projectOwner !== undefined && (obj.projectOwner = message.projectOwner);
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SetProjectVerifiedProposal>): SetProjectVerifiedProposal {
    const message = createBaseSetProjectVerifiedProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.projectOwner = object.projectOwner ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};