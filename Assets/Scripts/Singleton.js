#pragma strict

/* Singleton pattern
 *
 * GameObjects with this script attached won't be loaded more than once in a
 * scene. Handy with `DontDestroyOnLoad()`.
 */

class Singleton extends MonoBehaviour {
  private var _instance : Singleton;

  function Awake() {
    if (_instance) {
      DestroyImmediate(gameObject);
    } else {
      DontDestroyOnLoad(gameObject);
      _instance = this;
    }
  }
}
