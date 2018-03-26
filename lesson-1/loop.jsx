const loop = (times = 0, callback = null) => {
    if (callback) {
        for (let i = 0; i < times; i++) {
            callback();
        }
    } else {
        console.log('callback не задан');
    }
};

loop(3, 1);