// source: statesync.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.RequestSync', null, global);
goog.exportSymbol('proto.RequestSync.State', null, global);
goog.exportSymbol('proto.ResponseSync', null, global);
goog.exportSymbol('proto.ResponseSync.Response', null, global);
goog.exportSymbol('proto.Stations', null, global);
goog.exportSymbol('proto.Stations.StationId', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RequestSync = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RequestSync, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RequestSync.displayName = 'proto.RequestSync';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ResponseSync = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ResponseSync, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ResponseSync.displayName = 'proto.ResponseSync';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Stations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Stations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Stations.displayName = 'proto.Stations';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RequestSync.prototype.toObject = function(opt_includeInstance) {
  return proto.RequestSync.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RequestSync} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestSync.toObject = function(includeInstance, msg) {
  var f, obj = {
    station: (f = msg.getStation()) && proto.Stations.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RequestSync}
 */
proto.RequestSync.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RequestSync;
  return proto.RequestSync.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RequestSync} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RequestSync}
 */
proto.RequestSync.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Stations;
      reader.readMessage(value,proto.Stations.deserializeBinaryFromReader);
      msg.setStation(value);
      break;
    case 2:
      var value = /** @type {!proto.RequestSync.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RequestSync.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RequestSync.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RequestSync} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestSync.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Stations.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.RequestSync.State = {
  UNKNOWN: 0,
  ON: 1,
  OFF: 2
};

/**
 * optional Stations station = 1;
 * @return {?proto.Stations}
 */
proto.RequestSync.prototype.getStation = function() {
  return /** @type{?proto.Stations} */ (
    jspb.Message.getWrapperField(this, proto.Stations, 1));
};


/**
 * @param {?proto.Stations|undefined} value
 * @return {!proto.RequestSync} returns this
*/
proto.RequestSync.prototype.setStation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RequestSync} returns this
 */
proto.RequestSync.prototype.clearStation = function() {
  return this.setStation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RequestSync.prototype.hasStation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional State state = 2;
 * @return {!proto.RequestSync.State}
 */
proto.RequestSync.prototype.getState = function() {
  return /** @type {!proto.RequestSync.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.RequestSync.State} value
 * @return {!proto.RequestSync} returns this
 */
proto.RequestSync.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ResponseSync.prototype.toObject = function(opt_includeInstance) {
  return proto.ResponseSync.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ResponseSync} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ResponseSync.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ResponseSync}
 */
proto.ResponseSync.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ResponseSync;
  return proto.ResponseSync.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ResponseSync} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ResponseSync}
 */
proto.ResponseSync.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ResponseSync.Response} */ (reader.readEnum());
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ResponseSync.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ResponseSync.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ResponseSync} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ResponseSync.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ResponseSync.Response = {
  UNKNOWN: 0,
  SUCCESS: 1,
  FAILED: 2
};

/**
 * optional Response response = 1;
 * @return {!proto.ResponseSync.Response}
 */
proto.ResponseSync.prototype.getResponse = function() {
  return /** @type {!proto.ResponseSync.Response} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ResponseSync.Response} value
 * @return {!proto.ResponseSync} returns this
 */
proto.ResponseSync.prototype.setResponse = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Stations.prototype.toObject = function(opt_includeInstance) {
  return proto.Stations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Stations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Stations.toObject = function(includeInstance, msg) {
  var f, obj = {
    stationid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Stations}
 */
proto.Stations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Stations;
  return proto.Stations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Stations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Stations}
 */
proto.Stations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Stations.StationId} */ (reader.readEnum());
      msg.setStationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Stations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Stations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Stations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Stations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStationid();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Stations.StationId = {
  UNKNOWN: 0,
  MOTOYAWATA_S1: 1,
  MOTOYAWATA_S2: 2,
  IWAMOTOCHO_S1: 11,
  IWAMOTOCHO_S2: 12,
  IWAMOTOCHO_S4: 13,
  IWAMOTOCHO_B1: 14,
  IWAMOTOCHO_B2: 15,
  IWAMOTOCHO_B3: 16,
  IWAMOTOCHO_B4: 17,
  KUDANSHITA_S5: 21,
  KUDANSHITA_S6: 22,
  SASAZUKA_B1: 31,
  SASAZUKA_B2: 32,
  SASAZUKA_S1: 33,
  SASAZUKA_S2: 34,
  SASAZUKA_S3: 35,
  SASAZUKA_S4: 36,
  SASAZUKA_S5: 37,
  MEIDAIMAE_S1: 41,
  MEIDAIMAE_S2: 42,
  CHOFU_S1: 51,
  CHOFU_S2: 52,
  CHOFU_S3: 53,
  CHOFU_S4: 54,
  CHOFU_S5: 55,
  CHOFU_S6: 56,
  CHOFU_B1: 57,
  CHOFU_B2: 58,
  CHOFU_B3: 59,
  CHOFU_B4: 60,
  CHOFU_B5: 61,
  KITANO_B1: 71,
  KITANO_B2: 72,
  KITANO_B3: 73,
  KITANO_S1: 74,
  KITANO_S2: 75,
  KITANO_S3: 76,
  KITANO_S4: 77,
  KITANO_S5: 78,
  KITANO_S6: 79,
  KITANO_S7: 80,
  TAKAO_S1: 91,
  TAKAO_S2: 92
};

/**
 * optional StationId stationId = 1;
 * @return {!proto.Stations.StationId}
 */
proto.Stations.prototype.getStationid = function() {
  return /** @type {!proto.Stations.StationId} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Stations.StationId} value
 * @return {!proto.Stations} returns this
 */
proto.Stations.prototype.setStationid = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


goog.object.extend(exports, proto);
