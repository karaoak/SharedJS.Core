# SharedJS Core JS library
CommonJS Mocha testable shared JavaScript library. This project is a dependency for the following projects:

* [Hybrid-Web](https://github.com/karaoak/SharedJS.hybrid-web)
* [Hybrid-App](https://github.com/karaoak/SharedJS.hybrid-app)
	
###Setup insctructions
Setting up this project would require the following:

	$ npm install
	
####proxy shim
Apart from that to load are dependencies via node require, we need a shim for Mocha testing.
To achieve this, we made a very cheap shim leveraging the way node uses node_modules as a search path when searching for modules. For this reason in node_modules we create a custom proxy.js which serves as a proxy of its own for our local project utils/proxy.js module.
We explicitly added this file to git while ignoring everything else inside the node_modules folder.

![image](./documentation/node_modules-proxy-shim.png)


###Test instructions
Either use the repository grunt tasks to test the library or use.

    $ mocha
    
    
### Documentation
Please find a list of the main libraries and modules used in this project:

* [CommonJS](http://wiki.commonjs.org/wiki/CommonJS)
* [Mocha](http://visionmedia.github.io/mocha/)
