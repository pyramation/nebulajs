import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Project } from "./project";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, ProjectRequest, ProjectResponse, TotalProjectRequest, TotalProjectResponse, ProjectBalancesRequest, ProjectBalancesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Parameters queries the parameters of the module. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `nebula/launchpad/params`;
    return await this.request(endpoint);
  }

  /* Project */
  async project(params: ProjectRequest): Promise<ProjectResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.projectId !== "undefined") {
      options.params.project_id = params.projectId;
    }

    const endpoint = `nebula/launchpad/project/${params.project_id}`;
    return await this.request(endpoint, options);
  }

  /* TotalProject */
  async totalProject(params: TotalProjectRequest): Promise<TotalProjectResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `nebula/launchpad/total-project`;
    return await this.request(endpoint, options);
  }

  /* ProjectBalances */
  async projectBalances(params: ProjectBalancesRequest): Promise<ProjectBalancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.projectId !== "undefined") {
      options.params.project_id = params.projectId;
    }

    const endpoint = `nebula/launchpad/project-balances/${params.project_id}`;
    return await this.request(endpoint, options);
  }

}