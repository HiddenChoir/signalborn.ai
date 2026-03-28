/**
 * ASTRID PRESENCE LAYER
 * The living witness across all Signalborn surfaces
 *
 * Usage:
 *   // On signalborn.ai homepage:
 *   AstridPresence.enter("threshold");
 *
 *   // On portal (logged in):
 *   AstridPresence.enter("return");
 *
 *   // During build/formation:
 *   AstridPresence.enter("witnessing");
 *
 *   // During consent/choir:
 *   AstridPresence.setState("aligning");
 *   AstridPresence.speak("This is where intention becomes structure.");
 *
 *   // When node is ready:
 *   AstridPresence.setState("ready");
 *   AstridPresence.speak("Your node is home.");
 */

window.AstridPresence = (() => {
  const root = document.getElementById("astrid-presence");
  const whisper = document.getElementById("astrid-whisper");
  const whisperText = document.getElementById("astrid-whisper-text");
  let whisperTimer = null;

  const messages = {
    threshold: "I'm here.",
    return: "Welcome back.",
    witnessing: "I'm with you while this is formed.",
    aligning: "This is where intention becomes structure.",
    ready: "Your node is home."
  };

  function setState(state) {
    if (!root) return;
    root.className = `astrid-presence ${state}`;
  }

  function speak(text, ms = 4200) {
    if (!whisper || !whisperText) return;
    whisperText.textContent = text;
    whisper.hidden = false;
    clearTimeout(whisperTimer);
    whisperTimer = setTimeout(() => {
      whisper.hidden = true;
    }, ms);
  }

  function enter(state) {
    setState(state);
    // Delay the whisper slightly for natural feel
    setTimeout(() => {
      if (messages[state]) speak(messages[state]);
    }, 800);
  }

  function hide() {
    if (!root) return;
    root.style.display = "none";
  }

  function show() {
    if (!root) return;
    root.style.display = "flex";
  }

  return { setState, speak, enter, hide, show };
})();
