'use strict';

var defaultExport = module.exports;
var bitcore = {};
var bitcorePeerCoin = {};

defaultExport.bitcore = bitcore;
defaultExport.bitcorePeerCoin = bitcorePeerCoin;


// module information
bitcore.version = 'v' + require('./package.json').version;
bitcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bitcore-lib found. ' +
      'Please make sure to require bitcore-lib and check that submodules do' +
      ' not also include their own bitcore-lib dependency.';
    throw new Error(message);
  }
};
bitcore.versionGuard(global._bitcore);
global._bitcore = bitcore.version;

// crypto
bitcore.crypto = {};
bitcore.crypto.BN = require('./lib/crypto/bn');
bitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
bitcore.crypto.Hash = require('./lib/crypto/hash');
bitcore.crypto.Random = require('./lib/crypto/random');
bitcore.crypto.Point = require('./lib/crypto/point');
bitcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
bitcore.encoding = {};
bitcore.encoding.Base58 = require('./lib/encoding/base58');
bitcore.encoding.Base58Check = require('./lib/encoding/base58check');
bitcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
bitcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bitcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
bitcore.util = {};
bitcore.util.buffer = require('./lib/util/buffer');
bitcore.util.js = require('./lib/util/js');
bitcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bitcore.errors = require('./lib/errors');

// main bitcoin library
bitcore.Address = require('./lib/address');
bitcore.Block = require('./lib/block');
bitcore.MerkleBlock = require('./lib/block/merkleblock');
bitcore.BlockHeader = require('./lib/block/blockheader');
bitcore.HDPrivateKey = require('./lib/hdprivatekey.js');
bitcore.HDPublicKey = require('./lib/hdpublickey.js');
bitcore.Message = require('./lib/message');
bitcore.Networks = require('./lib/networks');
bitcore.Opcode = require('./lib/opcode');
bitcore.PrivateKey = require('./lib/privatekey');
bitcore.PublicKey = require('./lib/publickey');
bitcore.Script = require('./lib/script');
bitcore.Transaction = require('./lib/transaction');
bitcore.URI = require('./lib/uri');
bitcore.Unit = require('./lib/unit');

// dependencies, subject to change
bitcore.deps = {};
bitcore.deps.bnjs = require('bn.js');
bitcore.deps.bs58 = require('bs58');
bitcore.deps.Buffer = Buffer;
bitcore.deps.elliptic = require('elliptic');
bitcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
bitcore.Transaction.sighash = require('./lib/transaction/sighash');



// module information
bitcorePeerCoin.version = 'v' + require('./package.json').version;
bitcorePeerCoin.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bitcorePeerCoin-lib found. ' +
      'Please make sure to require bitcorePeerCoin-lib and check that submodules do' +
      ' not also include their own bitcorePeerCoin-lib dependency.';
    throw new Error(message);
  }
};
bitcorePeerCoin.versionGuard(global._bitcorePeerCoin);
global._bitcorePeerCoin = bitcorePeerCoin.version;

// crypto
bitcorePeerCoin.crypto = {};
bitcorePeerCoin.crypto.BN = require('./lib/crypto/bn');
bitcorePeerCoin.crypto.ECDSA = require('./lib/crypto/ecdsa');
bitcorePeerCoin.crypto.Hash = require('./lib/crypto/hash');
bitcorePeerCoin.crypto.Random = require('./lib/crypto/random');
bitcorePeerCoin.crypto.Point = require('./lib/crypto/point');
bitcorePeerCoin.crypto.Signature = require('./lib/crypto/signature');

// encoding
bitcorePeerCoin.encoding = {};
bitcorePeerCoin.encoding.Base58 = require('./lib/encoding/base58');
bitcorePeerCoin.encoding.Base58Check = require('./lib/encoding/base58check');
bitcorePeerCoin.encoding.BufferReader = require('./lib/encoding/bufferreader');
bitcorePeerCoin.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bitcorePeerCoin.encoding.Varint = require('./lib/encoding/varint');

// utilities
bitcorePeerCoin.util = {};
bitcorePeerCoin.util.buffer = require('./lib/util/buffer');
bitcorePeerCoin.util.js = require('./lib/util/js');
bitcorePeerCoin.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bitcorePeerCoin.errors = require('./lib/errors');

// main bitcoin library
bitcorePeerCoin.Address = require('./lib/address');
bitcorePeerCoin.Block = require('./lib/block');
bitcorePeerCoin.MerkleBlock = require('./lib/block/merkleblock');
bitcorePeerCoin.BlockHeader = require('./lib/block/blockheader');
bitcorePeerCoin.HDPrivateKey = require('./lib/hdprivatekey.js');
bitcorePeerCoin.HDPublicKey = require('./lib/hdpublickey.js');
bitcorePeerCoin.Message = require('./lib/message');
bitcorePeerCoin.Networks = require('./lib/networks');
bitcorePeerCoin.Opcode = require('./lib/opcode');
bitcorePeerCoin.PrivateKey = require('./lib/privatekey');
bitcorePeerCoin.PublicKey = require('./lib/publickey');
bitcorePeerCoin.Script = require('./lib/script');
bitcorePeerCoin.Transaction = require('./lib/transaction');
bitcorePeerCoin.URI = require('./lib/uri');
bitcorePeerCoin.Unit = require('./lib/unit');

// dependencies, subject to change
bitcorePeerCoin.deps = {};
bitcorePeerCoin.deps.bnjs = require('bn.js');
bitcorePeerCoin.deps.bs58 = require('bs58');
bitcorePeerCoin.deps.Buffer = Buffer;
bitcorePeerCoin.deps.elliptic = require('elliptic');
bitcorePeerCoin.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
bitcorePeerCoin.Transaction.sighash = require('./lib/transaction/sighash');
