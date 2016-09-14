module.exports = {
    "dev": {
        "base": "../",
        "sync": "../public/",
        "jsFile" : "../tsbuild/app.js",
        "js": "../public/javascripts/"
    },
    "prod": {
        "base": "../dist/",
        "js": "../dist/"
    },
    "doc": {
        "name" : "Doc name - Change it in /bin/gulp/configs/config.js",
        "dest" : "../doc/",
        "tsFiles" : ["../app/**/*.ts", "../app/**/*.tsx"],
        "readme" : "../readme.md"
    }
};
