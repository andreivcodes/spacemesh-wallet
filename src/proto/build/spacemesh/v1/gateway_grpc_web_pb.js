/**
 * @fileoverview gRPC-Web generated client stub for spacemesh.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: spacemesh/v1/gateway.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var spacemesh_v1_gateway_types_pb = require('../../spacemesh/v1/gateway_types_pb.js')
const proto = {};
proto.spacemesh = {};
proto.spacemesh.v1 = require('./gateway_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.spacemesh.v1.GatewayServiceClient =
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
proto.spacemesh.v1.GatewayServicePromiseClient =
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
 *   !proto.spacemesh.v1.VerifyChallengeRequest,
 *   !proto.spacemesh.v1.VerifyChallengeResponse>}
 */
const methodDescriptor_GatewayService_VerifyChallenge = new grpc.web.MethodDescriptor(
  '/spacemesh.v1.GatewayService/VerifyChallenge',
  grpc.web.MethodType.UNARY,
  spacemesh_v1_gateway_types_pb.VerifyChallengeRequest,
  spacemesh_v1_gateway_types_pb.VerifyChallengeResponse,
  /**
   * @param {!proto.spacemesh.v1.VerifyChallengeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  spacemesh_v1_gateway_types_pb.VerifyChallengeResponse.deserializeBinary
);


/**
 * @param {!proto.spacemesh.v1.VerifyChallengeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.spacemesh.v1.VerifyChallengeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.spacemesh.v1.VerifyChallengeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.spacemesh.v1.GatewayServiceClient.prototype.verifyChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/spacemesh.v1.GatewayService/VerifyChallenge',
      request,
      metadata || {},
      methodDescriptor_GatewayService_VerifyChallenge,
      callback);
};


/**
 * @param {!proto.spacemesh.v1.VerifyChallengeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.spacemesh.v1.VerifyChallengeResponse>}
 *     Promise that resolves to the response
 */
proto.spacemesh.v1.GatewayServicePromiseClient.prototype.verifyChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/spacemesh.v1.GatewayService/VerifyChallenge',
      request,
      metadata || {},
      methodDescriptor_GatewayService_VerifyChallenge);
};


module.exports = proto.spacemesh.v1;

