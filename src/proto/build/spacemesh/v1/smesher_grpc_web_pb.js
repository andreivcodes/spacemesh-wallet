/**
 * @fileoverview gRPC-Web generated client stub for spacemesh.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: spacemesh/v1/smesher.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var spacemesh_v1_smesher_types_pb = require('../../spacemesh/v1/smesher_types_pb.js')
const proto = {};
proto.spacemesh = {};
proto.spacemesh.v1 = require('./smesher_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.spacemesh.v1.SmesherServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.spacemesh.v1.SmesherServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.IsSmeshingResponse>}
 */
const methodDescriptor_SmesherService_IsSmeshing = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/IsSmeshing',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.IsSmeshingResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.IsSmeshingResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.IsSmeshingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.IsSmeshingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.isSmeshing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/IsSmeshing',
      request,
      metadata || {},
      methodDescriptor_SmesherService_IsSmeshing,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.IsSmeshingResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.isSmeshing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/IsSmeshing',
      request,
      metadata || {},
      methodDescriptor_SmesherService_IsSmeshing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.StartSmeshingRequest,
 *   !proto.spacemesh.v1.StartSmeshingResponse>}
 */
const methodDescriptor_SmesherService_StartSmeshing = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/StartSmeshing',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_smesher_types_pb.StartSmeshingRequest,
  spacemesh_v1_smesher_types_pb.StartSmeshingResponse,
  /**
   * @param {!proto.spacemesh.v1.StartSmeshingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.StartSmeshingResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.StartSmeshingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.StartSmeshingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.StartSmeshingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.startSmeshing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/StartSmeshing',
      request,
      metadata || {},
      methodDescriptor_SmesherService_StartSmeshing,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.StartSmeshingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.StartSmeshingResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.startSmeshing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/StartSmeshing',
      request,
      metadata || {},
      methodDescriptor_SmesherService_StartSmeshing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.StopSmeshingRequest,
 *   !proto.spacemesh.v1.StopSmeshingResponse>}
 */
const methodDescriptor_SmesherService_StopSmeshing = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/StopSmeshing',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_smesher_types_pb.StopSmeshingRequest,
  spacemesh_v1_smesher_types_pb.StopSmeshingResponse,
  /**
   * @param {!proto.spacemesh.v1.StopSmeshingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.StopSmeshingResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.StopSmeshingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.StopSmeshingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.StopSmeshingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.stopSmeshing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/StopSmeshing',
      request,
      metadata || {},
      methodDescriptor_SmesherService_StopSmeshing,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.StopSmeshingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.StopSmeshingResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.stopSmeshing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/StopSmeshing',
      request,
      metadata || {},
      methodDescriptor_SmesherService_StopSmeshing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.SmesherIDResponse>}
 */
const methodDescriptor_SmesherService_SmesherID = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/SmesherID',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.SmesherIDResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.SmesherIDResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.SmesherIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.SmesherIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.smesherID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/SmesherID',
      request,
      metadata || {},
      methodDescriptor_SmesherService_SmesherID,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.SmesherIDResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.smesherID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/SmesherID',
      request,
      metadata || {},
      methodDescriptor_SmesherService_SmesherID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.CoinbaseResponse>}
 */
const methodDescriptor_SmesherService_Coinbase = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/Coinbase',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.CoinbaseResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.CoinbaseResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.CoinbaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.CoinbaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.coinbase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/Coinbase',
      request,
      metadata || {},
      methodDescriptor_SmesherService_Coinbase,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.CoinbaseResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.coinbase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/Coinbase',
      request,
      metadata || {},
      methodDescriptor_SmesherService_Coinbase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.SetCoinbaseRequest,
 *   !proto.spacemesh.v1.SetCoinbaseResponse>}
 */
const methodDescriptor_SmesherService_SetCoinbase = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/SetCoinbase',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_smesher_types_pb.SetCoinbaseRequest,
  spacemesh_v1_smesher_types_pb.SetCoinbaseResponse,
  /**
   * @param {!proto.spacemesh.v1.SetCoinbaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.SetCoinbaseResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.SetCoinbaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.SetCoinbaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.SetCoinbaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.setCoinbase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/SetCoinbase',
      request,
      metadata || {},
      methodDescriptor_SmesherService_SetCoinbase,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.SetCoinbaseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.SetCoinbaseResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.setCoinbase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/SetCoinbase',
      request,
      metadata || {},
      methodDescriptor_SmesherService_SetCoinbase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.MinGasResponse>}
 */
const methodDescriptor_SmesherService_MinGas = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/MinGas',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.MinGasResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.MinGasResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.MinGasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.MinGasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.minGas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/MinGas',
      request,
      metadata || {},
      methodDescriptor_SmesherService_MinGas,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.MinGasResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.minGas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/MinGas',
      request,
      metadata || {},
      methodDescriptor_SmesherService_MinGas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.SetMinGasRequest,
 *   !proto.spacemesh.v1.SetMinGasResponse>}
 */
const methodDescriptor_SmesherService_SetMinGas = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/SetMinGas',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_smesher_types_pb.SetMinGasRequest,
  spacemesh_v1_smesher_types_pb.SetMinGasResponse,
  /**
   * @param {!proto.spacemesh.v1.SetMinGasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.SetMinGasResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.SetMinGasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.SetMinGasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.SetMinGasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.setMinGas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/SetMinGas',
      request,
      metadata || {},
      methodDescriptor_SmesherService_SetMinGas,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.SetMinGasRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.SetMinGasResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.setMinGas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/SetMinGas',
      request,
      metadata || {},
      methodDescriptor_SmesherService_SetMinGas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.EstimatedRewardsRequest,
 *   !proto.spacemesh.v1.EstimatedRewardsResponse>}
 */
const methodDescriptor_SmesherService_EstimatedRewards = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/EstimatedRewards',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_smesher_types_pb.EstimatedRewardsRequest,
  spacemesh_v1_smesher_types_pb.EstimatedRewardsResponse,
  /**
   * @param {!proto.spacemesh.v1.EstimatedRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.EstimatedRewardsResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.EstimatedRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.EstimatedRewardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.EstimatedRewardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.estimatedRewards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/EstimatedRewards',
      request,
      metadata || {},
      methodDescriptor_SmesherService_EstimatedRewards,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.EstimatedRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.EstimatedRewardsResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.estimatedRewards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/EstimatedRewards',
      request,
      metadata || {},
      methodDescriptor_SmesherService_EstimatedRewards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.PostSetupStatusResponse>}
 */
const methodDescriptor_SmesherService_PostSetupStatus = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/PostSetupStatus',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.PostSetupStatusResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.PostSetupStatusResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.PostSetupStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.PostSetupStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.postSetupStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostSetupStatus',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostSetupStatus,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.PostSetupStatusResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.postSetupStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostSetupStatus',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostSetupStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.PostSetupStatusStreamResponse>}
 */
const methodDescriptor_SmesherService_PostSetupStatusStream = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/PostSetupStatusStream',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.PostSetupStatusStreamResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.PostSetupStatusStreamResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.PostSetupStatusStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.postSetupStatusStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostSetupStatusStream',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostSetupStatusStream);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.PostSetupStatusStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.postSetupStatusStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostSetupStatusStream',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostSetupStatusStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.PostSetupComputeProvidersRequest,
 *   !proto.spacemesh.v1.PostSetupComputeProvidersResponse>}
 */
const methodDescriptor_SmesherService_PostSetupComputeProviders = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/PostSetupComputeProviders',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_smesher_types_pb.PostSetupComputeProvidersRequest,
  spacemesh_v1_smesher_types_pb.PostSetupComputeProvidersResponse,
  /**
   * @param {!proto.spacemesh.v1.PostSetupComputeProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.PostSetupComputeProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.PostSetupComputeProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.PostSetupComputeProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.PostSetupComputeProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.postSetupComputeProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostSetupComputeProviders',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostSetupComputeProviders,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.PostSetupComputeProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.PostSetupComputeProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.postSetupComputeProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostSetupComputeProviders',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostSetupComputeProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.spacemesh.v1.PostConfigResponse>}
 */
const methodDescriptor_SmesherService_PostConfig = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.SmesherService/PostConfig',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  spacemesh_v1_smesher_types_pb.PostConfigResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_smesher_types_pb.PostConfigResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.PostConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.PostConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.SmesherServiceClient.prototype.postConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostConfig',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostConfig,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.PostConfigResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.SmesherServicePromiseClient.prototype.postConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.SmesherService/PostConfig',
      request,
      metadata || {},
      methodDescriptor_SmesherService_PostConfig);
};


module.exports = proto.spacemesh.v1;
