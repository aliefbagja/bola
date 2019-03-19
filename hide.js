var cssFile = document.createElement('link');
cssFile.type = 'text/css';
cssFile.rel = 'stylesheet';
cssFile.href = '/test.css';
cssFile.media = 'screen';
cssFile.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssFile); 
