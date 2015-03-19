# voicer-app

Voicer-app is app for fast start using #npm **voicer**

Concept
=======

Voicer-app use npm voicer like a library. You can use this app, clone it, rewrite code, change config and this app is your app. When new wersion of voicer coming you only change deps in package.json.


Prepare
=======


## Step 1. Install it ##

> git clone https://github.com/antirek/voicer-app.git
> cd voicer-app
> npm install

## Step 2. Configure config.js ##
`````
{
    port: 3000,           //server listen port
    totalAttempts: 2,     //total attempts of recognition each call
    record: {
        directory: '/tmp',  //directory for record
        type: 'wav',        //extension of record file
        duration: 2,        //duration of record file
    },
    recognize: {
        directory: '/tmp',  //directory of record for app
        type: 'google',  // ['yandex', 'google']
        options: {
            developer_key: 'AIzaSyBADnl17W926EkbgSJ1yJ0RtpwpJbELxxc'
        }
    },
    lookup: {
        type: 'file',  // ['file', 'mongodb', 'mysql']
        options: {
            dataFile: 'data/peernames.json'
        }
    },
    logger: {
        console: {             //use console
            colorize: true
        },
        syslog: {              //use syslog
            host: 'localhost'
        },
        file: {                //use file
            filename: '/var/log/voicer.log',
            json: false
        }
    }
}
`````
## Step 3. Configure Asterisk ##

Write simple dialplan

`````
[default]
exten = > 1000,1,AGI(agi://localhost:3000)
`````

## Step 4. Run app ##

> node app.js



Using PM2
=========

## Install PM2 ##

> npm install pm2 -g


## Start voicer-app ##

from voicer directory run command

> pm2 start app.js --name "voicer-app"

check that app is run

> pm2 list

for restart use

> pm2 restart voicer-app

Use PM2, it's cool! 



Bugs?
=====

Olo-lo! Send it to me now!