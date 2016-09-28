module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "amd":true
    },
    "globals": {
        "requirejs": true,
        "it": false,
        "describe": false,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "requirejs"
    ],
    "rules": {
       "requirejs/no-invalid-define": 2,
       "requirejs/no-multiple-define": 2,
       "requirejs/no-named-define": 2,
       "requirejs/no-object-define": 1,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
