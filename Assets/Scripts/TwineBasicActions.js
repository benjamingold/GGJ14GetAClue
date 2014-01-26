#pragma strict

/* Twine Basic Actions
 *
 * Twine behavior script. Receives messages from the Unity API inside the
 * sugarcaneUnity Twine target. Attach to a singleton game object called
 * `TwineScript` in each scene.
 */

private var _nextPassage = '';

function Start() {
  Debug.Log('foo|bar'.Split("|"[0])[1]);
}

// Change scenes
function NewRoom(passageName : String) {
  var parts = passageName.Split("|" [0]);
  if (parts.length > 1) {
    _nextPassage = parts[1];
    var sceneName = parts[0];
    Application.LoadLevel(sceneName);
  } else {
    Debug.Log('Failed to split: ' + passageName);
  }
}

function OnLevelWasLoaded(_level) {
  Twine.loadPassage(_nextPassage);
  _nextPassage = '';
}
