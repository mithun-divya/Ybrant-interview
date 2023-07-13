const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.7.73.217:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'NodeJSApplication-Sample',
	    'sonar.projectKey':'NodeJsApplication',
	    'sonar.login': 'squ_eda6844c1b2cd3a68a529098c81bc58ab08863ae',
            'sonar.projectVersion':'1.0',
	          'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
