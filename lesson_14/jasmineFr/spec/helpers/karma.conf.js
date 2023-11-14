module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-jasmine-html-reporter')
        ],
        client: {
            jasmine: {
                seed: 4321
            }
        },
        reporters: ['kjhtml']
    });
};