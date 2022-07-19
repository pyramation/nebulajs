import { Any } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: DeepPartial<Project>): Project;
};
