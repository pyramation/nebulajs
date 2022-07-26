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
import * as _198 from "./ido/tx.amino";
import * as _199 from "./launchpad/tx.amino";
import * as _200 from "./ido/tx.registry";
import * as _201 from "./launchpad/tx.registry";
import * as _202 from "./ido/query.lcd";
import * as _203 from "./launchpad/query.lcd";
import * as _204 from "./ido/query.rpc.query";
import * as _205 from "./launchpad/query.rpc.query";
import * as _206 from "./ido/tx.rpc.msg";
import * as _207 from "./launchpad/tx.rpc.msg";
export namespace nebula {
  export const ido = { ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._198,
    ..._200,
    ..._202,
    ..._204,
    ..._206
  };
  export const launchpad = { ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._199,
    ..._201,
    ..._203,
    ..._205,
    ..._207
  };
}