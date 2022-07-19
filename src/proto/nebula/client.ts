import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as nebulaIdoTxRegistry from "./ido/tx.registry";
import * as nebulaLaunchpadTxRegistry from "./launchpad/tx.registry";
import * as nebulaIdoTxAmino from "./ido/tx.amino";
import * as nebulaLaunchpadTxAmino from "./launchpad/tx.amino";
export const getSigningNebulaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...nebulaIdoTxRegistry.registry, ...nebulaLaunchpadTxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...nebulaIdoTxAmino.AminoConverter,
    ...nebulaLaunchpadTxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};