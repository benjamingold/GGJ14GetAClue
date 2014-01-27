twine-gang
==========

Server and client for cross-browser, cross-device Twine game control and synchronization.

Add your Twine `index.html` to the project root, then start the server with
`node tg_server.js`. Then visit `http://localhost:3000`.

Make sure your Twine HTML file loads `/socket.io/socket.io.js`, 
`/client/tg_client.js`, and `/client/twine_bindings.js`. You may add additional
scripts and assets in the `assets/` directory.

HOWTO FOR GET A CLUE SERVER
===========================

If building Twine story and Unity webplayer from scratch:

1. Build web player.
2. Reference in Twine as `<<unity_load assets/whatever.unity3d>>`.
3. Put web player in /server/assets/.
4. Build Twine `index.html`.
5. Put `index.html` in /.
6. Follow instructions below.

If using the provided Twine/Unity assets in this package:

6. Run `npm install` to fetch node packages for server.
7. Run `node tg_server.js`.
8. Visit `http://localhost:3000`.

When your browser connects to the server, it will print its network "room name"
to the javascript console. Visit `http://localhost:3000/?room=<room name>` to
control the game from another device. (Requires websockets support; try Firefox
Mobile on older Android devices.)
