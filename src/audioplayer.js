var proxy = require("proxy");

var _ = proxy._,
    state = require("core/state");

exports.init = function(remote_url) {
    state.setPlayback(state.PLAYBACK_INITED); //state should be updated by event from inside platform implemented class!
    proxy.audioplayer.init(remote_url);
};

exports.play = function() {
    state.setPlayback(state.PLAYBACK_PLAY);
    proxy.audioplayer.play();
};

exports.pause = function() {
    state.setPlayback(state.PLAYBACK_PAUSED);
    proxy.audioplayer.pause();
};

exports.stop = function() {
    state.setPlayback(state.PLAYBACK_STOPPED);
    proxy.audioplayer.stop();
};