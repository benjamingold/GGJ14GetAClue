twine-gang
==========

Server and client for cross-browser, cross-device Twine game control and synchronization.

Add your Twine `index.html` to the project root, then start the server with
`node tg_server.js`. Then visit `http://localhost:3000`.

Make sure your Twine HTML file loads `/socket.io/socket.io.js`, 
`/client/tg_client.js`, and `/client/twine_bindings.js`. You may add additional
scripts and assets in the `assets/` directory.

HOWTO FOR GET A CLUE
====================

1. Build web player.
2. Reference in Twine as `<<unity_load assets/whatever.unity3d>>`.
3. Put web player in /server/assets/.
4. Build Twine `index.html`.
5. Put `index.html` in /.
6. Run `node tg_server.js`.
7. Visit `http://localhost:3000`.
