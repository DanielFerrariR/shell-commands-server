# shell-commands-server

Node server to send shell commands to the running device. Created as a free alternative to Pushcut for macOS.

## Steps

1 - Create env file with API_KEY (generate one, like https://generate-random.org/api-key-generator) and PORT (will be 3000 if not defined)

2 - Install Node 20.10.0

3 - npm install

4 - npm run start

5 - From another device in the same network, send a POST request to http://localhost:3000/shell-command/run with a payload like:

{ shellCommand: 'your shell command', apiKey: 'your_key' }

6 - Consider using tailscale or another VPN to link your devices, so they are always at the same network.

## To keep the server open after restart

1 - pm2 save (make sure the dump file is saved)

2 - pm2 startup

3 - Copy and paste startup script that appears and run it

Check [pm2](https://github.com/Unitech/pm2) for more options
