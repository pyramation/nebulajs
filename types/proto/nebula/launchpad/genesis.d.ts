import { Params } from "./params";
import { Project } from "./project";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the launchpad module's genesis state. */
export interface GenesisState {
    params: Params;
    /** initial Project at genesis */
    projects: Project[];
    /** global project id. The start of global project id will start from the number of project at genesis. */
    globalProjectIdStart: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
