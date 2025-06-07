# shell-commands-server

Small aplication to run shell commands on Node.

## Steps

1 - Create env file with API_KEY (generate one) and PORT (e.g. 3000)

2 - Install Node 20.10.0

3 - npm install

4 - npm run start

## To keep the server open after restart

1 - pm2 save (make sure the dump file is saved)

2 - pm2 startup

3 - Copy and paste startup script that appears and run it

Check [pm2](https://github.com/Unitech/pm2) for more options
