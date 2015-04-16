module.exports = {
    agi: {
        port: 3000
    },
    web: {
        port: 3100
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
            greeting: 'beep'
        },
        recognitionDialplanVars: {
            result: 'RECOGNITION_RESULT',
            target: 'RECOGNITION_TARGET'
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
};