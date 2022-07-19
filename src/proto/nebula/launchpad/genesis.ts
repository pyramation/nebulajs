import { Params } from "./params";
import { Project } from "./project";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the launchpad module's genesis state. */
export interface GenesisState {
  params: Params;

  /** initial Project at genesis */
  projects: Project[];

  /** global project id. The start of global project id will start from the number of project at genesis. */
  globalProjectIdStart: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    projects: [],
    globalProjectIdStart: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.globalProjectIdStart.isZero()) {
      writer.uint32(24).uint64(message.globalProjectIdStart);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.projects.push(Project.decode(reader, reader.uint32()));
          break;

        case 3:
          message.globalProjectIdStart = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => Project.fromJSON(e)) : [],
      globalProjectIdStart: isSet(object.globalProjectIdStart) ? Long.fromString(object.globalProjectIdStart) : Long.UZERO
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? Project.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }

    message.globalProjectIdStart !== undefined && (obj.globalProjectIdStart = (message.globalProjectIdStart || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.projects = object.projects?.map(e => Project.fromPartial(e)) || [];
    message.globalProjectIdStart = object.globalProjectIdStart !== undefined && object.globalProjectIdStart !== null ? Long.fromValue(object.globalProjectIdStart) : Long.UZERO;
    return message;
  }

};