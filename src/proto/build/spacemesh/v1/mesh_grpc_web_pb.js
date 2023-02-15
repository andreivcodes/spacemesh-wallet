/**
 * @fileoverview gRPC-Web generated client stub for spacemesh.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: spacemesh/v1/mesh.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var spacemesh_v1_mesh_types_pb = require('../../spacemesh/v1/mesh_types_pb.js')
const proto = {};
proto.spacemesh = {};
proto.spacemesh.v1 = require('./mesh_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.spacemesh.v1.MeshServiceClient =
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
proto.spacemesh.v1.MeshServicePromiseClient =
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
 *   !proto.spacemesh.v1.GenesisTimeRequest,
 *   !proto.spacemesh.v1.GenesisTimeResponse>}
 */
const methodDescriptor_MeshService_GenesisTime = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/GenesisTime',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.GenesisTimeRequest,
  spacemesh_v1_mesh_types_pb.GenesisTimeResponse,
  /**
   * @param {!proto.spacemesh.v1.GenesisTimeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.GenesisTimeResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.GenesisTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.GenesisTimeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.GenesisTimeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.genesisTime =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/GenesisTime',
      request,
      metadata || {},
      methodDescriptor_MeshService_GenesisTime,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.GenesisTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.GenesisTimeResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.genesisTime =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/GenesisTime',
      request,
      metadata || {},
      methodDescriptor_MeshService_GenesisTime);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.CurrentLayerRequest,
 *   !proto.spacemesh.v1.CurrentLayerResponse>}
 */
const methodDescriptor_MeshService_CurrentLayer = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/CurrentLayer',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.CurrentLayerRequest,
  spacemesh_v1_mesh_types_pb.CurrentLayerResponse,
  /**
   * @param {!proto.spacemesh.v1.CurrentLayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.CurrentLayerResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.CurrentLayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.CurrentLayerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.CurrentLayerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.currentLayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/CurrentLayer',
      request,
      metadata || {},
      methodDescriptor_MeshService_CurrentLayer,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.CurrentLayerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.CurrentLayerResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.currentLayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/CurrentLayer',
      request,
      metadata || {},
      methodDescriptor_MeshService_CurrentLayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.CurrentEpochRequest,
 *   !proto.spacemesh.v1.CurrentEpochResponse>}
 */
const methodDescriptor_MeshService_CurrentEpoch = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/CurrentEpoch',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.CurrentEpochRequest,
  spacemesh_v1_mesh_types_pb.CurrentEpochResponse,
  /**
   * @param {!proto.spacemesh.v1.CurrentEpochRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.CurrentEpochResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.CurrentEpochRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.CurrentEpochResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.CurrentEpochResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.currentEpoch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/CurrentEpoch',
      request,
      metadata || {},
      methodDescriptor_MeshService_CurrentEpoch,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.CurrentEpochRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.CurrentEpochResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.currentEpoch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/CurrentEpoch',
      request,
      metadata || {},
      methodDescriptor_MeshService_CurrentEpoch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.GenesisIDRequest,
 *   !proto.spacemesh.v1.GenesisIDResponse>}
 */
const methodDescriptor_MeshService_GenesisID = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/GenesisID',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.GenesisIDRequest,
  spacemesh_v1_mesh_types_pb.GenesisIDResponse,
  /**
   * @param {!proto.spacemesh.v1.GenesisIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.GenesisIDResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.GenesisIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.GenesisIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.GenesisIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.genesisID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/GenesisID',
      request,
      metadata || {},
      methodDescriptor_MeshService_GenesisID,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.GenesisIDRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.GenesisIDResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.genesisID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/GenesisID',
      request,
      metadata || {},
      methodDescriptor_MeshService_GenesisID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.EpochNumLayersRequest,
 *   !proto.spacemesh.v1.EpochNumLayersResponse>}
 */
const methodDescriptor_MeshService_EpochNumLayers = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/EpochNumLayers',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.EpochNumLayersRequest,
  spacemesh_v1_mesh_types_pb.EpochNumLayersResponse,
  /**
   * @param {!proto.spacemesh.v1.EpochNumLayersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.EpochNumLayersResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.EpochNumLayersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.EpochNumLayersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.EpochNumLayersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.epochNumLayers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/EpochNumLayers',
      request,
      metadata || {},
      methodDescriptor_MeshService_EpochNumLayers,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.EpochNumLayersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.EpochNumLayersResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.epochNumLayers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/EpochNumLayers',
      request,
      metadata || {},
      methodDescriptor_MeshService_EpochNumLayers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.LayerDurationRequest,
 *   !proto.spacemesh.v1.LayerDurationResponse>}
 */
const methodDescriptor_MeshService_LayerDuration = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/LayerDuration',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.LayerDurationRequest,
  spacemesh_v1_mesh_types_pb.LayerDurationResponse,
  /**
   * @param {!proto.spacemesh.v1.LayerDurationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.LayerDurationResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.LayerDurationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.LayerDurationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.LayerDurationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.layerDuration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/LayerDuration',
      request,
      metadata || {},
      methodDescriptor_MeshService_LayerDuration,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.LayerDurationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.LayerDurationResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.layerDuration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/LayerDuration',
      request,
      metadata || {},
      methodDescriptor_MeshService_LayerDuration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.MaxTransactionsPerSecondRequest,
 *   !proto.spacemesh.v1.MaxTransactionsPerSecondResponse>}
 */
const methodDescriptor_MeshService_MaxTransactionsPerSecond = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/MaxTransactionsPerSecond',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.MaxTransactionsPerSecondRequest,
  spacemesh_v1_mesh_types_pb.MaxTransactionsPerSecondResponse,
  /**
   * @param {!proto.spacemesh.v1.MaxTransactionsPerSecondRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.MaxTransactionsPerSecondResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.MaxTransactionsPerSecondRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.MaxTransactionsPerSecondResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.MaxTransactionsPerSecondResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.maxTransactionsPerSecond =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/MaxTransactionsPerSecond',
      request,
      metadata || {},
      methodDescriptor_MeshService_MaxTransactionsPerSecond,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.MaxTransactionsPerSecondRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.MaxTransactionsPerSecondResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.maxTransactionsPerSecond =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/MaxTransactionsPerSecond',
      request,
      metadata || {},
      methodDescriptor_MeshService_MaxTransactionsPerSecond);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.AccountMeshDataQueryRequest,
 *   !proto.spacemesh.v1.AccountMeshDataQueryResponse>}
 */
const methodDescriptor_MeshService_AccountMeshDataQuery = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/AccountMeshDataQuery',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.AccountMeshDataQueryRequest,
  spacemesh_v1_mesh_types_pb.AccountMeshDataQueryResponse,
  /**
   * @param {!proto.spacemesh.v1.AccountMeshDataQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.AccountMeshDataQueryResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.AccountMeshDataQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.AccountMeshDataQueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.AccountMeshDataQueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.accountMeshDataQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/AccountMeshDataQuery',
      request,
      metadata || {},
      methodDescriptor_MeshService_AccountMeshDataQuery,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.AccountMeshDataQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.AccountMeshDataQueryResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.accountMeshDataQuery =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/AccountMeshDataQuery',
      request,
      metadata || {},
      methodDescriptor_MeshService_AccountMeshDataQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.LayersQueryRequest,
 *   !proto.spacemesh.v1.LayersQueryResponse>}
 */
const methodDescriptor_MeshService_LayersQuery = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/LayersQuery',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_mesh_types_pb.LayersQueryRequest,
  spacemesh_v1_mesh_types_pb.LayersQueryResponse,
  /**
   * @param {!proto.spacemesh.v1.LayersQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.LayersQueryResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.LayersQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.LayersQueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.LayersQueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.layersQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.MeshService/LayersQuery',
      request,
      metadata || {},
      methodDescriptor_MeshService_LayersQuery,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.LayersQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.LayersQueryResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.layersQuery =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.MeshService/LayersQuery',
      request,
      metadata || {},
      methodDescriptor_MeshService_LayersQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.AccountMeshDataStreamRequest,
 *   !proto.spacemesh.v1.AccountMeshDataStreamResponse>}
 */
const methodDescriptor_MeshService_AccountMeshDataStream = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/AccountMeshDataStream',
  grpc.web.MethodType.SERVER_STREAMING,
  spacemesh_v1_mesh_types_pb.AccountMeshDataStreamRequest,
  spacemesh_v1_mesh_types_pb.AccountMeshDataStreamResponse,
  /**
   * @param {!proto.spacemesh.v1.AccountMeshDataStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.AccountMeshDataStreamResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.AccountMeshDataStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.AccountMeshDataStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.accountMeshDataStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/spacemesh.v1.MeshService/AccountMeshDataStream',
      request,
      metadata || {},
      methodDescriptor_MeshService_AccountMeshDataStream);
};


/**
 * @param {!proto.spacemesh.v1.AccountMeshDataStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.AccountMeshDataStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.accountMeshDataStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/spacemesh.v1.MeshService/AccountMeshDataStream',
      request,
      metadata || {},
      methodDescriptor_MeshService_AccountMeshDataStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.spacemesh.v1.LayerStreamRequest,
 *   !proto.spacemesh.v1.LayerStreamResponse>}
 */
const methodDescriptor_MeshService_LayerStream = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.MeshService/LayerStream',
  grpc.web.MethodType.SERVER_STREAMING,
  spacemesh_v1_mesh_types_pb.LayerStreamRequest,
  spacemesh_v1_mesh_types_pb.LayerStreamResponse,
  /**
   * @param {!proto.spacemesh.v1.LayerStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_mesh_types_pb.LayerStreamResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.LayerStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.LayerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServiceClient.prototype.layerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/spacemesh.v1.MeshService/LayerStream',
      request,
      metadata || {},
      methodDescriptor_MeshService_LayerStream);
};


/**
 * @param {!proto.spacemesh.v1.LayerStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.LayerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.MeshServicePromiseClient.prototype.layerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/spacemesh.v1.MeshService/LayerStream',
      request,
      metadata || {},
      methodDescriptor_MeshService_LayerStream);
};


module.exports = proto.spacemesh.v1;
