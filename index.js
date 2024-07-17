/**
 * Prometheus client
 * @module Prometheus client
 */

'use strict';

exports.register = require('./lib/registry').globalRegistry;
exports.Registry = require('./lib/registry');
Object.defineProperty(exports, 'contentType', {
	configurable: false,
	enumerable: true,
	get() {
		return exports.register.contentType;
	},
	set(value) {
		exports.register.setContentType(value);
	},
});
exports.prometheusContentType = exports.Registry.PROMETHEUS_CONTENT_TYPE;
exports.openMetricsContentType = exports.Registry.OPENMETRICS_CONTENT_TYPE;
exports.validateMetricName = require('./lib/validation').validateMetricName;

exports.Counter = require('./lib/counter');
exports.Gauge = require('./lib/gauge');
exports.Histogram = require('./lib/histogram');
exports.Summary = require('./lib/summary');
exports.Pushgateway = require('./lib/pushgateway');

exports.linearBuckets = require('./lib/bucketGenerators').linearBuckets;
exports.exponentialBuckets =
	require('./lib/bucketGenerators').exponentialBuckets;

exports.collectDefaultMetrics = require('./lib/defaultMetrics');

exports.aggregators = require('./lib/metricAggregators').aggregators;
exports.AggregatorRegistry = require('./lib/cluster');

const { isObject } = require('./lib/util');

exports.isObject = isObject;
exports.eventLoopLag = require('./lib/metrics/eventLoopLag);
exports.processCpuTotal = require('./lib/metrics/processCpuTotal');
exports.processStartTime = require('./lib/metrics/processStartTime');
exports.osMemoryHeap = require('./lib/metrics/osMemoryHeap');
exports.processOpenFileDescriptors = require('./lib/metrics/processOpenFileDescriptors');
exports.processMaxFileDescriptors = require('./lib/metrics/processMaxFileDescriptors');
exports.processHandles = require('./lib/metrics/processHandles');
exports.processRequests = require('./lib/metrics/processRequests');
exports.heapSizeAndUsed = require('./lib/metrics/heapSizeAndUsed');
exports.heapSpacesSizeAndUsed = require('./lib/metrics/heapSpacesSizeAndUsed');
exports.version = require('./lib/metrics/version');
exports.gc = require('./lib/metrics/gc');
