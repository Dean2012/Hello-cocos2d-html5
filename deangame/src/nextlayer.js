/****************************************************************************

 180211016@qq.com

 @Created by Dean hua.
 @Date: 13-7-10
 @Last Revise: 13-7-15

 ****************************************************************************/
var s_pPathClose = null;
//附加的图层
ClickandMoveScene = TestScene.extend({
    ctor: function() {
        this._super(!0);
        this.addChild(new deanlayer1)
    },
    runThisTest: function() {
        cc.Director.sharedDirector().replaceScene(this)
    },
    MainMenuCallback: function(a) {
        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationPortrait);
        this._super(a)
    }
}),

deanlayer1 = cc.Layer.extend({
    size: null,
    ssp: null,
    Biga: null,
    //all layer
    yellowbackground: null,
    _m_background: null,
    ctor: function() {
        this._super();
        this.setIsTouchEnabled(!0);

        this.size = cc.Director.sharedDirector().getWinSize();

        this.yellowbackground = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0,0,0,255),this.size.width,this.size.height);
        this.yellowbackground.setPosition(cc.ccp(0,0));
        this.addChild(this.yellowbackground,1);

        //背景
//        this._m_background = cc.Sprite.spriteWithFile("Resources/Images/background2.png");
//        this._m_background.setPosition(cc.ccp(this.size.width/2,this.size.height/2));
//        this._m_background.setScale(1.3);
//        this.yellowbackground.addChild(this._m_background,0);

        this.ssp = cc.Sprite.spriteWithFile("Resources/Images/grossini.png");
        this.ssp.setPosition(cc.PointMake(20, 150));
        this.ssp.runAction(cc.JumpTo.actionWithDuration(4, cc.PointMake(300, 48), 100, 4));
        this.addChild(this.ssp,100);

        this.schedule(this.updateQuads, 0.1);

        return true;
    },

    MainMenuCallback: function() {
//        alert(1);
    },
    updateQuads: function() {
        var a = this.Biga;
        if (! (0 >= a.length)) {
            var x = a[0];
            var b = x.locationInView(x.view());
            var a = this.ssp;

            a.stopAllActions();
            a.runAction(cc.MoveTo.actionWithDuration(1, cc.PointMake(b.x, b.y)));
            var c = b.x - a.getPositionX(),
                b = b.y - a.getPositionY(),
                d = cc.RADIANS_TO_DEGREES(Math.atan(c / b));
            0 > b && (d = 0 > c ? 180 + Math.abs(d) : 180 - Math.abs(d));
            a.runAction(cc.RotateTo.actionWithDuration(1/d, d % 360))
        }
    },
    ccTouchesMoved: function(a) {
        this.Biga = a;
//        if (! (0 >= a.length)) {
//            var x = a[0];
//            var b = x.locationInView(x.view());
//            var a = this.ssp;
//
//            a.stopAllActions();
//            a.runAction(cc.MoveTo.actionWithDuration(1, cc.PointMake(b.x, b.y)));
//            var c = b.x - a.getPositionX(),
//                b = b.y - a.getPositionY(),
//                d = cc.RADIANS_TO_DEGREES(Math.atan(c / b));
//            0 > b && (d = 0 > c ? 180 + Math.abs(d) : 180 - Math.abs(d));
//            a.runAction(cc.RotateTo.actionWithDuration(1, d % 360))
//        }
    }
//    },
//    ccTouchesEnded: function(a) {
//        var _this = this;
//        var t =setInterval(function(){ _this.open(); },1000);
//    }
});

//附加的图层2
deanTest2Scene = TestScene.extend({
    ctor: function() {
        this._super(!0);
        this.addChild(new deanlayer2)
    },
    runThisTest: function() {
        cc.Director.sharedDirector().replaceScene(this)
    },
    MainMenuCallback: function(a) {
        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationPortrait);
        this._super(a)
    }
}),

deanlayer2 = cc.Layer.extend({
    size: null,
    pocker: [],
    player: [],
    num: 1,
    aaa: 0,
    btn: null,
    //all layer
    yellowbackground: null,

    ctor: function() {
        this._super();
        this.setIsTouchEnabled(!0);

        this.size = cc.Director.sharedDirector().getWinSize();

        this.yellowbackground = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0,0,0,0),this.size.width,this.size.height);
        this.yellowbackground.setPosition(cc.ccp(0,0));
        this.addChild(this.yellowbackground,0);

        for(var i = 0; i < 3 ;i++ ) {
            this.player[i] = cc.Sprite.spriteWithFile("Resources/poker/player.jpg");
            if(i == 0)
                this.player[i].setPosition(cc.PointMake(this.size.width/2, this.size.height*(1/3)));
            else if(i == 1)
                this.player[i].setPosition(cc.PointMake(this.size.width*(2/3), this.size.height*(2/3)));
            else if(i == 2)
                this.player[i].setPosition(cc.PointMake(this.size.width*(1/3), this.size.height*(2/3)));

            this.player[i].setScale(0.2);
            this.yellowbackground.addChild(this.player[i], 0);
        }


        //添加按钮实现发牌动作
        this.btn = cc.MenuItemImage.itemFromNormalImage("Resources/poker/start.png", "Resources/poker/start.png", this, this.doit),
            btnmenu = cc.Menu.menuWithItems(this.btn, null);
        btnmenu.setPosition(cc.PointZero());
        this.btn.setPosition(cc.ccp(this.size.width/2, this.size.height/2));
        this.yellowbackground.addChild(btnmenu, 1);

    },
    doit: function() {
        this.schedule(this.updateQuads, 0.5);
        this.btn.setIsVisible(false);
        this.player[0].runAction(cc.MoveTo.actionWithDuration(1,cc.PointMake(50,50)));
        this.player[1].runAction(cc.MoveTo.actionWithDuration(1,cc.PointMake(700,50)));
        this.player[2].runAction(cc.MoveTo.actionWithDuration(1,cc.PointMake(50,400)));
    },
    updateQuads: function() {

        if(this.aaa > 53)
        {
            this.unschedule(this.updateQuads)
        }

        var imgsrc = "Resources/poker/" + (this.aaa + 1) + ".gif";
        this.pocker[this.aaa] = cc.Sprite.spriteWithFile(imgsrc);
//        this.pocker[this.aaa] = cc.LabelTTF.labelWithString(this.aaa, "Arial", 15);
        this.pocker[this.aaa].setPosition(cc.PointMake(this.size.width/2,this.size.height/2));
        this.pocker[this.aaa].setScale(0.2);
        this.yellowbackground.addChild(this.pocker[this.aaa],1);

        if(this.num == 1)
        {
//            var b = cc.MoveTo.actionWithDuration(0.5, cc.PointMake(150 + this.aaa*5, 50)),
            var b = cc.JumpTo.actionWithDuration(1, cc.PointMake(150 + this.aaa*5, 50), 100, 1),
                c = cc.RotateBy.actionWithDuration(1, 360),
                d = cc.Spawn.actions(b,c);
            this.pocker[this.aaa].runAction(b);
            this.num++;
        }
        else if(this.num == 2)
        {
//            var b = cc.MoveTo.actionWithDuration(0.5, cc.PointMake(620, 50+this.aaa*5)),
            var b = cc.JumpTo.actionWithDuration(1, cc.PointMake(620, 50+this.aaa*5), 100, 1),
                c = cc.RotateBy.actionWithDuration(0.5, 360),
                d = cc.Spawn.actions(b,c);
            this.pocker[this.aaa].runAction(b);
            this.num++;
        }
        else if(this.num == 3)
        {
//            var b = cc.MoveTo.actionWithDuration(0.5, cc.PointMake(50, 450-this.aaa*5)),
            var b = cc.JumpTo.actionWithDuration(1, cc.PointMake(100, 450-this.aaa*5), 100, 1),
                c = cc.RotateBy.actionWithDuration(0.5, 360),
                d = cc.Spawn.actions(b,c);
            this.pocker[this.aaa].runAction(b);
            this.num=1;
        }
        this.aaa++;
    }
});

//3
deanTest3Scene = TestScene.extend({
    ctor: function() {
        this._super(!0);
        this.addChild(new deanlayer3)
    },
    runThisTest: function() {
        cc.Director.sharedDirector().replaceScene(this)
    },
    MainMenuCallback: function(a) {
        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationPortrait);
        this._super(a)
    }
}),

deanlayer3 = cc.Layer.extend({

    //all layer
    yellowbackground: null,
    _m_background: null,
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

    ctor: function() {
        this._super();

        this.size = cc.Director.sharedDirector().getWinSize();

        this.yellowbackground = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0,0,0,0),this.size.width,this.size.height);
        this.yellowbackground.setPosition(cc.ccp(0,0));
        this.addChild(this.yellowbackground,10);

//        this._m_background = cc.Sprite.spriteWithFile("Resources/Images/background2.png");
//        this._m_background.setPosition(cc.ccp(this.size.width/2,this.size.height/2));
//        this.yellowbackground.addChild(this._m_background,0);

        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationLandscapeRight);
        var c = cc.Director.sharedDirector().getWinSize();

        this.layerSelf = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0,0,0,0),c.width,c.height);
        this.addChild(this.layerSelf,0);

        this.text = cc.LabelTTF.labelWithString("Allenice", "Arial", 40);
        this.text.setPosition(cc.ccp(c.width / 2, c.height - 40));
        this.layerSelf.addChild(this.text, 0);
        this.text.runAction(cc.RepeatForever.actionWithAction(cc.RotateBy.actionWithDuration(60, 360)));

        var b = cc.ProgressTo.actionWithDuration(2, 100),
        d = cc.ProgressTimer.progressWithFile("Resources/Images/background2.png");
        d.setScale(0.2);
        d.setType(cc.kCCProgressTimerTypeVerticalBarBT);
        this.yellowbackground.addChild(d,0);
        d.setPosition(cc.PointMake(100, this.size.height / 2));
        d.runAction(cc.RepeatForever.actionWithAction(b));

        return true;
    }
//    ,
//    GetStock:function() {
//
//    }
})
