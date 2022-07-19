import * as _101 from "./ido/genesis";
import * as _102 from "./ido/ido";
import * as _103 from "./ido/params";
import * as _104 from "./ido/query";
import * as _105 from "./ido/tx";
import * as _106 from "./launchpad/genesis";
import * as _107 from "./launchpad/gov";
import * as _108 from "./launchpad/params";
import * as _109 from "./launchpad/project";
import * as _110 from "./launchpad/query";
import * as _111 from "./launchpad/tx";
export declare namespace nebula {
    const ido: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                enableIDO(value: _105.MsgEnableIDORequest): {
                    type_url: string;
                    value: Uint8Array;
                };
                commitParticipation(value: _105.MsgCommitParticipationRequest): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                enableIDO(value: _105.MsgEnableIDORequest): {
                    typeUrl: string;
                    value: _105.MsgEnableIDORequest;
                };
                commitParticipation(value: _105.MsgCommitParticipationRequest): {
                    typeUrl: string;
                    value: _105.MsgCommitParticipationRequest;
                };
            };
            toJSON: {
                enableIDO(value: _105.MsgEnableIDORequest): {
                    typeUrl: string;
                    value: unknown;
                };
                commitParticipation(value: _105.MsgCommitParticipationRequest): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                enableIDO(value: any): {
                    typeUrl: string;
                    value: _105.MsgEnableIDORequest;
                };
                commitParticipation(value: any): {
                    typeUrl: string;
                    value: _105.MsgCommitParticipationRequest;
                };
            };
            fromPartial: {
                enableIDO(value: _105.MsgEnableIDORequest): {
                    typeUrl: string;
                    value: _105.MsgEnableIDORequest;
                };
                commitParticipation(value: _105.MsgCommitParticipationRequest): {
                    typeUrl: string;
                    value: _105.MsgCommitParticipationRequest;
                };
            };
        };
        AminoConverter: {
            "/nebula.ido.MsgEnableIDORequest": {
                aminoType: string;
                toAmino: ({ owner, projectId, tokenForDistribution, tokenListingPrice, allocationLimit, startTime }: _105.MsgEnableIDORequest) => {
                    owner: string;
                    project_id: string;
                    token_for_distribution: {
                        denom: string;
                        amount: string;
                    }[];
                    token_listing_price: {
                        denom: string;
                        amount: string;
                    }[];
                    allocation_limit: {
                        denom: string;
                        lower_limit: {
                            denom: string;
                            amount: string;
                        };
                        upper_limit: {
                            denom: string;
                            amount: string;
                        };
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromAmino: ({ owner, project_id, token_for_distribution, token_listing_price, allocation_limit, start_time }: {
                    owner: string;
                    project_id: string;
                    token_for_distribution: {
                        denom: string;
                        amount: string;
                    }[];
                    token_listing_price: {
                        denom: string;
                        amount: string;
                    }[];
                    allocation_limit: {
                        denom: string;
                        lower_limit: {
                            denom: string;
                            amount: string;
                        };
                        upper_limit: {
                            denom: string;
                            amount: string;
                        };
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                }) => _105.MsgEnableIDORequest;
            };
            "/nebula.ido.MsgCommitParticipationRequest": {
                aminoType: string;
                toAmino: ({ participant, tokenCommit, projectId }: _105.MsgCommitParticipationRequest) => {
                    participant: string;
                    token_commit: {
                        denom: string;
                        amount: string;
                    }[];
                    project_id: string;
                };
                fromAmino: ({ participant, token_commit, project_id }: {
                    participant: string;
                    token_commit: {
                        denom: string;
                        amount: string;
                    }[];
                    project_id: string;
                }) => _105.MsgCommitParticipationRequest;
            };
        };
        MsgEnableIDORequest: {
            encode(message: _105.MsgEnableIDORequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgEnableIDORequest;
            fromJSON(object: any): _105.MsgEnableIDORequest;
            toJSON(message: _105.MsgEnableIDORequest): unknown;
            fromPartial(object: {
                owner?: string;
                projectId?: any;
                tokenForDistribution?: {
                    denom?: string;
                    amount?: string;
                }[];
                tokenListingPrice?: {
                    denom?: string;
                    amount?: string;
                }[];
                allocationLimit?: {
                    denom?: string;
                    lowerLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                    upperLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                startTime?: Date;
            }): _105.MsgEnableIDORequest;
        };
        MsgEnableIDOResponse: {
            encode(_: _105.MsgEnableIDOResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgEnableIDOResponse;
            fromJSON(_: any): _105.MsgEnableIDOResponse;
            toJSON(_: _105.MsgEnableIDOResponse): unknown;
            fromPartial(_: {}): _105.MsgEnableIDOResponse;
        };
        MsgCommitParticipationRequest: {
            encode(message: _105.MsgCommitParticipationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgCommitParticipationRequest;
            fromJSON(object: any): _105.MsgCommitParticipationRequest;
            toJSON(message: _105.MsgCommitParticipationRequest): unknown;
            fromPartial(object: {
                participant?: string;
                tokenCommit?: {
                    denom?: string;
                    amount?: string;
                }[];
                projectId?: any;
            }): _105.MsgCommitParticipationRequest;
        };
        MsgCommitParticipationResponse: {
            encode(_: _105.MsgCommitParticipationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgCommitParticipationResponse;
            fromJSON(_: any): _105.MsgCommitParticipationResponse;
            toJSON(_: _105.MsgCommitParticipationResponse): unknown;
            fromPartial(_: {}): _105.MsgCommitParticipationResponse;
        };
        QueryParamsRequest: {
            encode(_: _104.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsRequest;
            fromJSON(_: any): _104.QueryParamsRequest;
            toJSON(_: _104.QueryParamsRequest): unknown;
            fromPartial(_: {}): _104.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _104.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsResponse;
            fromJSON(object: any): _104.QueryParamsResponse;
            toJSON(message: _104.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {};
            }): _104.QueryParamsResponse;
        };
        IDORequest: {
            encode(message: _104.IDORequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.IDORequest;
            fromJSON(object: any): _104.IDORequest;
            toJSON(message: _104.IDORequest): unknown;
            fromPartial(object: {
                projectId?: any;
            }): _104.IDORequest;
        };
        IDOResponse: {
            encode(message: _104.IDOResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.IDOResponse;
            fromJSON(object: any): _104.IDOResponse;
            toJSON(message: _104.IDOResponse): unknown;
            fromPartial(object: {
                ido?: {
                    projectId?: any;
                    tokenForDistribution?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    totalDistributedAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tokenListingPrice?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    idoStatus?: any;
                    allocationLimit?: {
                        denom?: string;
                        lowerLimit?: {
                            denom?: string;
                            amount?: string;
                        };
                        upperLimit?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    startTime?: Date;
                };
            }): _104.IDOResponse;
        };
        Params: {
            encode(_: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Params;
            fromJSON(_: any): _103.Params;
            toJSON(_: _103.Params): unknown;
            fromPartial(_: {}): _103.Params;
        };
        AllocationLimit: {
            encode(message: _102.AllocationLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.AllocationLimit;
            fromJSON(object: any): _102.AllocationLimit;
            toJSON(message: _102.AllocationLimit): unknown;
            fromPartial(object: {
                denom?: string;
                lowerLimit?: {
                    denom?: string;
                    amount?: string;
                };
                upperLimit?: {
                    denom?: string;
                    amount?: string;
                };
            }): _102.AllocationLimit;
        };
        IDO: {
            encode(message: _102.IDO, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.IDO;
            fromJSON(object: any): _102.IDO;
            toJSON(message: _102.IDO): unknown;
            fromPartial(object: {
                projectId?: any;
                tokenForDistribution?: {
                    denom?: string;
                    amount?: string;
                }[];
                totalDistributedAmount?: {
                    denom?: string;
                    amount?: string;
                }[];
                tokenListingPrice?: {
                    denom?: string;
                    amount?: string;
                }[];
                idoStatus?: any;
                allocationLimit?: {
                    denom?: string;
                    lowerLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                    upperLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                startTime?: Date;
            }): _102.IDO;
        };
        GenesisState: {
            encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
            fromJSON(object: any): _101.GenesisState;
            toJSON(message: _101.GenesisState): unknown;
            fromPartial(object: {
                params?: {};
            }): _101.GenesisState;
        };
    };
    const launchpad: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createProject(value: _111.MsgCreateProjectRequest): {
                    type_url: string;
                    value: Uint8Array;
                };
                deleteProject(value: _111.MsgDeleteProjectRequest): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawAllTokens(value: _111.MsgWithdrawAllTokensRequest): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createProject(value: _111.MsgCreateProjectRequest): {
                    typeUrl: string;
                    value: _111.MsgCreateProjectRequest;
                };
                deleteProject(value: _111.MsgDeleteProjectRequest): {
                    typeUrl: string;
                    value: _111.MsgDeleteProjectRequest;
                };
                withdrawAllTokens(value: _111.MsgWithdrawAllTokensRequest): {
                    typeUrl: string;
                    value: _111.MsgWithdrawAllTokensRequest;
                };
            };
            toJSON: {
                createProject(value: _111.MsgCreateProjectRequest): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteProject(value: _111.MsgDeleteProjectRequest): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawAllTokens(value: _111.MsgWithdrawAllTokensRequest): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createProject(value: any): {
                    typeUrl: string;
                    value: _111.MsgCreateProjectRequest;
                };
                deleteProject(value: any): {
                    typeUrl: string;
                    value: _111.MsgDeleteProjectRequest;
                };
                withdrawAllTokens(value: any): {
                    typeUrl: string;
                    value: _111.MsgWithdrawAllTokensRequest;
                };
            };
            fromPartial: {
                createProject(value: _111.MsgCreateProjectRequest): {
                    typeUrl: string;
                    value: _111.MsgCreateProjectRequest;
                };
                deleteProject(value: _111.MsgDeleteProjectRequest): {
                    typeUrl: string;
                    value: _111.MsgDeleteProjectRequest;
                };
                withdrawAllTokens(value: _111.MsgWithdrawAllTokensRequest): {
                    typeUrl: string;
                    value: _111.MsgWithdrawAllTokensRequest;
                };
            };
        };
        AminoConverter: {
            "/nebula.launchpad.MsgCreateProjectRequest": {
                aminoType: string;
                toAmino: ({ owner, projectTitle, projectInformation }: _111.MsgCreateProjectRequest) => {
                    owner: string;
                    project_title: string;
                    project_information: string;
                };
                fromAmino: ({ owner, project_title, project_information }: {
                    owner: string;
                    project_title: string;
                    project_information: string;
                }) => _111.MsgCreateProjectRequest;
            };
            "/nebula.launchpad.MsgDeleteProjectRequest": {
                aminoType: string;
                toAmino: ({ owner, projectId }: _111.MsgDeleteProjectRequest) => {
                    owner: string;
                    project_id: string;
                };
                fromAmino: ({ owner, project_id }: {
                    owner: string;
                    project_id: string;
                }) => _111.MsgDeleteProjectRequest;
            };
            "/nebula.launchpad.MsgWithdrawAllTokensRequest": {
                aminoType: string;
                toAmino: ({ owner, projectId }: _111.MsgWithdrawAllTokensRequest) => {
                    owner: string;
                    project_id: string;
                };
                fromAmino: ({ owner, project_id }: {
                    owner: string;
                    project_id: string;
                }) => _111.MsgWithdrawAllTokensRequest;
            };
        };
        MsgCreateProjectRequest: {
            encode(message: _111.MsgCreateProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateProjectRequest;
            fromJSON(object: any): _111.MsgCreateProjectRequest;
            toJSON(message: _111.MsgCreateProjectRequest): unknown;
            fromPartial(object: {
                owner?: string;
                projectTitle?: string;
                projectInformation?: string;
            }): _111.MsgCreateProjectRequest;
        };
        MsgCreateProjectResponse: {
            encode(message: _111.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateProjectResponse;
            fromJSON(object: any): _111.MsgCreateProjectResponse;
            toJSON(message: _111.MsgCreateProjectResponse): unknown;
            fromPartial(object: {
                projectId?: any;
            }): _111.MsgCreateProjectResponse;
        };
        MsgDeleteProjectRequest: {
            encode(message: _111.MsgDeleteProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgDeleteProjectRequest;
            fromJSON(object: any): _111.MsgDeleteProjectRequest;
            toJSON(message: _111.MsgDeleteProjectRequest): unknown;
            fromPartial(object: {
                owner?: string;
                projectId?: any;
            }): _111.MsgDeleteProjectRequest;
        };
        MsgDeleteProjectResponse: {
            encode(_: _111.MsgDeleteProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgDeleteProjectResponse;
            fromJSON(_: any): _111.MsgDeleteProjectResponse;
            toJSON(_: _111.MsgDeleteProjectResponse): unknown;
            fromPartial(_: {}): _111.MsgDeleteProjectResponse;
        };
        MsgWithdrawAllTokensRequest: {
            encode(message: _111.MsgWithdrawAllTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgWithdrawAllTokensRequest;
            fromJSON(object: any): _111.MsgWithdrawAllTokensRequest;
            toJSON(message: _111.MsgWithdrawAllTokensRequest): unknown;
            fromPartial(object: {
                owner?: string;
                projectId?: any;
            }): _111.MsgWithdrawAllTokensRequest;
        };
        MsgWithdrawAllTokensResponse: {
            encode(_: _111.MsgWithdrawAllTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgWithdrawAllTokensResponse;
            fromJSON(_: any): _111.MsgWithdrawAllTokensResponse;
            toJSON(_: _111.MsgWithdrawAllTokensResponse): unknown;
            fromPartial(_: {}): _111.MsgWithdrawAllTokensResponse;
        };
        QueryParamsRequest: {
            encode(_: _110.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsRequest;
            fromJSON(_: any): _110.QueryParamsRequest;
            toJSON(_: _110.QueryParamsRequest): unknown;
            fromPartial(_: {}): _110.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _110.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsResponse;
            fromJSON(object: any): _110.QueryParamsResponse;
            toJSON(message: _110.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {};
            }): _110.QueryParamsResponse;
        };
        ProjectRequest: {
            encode(message: _110.ProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProjectRequest;
            fromJSON(object: any): _110.ProjectRequest;
            toJSON(message: _110.ProjectRequest): unknown;
            fromPartial(object: {
                projectId?: any;
            }): _110.ProjectRequest;
        };
        ProjectResponse: {
            encode(message: _110.ProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProjectResponse;
            fromJSON(object: any): _110.ProjectResponse;
            toJSON(message: _110.ProjectResponse): unknown;
            fromPartial(object: {
                project?: {
                    projectOwner?: string;
                    projectTitle?: string;
                    projectId?: any;
                    projectAddress?: string;
                    projectInformation?: string;
                    projectStatus?: any;
                    registeredRm?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    projectVerified?: boolean;
                };
            }): _110.ProjectResponse;
        };
        TotalProjectRequest: {
            encode(message: _110.TotalProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.TotalProjectRequest;
            fromJSON(object: any): _110.TotalProjectRequest;
            toJSON(message: _110.TotalProjectRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _110.TotalProjectRequest;
        };
        TotalProjectResponse: {
            encode(message: _110.TotalProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.TotalProjectResponse;
            fromJSON(object: any): _110.TotalProjectResponse;
            toJSON(message: _110.TotalProjectResponse): unknown;
            fromPartial(object: {
                projects?: {
                    projectOwner?: string;
                    projectTitle?: string;
                    projectId?: any;
                    projectAddress?: string;
                    projectInformation?: string;
                    projectStatus?: any;
                    registeredRm?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    projectVerified?: boolean;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _110.TotalProjectResponse;
        };
        ProjectBalancesRequest: {
            encode(message: _110.ProjectBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProjectBalancesRequest;
            fromJSON(object: any): _110.ProjectBalancesRequest;
            toJSON(message: _110.ProjectBalancesRequest): unknown;
            fromPartial(object: {
                projectId?: any;
            }): _110.ProjectBalancesRequest;
        };
        ProjectBalancesResponse: {
            encode(message: _110.ProjectBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProjectBalancesResponse;
            fromJSON(object: any): _110.ProjectBalancesResponse;
            toJSON(message: _110.ProjectBalancesResponse): unknown;
            fromPartial(object: {
                balances?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _110.ProjectBalancesResponse;
        };
        Project: {
            encode(message: _109.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Project;
            fromJSON(object: any): _109.Project;
            toJSON(message: _109.Project): unknown;
            fromPartial(object: {
                projectOwner?: string;
                projectTitle?: string;
                projectId?: any;
                projectAddress?: string;
                projectInformation?: string;
                projectStatus?: any;
                registeredRm?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
                projectVerified?: boolean;
            }): _109.Project;
        };
        Params: {
            encode(_: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Params;
            fromJSON(_: any): _108.Params;
            toJSON(_: _108.Params): unknown;
            fromPartial(_: {}): _108.Params;
        };
        SetProjectVerifiedProposal: {
            encode(message: _107.SetProjectVerifiedProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.SetProjectVerifiedProposal;
            fromJSON(object: any): _107.SetProjectVerifiedProposal;
            toJSON(message: _107.SetProjectVerifiedProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                projectOwner?: string;
                projectId?: any;
            }): _107.SetProjectVerifiedProposal;
        };
        GenesisState: {
            encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
            fromJSON(object: any): _106.GenesisState;
            toJSON(message: _106.GenesisState): unknown;
            fromPartial(object: {
                params?: {};
                projects?: {
                    projectOwner?: string;
                    projectTitle?: string;
                    projectId?: any;
                    projectAddress?: string;
                    projectInformation?: string;
                    projectStatus?: any;
                    registeredRm?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    projectVerified?: boolean;
                }[];
                globalProjectIdStart?: any;
            }): _106.GenesisState;
        };
    };
}
