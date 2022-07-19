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
import * as _151 from "./ido/tx.amino";
import * as _152 from "./launchpad/tx.amino";
import * as _153 from "./ido/tx.registry";
import * as _154 from "./launchpad/tx.registry";
export namespace nebula {
  export const ido = { ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._151,
    ..._153
  };
  export const launchpad = { ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._152,
    ..._154
  };
}