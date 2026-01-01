export function createAITuner(options = {}) {
  const state = {
    enabled: false,
    interval: 500,
    lastEpisode: -Infinity,
    notified: false,
  };

  const log = typeof options.log === 'function' ? options.log : () => {};

  return {
    setInterval(value) {
      const parsed = Number(value);
      if (Number.isFinite(parsed) && parsed > 0) {
        state.interval = Math.floor(parsed);
      }
    },
    setEnabled(value) {
      state.enabled = Boolean(value);
      if (!state.enabled) {
        state.notified = false;
      }
    },
    maybeTune({ episode } = {}) {
      if (!state.enabled || !Number.isFinite(episode)) return;
      if (episode - state.lastEpisode < state.interval) return;
      state.lastEpisode = episode;
      if (!state.notified) {
        log('AI Auto-Tune is running in offline mode with no API calls.');
        state.notified = true;
      }
    },
  };
}
