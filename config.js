System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "npm:*": "node_modules/*"
    },
    map: {
        "angular": "npm:angular/angular.js",
        "typescript": "npm:typescript/lib/typescript.js",
        "angular-ui-bootstrap": "npm:angular-ui-bootstrap/",
        "moment": "npm:moment"
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    },
    packages: {
        "angular-ui-bootstrap": { main: "index.js", defaultExtension: "js" },
        "moment": { main: "moment.js", defaultExtension: "js" }
    }
});