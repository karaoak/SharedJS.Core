var proxy = require("proxy");

var _ = proxy._,
    log = proxy.logger,
    persist = require("core/persist");
    dispatcher = require("core/dispatcher");

var STATE_NORMAL = 1,
    STATE_ALERTED = 5
    STATE_EMERGENCY = 9;

var PLAYBACK_INIT = 1,
    PLAYBACK_INITED = 2,
    PLAYBACK_PAUSED = 3,
    PLAYBACK_PLAY = 5,
    PLAYBACK_STOPPED = 6,
    PLAYBACK_INTERRUPTED = 9;

var _state = STATE_NORMAL,
    _playback = PLAYBACK_INTERRUPTED;

exports.setNormal = function() {
    persist.unset('state');
    exports.set(STATE_NORMAL);
    dispatcher.trigger('STATE_NORMAL');
};

exports.setAlerted = function() {
    persist.set('state', 'ALERT');
    exports.set(STATE_ALERTED);
    dispatcher.trigger('STATE_ALERTED');
};

exports.setEmergency = function() {
    persist.set('state', 'EMERGENCY');
    exports.set(STATE_EMERGENCY);
    dispatcher.trigger('STATE_EMERGENCY');
};

exports.set = function(state) {
    switch(state) {
        case STATE_NORMAL:
        case STATE_ALERTED:
        case STATE_EMERGENCY:
            _state = state;
            break;
        default:
            log('Setting STATE to ' + state);
            _state = STATE_NORMAL
    }
    return _state;
};

exports.get = function() {
    return _state;
};

exports.setPlayback = function(state) {
    switch(state) {
        case PLAYBACK_INIT:
        case PLAYBACK_INITED:
        case PLAYBACK_PAUSED:
        case PLAYBACK_PLAY:
        case PLAYBACK_STOPPED:
        case PLAYBACK_INTERRUPTED:
            log('Setting PLAYBACK STATE to ' + state);
            _playback = state;
            break;
        default:
            _playback = PLAYBACK_INIT;
    }
};

exports.getPlayback = function() {
    return _playback;
};

exports.PLAYBACK_INIT = PLAYBACK_INIT;
exports.PLAYBACK_INITED = PLAYBACK_INITED;
exports.PLAYBACK_PAUSED = PLAYBACK_PAUSED;
exports.PLAYBACK_PLAY = PLAYBACK_PLAY;
exports.PLAYBACK_STOPPED = PLAYBACK_STOPPED;
exports.PLAYBACK_INTERRUPTED = PLAYBACK_INTERRUPTED;