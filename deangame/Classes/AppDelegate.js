/****************************************************************************

 180211016@qq.com

 @Created by Dean hua.
 @Date: 13-7-9

 ****************************************************************************/
var cc = cc = cc || {};

/**
 @brief    The cocos2d Application.

 The reason for implement as private inheritance is to hide some interface call by CCDirector.
 */
cc.AppDelegate = cc.Application.extend({
    ctor:function () {
        this._super();
    },
    /**
     @brief    Implement for initialize OpenGL instance, set source path, etc...
     */
    initInstance:function () {
        return true;
    },

    /**
     @brief    Implement CCDirector and CCScene init code here.
     @return true    Initialize success, app continue.
     @return false   Initialize failed, app terminate.
     */
    applicationDidFinishLaunching:function () {
        // initialize director
        var pDirector = cc.Director.sharedDirector();

        // enable High Resource Mode(2x, such as iphone4) and maintains low resource on other devices.
//     pDirector->enableRetinaDisplay(true);

        // turn on display FPS
        pDirector.setDisplayFPS(false);

        //pDirector->setDeviceOrientation(kCCDeviceOrientationLandscapeLeft);

        // set FPS. the default value is 1.0/60 if you don't call this
        pDirector.setAnimationInterval(1.0 / 60);

        // create a scene. it's an autorelease object
        var pScene = xfd.scene();

        // run
        pDirector.runWithScene(pScene);

        return true;
    },

    /**
     @brief  The function be called when the application enter background
     @param  the pointer of the application
     */
    applicationDidEnterBackground:function () {
        cc.Director.sharedDirector().pause();
    },

    /**
     @brief  The function be called when the application enter foreground
     @param  the pointer of the application
     */
    applicationWillEnterForeground:function () {
        cc.Director.sharedDirector().resume();
    }
});