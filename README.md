# shell-commands-server

Small aplication to run shell commands on Node. It was created with the idea to send shell commands like 'shortcuts run ...' in a MAC device to execute apple shortcuts, but can do much more than that.

## Steps

1 - Create env file with API_KEY (generate one, like https://generate-random.org/api-key-generator) and PORT (will be 3000 if not defined)

2 - Install Node 20.10.0

3 - npm install

4 - npm run start

5 - From another device in the same network, send a POST request to /shell-command/run with a payload like:

{ shellCommand: 'your shell command', apiKey: 'your_key' }

6 - Consider using tailscale or another VPN to link your devices, so they are always at the same network.

## To keep the server open after restart

1 - pm2 save (make sure the dump file is saved)

2 - pm2 startup

3 - Copy and paste startup script that appears and run it

Check [pm2](https://github.com/Unitech/pm2) for more options
