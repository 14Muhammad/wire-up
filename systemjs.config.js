(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'app',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular/material':          'node_modules/@angular/material',
        'ng2-bootstrap':              'node_modules/ng2-bootstrap',
        'rxjs':                       'node_modules/rxjs',
        'moment':                     'node_modules/moment/moment.js',
        'angular2-highcharts':        'node_modules/angular2-highcharts/dist',
        'highcharts/highstock.src':   'node_modules/highcharts/highstock.src.js',
        'devextreme-angular2':        'node_modules/devextreme-angular2'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'ng2-bootstrap':              { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'angular2-highcharts' :       { main: 'index',format: 'cjs', defaultExtension: 'js' },
        'devextreme-angular2':        { main: 'index.js', defaultExtension: 'js' },
        '@angular/material':          { format: 'cjs', main: 'material.umd.js' }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Angular Material 2 Packages to load.
    var _materialPackages = [
        'core', 'toolbar', 'button', 'button-toggle','card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
        'progress-circle', 'radio', 'sidenav', 'grid-list', 'tabs', 'slide-toggle','tooltip','slider','menu'
    ];
    _materialPackages.forEach(function(item) {
        // All Material 2 components are prefixed with  @angular2-material and use
        // the components name as entry point.
        packages['@angular2-material/' + item] = { main: item ,  defaultExtension: 'js'};
    });

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
