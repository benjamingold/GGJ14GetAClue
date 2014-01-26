/* Twine API
 *
 * Forwards calls to javascript on the page hosting the Unity webplayer. Expects
 * the Twine object to be defined (as in the sugarcaneUnity Twine target).
 */

class Twine {
  static function loadPassage(passageName : String) {
    Application.ExternalCall('Twine.loadPassage', passageName);
  }
}
