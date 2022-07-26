import * as _1 from "./app/v1alpha1/config";
import * as _2 from "./app/v1alpha1/module";
import * as _3 from "./app/v1alpha1/query";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v1beta1/reflection";
import * as _21 from "./base/reflection/v2alpha1/reflection";
import * as _22 from "./base/snapshots/v1beta1/snapshot";
import * as _23 from "./base/store/v1beta1/commit_info";
import * as _24 from "./base/store/v1beta1/listening";
import * as _25 from "./base/tendermint/v1beta1/query";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./capability/v1beta1/capability";
import * as _28 from "./capability/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/tx";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/hd/v1/hd";
import * as _33 from "./crypto/keyring/v1/record";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./evidence/v1beta1/evidence";
import * as _42 from "./evidence/v1beta1/genesis";
import * as _43 from "./evidence/v1beta1/query";
import * as _44 from "./evidence/v1beta1/tx";
import * as _45 from "./feegrant/v1beta1/feegrant";
import * as _46 from "./feegrant/v1beta1/genesis";
import * as _47 from "./feegrant/v1beta1/query";
import * as _48 from "./feegrant/v1beta1/tx";
import * as _49 from "./genutil/v1beta1/genesis";
import * as _50 from "./gov/v1/genesis";
import * as _51 from "./gov/v1/gov";
import * as _52 from "./gov/v1/query";
import * as _53 from "./gov/v1/tx";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./group/v1/events";
import * as _59 from "./group/v1/genesis";
import * as _60 from "./group/v1/query";
import * as _61 from "./group/v1/tx";
import * as _62 from "./group/v1/types";
import * as _63 from "./mint/v1beta1/genesis";
import * as _64 from "./mint/v1beta1/mint";
import * as _65 from "./mint/v1beta1/query";
import * as _66 from "./msg/v1/msg";
import * as _67 from "./nft/v1beta1/event";
import * as _68 from "./nft/v1beta1/genesis";
import * as _69 from "./nft/v1beta1/nft";
import * as _70 from "./nft/v1beta1/query";
import * as _71 from "./nft/v1beta1/tx";
import * as _72 from "./orm/v1/orm";
import * as _73 from "./orm/v1alpha1/schema";
import * as _74 from "./params/v1beta1/params";
import * as _75 from "./params/v1beta1/query";
import * as _76 from "./slashing/v1beta1/genesis";
import * as _77 from "./slashing/v1beta1/query";
import * as _78 from "./slashing/v1beta1/slashing";
import * as _79 from "./slashing/v1beta1/tx";
import * as _80 from "./staking/v1beta1/authz";
import * as _81 from "./staking/v1beta1/genesis";
import * as _82 from "./staking/v1beta1/query";
import * as _83 from "./staking/v1beta1/staking";
import * as _84 from "./staking/v1beta1/tx";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _87 from "./tx/v1beta1/tx";
import * as _88 from "./upgrade/v1beta1/query";
import * as _89 from "./upgrade/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/upgrade";
import * as _91 from "./vesting/v1beta1/tx";
import * as _92 from "./vesting/v1beta1/vesting";
import * as _123 from "./authz/v1beta1/tx.amino";
import * as _124 from "./bank/v1beta1/tx.amino";
import * as _125 from "./crisis/v1beta1/tx.amino";
import * as _126 from "./distribution/v1beta1/tx.amino";
import * as _127 from "./evidence/v1beta1/tx.amino";
import * as _128 from "./feegrant/v1beta1/tx.amino";
import * as _129 from "./gov/v1/tx.amino";
import * as _130 from "./gov/v1beta1/tx.amino";
import * as _131 from "./group/v1/tx.amino";
import * as _132 from "./nft/v1beta1/tx.amino";
import * as _133 from "./slashing/v1beta1/tx.amino";
import * as _134 from "./staking/v1beta1/tx.amino";
import * as _135 from "./upgrade/v1beta1/tx.amino";
import * as _136 from "./vesting/v1beta1/tx.amino";
import * as _137 from "./authz/v1beta1/tx.registry";
import * as _138 from "./bank/v1beta1/tx.registry";
import * as _139 from "./crisis/v1beta1/tx.registry";
import * as _140 from "./distribution/v1beta1/tx.registry";
import * as _141 from "./evidence/v1beta1/tx.registry";
import * as _142 from "./feegrant/v1beta1/tx.registry";
import * as _143 from "./gov/v1/tx.registry";
import * as _144 from "./gov/v1beta1/tx.registry";
import * as _145 from "./group/v1/tx.registry";
import * as _146 from "./nft/v1beta1/tx.registry";
import * as _147 from "./slashing/v1beta1/tx.registry";
import * as _148 from "./staking/v1beta1/tx.registry";
import * as _149 from "./upgrade/v1beta1/tx.registry";
import * as _150 from "./vesting/v1beta1/tx.registry";
import * as _151 from "./auth/v1beta1/query.lcd";
import * as _152 from "./authz/v1beta1/query.lcd";
import * as _153 from "./bank/v1beta1/query.lcd";
import * as _154 from "./distribution/v1beta1/query.lcd";
import * as _155 from "./evidence/v1beta1/query.lcd";
import * as _156 from "./feegrant/v1beta1/query.lcd";
import * as _157 from "./gov/v1/query.lcd";
import * as _158 from "./gov/v1beta1/query.lcd";
import * as _159 from "./group/v1/query.lcd";
import * as _160 from "./mint/v1beta1/query.lcd";
import * as _161 from "./nft/v1beta1/query.lcd";
import * as _162 from "./params/v1beta1/query.lcd";
import * as _163 from "./slashing/v1beta1/query.lcd";
import * as _164 from "./staking/v1beta1/query.lcd";
import * as _165 from "./upgrade/v1beta1/query.lcd";
import * as _166 from "./app/v1alpha1/query.rpc.query";
import * as _167 from "./auth/v1beta1/query.rpc.query";
import * as _168 from "./authz/v1beta1/query.rpc.query";
import * as _169 from "./bank/v1beta1/query.rpc.query";
import * as _170 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _171 from "./distribution/v1beta1/query.rpc.query";
import * as _172 from "./evidence/v1beta1/query.rpc.query";
import * as _173 from "./feegrant/v1beta1/query.rpc.query";
import * as _174 from "./gov/v1/query.rpc.query";
import * as _175 from "./gov/v1beta1/query.rpc.query";
import * as _176 from "./group/v1/query.rpc.query";
import * as _177 from "./mint/v1beta1/query.rpc.query";
import * as _178 from "./nft/v1beta1/query.rpc.query";
import * as _179 from "./params/v1beta1/query.rpc.query";
import * as _180 from "./slashing/v1beta1/query.rpc.query";
import * as _181 from "./staking/v1beta1/query.rpc.query";
import * as _182 from "./tx/v1beta1/service.rpc.svc";
import * as _183 from "./upgrade/v1beta1/query.rpc.query";
import * as _184 from "./authz/v1beta1/tx.rpc.msg";
import * as _185 from "./bank/v1beta1/tx.rpc.msg";
import * as _186 from "./crisis/v1beta1/tx.rpc.msg";
import * as _187 from "./distribution/v1beta1/tx.rpc.msg";
import * as _188 from "./evidence/v1beta1/tx.rpc.msg";
import * as _189 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _190 from "./gov/v1/tx.rpc.msg";
import * as _191 from "./gov/v1beta1/tx.rpc.msg";
import * as _192 from "./group/v1/tx.rpc.msg";
import * as _193 from "./nft/v1beta1/tx.rpc.msg";
import * as _194 from "./slashing/v1beta1/tx.rpc.msg";
import * as _195 from "./staking/v1beta1/tx.rpc.msg";
import * as _196 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _197 from "./vesting/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._1,
      ..._2,
      ..._3,
      ..._166
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._4,
      ..._5,
      ..._6,
      ..._151,
      ..._167
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._123,
      ..._137,
      ..._152,
      ..._168,
      ..._184
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._124,
      ..._138,
      ..._153,
      ..._169,
      ..._185
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._17
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._18
      };
    }
    export namespace query {
      export const v1beta1 = { ..._19
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._20
      };
      export const v2alpha1 = { ..._21
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._22
      };
    }
    export namespace store {
      export const v1beta1 = { ..._23,
        ..._24
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._25,
        ..._170
      };
    }
    export const v1beta1 = { ..._26
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._27,
      ..._28
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._29,
      ..._30,
      ..._125,
      ..._139,
      ..._186
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._31
    };
    export namespace hd {
      export const v1 = { ..._32
      };
    }
    export namespace keyring {
      export const v1 = { ..._33
      };
    }
    export const multisig = { ..._34
    };
    export const secp256k1 = { ..._35
    };
    export const secp256r1 = { ..._36
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._126,
      ..._140,
      ..._154,
      ..._171,
      ..._187
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._127,
      ..._141,
      ..._155,
      ..._172,
      ..._188
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._128,
      ..._142,
      ..._156,
      ..._173,
      ..._189
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._49
    };
  }
  export namespace gov {
    export const v1 = { ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._129,
      ..._143,
      ..._157,
      ..._174,
      ..._190
    };
    export const v1beta1 = { ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._130,
      ..._144,
      ..._158,
      ..._175,
      ..._191
    };
  }
  export namespace group {
    export const v1 = { ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._131,
      ..._145,
      ..._159,
      ..._176,
      ..._192
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._63,
      ..._64,
      ..._65,
      ..._160,
      ..._177
    };
  }
  export namespace msg {
    export const v1 = { ..._66
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._132,
      ..._146,
      ..._161,
      ..._178,
      ..._193
    };
  }
  export namespace orm {
    export const v1 = { ..._72
    };
    export const v1alpha1 = { ..._73
    };
  }
  export namespace params {
    export const v1beta1 = { ..._74,
      ..._75,
      ..._162,
      ..._179
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._133,
      ..._147,
      ..._163,
      ..._180,
      ..._194
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._134,
      ..._148,
      ..._164,
      ..._181,
      ..._195
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._85
      };
    }
    export const v1beta1 = { ..._86,
      ..._87,
      ..._182
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._88,
      ..._89,
      ..._90,
      ..._135,
      ..._149,
      ..._165,
      ..._183,
      ..._196
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._91,
      ..._92,
      ..._136,
      ..._150,
      ..._197
    };
  }
}