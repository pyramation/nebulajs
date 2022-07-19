import { Any } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Project {
  /** Project owner */
  projectOwner: string;

  /** Project title */
  projectTitle: string;

  /** Project unique id of each project (incremental from 1) */
  projectId: Long;

  /** Project address to store assets */
  projectAddress: string;

  /** Project information */
  projectInformation: string;

  /** Project status */
  projectStatus: Long;

  /** Registered Release Mechanism */
  registeredRm: Any[];

  /** Project verified */
  projectVerified: boolean;
}

function createBaseProject(): Project {
  return {
    projectOwner: "",
    projectTitle: "",
    projectId: Long.UZERO,
    projectAddress: "",
    projectInformation: "",
    projectStatus: Long.UZERO,
    registeredRm: [],
    projectVerified: false
  };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectOwner !== "") {
      writer.uint32(10).string(message.projectOwner);
    }

    if (message.projectTitle !== "") {
      writer.uint32(18).string(message.projectTitle);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(24).uint64(message.projectId);
    }

    if (message.projectAddress !== "") {
      writer.uint32(34).string(message.projectAddress);
    }

    if (message.projectInformation !== "") {
      writer.uint32(50).string(message.projectInformation);
    }

    if (!message.projectStatus.isZero()) {
      writer.uint32(56).uint64(message.projectStatus);
    }

    for (const v of message.registeredRm) {
      Any.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.projectVerified === true) {
      writer.uint32(72).bool(message.projectVerified);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectOwner = reader.string();
          break;

        case 2:
          message.projectTitle = reader.string();
          break;

        case 3:
          message.projectId = (reader.uint64() as Long);
          break;

        case 4:
          message.projectAddress = reader.string();
          break;

        case 6:
          message.projectInformation = reader.string();
          break;

        case 7:
          message.projectStatus = (reader.uint64() as Long);
          break;

        case 8:
          message.registeredRm.push(Any.decode(reader, reader.uint32()));
          break;

        case 9:
          message.projectVerified = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Project {
    return {
      projectOwner: isSet(object.projectOwner) ? String(object.projectOwner) : "",
      projectTitle: isSet(object.projectTitle) ? String(object.projectTitle) : "",
      projectId: isSet(object.projectId) ? Long.fromString(object.projectId) : Long.UZERO,
      projectAddress: isSet(object.projectAddress) ? String(object.projectAddress) : "",
      projectInformation: isSet(object.projectInformation) ? String(object.projectInformation) : "",
      projectStatus: isSet(object.projectStatus) ? Long.fromString(object.projectStatus) : Long.UZERO,
      registeredRm: Array.isArray(object?.registeredRm) ? object.registeredRm.map((e: any) => Any.fromJSON(e)) : [],
      projectVerified: isSet(object.projectVerified) ? Boolean(object.projectVerified) : false
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.projectOwner !== undefined && (obj.projectOwner = message.projectOwner);
    message.projectTitle !== undefined && (obj.projectTitle = message.projectTitle);
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    message.projectAddress !== undefined && (obj.projectAddress = message.projectAddress);
    message.projectInformation !== undefined && (obj.projectInformation = message.projectInformation);
    message.projectStatus !== undefined && (obj.projectStatus = (message.projectStatus || Long.UZERO).toString());

    if (message.registeredRm) {
      obj.registeredRm = message.registeredRm.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.registeredRm = [];
    }

    message.projectVerified !== undefined && (obj.projectVerified = message.projectVerified);
    return obj;
  },

  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.projectOwner = object.projectOwner ?? "";
    message.projectTitle = object.projectTitle ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.projectAddress = object.projectAddress ?? "";
    message.projectInformation = object.projectInformation ?? "";
    message.projectStatus = object.projectStatus !== undefined && object.projectStatus !== null ? Long.fromValue(object.projectStatus) : Long.UZERO;
    message.registeredRm = object.registeredRm?.map(e => Any.fromPartial(e)) || [];
    message.projectVerified = object.projectVerified ?? false;
    return message;
  }

};