/****************************************************************************

 180211016@qq.com

 @Created by Dean hua.
 @Date: 13-7-

 ****************************************************************************/

var Helloworld = cc.Layer.extend({
    bIsMouseDown:false,
    helloImg:null,
    helloLabel:null,
    circle:null,
    pSprite:null,

    init:function () {

        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.Director.sharedDirector().getWinSize();

        // add a "close" icon to exit the progress. it's an autorelease object
        // 按钮精灵
        var pCloseItem = cc.MenuItemImage.itemFromNormalImage(
            "Resources/CloseNormal.png",
            "Resources/CloseSelected.png",
            this,
            function () {
                history.go(-1);
            }
        );
        pCloseItem.setAnchorPoint(new cc.Point(0.5,0.5));

        var pMenu = cc.Menu.menuWithItems(pCloseItem, null);
        pMenu.setPosition( cc.PointZero() );
        this.addChild(pMenu, 1);
        pCloseItem.setPosition(new cc.Point(size.width -20 , 20));

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        this.helloLabel = cc.LabelTTF.labelWithString("Hello World", "Arial", 38);
        // position the label on the center of the screen
        this.helloLabel.setPosition(cc.ccp(size.width / 2, size.height - 40));
        // add the label as a child to this layer
        this.addChild(this.helloLabel, 5);

        var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);

        // add "HelloWorld" splash screen"
        this.pSprite = cc.Sprite.spriteWithFile("Resources/HelloWorld.png");
        this.pSprite.setAnchorPoint(cc.ccp(0.5, 0.5));
        this.pSprite.setPosition(cc.ccp(size.width / 2, size.height / 2));

        lazyLayer.addChild(this.pSprite, 0);

        return true;
    }

});

Helloworld.scene = function () {
    // 'scene' is an autorelease object
    var scene = cc.Scene.node();

    // 'layer' is an autorelease object
    var layer = this.node();
    scene.addChild(layer);
    return scene;
};

// implement the "static node()" method manually
Helloworld.node = function () {
    var pRet = new Helloworld();

    // Init the helloworld display layer.
    if (pRet && pRet.init()) {
        return pRet;
    }

    return null;
};




