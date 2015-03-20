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
    server: {
        port: 3000
    },
    processing: {
        totalAttempts: 2,
        playGreeting: true,
        playBeepBeforeRecording: false
    },
    asterisk: {
        sounds: {
            onErrorBeforeFinish: 'invalid',
            onErrorBeforeRepeat: 'invalid',
            greeting: 'tt-monkeysintro'
        },
        recognitionDialplanVars: {
            result: 'RECOGNITION_RESULT',
            channel: 'RECOGNITION_CHANNEL'
        }
    },
    record: {
        directory: '/tmp',
        type: 'wav',
        duration: 2,
    },
    recognize: {
        directory: '/tmp',
        type: 'google',  // ['yandex', 'google']
        options: {
            developer_key: 'AIzaSyCasG272lrvx2e7FgbjTGFp9X7kHQFk71Y'
        }
    },
    lookup: {
        type: 'file',  // ['file', 'mongodb', 'mysql']
        options: {
            dataFile: 'data/peernames.json'
        }
    },
    logger: {
        console: {
            colorize: true
        },
        syslog: {
            host: 'localhost'
        },
        file: {
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
exten=1000,1,AGI(agi://localhost:3000)
exten=1000,n,GotoIf($[${RECOGNITION_RESULT}=SUCCESS]?:default,1000,4)
exten=1000,n,Dial(${RECOGNITION_CHANNEL})
`````


## Step 4. Run app ##

> node app.js

And now make call to 1000. Work? If not, view logs.



More info about voicer http://github.com/antirek/voicer



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