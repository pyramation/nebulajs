import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export declare const SetProjectVerifiedProposal: {
    encode(message: SetProjectVerifiedProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProjectVerifiedProposal;
    fromJSON(object: any): SetProjectVerifiedProposal;
    toJSON(message: SetProjectVerifiedProposal): unknown;
    fromPartial(object: DeepPartial<SetProjectVerifiedProposal>): SetProjectVerifiedProposal;
};
