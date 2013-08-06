/****************************************************************************

 180211016@qq.com

 @Created by Dean hua.
 @Date: 13-7-9

 ****************************************************************************/

var cc = cc = cc || {};
//Cocos2d directory
cc.Dir = './';//in relate to the html file or use absolute
cc.loadQue = [];//the load que which js files are loaded
cc.COCOS2D_DEBUG = 2;
cc._DEBUG = 1;
cc._IS_RETINA_DISPLAY_SUPPORTED = 0;
//html5 selector method
cc.$ = function (x) {
    return document.querySelector(x);
};
cc.$new = function (x) {
    return document.createElement(x);
};
//function to load files into html
/*
 cc.loadjs = function(filename)
 {
 //get a ref to header
 var head = cc.$('head');
 var insert = document.createElement('script');
 insert.setAttribute('src',cc.Dir+filename);
 head.appendChild(insert);
 };*/

cc.loadjs = function (filename) {
    //add the file to the que
    var script = cc.$new('script');
    script.src = cc.Dir + filename;
    script.order = cc.loadQue.length;
    cc.loadQue.push(script);


    script.onload = function () {
        //file have finished loading,
        //if there is more file to load, we should put the next file on the head
        if (this.order + 1 < cc.loadQue.length) {
            cc.$('head').appendChild(cc.loadQue[this.order + 1]);
            //console.log(this.order);
        }
        else {
            cc.setup("gameCanvas");
            //we are ready to run the game
            cc.Loader.shareLoader().onloading = function () {
                cc.LoaderScene.shareLoaderScene().draw();
            };
            cc.Loader.shareLoader().onload = function () {
                cc.AppController.shareAppController().didFinishLaunchingWithOptions();
            };
            //preload ressources
            cc.Loader.shareLoader().preload([
    //          {type:"", src:"Resources/HelloWorld.png"},
    //          {type:"image", src:"Resources/CloseNormal.png"},
    //          {type:"image", src:"Resources/CloseSelected.png"}
            ]);
        }
    };
    if (script.order === 0)//if the first file to load, then we put it on the head
    {
        cc.$('head').appendChild(script);
    }
};

// Engine files,
// They can be packeted to a single file using the Ant tool.
// The shell files and Closure Compiler which Ant needs are provided in tools folder and cocos2d folder.
cc.loadjs('../lib/cocos2d-html5-alpha-canvasmenu-min.js');

// User files
cc.loadjs('Classes/AppDelegate.js');//17
cc.loadjs('testament.js');//7.9 Dean testPage
cc.loadjs('src/nextlayer.js');//19