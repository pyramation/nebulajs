import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface AllocationLimit {
    denom: string;
    lowerLimit: Coin;
    upperLimit: Coin;
}
export interface IDO {
    /** Project unique id of each project */
    projectId: Long;
    tokenForDistribution: Coin[];
    totalDistributedAmount: Coin[];
    tokenListingPrice: Coin[];
    idoStatus: Long;
    allocationLimit: AllocationLimit[];
    /** Begin time for this ido */
    startTime: Date;
}
export declare const AllocationLimit: {
    encode(message: AllocationLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllocationLimit;
    fromJSON(object: any): AllocationLimit;
    toJSON(message: AllocationLimit): unknown;
    fromPartial(object: DeepPartial<AllocationLimit>): AllocationLimit;
};
export declare const IDO: {
    encode(message: IDO, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDO;
    fromJSON(object: any): IDO;
    toJSON(message: IDO): unknown;
    fromPartial(object: DeepPartial<IDO>): IDO;
};
