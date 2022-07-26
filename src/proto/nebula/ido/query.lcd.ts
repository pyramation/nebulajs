import { Params } from "./params";
import { IDO } from "./ido";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, IDORequest, IDOResponse } from "./query";
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
    const endpoint = `nghuyenthevinh2000/nebula/ido/params`;
    return await this.request(endpoint);
  }

  /* IDO */
  async iDO(params: IDORequest): Promise<IDOResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.projectId !== "undefined") {
      options.params.project_id = params.projectId;
    }

    const endpoint = `nghuyenthevinh2000/nebula/ido/${params.project_id}`;
    return await this.request(endpoint, options);
  }

}