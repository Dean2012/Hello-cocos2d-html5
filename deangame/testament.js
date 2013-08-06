/****************************************************************************

 180211016@qq.com

 @Created by Dean hua.
 @Date: 13-7-10
 @Last Revise: 13-7-15

 ****************************************************************************/
var cc = cc = cc || {},
TestScene = cc.Scene.extend({
    _portrait: !1,
    ctor: function(a) {
        this._super();
        (this._portrait = a)
         && cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationLandscapeRight);
        //设置横屏
//        this.init()

    },
    onEnter: function() {
        this._super();
        var a = cc.LabelTTF.labelWithString("back", "Arial", 20),
            a = cc.MenuItemLabel.itemWithLabel(a, this, this.MainMenuCallback),
            b = cc.Menu.menuWithItems(a, null),
            c = cc.Director.sharedDirector().getWinSize();
        b.setPosition(cc.PointZero());
        a.setPosition(cc.PointMake(c.width - 50, 25));
        this.addChild(b, 1);
    },
    runThisTest: function() {},
    MainMenuCallback: function() {
        var a = cc.Scene.node(),
            b = new xfd;
            a.addChild(b);
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
LINE_SPACE = 60,
s_tCurPos = cc.PointZero(),
g_aTestNames = "ClickandMove deanTest2 deanTest3 deanTest4 deanTest5 deanTest6 deanTest7 deanTest8".split(" "),
xfd = cc.Layer.extend({
    text: null,
    num: 0,
    yellow: null,
    size: null,
    istext: true,
    _m_pItemMenu: null,
    _m_tBeginPos: cc.PointZero(),
    bIsMouseDown: !1,
    bHasInit: true,
    // 图层
    layeryellow: null,
    layerSelf:null,
    // websocket
    websocket:null,
    ctor: function() {
//        this.size = cc.Director.sharedDirector().getWinSize();
//        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationLandscapeRight);
//
//        this.layerSelf = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0,0,0,0),this.size.width,this.size.height);
//        this.addChild(this.layerSelf,0);
//
//        var menuLabel1=cc.LabelTTF.labelWithString("menuItem1", "Arial", 20);
//        var menuItem1=cc.MenuItemLabel.itemWithLabel(menuLabel1,this,this.menuCallback);
//        var menu=cc.Menu.menuWithItems(menuItem1,null);
//        this.layerSelf.addChild(menu);
//        menuItem1.setPosition(cc.ccp(0,0));

        //websocket 测试
//        window.WebSocket = window.WebSocket || window.MozWebSocket;
//        if (!window.WebSocket){
//            alert("WebSocket not supported by this browser");
//            return;
//        }

        this.websocket = new WebSocket("ws://localhost/test.php");

        this.websocket.onmessage = function(evt){
            var data = evt.data;
         }

        //Resources/HelloWorld.png
//        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationLandscapeRight);
        var c = cc.Director.sharedDirector().getWinSize();

        this.layerSelf = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0,0,0,0),c.width,c.height);
        this.addChild(this.layerSelf,0);

        this.text = cc.LabelTTF.labelWithString("Allenice", "Arial", 40);
        this.text.setPosition(cc.ccp(c.width / 2, c.height - 40));
        this.layerSelf.addChild(this.text, 0);
        this.text.runAction(cc.RepeatForever.actionWithAction(cc.RotateBy.actionWithDuration(60, 360)));

        this._m_pItemMenu = cc.Menu.menuWithItems(null);
        for(var a= 0,d = g_aTestNames.length ; a<d ; a++) {
            var e = cc.LabelTTF.labelWithString(g_aTestNames[a], "Abberancy", 24),
                e = cc.MenuItemLabel.itemWithLabel(e, this, this.menuCallback);
            this._m_pItemMenu.addChild(e, a + 1E4);
            e.setPosition(cc.PointMake(c.width / 2, c.height - (a + 2) * LINE_SPACE));
        }

        this._m_pItemMenu.setContentSize(cc.SizeMake(c.width, (g_aTestNames.length + 2) * LINE_SPACE));
        this._m_pItemMenu.setPosition(s_tCurPos);
        this.setIsTouchEnabled(!0);
        this.addChild(this._m_pItemMenu);

        return true;
    },

    init: function () {

        return true;
    },

    menuCallback:function (a) {
//        var a =  new deanTestScene;
//        a.runThisTest();
        a = a.getZOrder() - 1E4;
        (a = new window[g_aTestNames[a] + "Scene"]);
        a.runThisTest();
    },
    ccTouchesBegan: function(a) {
        this.bIsMouseDown || (this._m_tBeginPos = a[0].locationInView(0).y);
        this.bIsMouseDown = !0
    },
    ccTouchesMoved: function(a) {
        if (this.bIsMouseDown) {
            var a = a[0].locationInView(0).y,
                b = a - this._m_tBeginPos,
                c = cc.ccp(this._m_pItemMenu.getPosition().x, this._m_pItemMenu.getPosition().y),
                b = cc.ccp(c.x, c.y + b),
                c = cc.Director.sharedDirector().getWinSize();
            0 > b.y ? this._m_pItemMenu.setPosition(cc.PointZero()) : b.y > (g_aTestNames.length + 2) * LINE_SPACE - c.height ? this._m_pItemMenu.setPosition(cc.ccp(0, (g_aTestNames.length + 2) * LINE_SPACE - c.height)) : (this._m_pItemMenu.setPosition(b), this._m_tBeginPos = cc.ccp(0, a).y, s_tCurPos = b)
        }
    },
    ccTouchesEnded: function() {
        this.bIsMouseDown = !1
    }
});

xfd.node = function () {
    var allenice = new xfd();

    if (allenice && allenice.init()) {
        return allenice;
    }

    return null;
};

xfd.scene = function () {
    var scene = cc.Scene.node();

    var layer = this.node();

    scene.addChild(layer);

    return scene;
};