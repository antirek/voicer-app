module.exports = {
    agi: {
        port: 3000
    },
    web: {
        port: 3100,
        auth: true,
        username: 'vasya',
        password: 'password',
        realm: 'My company'
    },
    processing: {
        totalAttempts: 2,
        playGreeting: true,
        playBeepBeforeRecording: false   //use system beep
    },
    asterisk: {
        sounds: {
            onErrorBeforeFinish: 'invalid',
            onErrorBeforeRepeat: 'invalid',
            greeting: 'beep'
        },
        recognitionDialplanVars: {
            status: 'RECOGNITION_RESULT',
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
        type: 'witai',    // ['yandex', 'google', 'witai']
        options: {
<<<<<<< HEAD
            developer_key: '6SQV3DEGQWIXW3R2EDFUMPQCVGOEIBCR'
=======
            developer_key: 'AIzaSyBmdtN0y0DwFnIIZgTJyBXLP_M8nsRBcDw'
>>>>>>> d367e315e4a308920a05fe81071e47356561c841
        }
    },
    lookup: {
        type: 'file',
        options: {
            dataFile: 'data/peernames.json'
        }
    },
    logger: {
        console: {
            colorize: true
<<<<<<< HEAD
        },
=======
        },        
>>>>>>> d367e315e4a308920a05fe81071e47356561c841
        file: {
            filename: '/var/log/voicer.log',
            json: false
        }
    }
};