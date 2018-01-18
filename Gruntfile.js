var grunt = require("grunt");
grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            version: '1.0.0',
            appDirectory: './MyApp-win32-x64',
            authors: 'Andy.',
            exe: 'MyApp.exe',
            description: "Andy first setupexe",
            iconUrl: 'D:/Git_project/installertest/myapp.ico',
            setupIcon: 'D:/Git_project/installertest/myapp.ico'
        }
    }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ["create-windows-installer"]);