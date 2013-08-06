var cc = cc = cc || {};
cc.AppDelegate = cc.Application.extend({
    ctor: function() {
        this._super()
    },
    initInstance: function() {
        return ! 0
    },
    applicationDidFinishLaunching: function() {
        var a = cc.Director.sharedDirector();
        a.setDisplayFPS(!0);
        a.setAnimationInterval(1 / 60);
        var b = new TestController;
        a.runWithScene(b);
        return ! 0
    },
    applicationDidEnterBackground: function() {
        cc.Director.sharedDirector().pause()
    },
    applicationWillEnterForeground: function() {
        cc.Director.sharedDirector().resume()
    }
});
var cc = cc = cc || {},
TestScene = cc.Scene.extend({
    _portrait: !1,
    ctor: function(a) {
        this._super(); (this._portrait = a) && cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationLandscapeRight);
        this.init()
    },
    onEnter: function() {
        this._super();
        var a = cc.LabelTTF.labelWithString("MainMenu", "Arial", 20),
        a = cc.MenuItemLabel.itemWithLabel(a, this, this.MainMenuCallback),
        b = cc.Menu.menuWithItems(a, null),
        c = cc.Director.sharedDirector().getWinSize();
        b.setPosition(cc.PointZero());
        a.setPosition(cc.PointMake(c.width - 50, 25));
        this.addChild(b, 1)
    },
    runThisTest: function() {},
    MainMenuCallback: function() {
        var a = cc.Scene.node(),
        b = new TestController;
        a.addChild(b);
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
LINE_SPACE = 40,
s_pPathClose = null,
s_tCurPos = cc.PointZero(),
TestController = cc.Layer.extend({
    _m_pItemMenu: null,
    _m_tBeginPos: cc.PointZero(),
    bIsMouseDown: !1,
    ctor: function() {
        s_pPathClose || (s_pPathClose = cc.TextureCache.sharedTextureCache().textureForKey("Resources/CloseNormal.png"));
        var a = cc.MenuItemImage.itemFromNormalImage(s_pPathClose, s_pPathClose, this, this.closeCallback),
        b = cc.Menu.menuWithItems(a, null),
        c = cc.Director.sharedDirector().getWinSize();
        b.setPosition(cc.PointZero());
        a.setPosition(cc.PointMake(c.width - 30, c.height - 30));
        this._m_pItemMenu = cc.Menu.menuWithItems(null);
        for (var a = 0,
        d = g_aTestNames.length; a < d; a++) {
            var e = cc.LabelTTF.labelWithString(g_aTestNames[a], "Arial", 24),
            e = cc.MenuItemLabel.itemWithLabel(e, this, this.menuCallback);
            this._m_pItemMenu.addChild(e, a + 1E4);
            e.setPosition(cc.PointMake(c.width / 2, c.height - (a + 1) * LINE_SPACE))
        }
        this._m_pItemMenu.setContentSize(cc.SizeMake(c.width, (g_aTestNames.length + 1) * LINE_SPACE));
        this._m_pItemMenu.setPosition(s_tCurPos);
        this.setIsTouchEnabled(!0);
        this.addChild(this._m_pItemMenu);
        this.addChild(b, 1)
    },
    menuCallback: function(a) {
        a = a.getZOrder() - 1E4; (a = new window[g_aTestNames[a] + "Scene"]) && a.runThisTest()
    },
    closeCallback: function() {
        history.go( - 1)
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
            0 > b.y ? this._m_pItemMenu.setPosition(cc.PointZero()) : b.y > (g_aTestNames.length + 1) * LINE_SPACE - c.height ? this._m_pItemMenu.setPosition(cc.ccp(0, (g_aTestNames.length + 1) * LINE_SPACE - c.height)) : (this._m_pItemMenu.setPosition(b), this._m_tBeginPos = cc.ccp(0, a).y, s_tCurPos = b)
        }
    },
    ccTouchesEnded: function() {
        this.bIsMouseDown = !1
    }
}),
g_aTestNames = "ActionManagerTest ActionsTest Box2DTest ClickAndMoveTest CocosDenshionTest CocosNodeTest CurrentLanguageTest DirectorTest DrawPrimitivesTest EaseActionsTest FontTest IntervalTest LabelTest LayerTest MenuTest ParallaxTest ParticleTest PerformanceTest ProgressActionsTest RotateWorldTest SceneTest SchedulerTest SpriteTest TextInputTest TextureCacheTest TileMapTest TouchesTest TransitionsTest".split(" ");
var s_pPathGrossini = "Resources/Images/grossini.png",
s_pPathSister1 = "Resources/Images/grossinis_sister1.png",
s_pPathSister2 = "Resources/Images/grossinis_sister2.png",
s_pPathB1 = "Resources/Images/b1.png",
s_pPathB2 = "Resources/Images/b2.png",
s_pPathR1 = "Resources/Images/r1.png",
s_pPathR2 = "Resources/Images/r2.png",
s_pPathF1 = "Resources/Images/f1.png",
s_pPathF2 = "Resources/Images/f2.png",
s_pPathBlock = "Resources/Images/blocks.png",
s_back = "Resources/Images/background.png",
s_back1 = "Resources/Images/background1.png",
s_back2 = "Resources/Images/background2.png",
s_back3 = "Resources/Images/s_back3.png",
s_stars1 = "Resources/Images/stars.png",
s_stars2 = "Resources/Images/stars2.png",
s_fire = "Resources/Images/fire.png",
s_snow = "Resources/Images/snow.png",
s_streak = "Resources/Images/streak.png",
s_PlayNormal = "Resources/Images/btn-play-normal.png",
s_PlaySelect = "Resources/Images/btn-play-selected.png",
s_AboutNormal = "Resources/Images/btn-about-normal.png",
s_AboutSelect = "Resources/Images/btn-about-selected.png",
s_HighNormal = "Resources/Images/btn-highscores-normal.png",
s_HighSelect = "Resources/Images/btn-highscores-selected.png",
s_Ball = "Resources/Images/ball.png",
s_Paddle = "Resources/Images/paddle.png",
s_pPathClose = "Resources/Images/close.png",
s_MenuItem = "Resources/Images/menuitemsprite.png",
s_ShapeModeMenuItem = "Resources/Images/shapemode.png",
s_TextureModeMenuItem = "Resources/Images/texturemode.png",
s_SendScore = "Resources/Images/SendScoreButton.png",
s_PressSendScore = "Resources/Images/SendScoreButtonPressed.png",
s_Power = "Resources/Images/powered.png",
s_AtlasTest = "Resources/Images/atlastest.png",
s_stars2Grayscale = "Resources/Images/stars2-grayscale.png",
s_starsGrayscale = "Resources/Images/stars-grayscale.png",
s_grossini_dance_atlas = "Resources/Images/grossini_dance_atlas.png",
s_piece = "Resources/Images/piece.png",
s_grossini_dance_atlas_mono = "Resources/Images/grossini_dance_atlas-mono.png",
s_grossini = "Resources/animations/grossini.png",
s_grossini_gray = "Resources/animations/grossini_gray.png",
s_grossini_blue = "Resources/animations/grossini_blue.png",
s_grossini_aliases = "Resources/animations/grossini-aliases.png",
s_dragon_animation = "Resources/animations/dragon_animation.png",
s_ghosts = "Resources/animations/ghosts.png",
s_grossini_family = "Resources/animations/grossini_family.png",
s_BoilingFoamPlist = "Resources/Images/BoilingFoam.plist",
s_grossiniPlist = "Resources/animations/grossini.plist",
s_grossini_grayPlist = "Resources/animations/grossini_gray.plist",
s_grossini_bluePlist = "Resources/animations/grossini_blue.plist",
s_grossini_aliasesPlist = "Resources/animations/grossini-aliases.plist",
s_ghostsPlist = "Resources/animations/ghosts.plist",
s_grossini_familyPlist = "Resources/animations/grossini_family.plist",
s_HelloWorld = "Resources/Images/HelloWorld.png",
s_GrossiniDance01 = "Resources/Images/grossini_dance_01.png",
s_GrossiniDance02 = "Resources/Images/grossini_dance_02.png",
s_GrossiniDance03 = "Resources/Images/grossini_dance_03.png",
s_GrossiniDance04 = "Resources/Images/grossini_dance_04.png",
s_GrossiniDance05 = "Resources/Images/grossini_dance_05.png",
s_GrossiniDance06 = "Resources/Images/grossini_dance_06.png",
s_GrossiniDance07 = "Resources/Images/grossini_dance_07.png",
s_GrossiniDance08 = "Resources/Images/grossini_dance_08.png",
s_GrossiniDance09 = "Resources/Images/grossini_dance_09.png",
s_GrossiniDance10 = "Resources/Images/grossini_dance_10.png",
s_GrossiniDance11 = "Resources/Images/grossini_dance_11.png",
s_GrossiniDance12 = "Resources/Images/grossini_dance_12.png",
s_GrossiniDance13 = "Resources/Images/grossini_dance_13.png",
s_GrossiniDance14 = "Resources/Images/grossini_dance_14.png",
s_TilesPng = "Resources/TileMaps/tiles.png",
s_LevelMapTga = "Resources/TileMaps/levelmap.tga",
s_fixedOrthoTest2Png = "Resources/TileMaps/fixed-ortho-test2.png",
s_hexaTilesPng = "Resources/TileMaps/hexa-tiles.png",
s_isoTestPng = "Resources/TileMaps/iso-test.png",
s_isoTest2Png = "Resources/TileMaps/iso-test2.png",
s_isoPng = "Resources/TileMaps/iso.png",
s_orthoTest1BwPng = "Resources/TileMaps/ortho-test1_bw.png",
s_orthoTest1Png = "Resources/TileMaps/ortho-test1.png",
s_tilesHdPng = "Resources/TileMaps/tiles-hd.png",
s_tmwDesertSpacingHdPng = "Resources/TileMaps/tmw_desert_spacing-hd.png",
s_tmwDesertSpacingPng = "Resources/TileMaps/tmw_desert_spacing.png",
s_fnTuffyBoldItalicCharmapPng = "Resources/fonts/tuffy_bold_italic-charmap.png",
s_fpsImages = "Resources/fonts/fps_images.png",
g_ressources = [{
    type: "image",
    src: s_pPathGrossini
},
{
    type: "image",
    src: s_fnTuffyBoldItalicCharmapPng
},
{
    type: "image",
    src: s_fpsImages
},
{
    type: "image",
    src: s_pPathSister1
},
{
    type: "image",
    src: s_pPathSister2
},
{
    type: "image",
    src: s_pPathB1
},
{
    type: "image",
    src: s_pPathB2
},
{
    type: "image",
    src: s_pPathR1
},
{
    type: "image",
    src: s_pPathR2
},
{
    type: "image",
    src: s_pPathF1
},
{
    type: "image",
    src: s_pPathF2
},
{
    type: "image",
    src: s_pPathBlock
},
{
    type: "image",
    src: s_back
},
{
    type: "image",
    src: s_back1
},
{
    type: "image",
    src: s_back2
},
{
    type: "image",
    src: s_back3
},
{
    type: "image",
    src: s_stars1
},
{
    type: "image",
    src: s_stars2
},
{
    type: "image",
    src: s_fire
},
{
    type: "image",
    src: s_snow
},
{
    type: "image",
    src: s_PlayNormal
},
{
    type: "image",
    src: s_PlaySelect
},
{
    type: "image",
    src: s_AboutNormal
},
{
    type: "image",
    src: s_AboutSelect
},
{
    type: "image",
    src: s_HighNormal
},
{
    type: "image",
    src: s_HighSelect
},
{
    type: "image",
    src: s_Ball
},
{
    type: "image",
    src: s_Paddle
},
{
    type: "image",
    src: s_pPathClose
},
{
    type: "image",
    src: s_MenuItem
},
{
    type: "image",
    src: s_ShapeModeMenuItem
},
{
    type: "image",
    src: s_TextureModeMenuItem
},
{
    type: "image",
    src: s_SendScore
},
{
    type: "image",
    src: s_PressSendScore
},
{
    type: "image",
    src: s_Power
},
{
    type: "image",
    src: s_AtlasTest
},
{
    type: "image",
    src: s_TilesPng
},
{
    type: "image",
    src: s_streak
},
{
    type: "image",
    src: s_starsGrayscale
},
{
    type: "image",
    src: s_stars2Grayscale
},
{
    type: "image",
    src: s_piece
},
{
    type: "image",
    src: s_grossini_dance_atlas_mono
},
{
    type: "image",
    src: s_fixedOrthoTest2Png
},
{
    type: "image",
    src: s_hexaTilesPng
},
{
    type: "image",
    src: s_isoTestPng
},
{
    type: "image",
    src: s_isoTest2Png
},
{
    type: "image",
    src: s_isoPng
},
{
    type: "image",
    src: s_orthoTest1BwPng
},
{
    type: "image",
    src: s_orthoTest1Png
},
{
    type: "image",
    src: s_tilesHdPng
},
{
    type: "image",
    src: s_tmwDesertSpacingHdPng
},
{
    type: "image",
    src: s_tmwDesertSpacingPng
},
{
    type: "image",
    src: s_grossini
},
{
    type: "image",
    src: s_grossini_gray
},
{
    type: "image",
    src: s_grossini_blue
},
{
    type: "image",
    src: s_grossini_dance_atlas
},
{
    type: "image",
    src: s_grossini_aliases
},
{
    type: "image",
    src: s_dragon_animation
},
{
    type: "image",
    src: s_ghosts
},
{
    type: "image",
    src: s_grossini_family
},
{
    type: "image",
    src: s_HelloWorld
},
{
    type: "image",
    src: s_GrossiniDance01
},
{
    type: "image",
    src: s_GrossiniDance02
},
{
    type: "image",
    src: s_GrossiniDance03
},
{
    type: "image",
    src: s_GrossiniDance04
},
{
    type: "image",
    src: s_GrossiniDance05
},
{
    type: "image",
    src: s_GrossiniDance06
},
{
    type: "image",
    src: s_GrossiniDance07
},
{
    type: "image",
    src: s_GrossiniDance08
},
{
    type: "image",
    src: s_GrossiniDance09
},
{
    type: "image",
    src: s_GrossiniDance10
},
{
    type: "image",
    src: s_GrossiniDance11
},
{
    type: "image",
    src: s_GrossiniDance12
},
{
    type: "image",
    src: s_GrossiniDance13
},
{
    type: "image",
    src: s_GrossiniDance14
},
{
    type: "plist",
    src: s_BoilingFoamPlist
},
{
    type: "plist",
    src: s_grossiniPlist
},
{
    type: "plist",
    src: s_grossini_grayPlist
},
{
    type: "plist",
    src: s_grossini_bluePlist
},
{
    type: "plist",
    src: s_grossini_aliasesPlist
},
{
    type: "plist",
    src: s_ghostsPlist
},
{
    type: "plist",
    src: s_grossini_familyPlist
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test1.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test1.tsx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test2.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test3.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test4.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test4-hd.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test5.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test6.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test6-hd.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/hexa-test.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test1.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test2.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test2-uncompressed.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/ortho-objects.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test-objectgroup.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test-zorder.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test-zorder.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test-vertexz.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test-vertexz.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test-movelayer.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/orthogonal-test-movelayer.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/iso-test-bug787.tmx"
},
{
    type: "tmx",
    src: "Resources/TileMaps/test-object-layer.tmx"
},
{
    type: "bgm",
    src: "Resources/background"
},
{
    type: "effect",
    src: "Resources/effect2"
},
{
    type: "tga",
    src: s_LevelMapTga
}];
var Ball = cc.Sprite.extend({
    _velocity: cc.PointZero(),
    _radius: 0,
    radius: function() {
        return this._radius
    },
    setRadius: function(a) {
        this._radius = a
    },
    move: function(a) {
        this.setPosition(cc.ccpAdd(this.getPosition(), cc.ccpMult(this._velocity, a)));
        a = cc.Director.sharedDirector().getWinSize();
        this.getPosition().x > a.width - this.radius() ? (this.setPosition(cc.ccp(a.width - this.radius(), this.getPosition().y)), this._velocity.x *= -1) : this.getPosition().x < this.radius() && (this.setPosition(cc.ccp(this.radius(), this.getPosition().y)), this._velocity.x *= -1)
    },
    collideWithPaddle: function(a) {
        var b = a.rect();
        b.origin.x += a.getPosition().x;
        b.origin.y += a.getPosition().y;
        var c = cc.Rect.CCRectGetMinY(b),
        d = cc.Rect.CCRectGetMidY(b),
        e = cc.Rect.CCRectGetMaxY(b),
        f = cc.Rect.CCRectGetMinX(b),
        b = cc.Rect.CCRectGetMaxX(b);
        if (this.getPosition().x > f && this.getPosition().x < b && (f = !1, b = 0, this.getPositionY() > d && this.getPositionY() <= e + this.radius() ? (this.setPosition(cc.PointMake(this.getPosition().x, e + this.radius())), f = !0, b = Math.PI / 2) : this.getPosition().y < d && this.getPosition().y >= c - this.radius() && (this.setPosition(cc.PointMake(this.getPosition().x, c - this.radius())), f = !0, b = -Math.PI / 2), f)) c = cc.ccpToAngle(cc.ccpSub(a.getPosition(), this.getPosition())) + b,
        a = 1.00000005 * cc.ccpLength(this._velocity),
        c = -cc.ccpToAngle(this._velocity) + 5.0E-8 * c,
        this._velocity = cc.ccpMult(cc.ccpForAngle(c), a)
    },
    setVelocity: function(a) {
        this._velocity = a
    },
    getVelocity: function() {
        return this._velocity
    }
});
Ball.ballWithTexture = function(a) {
    var b = new Ball;
    b.initWithTexture(a);
    a instanceof cc.Texture2D ? b.setRadius(a.getContentSize().width / 2) : (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) && b.setRadius(a.width / 2);
    return b
};
var kPaddleStateGrabbed = 0,
kPaddleStateUngrabbed = 1,
Paddle = cc.Sprite.extend({
    _state: kPaddleStateUngrabbed,
    _rect: null,
    rect: function() {
        return cc.RectMake( - this._rect.size.width / 2, -this._rect.size.height / 2, this._rect.size.width, this._rect.size.height)
    },
    initWithTexture: function(a) {
        this._super(a) && (this._state = kPaddleStateUngrabbed);
        if (a instanceof cc.Texture2D) a = a.getContentSize(),
        this._rect = cc.RectMake(0, 0, a.width, a.height);
        else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) this._rect = cc.RectMake(0, 0, a.width, a.height);
        return ! 0
    },
    onEnter: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !0);
        this._super()
    },
    onExit: function() {
        cc.TouchDispatcher.sharedDispatcher().removeDelegate(this);
        this._super()
    },
    containsTouchLocation: function(a) {
        var a = a.locationInView(a.view()),
        b = this.rect();
        b.origin.x += this.getPosition().x;
        b.origin.y += this.getPosition().y;
        return cc.Rect.CCRectContainsPoint(b, a)
    },
    ccTouchBegan: function(a) {
        if (this._state != kPaddleStateUngrabbed || !this.containsTouchLocation(a)) return ! 1;
        this._state = kPaddleStateGrabbed;
        return ! 0
    },
    ccTouchMoved: function(a) {
        cc.Assert(this._state == kPaddleStateGrabbed, "Paddle - Unexpected state!");
        a = a.locationInView(a.view());
        this.setPosition(cc.PointMake(a.x, this.getPosition().y))
    },
    ccTouchEnded: function() {
        cc.Assert(this._state == kPaddleStateGrabbed, "Paddle - Unexpected state!");
        this._state = kPaddleStateUngrabbed
    },
    touchDelegateRetain: function() {},
    touchDelegateRelease: function() {}
});
Paddle.paddleWithTexture = function(a) {
    var b = new Paddle;
    b.initWithTexture(a);
    return b
};
var kHighPlayer = 0,
kLowPlayer = 1,
kStatusBarHeight = 20,
kSpriteTag = 0,
TouchesTestScene = TestScene.extend({
    ctor: function() {
        this._super(!0);
        this.addChild(new PongLayer)
    },
    runThisTest: function() {
        cc.Director.sharedDirector().replaceScene(this)
    },
    MainMenuCallback: function(a) {
        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationPortrait);
        this._super(a)
    }
}),
PongLayer = cc.Layer.extend({
    _ball: null,
    _paddles: [],
    _ballStartingVelocity: cc.PointZero(),
    _winSize: null,
    ctor: function() {
        this._ballStartingVelocity = cc.PointMake(20, -100);
        this._winSize = cc.Director.sharedDirector().getWinSize();
        this._ball = Ball.ballWithTexture(cc.TextureCache.sharedTextureCache().addImage(s_Ball));
        this._ball.setPosition(cc.PointMake(this._winSize.width / 2, this._winSize.height / 2));
        this._ball.setVelocity(this._ballStartingVelocity);
        this.addChild(this._ball);
        var a = cc.TextureCache.sharedTextureCache().addImage(s_Paddle);
        this._paddles = [];
        var b = Paddle.paddleWithTexture(a);
        b.setPosition(cc.PointMake(this._winSize.width / 2, 15));
        this._paddles.push(b);
        b = Paddle.paddleWithTexture(a);
        b.setPosition(cc.PointMake(this._winSize.width / 2, this._winSize.height - kStatusBarHeight - 15));
        this._paddles.push(b);
        b = Paddle.paddleWithTexture(a);
        b.setPosition(cc.PointMake(this._winSize.width / 2, 100));
        this._paddles.push(b);
        b = Paddle.paddleWithTexture(a);
        b.setPosition(cc.PointMake(this._winSize.width / 2, this._winSize.height - kStatusBarHeight - 100));
        this._paddles.push(b);
        for (a = 0; a < this._paddles.length && this._paddles[a]; a++) this.addChild(this._paddles[a]);
        this.schedule(this.doStep)
    },
    resetAndScoreBallForPlayer: function() {
        this._ballStartingVelocity = 300 > Math.abs(this._ball.getVelocity().y) ? cc.ccpMult(this._ballStartingVelocity, -1.1) : cc.ccpMult(this._ballStartingVelocity, -1);
        this._ball.setVelocity(this._ballStartingVelocity);
        this._ball.setPosition(cc.PointMake(this._winSize.width / 2, this._winSize.height / 2))
    },
    doStep: function(a) {
        this._ball.move(a);
        for (a = 0; a < this._paddles.length && this._paddles[a]; a++) this._ball.collideWithPaddle(this._paddles[a]);
        this._ball.getPosition().y > this._winSize.height - kStatusBarHeight + this._ball.radius() ? this.resetAndScoreBallForPlayer(kLowPlayer) : this._ball.getPosition().y < -this._ball.radius() && this.resetAndScoreBallForPlayer(kHighPlayer);
        this._ball.draw()
    }
});
var kTagAnimationDance = 1,
MAX_TESTS = 8,
sceneIdx = -1,
createSchedulerTest = function(a) {
    var b = null;
    switch (a) {
    case 0:
        b = new SchedulerAutoremove;
        break;
    case 1:
        b = new SchedulerPauseResume;
        break;
    case 2:
        b = new SchedulerUnscheduleAll;
        break;
    case 3:
        b = new SchedulerUnscheduleAllHard;
        break;
    case 4:
        b = new SchedulerSchedulesAndRemove;
        break;
    case 5:
        b = new SchedulerUpdate;
        break;
    case 6:
        b = new SchedulerUpdateAndCustom;
        break;
    case 7:
        b = new SchedulerUpdateFromCustom
    }
    return b
},
nextSchedulerTest = function() {
    sceneIdx++;
    sceneIdx %= MAX_TESTS;
    return createSchedulerTest(sceneIdx)
},
backSchedulerTest = function() {
    sceneIdx--;
    0 > sceneIdx && (sceneIdx += MAX_TESTS);
    return createSchedulerTest(sceneIdx)
},
restartSchedulerTest = function() {
    return createSchedulerTest(sceneIdx)
},
SchedulerTestLayer = cc.Layer.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 30);
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height - 50));
        b = this.subtitle();
        "" != b && (b = cc.LabelTTF.labelWithString(b, "Thonburi", 13), this.addChild(b, 1), b.setPosition(cc.ccp(a.width / 2, a.height - 80)));
        var b = cc.MenuItemImage.itemFromNormalImage("Resources/Images/b1.png", "Resources/Images/b2.png", this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage("Resources/Images/r1.png", "Resources/Images/r2.png", this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage("Resources/Images/f1.png", "Resources/Images/f2.png", this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.ccp(a.width / 2 - 100, 30));
        c.setPosition(cc.ccp(a.width / 2, 30));
        d.setPosition(cc.ccp(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    },
    backCallback: function() {
        var a = new SchedulerTestScene,
        b = backSchedulerTest();
        a.addChild(b);
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new SchedulerTestScene,
        b = nextSchedulerTest();
        a.addChild(b);
        cc.Director.sharedDirector().replaceScene(a)
    },
    restartCallback: function() {
        var a = new SchedulerTestScene,
        b = restartSchedulerTest();
        a.addChild(b);
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
SchedulerAutoremove = SchedulerTestLayer.extend({
    _accum: 0,
    onEnter: function() {
        this._super();
        this.schedule(this.autoremove, 0.5);
        this.schedule(this.tick, 0.5);
        this._accum = 0
    },
    title: function() {
        return "Self-remove an scheduler"
    },
    subtitle: function() {
        return "1 scheduler will be autoremoved in 3 seconds. See console"
    },
    autoremove: function(a) {
        this._accum += a;
        cc.Log("Time: " + this._accum);
        3 < this._accum && (this.unschedule(this.autoremove), cc.Log("scheduler removed"))
    },
    tick: function() {
        cc.Log("This scheduler should not be removed")
    }
}),
SchedulerPauseResume = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        this.schedule(this.tick1, 0.5);
        this.schedule(this.tick2, 0.5);
        this.schedule(this.pause, 0.5)
    },
    title: function() {
        return "Pause / Resume"
    },
    subtitle: function() {
        return "Scheduler should be paused after 3 seconds. See console"
    },
    tick1: function() {
        cc.Log("tick1")
    },
    tick2: function() {
        cc.Log("tick2")
    },
    pause: function() {
        cc.Scheduler.sharedScheduler().pauseTarget(this)
    }
}),
SchedulerUnscheduleAll = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        this.schedule(this.tick1, 0.5);
        this.schedule(this.tick2, 1);
        this.schedule(this.tick3, 1.5);
        this.schedule(this.tick4, 1.5);
        this.schedule(this.unscheduleAll, 4)
    },
    title: function() {
        return "Unschedule All selectors"
    },
    subtitle: function() {
        return "All scheduled selectors will be unscheduled in 4 seconds. See console"
    },
    tick1: function() {
        cc.Log("tick1")
    },
    tick2: function() {
        cc.Log("tick2")
    },
    tick3: function() {
        cc.Log("tick3")
    },
    tick4: function() {
        cc.Log("tick4")
    },
    unscheduleAll: function() {
        this.unscheduleAllSelectors()
    }
}),
SchedulerUnscheduleAllHard = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        this.schedule(this.tick1, 0.5);
        this.schedule(this.tick2, 1);
        this.schedule(this.tick3, 1.5);
        this.schedule(this.tick4, 1.5);
        this.schedule(this.unscheduleAll, 4)
    },
    title: function() {
        return "Unschedule All selectors #2"
    },
    subtitle: function() {
        return "Unschedules all selectors after 4s. Uses CCScheduler. See console"
    },
    tick1: function() {
        cc.Log("tick1")
    },
    tick2: function() {
        cc.Log("tick2")
    },
    tick3: function() {
        cc.Log("tick3")
    },
    tick4: function() {
        cc.Log("tick4")
    },
    unscheduleAll: function() {
        cc.Scheduler.sharedScheduler().unscheduleAllSelectors()
    }
}),
SchedulerSchedulesAndRemove = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        this.schedule(this.tick1, 0.5);
        this.schedule(this.tick2, 1);
        this.schedule(this.scheduleAndUnschedule, 4)
    },
    title: function() {
        return "Schedule from Schedule"
    },
    subtitle: function() {
        return "Will unschedule and schedule selectors in 4s. See console"
    },
    tick1: function() {
        cc.Log("tick1")
    },
    tick2: function() {
        cc.Log("tick2")
    },
    tick3: function() {
        cc.Log("tick3")
    },
    tick4: function() {
        cc.Log("tick4")
    },
    scheduleAndUnschedule: function() {
        this.unschedule(this.tick1);
        this.unschedule(this.tick2);
        this.unschedule(this.scheduleAndUnschedule);
        this.schedule(this.tick3, 1);
        this.schedule(this.tick4, 1)
    }
}),
TestNode = cc.Node.extend({
    _pString: "",
    initWithString: function(a, b) {
        this._pString = a;
        this.scheduleUpdateWithPriority(b)
    }
}),
SchedulerUpdate = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        var a = new TestNode;
        a.initWithString("---", 50);
        this.addChild(a);
        a = new TestNode;
        a.initWithString("3rd", 0);
        this.addChild(a);
        a = new TestNode;
        a.initWithString("1st", -10);
        this.addChild(a);
        a = new TestNode;
        a.initWithString("4th", 10);
        this.addChild(a);
        a = new TestNode;
        a.initWithString("5th", 20);
        this.addChild(a);
        a = new TestNode;
        a.initWithString("2nd", -5);
        this.addChild(a);
        this.schedule(this.removeUpdates, 4)
    },
    title: function() {
        return "Schedule update with priority"
    },
    subtitle: function() {
        return "3 scheduled updates. Priority should work. Stops in 4s. See console"
    },
    removeUpdates: function() {
        for (var a = this.getChildren(), b = 0; b < a.length; b++) {
            var c = a[b];
            c && c.unscheduleAllSelectors()
        }
    }
}),
SchedulerUpdateAndCustom = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        this.scheduleUpdate();
        this.schedule(this.tick);
        this.schedule(this.stopSelectors, 0.4)
    },
    title: function() {
        return "Schedule Update + custom selector"
    },
    subtitle: function() {
        return "Update + custom selector at the same time. Stops in 4s. See console"
    },
    update: function(a) {
        cc.Log("update called:" + a)
    },
    tick: function(a) {
        cc.Log("custom selector called:" + a)
    },
    stopSelectors: function() {
        this.unscheduleAllSelectors()
    }
}),
SchedulerUpdateFromCustom = SchedulerTestLayer.extend({
    onEnter: function() {
        this._super();
        this.schedule(this.schedUpdate, 2)
    },
    title: function() {
        return "Schedule Update in 2 sec"
    },
    subtitle: function() {
        return "Update schedules in 2 secs. Stops 2 sec later. See console"
    },
    update: function(a) {
        cc.Log("update called:" + a)
    },
    schedUpdate: function() {
        this.unschedule(this.schedUpdate);
        this.scheduleUpdate();
        this.schedule(this.stopUpdate, 2)
    },
    stopUpdate: function() {
        this.unscheduleUpdate();
        this.unschedule(this.stopUpdate)
    }
}),
RescheduleSelector = SchedulerTestLayer.extend({
    _interval: 1,
    _ticks: 0,
    onEnter: function() {
        this._super();
        this._interval = 1;
        this._ticks = 0;
        this.schedule(this.schedUpdate, this._interval)
    },
    title: function() {
        return "Reschedule Selector"
    },
    subtitle: function() {
        return "Interval is 1 second, then 2, then 3..."
    },
    schedUpdate: function(a) {
        this._ticks++;
        cc.Log("schedUpdate: " + a.toFixed(2));
        3 < this._ticks && (this._interval += 1, this.schedule(this.schedUpdate, this._interval), this._ticks = 0)
    }
}),
SchedulerTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(nextSchedulerTest());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kTagSprite = 1,
ClickAndMoveTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new MainLayer);
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
MainLayer = cc.Layer.extend({
    ctor: function() {
        this.setIsTouchEnabled(!0);
        var a = cc.Sprite.spriteWithFile(s_pPathGrossini),
        b = cc.LayerColor.layerWithColor(cc.ccc4(255, 255, 0, 100));
        this.addChild(b, -1);
        this.addChild(a, 0, kTagSprite);
        a.setPosition(cc.PointMake(20, 150));
        a.runAction(cc.JumpTo.actionWithDuration(4, cc.PointMake(300, 48), 100, 4));
        var a = cc.FadeIn.actionWithDuration(1),
        c = cc.FadeOut.actionWithDuration(1),
        a = cc.RepeatForever.actionWithAction(cc.Sequence.actions(a, c));
        b.runAction(a)
    },
    ccTouchesEnded: function(a) {
        if (! (0 >= a.length)) {
            var a = a[0],
            b = a.locationInView(a.view()),
            a = this.getChildByTag(kTagSprite);
            a.stopAllActions();
            a.runAction(cc.MoveTo.actionWithDuration(1, cc.PointMake(b.x, b.y)));
            var c = b.x - a.getPositionX(),
            b = b.y - a.getPositionY(),
            d = cc.RADIANS_TO_DEGREES(Math.atan(c / b));
            0 > b && (d = 0 > c ? 180 + Math.abs(d) : 180 - Math.abs(d));
            a.runAction(cc.RotateTo.actionWithDuration(1, d % 360))
        }
    }
});
var kTagMenu = 77771,
kTagMenu0 = 77770,
kTagMenu1 = 77771,
MenuLayer1 = cc.Layer.extend({
    ctor: function() {
        cc.MenuItemFont.setFontSize(30);
        cc.MenuItemFont.setFontName("Courier New");
        this.setIsTouchEnabled(!0);
        var a = cc.Sprite.spriteWithFile(s_MenuItem, cc.RectMake(0, 46, 115, 23)),
        b = cc.Sprite.spriteWithFile(s_MenuItem, cc.RectMake(0, 23, 115, 23)),
        c = cc.Sprite.spriteWithFile(s_MenuItem, cc.RectMake(0, 0, 115, 23)),
        b = cc.MenuItemSprite.itemFromNormalSprite(a, b, c, this, this.menuCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_SendScore, s_PressSendScore, this, this.menuCallback2),
        a = cc.LabelAtlas.labelWithString("0123456789", "Resources/fonts/fps_images.png", 16, 24, "."),
        a = cc.MenuItemLabel.itemWithLabel(a, this, this.menuCallbackDisabled);
        a.setDisabledColor(cc.ccc3(32, 32, 64));
        a.setColor(cc.ccc3(200, 200, 255));
        var d = cc.MenuItemFont.itemFromString("I toggle enable items", this, this.menuCallbackEnabled);
        d.setFontSizeObj(20);
        cc.MenuItemFont.setFontName("Marker Felt");
        var e = cc.LabelTTF.labelWithString("configuration", "Arial", 28),
        e = cc.MenuItemLabel.itemWithLabel(e, this, this.menuCallbackConfig);
        e.setScale(0.8);
        var f = cc.MenuItemFont.itemFromString("Quit", this, this.onQuit),
        g = cc.TintBy.actionWithDuration(0.5, 0, -255, -255),
        h = g.reverse(),
        g = cc.Sequence.actions(g, h, null);
        f.runAction(cc.RepeatForever.actionWithAction(g));
        b = cc.Menu.menuWithItems(b, c, a, d, e, f, null);
        b.alignItemsVertically();
        c = cc.Director.sharedDirector().getWinSize();
        e = b.getChildren();
        for (f = 0; f < e.length && null != e[f]; f++) d = e[f],
        g = d.getPosition(),
        h = c.width / 2 + 50,
        0 == f % 2 && (h = -h),
        d.setPosition(cc.PointMake(g.x + h, g.y)),
        d.runAction(cc.EaseElasticOut.actionWithAction(cc.MoveBy.actionWithDuration(2, cc.PointMake(g.x - h, 0)), 0.35));
        this._m_disabledItem = a;
        this._m_disabledItem.setIsEnabled(!1);
        this.addChild(b)
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, cc.kCCMenuTouchPriority + 1, !0)
    },
    ccTouchBegan: function() {
        return ! 0
    },
    menuCallback: function() {
        this._m_pParent.switchTo(1)
    },
    menuCallbackConfig: function() {
        this._m_pParent.switchTo(3)
    },
    allowTouches: function() {
        cc.TouchDispatcher.sharedDispatcher().setPriority(cc.kCCMenuTouchPriority + 1, this);
        this.unscheduleAllSelectors();
        cc.LOG("Touches allowed again!")
    },
    menuCallbackDisabled: function() {
        cc.TouchDispatcher.sharedDispatcher().setPriority(cc.kCCMenuTouchPriority - 1, this);
        this.schedule(this.allowTouches, 5);
        cc.Log("TOUCHES DISABLED FOR 5 SECONDS")
    },
    menuCallbackEnabled: function() {
        this._m_disabledItem.setIsEnabled(!this._m_disabledItem.getIsEnabled())
    },
    menuCallback2: function() {
        this._m_pParent.switchTo(2)
    },
    onQuit: function() {
        cc.Assert(0, "Quit!")
    }
}),
MenuLayer2 = cc.Layer.extend({
    ctor: function() {
        for (var a = 0; 2 > a; a++) {
            var b = cc.MenuItemImage.itemFromNormalImage(s_PlayNormal, s_PlaySelect, this, this.menuCallback),
            c = cc.MenuItemImage.itemFromNormalImage(s_HighNormal, s_HighSelect, this, this.menuCallbackOpacity),
            d = cc.MenuItemImage.itemFromNormalImage(s_AboutNormal, s_AboutSelect, this, this.menuCallbackAlign);
            b.setScaleX(1.5);
            c.setScaleX(0.5);
            d.setScaleX(0.5);
            b = cc.Menu.menuWithItems(b, c, d);
            b.setTag(kTagMenu);
            this.addChild(b, 0, 100 + a);
            this._m_centeredMenu = b.getPosition()
        }
        this._m_alignedH = !0;
        this.alignMenuH()
    },
    alignMenuH: function() {
        for (var a = 0; 2 > a; a++) {
            var b = this.getChildByTag(100 + a);
            b.setPosition(this._m_centeredMenu);
            if (0 == a) {
                b.alignItemsHorizontally();
                var c = b.getPosition();
                b.setPosition(cc.ccpAdd(c, cc.PointMake(0, 30)))
            } else b.alignItemsHorizontallyWithPadding(40),
            c = b.getPosition(),
            b.setPosition(cc.ccpSub(c, cc.PointMake(0, 30)))
        }
    },
    alignMenusV: function() {
        for (var a = 0; 2 > a; a++) {
            var b = this.getChildByTag(100 + a);
            b.setPosition(this._m_centeredMenu);
            if (0 == a) {
                b.alignItemsVertically();
                var c = b.getPosition();
                b.setPosition(cc.ccpAdd(c, cc.PointMake(100, 0)))
            } else b.alignItemsVerticallyWithPadding(40),
            c = b.getPosition(),
            b.setPosition(cc.ccpSub(c, cc.PointMake(100, 0)))
        }
    },
    menuCallback: function() {
        this._m_pParent.switchTo(0)
    },
    menuCallbackOpacity: function(a) {
        a = a.getParent();
        128 == a.getOpacity() ? a.setOpacity(255) : a.setOpacity(128)
    },
    menuCallbackAlign: function() { (this._m_alignedH = !this._m_alignedH) ? this.alignMenuH() : this.alignMenusV()
    }
}),
MenuLayer3 = cc.Layer.extend({
    ctor: function() {
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(28);
        var a = cc.LabelTTF.labelWithString("Enable AtlasItem", "Arial", 28),
        a = cc.MenuItemLabel.itemWithLabel(a, this, this.menuCallback2),
        b = cc.MenuItemFont.itemFromString("--- Go Back ---", this, this.menuCallback),
        c = cc.Sprite.spriteWithFile(s_MenuItem, cc.RectMake(0, 46, 115, 23)),
        d = cc.Sprite.spriteWithFile(s_MenuItem, cc.RectMake(0, 23, 115, 23)),
        e = cc.Sprite.spriteWithFile(s_MenuItem, cc.RectMake(0, 0, 115, 23));
        this._m_disabledItem = c = cc.MenuItemSprite.itemFromNormalSprite(c, d, e, this, this.menuCallback3);
        this._m_disabledItem.setIsEnabled(!1);
        d = cc.Menu.menuWithItems(a, b, c);
        d.setPosition(cc.PointMake(0, 0));
        e = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.PointMake(e.width / 2 - 150, e.height / 2));
        b.setPosition(cc.PointMake(e.width / 2 - 200, e.height / 2));
        c.setPosition(cc.PointMake(e.width / 2, e.height / 2 - 100));
        e = cc.JumpBy.actionWithDuration(3, cc.PointMake(400, 0), 50, 4);
        b.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(e, e.reverse())));
        var e = cc.RotateBy.actionWithDuration(3, 360),
        f = e.copy(),
        g = e.copy();
        a.runAction(cc.RepeatForever.actionWithAction(e));
        b.runAction(cc.RepeatForever.actionWithAction(f));
        c.runAction(cc.RepeatForever.actionWithAction(g));
        this.addChild(d)
    },
    menuCallback: function() {
        this._m_pParent.switchTo(0)
    },
    menuCallback2: function() {
        this._m_disabledItem.setIsEnabled(!this._m_disabledItem.getIsEnabled());
        this._m_disabledItem.stopAllActions()
    },
    menuCallback3: function() {
        cc.LOG("do something")
    }
}),
MenuLayer4 = cc.Layer.extend({
    ctor: function() {
        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var a = cc.MenuItemFont.itemFromString("Sound");
        a.setIsEnabled(!1);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var b = cc.MenuItemToggle.itemWithTarget(this, this.menuCallback, cc.MenuItemFont.itemFromString("On"), cc.MenuItemFont.itemFromString("Off"));
        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var c = cc.MenuItemFont.itemFromString("Music");
        c.setIsEnabled(!1);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var d = cc.MenuItemToggle.itemWithTarget(this, this.menuCallback, cc.MenuItemFont.itemFromString("On"), cc.MenuItemFont.itemFromString("Off"));
        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var e = cc.MenuItemFont.itemFromString("Quality");
        e.setIsEnabled(!1);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var f = cc.MenuItemToggle.itemWithTarget(this, this.menuCallback, cc.MenuItemFont.itemFromString("High"), cc.MenuItemFont.itemFromString("Low"));
        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var g = cc.MenuItemFont.itemFromString("Orientation");
        g.setIsEnabled(!1);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var h = cc.MenuItemToggle.itemWithTarget(this, this.menuCallback, cc.MenuItemFont.itemFromString("Off"));
        h.getSubItems().push(cc.MenuItemFont.itemFromString("33%"));
        h.getSubItems().push(cc.MenuItemFont.itemFromString("66%"));
        h.getSubItems().push(cc.MenuItemFont.itemFromString("100%"));
        h.setSelectedIndex(2);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var i = cc.LabelTTF.labelWithString("go back", "Arial", 28),
        i = cc.MenuItemLabel.itemWithLabel(i, this, this.backCallback),
        a = cc.Menu.menuWithItems(a, c, b, d, e, g, f, h, i);
        a.alignItemsInColumns(2, 2, 2, 2, 1, null);
        this.addChild(a)
    },
    menuCallback: function() {},
    backCallback: function() {
        this._m_pParent.switchTo(0)
    }
}),
MenuTestScene = TestScene.extend({
    runThisTest: function() {
        var a = new MenuLayer1,
        b = new MenuLayer2,
        c = new MenuLayer3,
        d = new MenuLayer4;
        this.addChild(cc.LayerMultiplex.layerWithLayers(a, b, c, d, null), 0);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var actionTests = "ActionManual ActionMove ActionScale ActionRotate ActionSkew ActionSkewRotateScale ActionJump ActionBezier ActionBlink ActionFade ActionTint ActionSequence ActionSequence2 ActionSpawn ActionReverse ActionDelayTime ActionRepeat ActionRepeatForever ActionRotateToRepeat ActionRotateJerk ActionCallFunc ActionCallFuncND ActionReverseSequence ActionReverseSequence2 ActionAnimate".split(" "),
s_nActionIdx = -1;
function NextAction() {++s_nActionIdx;
    s_nActionIdx %= actionTests.length;
    console.log(actionTests[s_nActionIdx]);
    return new window[actionTests[s_nActionIdx]]
}
function BackAction() {--s_nActionIdx;
    0 > s_nActionIdx && (s_nActionIdx += actionTests.length);
    return new window[actionTests[s_nActionIdx]]
}
function RestartAction() {
    return new window[actionTests[s_nActionIdx]]
}
var ActionsTestScene = TestScene.extend({
    runThisTest: function() {
        s_nActionIdx = -1;
        this.addChild(NextAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
ActionsDemo = cc.Layer.extend({
    _m_grossini: null,
    _m_tamara: null,
    m_kathia: null,
    centerSprites: function(a) {
        var b = cc.Director.sharedDirector().getWinSize();
        1 == a ? (this._m_tamara.setIsVisible(!1), this._m_kathia.setIsVisible(!1), this._m_grossini.setPosition(cc.PointMake(b.width / 2, b.height / 2))) : 2 == a ? (this._m_kathia.setPosition(cc.PointMake(b.width / 3, b.height / 2)), this._m_tamara.setPosition(cc.PointMake(2 * b.width / 3, b.height / 2)), this._m_grossini.setIsVisible(!1)) : 3 == a && (this._m_grossini.setPosition(cc.PointMake(b.width / 2, b.height / 2)), this._m_tamara.setPosition(cc.PointMake(b.width / 4, b.height / 2)), this._m_kathia.setPosition(cc.PointMake(3 * b.width / 4, b.height / 2)))
    },
    alignSpritesLeft: function(a) {
        var b = cc.Director.sharedDirector().getWinSize();
        1 == a ? (this._m_tamara.setIsVisible(!1), this._m_kathia.setIsVisible(!1), this._m_grossini.setPosition(cc.PointMake(60, b.height / 2))) : 2 == a ? (this._m_kathia.setPosition(cc.PointMake(60, b.height / 3)), this._m_tamara.setPosition(cc.PointMake(60, 2 * b.height / 3)), this._m_grossini.setIsVisible(!1)) : 3 == a && (this._m_grossini.setPosition(cc.PointMake(60, b.height / 2)), this._m_tamara.setPosition(cc.PointMake(60, 2 * b.height / 3)), this._m_kathia.setPosition(cc.PointMake(60, b.height / 3)))
    },
    title: function() {
        return "ActionsTest"
    },
    subtitle: function() {
        return ""
    },
    restartCallback: function() {
        var a = new ActionsTestScene;
        a.addChild(RestartAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new ActionsTestScene;
        a.addChild(NextAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new ActionsTestScene;
        a.addChild(BackAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    onEnter: function() {
        this._super();
        this._m_grossini = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this._m_tamara = cc.Sprite.spriteWithFile(s_pPathSister1);
        this._m_kathia = cc.Sprite.spriteWithFile(s_pPathSister2);
        this.addChild(this._m_grossini, 1);
        this.addChild(this._m_tamara, 2);
        this.addChild(this._m_kathia, 3);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_grossini.setPosition(cc.PointMake(a.width / 2, a.height / 3));
        this._m_tamara.setPosition(cc.PointMake(a.width / 2, 2 * a.height / 3));
        this._m_kathia.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        var b = this.title(),
        b = cc.LabelTTF.labelWithString(b, "Arial", 18);
        this.addChild(b, 1);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 30));
        if (b = this.subtitle()) b = cc.LabelTTF.labelWithString(b, "Thonburi", 22),
        this.addChild(b, 1),
        b.setPosition(cc.PointMake(a.width / 2, a.height - 60));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    }
}),
ActionManual = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_tamara.setScaleX(2.5);
        this._m_tamara.setScaleY( - 1);
        this._m_tamara.setPosition(cc.PointMake(100, 70));
        this._m_tamara.setOpacity(128);
        this._m_grossini.setRotation(120);
        this._m_grossini.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        this._m_grossini.setColor(cc.ccc3(255, 0, 0));
        this._m_kathia.setPosition(cc.PointMake(a.width - 100, a.height / 2));
        this._m_kathia.setColor(cc.BLUE())
    },
    subtitle: function() {
        return "Manual Transformation"
    }
}),
ActionMove = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.Director.sharedDirector().getWinSize(),
        a = cc.MoveTo.actionWithDuration(2, cc.PointMake(a.width - 40, a.height - 40)),
        b = cc.MoveBy.actionWithDuration(2, cc.PointMake(80, 80)),
        c = b.reverse();
        this._m_tamara.runAction(a);
        this._m_grossini.runAction(cc.Sequence.actions(b, c));
        this._m_kathia.runAction(cc.MoveTo.actionWithDuration(1, cc.PointMake(40, 40)))
    },
    subtitle: function() {
        return "MoveTo / MoveBy"
    }
}),
ActionScale = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.ScaleTo.actionWithDuration(2, 0.5),
        b = cc.ScaleBy.actionWithDuration(2, 2),
        c = cc.ScaleBy.actionWithDuration(2, 0.25, 4.5),
        d = b.reverse(),
        e = c.reverse();
        this._m_tamara.runAction(a);
        this._m_kathia.runAction(cc.Sequence.actions(c, e));
        this._m_grossini.runAction(cc.Sequence.actions(b, d, null))
    },
    subtitle: function() {
        return "ScaleTo / ScaleBy"
    }
}),
ActionSkew = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.SkewTo.actionWithDuration(2, 37.2, -37.2),
        b = cc.SkewTo.actionWithDuration(2, 0, 0),
        c = cc.SkewBy.actionWithDuration(2, 0, -90),
        d = cc.SkewBy.actionWithDuration(2, 45, 45),
        e = c.reverse(),
        f = d.reverse();
        this._m_tamara.runAction(cc.Sequence.actions(a, b, null));
        this._m_grossini.runAction(cc.Sequence.actions(c, e, null));
        this._m_kathia.runAction(cc.Sequence.actions(d, f, null))
    },
    subtitle: function() {
        return "SkewTo / SkewBy"
    }
}),
ActionSkewRotateScale = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this._m_tamara.removeFromParentAndCleanup(!0);
        this._m_grossini.removeFromParentAndCleanup(!0);
        this._m_kathia.removeFromParentAndCleanup(!0);
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.SizeMake(100, 100),
        c = cc.LayerColor.layerWithColor(cc.ccc4(255, 255, 0, 255));
        c.setAnchorPoint(cc.ccp(0, 0));
        c.setPosition(new cc.Point((a.width - b.width) / 2, (a.height - b.height) / 2));
        c.setContentSize(b);
        a = cc.LayerColor.layerWithColor(cc.ccc4(255, 0, 0, 255));
        c.addChild(a);
        a.setContentSize(cc.SizeMake(10, 10));
        a.setPosition(cc.ccp(0, b.height - 10));
        a.setAnchorPoint(cc.ccp(0, 0));
        a = cc.LayerColor.layerWithColor(cc.ccc4(0, 0, 255, 255));
        c.addChild(a);
        a.setContentSize(cc.SizeMake(10, 10));
        a.setPosition(cc.ccp(b.width - 10, b.height - 10));
        a.setAnchorPoint(cc.ccp(0, 0));
        this.addChild(c);
        var b = cc.SkewTo.actionWithDuration(2, 0, 2),
        a = cc.RotateTo.actionWithDuration(2, 61),
        d = cc.ScaleTo.actionWithDuration(2, -0.44, 0.47),
        e = cc.ScaleTo.actionWithDuration(2, 1, 1),
        f = cc.RotateTo.actionWithDuration(2, 0),
        g = cc.SkewTo.actionWithDuration(2, 0, 0);
        c.runAction(cc.Sequence.actions(b, g, null));
        c.runAction(cc.Sequence.actions(a, f, null));
        c.runAction(cc.Sequence.actions(d, e, null))
    },
    subtitle: function() {
        return "Skew + Rotate + Scale"
    }
}),
ActionRotate = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.RotateTo.actionWithDuration(2, 45),
        b = cc.RotateTo.actionWithDuration(2, -45),
        c = cc.RotateTo.actionWithDuration(2, 0);
        this._m_tamara.runAction(cc.Sequence.actions(a, c, null));
        var a = cc.RotateBy.actionWithDuration(2, 360),
        d = a.reverse();
        this._m_grossini.runAction(cc.Sequence.actions(a, d, null));
        this._m_kathia.runAction(cc.Sequence.actions(b, c.copy(), null))
    },
    subtitle: function() {
        return "RotateTo / RotateBy"
    }
}),
ActionJump = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.JumpTo.actionWithDuration(2, cc.PointMake(300, 300), 50, 4),
        b = cc.JumpBy.actionWithDuration(2, cc.PointMake(300, 0), 50, 4),
        c = cc.JumpBy.actionWithDuration(2, cc.PointMake(0, 0), 80, 4),
        d = b.reverse();
        this._m_tamara.runAction(a);
        this._m_grossini.runAction(cc.Sequence.actions(b, d, null));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(c))
    },
    subtitle: function() {
        return "JumpTo / JumpBy"
    }
}),
ActionBezier = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize();
        this.centerSprites(3);
        var b = new cc.BezierConfig;
        b.controlPoint_1 = cc.PointMake(0, a.height / 2);
        b.controlPoint_2 = cc.PointMake(300, -a.height / 2);
        b.endPosition = cc.PointMake(300, 100);
        var b = cc.BezierBy.actionWithDuration(3, b),
        c = b.reverse(),
        b = cc.RepeatForever.actionWithAction(cc.Sequence.actions(b, c, null));
        this._m_tamara.setPosition(cc.PointMake(80, 160));
        c = new cc.BezierConfig;
        c.controlPoint_1 = cc.PointMake(100, a.height / 2);
        c.controlPoint_2 = cc.PointMake(200, -a.height / 2);
        c.endPosition = cc.PointMake(240, 160);
        a = cc.BezierTo.actionWithDuration(2, c);
        this._m_kathia.setPosition(cc.PointMake(400, 160));
        c = cc.BezierTo.actionWithDuration(2, c);
        this._m_grossini.id = "gro";
        this._m_tamara.id = "tam";
        this._m_kathia.id = "kat";
        this._m_grossini.runAction(b);
        this._m_tamara.runAction(a);
        this._m_kathia.runAction(c)
    },
    subtitle: function() {
        return "BezierBy / BezierTo"
    }
}),
ActionBlink = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(2);
        var a = cc.Blink.actionWithDuration(2, 10),
        b = cc.Blink.actionWithDuration(2, 5);
        this._m_tamara.runAction(a);
        this._m_kathia.runAction(b)
    },
    subtitle: function() {
        return "Blink"
    }
}),
ActionFade = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(2);
        this._m_tamara.setOpacity(0);
        var a = cc.FadeIn.actionWithDuration(1),
        b = a.reverse(),
        c = cc.FadeOut.actionWithDuration(1),
        d = c.reverse();
        this._m_tamara.runAction(cc.Sequence.actions(a, b, null));
        this._m_kathia.runAction(cc.Sequence.actions(c, d, null))
    },
    subtitle: function() {
        return "FadeIn / FadeOut"
    }
}),
ActionTint = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(2);
        var a = cc.TintTo.actionWithDuration(2, 255, 0, 255),
        b = cc.TintBy.actionWithDuration(2, -127, -255, -127),
        c = b.reverse();
        this._m_tamara.runAction(a);
        this._m_kathia.runAction(cc.Sequence.actions(b, c))
    },
    subtitle: function() {
        return "TintTo / TintBy"
    }
}),
ActionAnimate = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(1);
        for (var a = cc.Animation.animation(), b = "", c = 1; 15 > c; c++) b = 10 > c ? "0" + c: "" + c,
        b = "Resources/Images/grossini_dance_" + b + ".png",
        a.addFrameWithFileName(b);
        a = cc.Animate.actionWithDuration(3, a, !1);
        c = a.reverse();
        this._m_grossini.runAction(cc.Sequence.actions(a, c, null))
    },
    subtitle: function() {
        return "Animation"
    }
}),
ActionSequence = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(1);
        this._m_grossini.runAction(cc.Sequence.actions(cc.MoveBy.actionWithDuration(2, cc.PointMake(240, 0)), cc.RotateBy.actionWithDuration(2, 540), null))
    },
    subtitle: function() {
        return "Sequence: Move + Rotate"
    }
}),
ActionSequence2 = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(1);
        this._m_grossini.setIsVisible(!1);
        this._m_grossini.runAction(cc.Sequence.actions(cc.Place.actionWithPosition(cc.PointMake(200, 200)), cc.Show.action(), cc.MoveBy.actionWithDuration(1, cc.PointMake(100, 0)), cc.CallFunc.actionWithTarget(this, this.callback1), cc.CallFunc.actionWithTarget(this, this.callback2), cc.CallFunc.actionWithTarget(this, this.callback3), null))
    },
    callback1: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("callback 1 called", "Marker Felt", 16);
        b.setPosition(cc.PointMake(1 * (a.width / 4), a.height / 2));
        this.addChild(b)
    },
    callback2: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("callback 2 called", "Marker Felt", 16);
        b.setPosition(cc.PointMake(2 * (a.width / 4), a.height / 2));
        this.addChild(b)
    },
    callback3: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("callback 3 called", "Marker Felt", 16);
        b.setPosition(cc.PointMake(3 * (a.width / 4), a.height / 2));
        this.addChild(b)
    },
    subtitle: function() {
        return "Sequence of InstantActions"
    }
}),
ActionCallFunc = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.Sequence.actions(cc.MoveBy.actionWithDuration(2, cc.PointMake(200, 0)), cc.CallFunc.actionWithTarget(this, this.callback1)),
        b = cc.Sequence.actions(cc.ScaleBy.actionWithDuration(2, 2), cc.FadeOut.actionWithDuration(2), cc.CallFunc.actionWithTarget(this, this.callback2)),
        c = cc.Sequence.actions(cc.RotateBy.actionWithDuration(3, 360), cc.FadeOut.actionWithDuration(2), cc.CallFunc.actionWithTarget(this, this.callback3, 3199909562));
        this._m_grossini.runAction(a);
        this._m_tamara.runAction(b);
        this._m_kathia.runAction(c)
    },
    callback1: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("callback 1 called", "Marker Felt", 16);
        b.setPosition(cc.PointMake(1 * (a.width / 4), a.height / 2));
        this.addChild(b)
    },
    callback2: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("callback 2 called", "Marker Felt", 16);
        b.setPosition(cc.PointMake(2 * (a.width / 4), a.height / 2));
        this.addChild(b)
    },
    callback3: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("callback 3 called", "Marker Felt", 16);
        b.setPosition(cc.PointMake(3 * (a.width / 4), a.height / 2));
        this.addChild(b)
    },
    subtitle: function() {
        return "Callbacks: CallFunc and friends"
    }
}),
ActionCallFuncND = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(1);
        this._m_grossini.runAction(cc.Sequence.actions(cc.MoveBy.actionWithDuration(2, cc.ccp(200, 0)), cc.CallFunc.actionWithTarget(this._m_grossini, this.removeFromParentAndCleanup, !0), null))
    },
    title: function() {
        return "CallFuncND + auto remove"
    },
    subtitle: function() {
        return "CallFuncND + removeFromParentAndCleanup. Grossini dissapears in 2s"
    }
}),
ActionSpawn = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(1);
        this._m_grossini.runAction(cc.Spawn.actions(cc.JumpBy.actionWithDuration(2, cc.PointMake(300, 0), 50, 4), cc.RotateBy.actionWithDuration(2, 720), null))
    },
    subtitle: function() {
        return "Spawn: Jump + Rotate"
    }
}),
ActionRepeatForever = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(1);
        this._m_grossini.runAction(cc.Sequence.actions(cc.DelayTime.actionWithDuration(1), cc.CallFunc.actionWithTarget(this, this.repeatForever), null))
    },
    repeatForever: function(a) {
        var b = cc.RepeatForever.actionWithAction(cc.RotateBy.actionWithDuration(1, 360));
        a.runAction(b)
    },
    subtitle: function() {
        return "CallFuncN + RepeatForever"
    }
}),
ActionRotateToRepeat = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(2);
        var a = cc.RotateTo.actionWithDuration(1, 90),
        b = cc.RotateTo.actionWithDuration(1, 0),
        b = cc.Sequence.actions(a, b, null),
        a = cc.RepeatForever.actionWithAction(b),
        b = cc.Repeat.actionWithAction(b.copy(), 10);
        this._m_tamara.runAction(a);
        this._m_kathia.runAction(b)
    },
    subtitle: function() {
        return "Repeat/RepeatForever + RotateTo"
    }
}),
ActionRotateJerk = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(2);
        var a = cc.Sequence.actions(cc.RotateTo.actionWithDuration(0.5, -20), cc.RotateTo.actionWithDuration(0.5, 20), null),
        b = cc.Repeat.actionWithAction(a, 10),
        a = cc.RepeatForever.actionWithAction(a.copy());
        this._m_tamara.runAction(b);
        this._m_kathia.runAction(a)
    },
    subtitle: function() {
        return "RepeatForever / Repeat + Rotate"
    }
}),
ActionReverse = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(1);
        var a = cc.JumpBy.actionWithDuration(2, cc.PointMake(300, 0), 50, 4);
        this._m_grossini.runAction(cc.Sequence.actions(a, a.reverse(), null))
    },
    subtitle: function() {
        return "Reverse an action"
    }
}),
ActionDelayTime = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(1);
        var a = cc.MoveBy.actionWithDuration(1, cc.PointMake(150, 0));
        this._m_grossini.runAction(cc.Sequence.actions(a, cc.DelayTime.actionWithDuration(2), a, null))
    },
    subtitle: function() {
        return "DelayTime: m + delay + m"
    }
}),
ActionReverseSequence = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(1);
        var a = cc.MoveBy.actionWithDuration(1, cc.PointMake(250, 0)),
        b = cc.MoveBy.actionWithDuration(1, cc.PointMake(0, 50)),
        a = cc.Sequence.actions(a, b, a.reverse(), null);
        this._m_grossini.runAction(cc.Sequence.actions(a, a.reverse(), null))
    },
    subtitle: function() {
        return "Reverse a sequence"
    }
}),
ActionReverseSequence2 = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(2);
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(250, 0)),
        b = cc.MoveBy.actionWithDuration(3, cc.PointMake(0, 50)),
        c = new cc.ToggleVisibility,
        d = new cc.ToggleVisibility,
        a = cc.Sequence.actions(a, c, b, d, a.reverse(), null);
        this._m_kathia.runAction(cc.Repeat.actionWithAction(cc.Sequence.actions(a, a.reverse(), null), 3));
        a = cc.MoveBy.actionWithDuration(1, cc.PointMake(100, 0));
        b = cc.MoveBy.actionWithDuration(1, cc.PointMake(50, 0));
        c = new cc.Hide;
        a = cc.Sequence.actions(a, c, b, null);
        b = a.reverse();
        this._m_tamara.runAction(cc.Sequence.actions(a, b, null))
    },
    subtitle: function() {
        return "Reverse sequence 2"
    }
}),
ActionRepeat = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.alignSpritesLeft(2);
        var a = cc.MoveBy.actionWithDuration(1, cc.PointMake(150, 0)),
        b = cc.Repeat.actionWithAction(cc.Sequence.actions(cc.Place.actionWithPosition(cc.PointMake(60, 60)), a, null), 3),
        a = cc.RepeatForever.actionWithAction(cc.Sequence.actions(a.copy(), a.reverse(), null));
        this._m_kathia.runAction(b);
        this._m_tamara.runAction(a)
    },
    subtitle: function() {
        return "Repeat / RepeatForever actions"
    }
}),
ActionOrbit = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(3);
        var a = cc.OrbitCamera.actionWithDuration(2, 1, 0, 0, 180, 0, 0),
        a = cc.Sequence.actions(a, a.reverse(), null),
        b = cc.OrbitCamera.actionWithDuration(2, 1, 0, 0, 180, -45, 0),
        b = cc.Sequence.actions(b, b.reverse(), null),
        c = cc.OrbitCamera.actionWithDuration(2, 1, 0, 0, 180, 90, 0),
        c = cc.Sequence.actions(c, c.reverse(), null);
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(b));
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(c));
        a = cc.MoveBy.actionWithDuration(3, cc.PointMake(100, -100));
        b = a.reverse();
        a = cc.Sequence.actions(a, b, null);
        a = cc.RepeatForever.actionWithAction(a);
        this._m_kathia.runAction(a);
        this._m_tamara.runAction(a.copy());
        this._m_grossini.runAction(a.copy())
    },
    subtitle: function() {
        return "OrbitCamera action"
    }
}),
ActionFollow = ActionsDemo.extend({
    onEnter: function() {
        this._super();
        this.centerSprites(1);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_grossini.setPosition(cc.PointMake( - 200, a.height / 2));
        var b = cc.MoveBy.actionWithDuration(2, cc.PointMake(3 * a.width, 0)),
        c = b.reverse(),
        b = cc.Sequence.actions(b, c, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(b));
        this.runAction(cc.Follow.actionWithTarget(this._m_grossini, cc.RectMake(0, 0, 2 * a.width - 100, a.height)))
    },
    subtitle: function() {
        return "Follow action"
    }
});
var kTagTileMap = 1,
TileMapTests = "TMXOrthoTest TMXOrthoTest2 TMXOrthoTest3 TMXOrthoTest4 TMXReadWriteTest TMXHexTest TMXIsoTest TMXIsoTest1 TMXIsoTest2 TMXUncompressedTest TMXTilesetTest TMXOrthoObjectsTest TMXIsoObjectsTest TMXResizeTest TMXIsoZorder TMXOrthoZorder TMXIsoMoveLayer TMXOrthoMoveLayer TMXBug987 TMXBug787".split(" "),
s_nTileMapIdx = -1;
function nextTileMapAction() {++s_nTileMapIdx;
    s_nTileMapIdx %= TileMapTests.length;
    return new window[TileMapTests[s_nTileMapIdx]]
}
function backTileMapAction() {--s_nTileMapIdx;
    0 > s_nTileMapIdx && (s_nTileMapIdx += TileMapTests.length);
    return new window[TileMapTests[s_nTileMapIdx]]
}
function restartTileMapAction() {
    return new window[TileMapTests[s_nTileMapIdx]]
}
var TileMapTestScene = TestScene.extend({
    runThisTest: function() {
        s_nTileMapIdx = -1;
        this.addChild(nextTileMapAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
TileDemo = cc.Layer.extend({
    ctor: function() {
        this.setIsTouchEnabled(!0)
    },
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return "drag the screen"
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = this.title(),
        b = cc.LabelTTF.labelWithString(b, "Arial", 28);
        this.addChild(b, 1);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        if (b = this.subtitle()) b = cc.LabelTTF.labelWithString(b, "Thonburi", 16),
        this.addChild(b, 1),
        b.setPosition(cc.PointMake(a.width / 2, a.height - 80));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new TileMapTestScene;
        a.addChild(restartTileMapAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new TileMapTestScene;
        a.addChild(nextTileMapAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new TileMapTestScene;
        a.addChild(backTileMapAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !0)
    },
    ccTouchBegan: function() {
        return ! 0
    },
    ccTouchEnded: function() {
        this.prevLocation = null
    },
    ccTouchCancelled: function() {},
    prevLocation: null,
    ccTouchMoved: function(a) {
        a = a.locationInView(a.view());
        if (this.prevLocation) {
            var b = this.getChildByTag(kTagTileMap),
            c = cc.ccpSub(a, this.prevLocation),
            d = b.getPosition(),
            c = cc.ccpAdd(d, c);
            b.setPosition(c)
        }
        this.prevLocation = cc.ccp(a.x, a.y)
    }
}),
TileMapTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TileMapAtlas.tileMapAtlasWithTileFile(s_TilesPng, s_LevelMapTga, 16, 16);
        a.getTexture().setAntiAliasTexParameters();
        a.getContentSize();
        a.releaseMap();
        this.addChild(a, 0, kTagTileMap);
        a.setAnchorPoint(cc.ccp(0, 0.5));
        var b = cc.ScaleBy.actionWithDuration(4, 0.8),
        c = b.reverse(),
        b = cc.Sequence.actions(b, c, null);
        a.runAction(cc.RepeatForever.actionWithAction(b))
    },
    title: function() {
        return "TileMapAtlas"
    }
}),
TileMapEditTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TileMapAtlas.tileMapAtlasWithTileFile(s_TilesPng, s_LevelMapTga, 16, 16);
        a.getTexture().setAliasTexParameters();
        a.getContentSize();
        this.schedule(this.updateMap, 0.2);
        this.addChild(a, 0, kTagTileMap);
        a.setAnchorPoint(cc.ccp(0, 0));
        a.setPosition(cc.ccp( - 20, -200))
    },
    title: function() {
        return "Editable TileMapAtlas"
    },
    updateMap: function() {
        var a = this.getChildByTag(kTagTileMap),
        b = a.tileAt(cc.ccg(13, 21));
        b.r++;
        b.r %= 50;
        0 == b.r && (b.r = 1);
        a.setTile(b, cc.ccg(13, 21))
    }
}),
TMXOrthoTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test1.tmx");
        this.addChild(a, 0, kTagTileMap);
        for (var b = a.getChildren(), c = 0; c < b.length && b[c]; c++);
        a.runAction(cc.ScaleBy.actionWithDuration(2, 0.5))
    },
    title: function() {
        return "TMX Ortho test2"
    }
}),
TMXOrthoTest2 = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test2.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        for (var b = a.getChildren(), c = null, d = 0, e = b.length; d < e && !(c = b[d], !c); d++);
        a.getCamera().getEyeXYZ(void 0, void 0, void 0);
        a.getCamera().setEyeXYZ(NaN, void 0, NaN)
    },
    title: function() {
        return "TMX Orthogonal test"
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.DirectorProjection3D)
    },
    onExit: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.DirectorProjection2D)
    }
}),
TMXOrthoTest3 = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test3.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        for (var b = a.getChildren(), c = null, d = 0, e = b.length; d < e && !(c = b[d], !c); d++);
        a.setScale(0.2);
        a.setAnchorPoint(cc.ccp(0.5, 0.5))
    },
    title: function() {
        return "TMX anchorPoint test"
    }
}),
TMXOrthoTest4 = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test4.tmx");
        this.addChild(a, 0, kTagTileMap);
        for (var b = a.getChildren(), c = null, d = 0, e = b.length; d < e && !(c = b[d], !c); d++);
        a.setAnchorPoint(cc.ccp(0, 0));
        a = a.layerNamed("Layer 0");
        b = a.getLayerSize();
        c = a.tileAt(cc.ccp(0, 0));
        c.setScale(2);
        c = a.tileAt(cc.ccp(b.width - 1, 0));
        c.setScale(2);
        c = a.tileAt(cc.ccp(0, b.height - 1));
        c.setScale(2);
        c = a.tileAt(cc.ccp(b.width - 1, b.height - 1));
        c.setScale(2);
        this.schedule(this.removeSprite, 2)
    },
    removeSprite: function() {
        this.unschedule(this.removeSprite);
        var a = this.getChildByTag(kTagTileMap).layerNamed("Layer 0"),
        b = a.getLayerSize(),
        b = a.tileAt(cc.ccp(b.width - 1, 0));
        a.removeChild(b, !0)
    },
    title: function() {
        return "TMX width/height test"
    }
}),
TMXReadWriteTest = TileDemo.extend({
    m_gid: 0,
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test2.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        var b = a.layerNamed("Layer 0");
        a.setScale(1);
        var a = b.tileAt(cc.ccp(1, 63)),
        c = b.tileAt(cc.ccp(2, 63)),
        d = b.tileAt(cc.ccp(3, 62)),
        e = b.tileAt(cc.ccp(2, 62));
        a.setAnchorPoint(cc.ccp(0.5, 0.5));
        c.setAnchorPoint(cc.ccp(0.5, 0.5));
        d.setAnchorPoint(cc.ccp(0.5, 0.5));
        e.setAnchorPoint(cc.ccp(0.5, 0.5));
        var f = cc.MoveBy.actionWithDuration(0.5, cc.ccp(0, 160)),
        g = cc.RotateBy.actionWithDuration(2, 360),
        h = cc.ScaleBy.actionWithDuration(2, 5),
        i = cc.FadeOut.actionWithDuration(2),
        j = cc.FadeIn.actionWithDuration(2),
        k = cc.ScaleTo.actionWithDuration(1, 1),
        l = cc.CallFunc.actionWithTarget(this, this.removeSprite),
        f = cc.Sequence.actions(f, g, h, i, j, k, l, null);
        a.runAction(f);
        c.runAction(f.copy());
        d.runAction(f.copy());
        e.runAction(f.copy());
        this.m_gid = b.tileGIDAt(cc.ccp(0, 63));
        this.schedule(this.updateCol, 2);
        this.schedule(this.repaintWithGID, 2);
        this.schedule(this.removeTiles, 1);
        this.m_gid2 = 0
    },
    removeSprite: function(a) {
        var b = a.getParent();
        b && b.removeChild(a, !0)
    },
    updateCol: function() {
        for (var a = this.getChildByTag(kTagTileMap).getChildByTag(0), b = a.getLayerSize(), c = 0; c < b.height; c++) a.setTileGID(this.m_gid2, cc.ccp(3, c));
        this.m_gid2 = (this.m_gid2 + 1) % 80
    },
    repaintWithGID: function() {
        for (var a = this.getChildByTag(kTagTileMap).getChildByTag(0), b = a.getLayerSize(), c = 0; c < b.width; c++) {
            var d = b.height - 1,
            e = a.tileGIDAt(cc.ccp(c, d));
            a.setTileGID(e + 1, cc.ccp(c, d))
        }
    },
    removeTiles: function() {
        this.unschedule(this.removeTiles);
        for (var a = this.getChildByTag(kTagTileMap).getChildByTag(0), b = a.getLayerSize(), c = 0; c < b.height; c++) a.removeTileAt(cc.ccp(5, c))
    },
    title: function() {
        return "TMX Read/Write test"
    }
}),
TMXHexTest = TileDemo.extend({
    ctor: function() {
        this._super();
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(64, 64, 64, 255)), -1);
        this.addChild(cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/hexa-test.tmx"), 0, kTagTileMap)
    },
    title: function() {
        return "TMX Hex test"
    }
}),
TMXIsoTest = TileDemo.extend({
    ctor: function() {
        this._super();
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(64, 64, 64, 255)), -1);
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test.tmx");
        this.addChild(a, 0, kTagTileMap);
        var b = a.getMapSize(),
        c = a.getTileSize();
        a.runAction(cc.MoveTo.actionWithDuration(1, cc.ccp( - b.width * c.width / 2, -b.height * c.height / 2)))
    },
    title: function() {
        return "TMX Isometric test 0"
    }
}),
TMXIsoTest1 = TileDemo.extend({
    ctor: function() {
        this._super();
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(64, 64, 64, 255)), -1);
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test1.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        a.setAnchorPoint(cc.ccp(0.5, 0.5))
    },
    title: function() {
        return "TMX Isometric test + anchorPoint"
    }
}),
TMXIsoTest2 = TileDemo.extend({
    ctor: function() {
        this._super();
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(64, 64, 64, 255)), -1);
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test2.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        var b = a.getMapSize(),
        c = a.getTileSize();
        a.runAction(cc.MoveTo.actionWithDuration(1, cc.ccp( - b.width * c.width / 2, -b.height * c.height / 2)))
    },
    title: function() {
        return "TMX Isometric test 2"
    }
}),
TMXUncompressedTest = TileDemo.extend({
    ctor: function() {
        this._super();
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(64, 64, 64, 255)), -1);
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test2-uncompressed.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        var b = a.getMapSize(),
        c = a.getTileSize();
        a.runAction(cc.MoveTo.actionWithDuration(1, cc.ccp( - b.width * c.width / 2, -b.height * c.height / 2)));
        for (var a = a.getChildren(), b = null, c = 0, d = a.length; c < d; c++) {
            b = a[c];
            if (!b) break;
            b.releaseMap()
        }
    },
    title: function() {
        return "TMX Uncompressed test"
    }
}),
TMXTilesetTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test5.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize()
    },
    title: function() {
        return "TMX Tileset test"
    }
}),
TMXOrthoObjectsTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/ortho-objects.tmx");
        this.addChild(a, -1, kTagTileMap);
        a.getContentSize();
        for (var a = a.objectGroupNamed("Object Group 1").getObjects(), b = 0; b < a.length && a[b]; b++);
    },
    draw: function() {
        for (var a = this.getChildByTag(kTagTileMap).objectGroupNamed("Object Group 1").getObjects(), b = 0; b < a.length; b++) {
            var c = a[b];
            if (!c) break;
            var d = parseInt(c.x),
            e = parseInt(c.y),
            f = parseInt(c.width),
            c = parseInt(c.height);
            cc.renderContext.lineWidth = 3;
            cc.renderContext.strokeStyle = "#ffffff";
            cc.drawingUtil.drawLine(cc.ccp(d, e), cc.ccp(d + f, e));
            cc.drawingUtil.drawLine(cc.ccp(d + f, e), cc.ccp(d + f, e + c));
            cc.drawingUtil.drawLine(cc.ccp(d + f, e + c), cc.ccp(d, e + c));
            cc.drawingUtil.drawLine(cc.ccp(d, e + c), cc.ccp(d, e));
            cc.renderContext.lineWidth = 1
        }
    },
    title: function() {
        return "TMX Ortho object test"
    },
    subtitle: function() {
        return "You should see a white box around the 3 platforms"
    }
}),
TMXIsoObjectsTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test-objectgroup.tmx");
        this.addChild(a, -1, kTagTileMap);
        a.getContentSize();
        for (var a = a.objectGroupNamed("Object Group 1").getObjects(), b, c = 0, d = a.length; c < d && !(b = a[c], !b); c++);
    },
    title: function() {
        return "TMX Iso object test"
    },
    draw: function() {
        for (var a = this.getChildByTag(kTagTileMap).objectGroupNamed("Object Group 1").getObjects(), b, c = 0, d = a.length; c < d; c++) {
            b = a[c];
            if (!b) break;
            var e = parseInt(b.x),
            f = parseInt(b.y),
            g = parseInt(b.width);
            b = parseInt(b.height);
            cc.renderContext.lineWidth = 3;
            cc.renderContext.strokeStyle = "#ffffff";
            cc.drawingUtil.drawLine(cc.ccp(e, f), cc.ccp(e + g, f));
            cc.drawingUtil.drawLine(cc.ccp(e + g, f), cc.ccp(e + g, f + b));
            cc.drawingUtil.drawLine(cc.ccp(e + g, f + b), cc.ccp(e, f + b));
            cc.drawingUtil.drawLine(cc.ccp(e, f + b), cc.ccp(e, f));
            cc.renderContext.lineWidth = 1
        }
    },
    subtitle: function() {
        return "You need to parse them manually. See bug #810"
    }
}),
TMXResizeTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test5.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        for (var a = a.layerNamed("Layer 0"), b = a.getLayerSize(), c = 0; c < b.height; c++) for (var d = 0; d < b.width; d++) a.setTileGID(1, cc.ccp(d, c))
    },
    title: function() {
        return "TMX resize test"
    },
    subtitle: function() {
        return "Should not crash. Testing issue #740"
    }
}),
TMXIsoZorder = TileDemo.extend({
    m_tamara: null,
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test-zorder.tmx");
        this.addChild(a, 0, kTagTileMap);
        var b = a.getContentSize();
        a.setPosition(cc.ccp( - b.width / 2, 0));
        this.m_tamara = cc.Sprite.spriteWithFile(s_pPathSister1);
        a.addChild(this.m_tamara, a.getChildren().length);
        a = a.getMapSize().width * a.getTileSize().width;
        this.m_tamara.setPositionInPixels(cc.ccp(a / 2, 0));
        this.m_tamara.setAnchorPoint(cc.ccp(0.5, 0));
        a = cc.MoveBy.actionWithDuration(10, cc.ccpMult(cc.ccp(300, 250), 1 / cc.CONTENT_SCALE_FACTOR()));
        b = a.reverse();
        a = cc.Sequence.actions(a, b, null);
        this.m_tamara.runAction(cc.RepeatForever.actionWithAction(a));
        this.schedule(this.repositionSprite)
    },
    title: function() {
        return "TMX Iso Zorder"
    },
    subtitle: function() {
        return "Sprite should hide behind the trees"
    },
    onExit: function() {
        this.unschedule(this.repositionSprite);
        this._super()
    },
    repositionSprite: function() {
        var a = this.m_tamara.getPositionInPixels(),
        b = this.getChildByTag(kTagTileMap),
        a = 4 - a.y / 48,
        a = Math.max(a, 0);
        b.reorderChild(this.m_tamara, a)
    }
}),
TMXOrthoZorder = TileDemo.extend({
    m_tamara: null,
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test-zorder.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        this.m_tamara = cc.Sprite.spriteWithFile(s_pPathSister1);
        a.addChild(this.m_tamara, a.getChildren().length, kTagTileMap);
        this.m_tamara.setAnchorPoint(cc.ccp(0.5, 0));
        var a = cc.MoveBy.actionWithDuration(10, cc.ccpMult(cc.ccp(400, 450), 1 / cc.CONTENT_SCALE_FACTOR())),
        b = a.reverse(),
        a = cc.Sequence.actions(a, b, null);
        this.m_tamara.runAction(cc.RepeatForever.actionWithAction(a));
        this.schedule(this.repositionSprite)
    },
    title: function() {
        return "TMX Ortho Zorder"
    },
    subtitle: function() {
        return "Sprite should hide behind the trees"
    },
    repositionSprite: function() {
        var a = this.m_tamara.getPositionInPixels(),
        b = this.getChildByTag(kTagTileMap),
        a = 4 - (a.y - 10) / 81,
        a = Math.max(a, 0);
        b.reorderChild(this.m_tamara, a)
    }
}),
TMXIsoVertexZ = TileDemo.extend({
    m_tamara: null,
    m_tamara1: null,
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test-vertexz.tmx");
        this.addChild(a, 0, kTagTileMap);
        var b = a.getContentSize();
        a.setPosition(cc.ccp( - b.width / 2, 0));
        this.m_tamara = a.layerNamed("Trees").tileAt(cc.ccp(29, 29));
        a = cc.MoveBy.actionWithDuration(10, cc.ccpMult(cc.ccp(300, 250), 1 / cc.CONTENT_SCALE_FACTOR()));
        b = a.reverse();
        a = cc.Sequence.actions(a, b, null);
        this.m_tamara.runAction(cc.RepeatForever.actionWithAction(a));
        this.schedule(this.repositionSprite)
    },
    title: function() {
        return "TMX Iso VertexZ"
    },
    subtitle: function() {
        return "Sprite should hide behind the trees"
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.kCCDirectorProjection2D)
    },
    onExit: function() {
        this._super()
    },
    repositionSprite: function() {
        this.m_tamara.setVertexZ( - ((this.m_tamara.getPositionInPixels().y + 32) / 16))
    }
}),
TMXOrthoVertexZ = TileDemo.extend({
    m_tamara: null,
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test-vertexz.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize();
        this.m_tamara = a.layerNamed("trees").tileAt(cc.ccp(0, 11));
        cc.LOG("vertexZ: " + this.m_tamara.getVertexZ());
        var a = cc.MoveBy.actionWithDuration(10, cc.ccpMult(cc.ccp(400, 450), 1 / cc.CONTENT_SCALE_FACTOR())),
        b = a.reverse(),
        a = cc.Sequence.actions(a, b, null);
        this.m_tamara.runAction(cc.RepeatForever.actionWithAction(a));
        this.schedule(this.repositionSprite)
    },
    title: function() {
        return "TMX Ortho vertexZ"
    },
    subtitle: function() {
        return "Sprite should hide behind the trees"
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.kCCDirectorProjection2D)
    },
    onExit: function() {
        this._super()
    },
    repositionSprite: function() {
        this.m_tamara.setVertexZ( - ((this.m_tamara.getPositionInPixels().y + 32) / 16))
    }
}),
TMXIsoMoveLayer = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test-movelayer.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.setPosition(cc.ccp( - 700, -50));
        a.getContentSize()
    },
    title: function() {
        return "TMX Iso Move Layer"
    },
    subtitle: function() {
        return "Trees should be horizontally aligned"
    }
}),
TMXOrthoMoveLayer = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test-movelayer.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.getContentSize()
    },
    title: function() {
        return "TMX Ortho Move Layer"
    },
    subtitle: function() {
        return "Trees should be horizontally aligned"
    }
}),
TMXBug987 = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test6.tmx");
        this.addChild(a, 0, kTagTileMap);
        var b = a.getContentSize();
        cc.LOG("ContentSize:" + b.width + "," + b.height);
        for (var b = a.getChildren(), c = null, d = 0, e = b.length; d < e && !(c = b[d], !c); d++);
        a.setAnchorPoint(cc.ccp(0, 0));
        a.layerNamed("Tile Layer 1").setTileGID(3, cc.ccp(2, 2))
    },
    title: function() {
        return "TMX Bug 987"
    },
    subtitle: function() {
        return "You should see an square"
    }
}),
TMXBug787 = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/iso-test-bug787.tmx");
        this.addChild(a, 0, kTagTileMap);
        a.setScale(0.25)
    },
    title: function() {
        return "TMX Bug 787"
    },
    subtitle: function() {
        return "You should see a map"
    }
}),
TMXGIDObjectsTest = TileDemo.extend({
    ctor: function() {
        this._super();
        var a = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/test-object-layer.tmx");
        this.addChild(a, -1, kTagTileMap);
        a = a.getContentSize();
        cc.LOG("ContentSize:" + a.width + "," + a.height);
        cc.LOG("---. Iterating over all the group objets")
    },
    title: function() {
        return "TMX GID objects"
    },
    subtitle: function() {
        return "Tiles are created from an object group"
    },
    draw: function() {
        for (var a = this.getChildByTag(kTagTileMap).objectGroupNamed("Object Layer 1").getObjects(), b, c = 0, d = a.length; c < d; c++) {
            b = a[c];
            if (!b) break;
            var e = "x",
            f = parseInt(b[e]),
            e = "y",
            g = parseInt(b[e]),
            e = "width",
            h = parseInt(b[e]),
            e = "height";
            b = parseInt(b[e]);
            cc.renderContext.lineWidth = 3;
            cc.renderContext.strokeStyle = "#ffffff";
            cc.drawingUtil.drawLine(cc.ccp(f, g), cc.ccp(f + h, g));
            cc.drawingUtil.drawLine(cc.ccp(f + h, g), cc.ccp(f + h, g + b));
            cc.drawingUtil.drawLine(cc.ccp(f + h, g + b), cc.ccp(f, g + b));
            cc.drawingUtil.drawLine(cc.ccp(f, g + b), cc.ccp(f, g));
            cc.renderContext.lineWidth = 1
        }
    }
});
TRANSITION_DURATION = 1.2;
var TransitionsTests = "JumpZoomTransition FadeTransition FadeWhiteTransition ShrinkGrowTransition RotoZoomTransition MoveInLTransition MoveInRTransition MoveInTTransition MoveInBTransition SlideInLTransition SlideInRTransition SlideInTTransition SlideInBTransition".split(" "),
s_nTransitionsIdx = 0;
function nextTransitionAction(a, b) {++s_nTransitionsIdx;
    s_nTransitionsIdx %= TransitionsTests.length;
    return new window[TransitionsTests[s_nTransitionsIdx]](a, b)
}
function backTransitionAction(a, b) {--s_nTransitionsIdx;
    0 > s_nTransitionsIdx && (s_nTransitionsIdx += TransitionsTests.length);
    return new window[TransitionsTests[s_nTransitionsIdx]](a, b)
}
function restartTransitionAction(a, b) {
    return new window[TransitionsTests[s_nTransitionsIdx]](a, b)
}
var TransitionsTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new TestLayer1);
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
TestLayer1 = cc.Layer.extend({
    ctor: function() {
        this._super();
        var a, b, c = cc.Director.sharedDirector().getWinSize();
        a = c.width;
        b = c.height;
        var d = cc.Sprite.spriteWithFile(s_back1);
        d.setPosition(cc.PointMake(c.width / 2, c.height / 2));
        d.setScale(1.7);
        this.addChild(d, -1);
        d = cc.LabelTTF.labelWithString(TransitionsTests[s_nTransitionsIdx], "Thonburi", 32);
        this.addChild(d);
        d.setColor(cc.ccc3(255, 32, 32));
        d.setPosition(cc.PointMake(a / 2, b - 100));
        d = cc.LabelTTF.labelWithString("SCENE 1", "Marker Felt", 38);
        d.setColor(cc.ccc3(16, 16, 255));
        d.setPosition(cc.PointMake(a / 2, b / 2));
        this.addChild(d);
        a = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback);
        b = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback);
        var d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(a, b, d, null);
        e.setPosition(cc.PointZero());
        a.setPosition(cc.PointMake(c.width / 2 - 100, 30));
        b.setPosition(cc.PointMake(c.width / 2, 30));
        d.setPosition(cc.PointMake(c.width / 2 + 100, 30));
        this.addChild(e, 1);
        this.schedule(this.step, 1)
    },
    restartCallback: function() {
        var a = new TransitionsTestScene,
        b = new TestLayer2;
        a.addChild(b); (a = restartTransitionAction(TRANSITION_DURATION, a)) && cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new TransitionsTestScene,
        b = new TestLayer2;
        a.addChild(b); (a = nextTransitionAction(TRANSITION_DURATION, a)) && cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new TransitionsTestScene,
        b = new TestLayer2;
        a.addChild(b); (a = backTransitionAction(TRANSITION_DURATION, a)) && cc.Director.sharedDirector().replaceScene(a)
    },
    step: function() {}
}),
TestLayer2 = cc.Layer.extend({
    ctor: function() {
        this._super();
        var a, b, c = cc.Director.sharedDirector().getWinSize();
        a = c.width;
        b = c.height;
        var d = cc.Sprite.spriteWithFile(s_back2);
        d.setPosition(cc.PointMake(c.width / 2, c.height / 2));
        d.setScale(1.7);
        this.addChild(d, -1);
        c = cc.LabelTTF.labelWithString(TransitionsTests[s_nTransitionsIdx], "Thonburi", 32);
        this.addChild(c);
        c.setColor(cc.ccc3(255, 32, 32));
        c.setPosition(cc.PointMake(a / 2, b - 100));
        c = cc.LabelTTF.labelWithString("SCENE 2", "Marker Felt", 38);
        c.setColor(cc.ccc3(16, 16, 255));
        c.setPosition(cc.PointMake(a / 2, b / 2));
        this.addChild(c);
        b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback);
        var c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a / 2 - 100, 30));
        c.setPosition(cc.PointMake(a / 2, 30));
        d.setPosition(cc.PointMake(a / 2 + 100, 30));
        this.addChild(e, 1);
        this.schedule(this.step, 1)
    },
    restartCallback: function() {
        var a = new TransitionsTestScene,
        b = new TestLayer1;
        a.addChild(b); (a = restartTransitionAction(TRANSITION_DURATION, a)) && cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new TransitionsTestScene,
        b = new TestLayer1;
        a.addChild(b); (a = nextTransitionAction(TRANSITION_DURATION, a)) && cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new TransitionsTestScene,
        b = new TestLayer1;
        a.addChild(b); (a = nextTransitionAction(TRANSITION_DURATION, a)) && cc.Director.sharedDirector().replaceScene(a)
    },
    step: function() {}
}),
JumpZoomTransition = function(a, b) {
    return cc.TransitionJumpZoom.transitionWithDuration(a, b)
},
FadeTransition = function(a, b) {
    return cc.TransitionFade.transitionWithDuration(a, b)
},
FadeWhiteTransition = function(a, b) {
    return cc.TransitionFade.transitionWithDuration(a, b, cc.WHITE())
},
FlipXLeftOver = function(a, b) {
    return cc.TransitionFlipX.transitionWithDuration(a, b, cc.kOrientationLeftOver)
},
FlipXRightOver = function(a, b) {
    return cc.TransitionFlipX.transitionWithDuration(a, b, cc.kOrientationRightOver)
},
FlipYUpOver = function(a, b) {
    return cc.TransitionFlipY.transitionWithDuration(a, b, cc.kOrientationUpOver)
},
FlipYDownOver = function(a, b) {
    return cc.TransitionFlipY.transitionWithDuration(a, b, cc.kOrientationDownOver)
},
FlipAngularLeftOver = function(a, b) {
    return cc.TransitionFlipAngular.transitionWithDuration(a, b, cc.kOrientationLeftOver)
},
FlipAngularRightOver = function(a, b) {
    return cc.TransitionFlipAngular.transitionWithDuration(a, b, cc.kOrientationRightOver)
},
ZoomFlipXLeftOver = function(a, b) {
    return cc.TransitionZoomFlipX.transitionWithDuration(a, b, cc.kOrientationLeftOver)
},
ZoomFlipXRightOver = function(a, b) {
    return cc.TransitionZoomFlipX.transitionWithDuration(a, b, cc.kOrientationRightOver)
},
ZoomFlipYUpOver = function(a, b) {
    return cc.TransitionZoomFlipY.transitionWithDuration(a, b, cc.kOrientationUpOver)
},
ZoomFlipYDownOver = function(a, b) {
    return cc.TransitionZoomFlipY.transitionWithDuration(a, b, cc.kOrientationDownOver)
},
ZoomFlipAngularLeftOver = function(a, b) {
    return cc.TransitionZoomFlipAngular.transitionWithDuration(a, b, cc.kOrientationLeftOver)
},
ZoomFlipAngularRightOver = function(a, b) {
    return cc.TransitionZoomFlipAngular.transitionWithDuration(a, b, cc.kOrientationRightOver)
},
ShrinkGrowTransition = function(a, b) {
    return cc.TransitionShrinkGrow.transitionWithDuration(a, b)
},
RotoZoomTransition = function(a, b) {
    return cc.TransitionRotoZoom.transitionWithDuration(a, b)
},
MoveInLTransition = function(a, b) {
    return cc.TransitionMoveInL.transitionWithDuration(a, b)
},
MoveInRTransition = function(a, b) {
    return cc.TransitionMoveInR.transitionWithDuration(a, b)
},
MoveInTTransition = function(a, b) {
    return cc.TransitionMoveInT.transitionWithDuration(a, b)
},
MoveInBTransition = function(a, b) {
    return cc.TransitionMoveInB.transitionWithDuration(a, b)
},
SlideInLTransition = function(a, b) {
    return cc.TransitionSlideInL.transitionWithDuration(a, b)
},
SlideInRTransition = function(a, b) {
    return cc.TransitionSlideInR.transitionWithDuration(a, b)
},
SlideInTTransition = function(a, b) {
    return cc.TransitionSlideInT.transitionWithDuration(a, b)
},
SlideInBTransition = function(a, b) {
    return cc.TransitionSlideInB.transitionWithDuration(a, b)
},
CCTransitionCrossFade = function(a, b) {
    return cc.TransitionCrossFade.transitionWithDuration(a, b)
},
CCTransitionRadialCCW = function(a, b) {
    return cc.TransitionRadialCCW.transitionWithDuration(a, b)
},
CCTransitionRadialCW = function(a, b) {
    return cc.TransitionRadialCW.transitionWithDuration(a, b)
},
PageTransitionForward = function(a, b) {
    cc.Director.sharedDirector().setDepthTest(!0);
    return cc.TransitionPageTurn.transitionWithDuration(a, b, !1)
},
PageTransitionBackward = function(a, b) {
    cc.Director.sharedDirector().setDepthTest(!0);
    return cc.TransitionPageTurn.transitionWithDuration(a, b, !0)
},
FadeTRTransition = function(a, b) {
    return cc.TransitionFadeTR.transitionWithDuration(a, b)
},
FadeBLTransition = function(a, b) {
    return cc.TransitionFadeBL.transitionWithDuration(a, b)
},
FadeUpTransition = function(a, b) {
    return cc.TransitionFadeUp.transitionWithDuration(a, b)
},
FadeDownTransition = function(a, b) {
    return cc.TransitionFadeDown.transitionWithDuration(a, b)
},
TurnOffTilesTransition = function(a, b) {
    return cc.TransitionTurnOffTiles.transitionWithDuration(a, b)
},
SplitRowsTransition = function(a, b) {
    return cc.TransitionSplitRows.transitionWithDuration(a, b)
},
SplitColsTransition = function(a, b) {
    return cc.TransitionSplitCols.transitionWithDuration(a, b)
};
var DrawPrimitivesTest = cc.Layer.extend({
    ctor: function() {},
    draw: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize();
        cc.renderContext.fillStyle = "rgba(255,255,255,1)";
        cc.renderContext.strokeStyle = "rgba(255,255,255,1)";
        cc.drawingUtil.drawLine(cc.PointMake(0, 0), cc.PointMake(a.width, a.height));
        cc.renderContext.strokeStyle = "rgba(255,0,0,1)";
        cc.renderContext.lineWidth = "5";
        cc.drawingUtil.drawLine(cc.PointMake(0, a.height), cc.PointMake(a.width, 0));
        cc.renderContext.fillStyle = "rgba(0,0,255,0.5)";
        cc.drawingUtil.drawPoint(cc.PointMake(a.width / 2, a.height / 2), 40);
        var b = [cc.PointMake(60, 60), cc.PointMake(70, 70), cc.PointMake(60, 70), cc.PointMake(70, 60)];
        cc.renderContext.fillStyle = "rgba(0,255,255,1)";
        cc.drawingUtil.drawPoints(b, 4, 4);
        cc.renderContext.lineWidth = "16";
        cc.renderContext.strokeStyle = "rgba(0,255,0,1)";
        cc.drawingUtil.drawCircle(cc.PointMake(a.width / 2, a.height / 2), 100, 0, 10, !1);
        cc.renderContext.lineWidth = "2";
        cc.renderContext.strokeStyle = "rgba(0,255,255,1)";
        cc.drawingUtil.drawCircle(cc.PointMake(a.width / 2, a.height / 2), 50, cc.DEGREES_TO_RADIANS(90), 50, !0);
        cc.renderContext.strokeStyle = "rgba(255,255,0,1)";
        cc.renderContext.lineWidth = "10";
        b = [cc.PointMake(0, 0), cc.PointMake(50, 50), cc.PointMake(100, 50), cc.PointMake(100, 100), cc.PointMake(50, 100)];
        cc.drawingUtil.drawPoly(b, 5, !1);
        cc.renderContext.strokeStyle = "rgba(255,0,255,1)";
        cc.renderContext.lineWidth = "2";
        b = [cc.PointMake(30, 130), cc.PointMake(30, 230), cc.PointMake(50, 200)];
        cc.drawingUtil.drawPoly(b, 3, !0);
        cc.drawingUtil.drawQuadBezier(cc.PointMake(0, a.height), cc.PointMake(a.width / 2, a.height / 2), cc.PointMake(a.width, a.height), 50);
        cc.drawingUtil.drawCubicBezier(cc.PointMake(a.width / 2, a.height / 2), cc.PointMake(a.width / 2 + 30, a.height / 2 + 50), cc.PointMake(a.width / 2 + 60, a.height / 2 - 50), cc.PointMake(a.width, a.height / 2), 100);
        cc.renderContext.lineWidth = "1";
        cc.renderContext.fillStyle = "rgba(255,255,255,1)";
        cc.renderContext.strokeStyle = "rgba(255,255,255,1)"
    }
}),
DrawPrimitivesTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new DrawPrimitivesTest);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kTagLabelAtlas = 1,
sceneIdx = -1,
MAX_LAYER = 33,
ParticleTestScene = TestScene.extend({
    runThisTest: function() {
        sceneIdx = -1;
        MAX_LAYER = 15;
        this.addChild(nextParticleAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
IDC_NEXT = 100,
IDC_BACK = 101,
IDC_RESTART = 102,
IDC_TOGGLE = 103,
createParticleLayer = function(a) {
    switch (a) {
    case 0:
        return new DemoFlower;
    case 1:
        return new DemoGalaxy;
    case 2:
        return new DemoFirework;
    case 3:
        return new DemoSpiral;
    case 4:
        return new DemoSun;
    case 5:
        return new DemoMeteor;
    case 6:
        return new DemoFire;
    case 7:
        return new Issue704;
    case 8:
        return new DemoExplosion;
    case 9:
        return new DemoSnow;
    case 10:
        return new DemoRain;
    case 11:
        return new DemoBigFlower;
    case 12:
        return new DemoRotFlower;
    case 13:
        return new DemoModernArt;
    case 14:
        return new DemoRing;
    case 15:
        return new ParallaxParticle;
    case 16:
        return new DemoParticleFromFile("BoilingFoam");
    case 17:
        return new DemoParticleFromFile("BurstPipe");
    case 18:
        return new DemoParticleFromFile("Comet");
    case 19:
        return new DemoParticleFromFile("debian");
    case 20:
        return new DemoParticleFromFile("ExplodingRing");
    case 21:
        return new DemoParticleFromFile("LavaFlow");
    case 22:
        return new DemoParticleFromFile("SpinningPeas");
    case 23:
        return new DemoParticleFromFile("SpookyPeas");
    case 24:
        return new DemoParticleFromFile("Upsidedown");
    case 25:
        return new DemoParticleFromFile("Flower");
    case 26:
        return new DemoParticleFromFile("Spiral");
    case 27:
        return new DemoParticleFromFile("Galaxy");
    case 28:
        return new RadiusMode1;
    case 29:
        return new RadiusMode2;
    case 30:
        return new Issue704;
    case 31:
        return new Issue870;
    case 32:
        return new DemoParticleFromFile("Phoenix")
    }
    return null
},
nextParticleAction = function() {
    sceneIdx++;
    sceneIdx %= MAX_LAYER;
    return createParticleLayer(sceneIdx)
},
backParticleAction = function() {
    sceneIdx--;
    var a = MAX_LAYER;
    0 > sceneIdx && (sceneIdx += a);
    return createParticleLayer(sceneIdx)
},
restartParticleAction = function() {
    return createParticleLayer(sceneIdx)
},
ParticleDemo = cc.LayerColor.extend({
    _m_emitter: null,
    _m_background: null,
    _shapeModeButton: null,
    _textureModeButton: null,
    ctor: function() {
        this._super();
        this.initWithColor(cc.ccc4(127, 127, 127, 255));
        this._m_emitter = null;
        this.setIsTouchEnabled(!0);
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 28);
        this.addChild(b, 100, 1E3);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        b = cc.LabelTTF.labelWithString("(Tap the Screen)", "Arial", 20);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 80));
        this.addChild(b, 100);
        var c = this,
        b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this,
        function() {
            c._m_emitter.resetSystem()
        }),
        e = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        f = cc.Sprite.spriteWithFile(s_ShapeModeMenuItem, cc.RectMake(0, 46, 115, 23)),
        g = cc.Sprite.spriteWithFile(s_ShapeModeMenuItem, cc.RectMake(0, 23, 115, 23)),
        h = cc.Sprite.spriteWithFile(s_ShapeModeMenuItem, cc.RectMake(0, 0, 115, 23));
        this._shapeModeButton = cc.MenuItemSprite.itemFromNormalSprite(f, g, h, this,
        function() {
            c._m_emitter.setDrawMode(cc.kParticleTextureMode);
            c._textureModeButton.setIsVisible(!0);
            c._shapeModeButton.setIsVisible(!1)
        });
        this._shapeModeButton.setPosition(new cc.Point(10, 100));
        this._shapeModeButton.setAnchorPoint(cc.PointMake(0, 0));
        f = cc.Sprite.spriteWithFile(s_TextureModeMenuItem, cc.RectMake(0, 46, 115, 23));
        g = cc.Sprite.spriteWithFile(s_TextureModeMenuItem, cc.RectMake(0, 23, 115, 23));
        h = cc.Sprite.spriteWithFile(s_TextureModeMenuItem, cc.RectMake(0, 0, 115, 23));
        this._textureModeButton = cc.MenuItemSprite.itemFromNormalSprite(f, g, h, this,
        function() {
            c._m_emitter.setDrawMode(cc.kParticleShapeMode);
            c._textureModeButton.setIsVisible(!1);
            c._shapeModeButton.setIsVisible(!0)
        });
        this._textureModeButton.setIsVisible(!1);
        this._textureModeButton.setPosition(new cc.Point(10, 100));
        this._textureModeButton.setAnchorPoint(cc.PointMake(0, 0));
        f = cc.Menu.menuWithItems(b, d, e, this._shapeModeButton, this._textureModeButton);
        f.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        d.setPosition(cc.PointMake(a.width / 2, 30));
        e.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(f, 100);
        b = cc.LabelTTF.labelWithString("0000", "Arial", 24);
        this.addChild(b, 100, kTagLabelAtlas);
        b.setPosition(cc.PointMake(a.width - 66, 50));
        this._m_background = cc.Sprite.spriteWithFile(s_back3);
        this.addChild(this._m_background, 5);
        this._m_background.setPosition(cc.PointMake(a.width / 2, a.height - 180));
        a = cc.MoveBy.actionWithDuration(4, cc.PointMake(300, 0));
        b = a.reverse();
        a = cc.Sequence.actions(a, b, null);
        this._m_background.runAction(cc.RepeatForever.actionWithAction(a));
        this.schedule(this.step)
    },
    onEnter: function() {
        this._super();
        this.getChildByTag(1E3).setString(this.title())
    },
    title: function() {
        return "No title"
    },
    restartCallback: function() {
        this._m_emitter.resetSystem()
    },
    nextCallback: function() {
        var a = new ParticleTestScene;
        a.addChild(nextParticleAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new ParticleTestScene;
        a.addChild(backParticleAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    toggleCallback: function() {
        this._m_emitter.getPositionType() == cc.kCCPositionTypeGrouped ? this._m_emitter.setPositionType(cc.kCCPositionTypeFree) : this._m_emitter.getPositionType() == cc.kCCPositionTypeFree ? this._m_emitter.setPositionType(cc.kCCPositionTypeRelative) : this._m_emitter.getPositionType() == cc.kCCPositionTypeRelative && this._m_emitter.setPositionType(cc.kCCPositionTypeGrouped)
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !1)
    },
    ccTouchBegan: function() {
        return ! 0
    },
    ccTouchMoved: function(a, b) {
        return this.ccTouchEnded(a, b)
    },
    ccTouchEnded: function(a) {
        var a = a.locationInView(a.view()),
        b = cc.PointZero();
        this._m_background && (b = this._m_background.convertToWorldSpace(cc.PointZero()));
        this._m_emitter.setPosition(cc.ccpSub(a, b))
    },
    step: function() {
        this._m_emitter && this.getChildByTag(kTagLabelAtlas).setString(this._m_emitter.getParticleCount().toFixed(0))
    },
    setEmitterPosition: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_emitter.setPosition(cc.PointMake(a.width / 2, a.height / 2))
    }
}),
DemoFirework = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleFireworks.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_stars1));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleFireworks"
    }
}),
DemoFire = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleFire.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        var a = this._m_emitter.getPosition();
        this._m_emitter.setPosition(cc.PointMake(a.x, 100));
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleFire"
    }
}),
DemoSun = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleSun.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleSun"
    }
}),
DemoGalaxy = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleGalaxy.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleGalaxy"
    }
}),
DemoFlower = ParticleDemo.extend({
    ctor: function() {
        this._super()
    },
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleFlower.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_stars1));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleFlower"
    }
}),
DemoBigFlower = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithTotalParticles(50);
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_stars1));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this._m_emitter.setDuration( - 1);
        this._m_emitter.setGravity(cc.PointZero());
        this._m_emitter.setAngle(90);
        this._m_emitter.setAngleVar(360);
        this._m_emitter.setSpeed(160);
        this._m_emitter.setSpeedVar(20);
        this._m_emitter.setRadialAccel( - 120);
        this._m_emitter.setRadialAccelVar(0);
        this._m_emitter.setTangentialAccel(30);
        this._m_emitter.setTangentialAccelVar(0);
        this._m_emitter.setPosition(cc.PointMake(160, 240));
        this._m_emitter.setPosVar(cc.PointZero());
        this._m_emitter.setLife(4);
        this._m_emitter.setLifeVar(1);
        this._m_emitter.setStartSpin(0);
        this._m_emitter.setStartSizeVar(0);
        this._m_emitter.setEndSpin(0);
        this._m_emitter.setEndSpinVar(0);
        this._m_emitter.setStartColor(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setStartColorVar(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setEndColor(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setEndColorVar(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setStartSize(80);
        this._m_emitter.setStartSizeVar(40);
        this._m_emitter.setEndSize(cc.kParticleStartSizeEqualToEndSize);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setIsBlendAdditive(!0);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleBigFlower"
    }
}),
DemoRotFlower = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithTotalParticles(150);
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_stars2));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this._m_emitter.setDuration( - 1);
        this._m_emitter.setGravity(cc.PointZero());
        this._m_emitter.setAngle(90);
        this._m_emitter.setAngleVar(360);
        this._m_emitter.setSpeed(160);
        this._m_emitter.setSpeedVar(20);
        this._m_emitter.setRadialAccel( - 120);
        this._m_emitter.setRadialAccelVar(0);
        this._m_emitter.setTangentialAccel(30);
        this._m_emitter.setTangentialAccelVar(0);
        this._m_emitter.setPosition(cc.PointMake(160, 240));
        this._m_emitter.setPosVar(cc.PointZero());
        this._m_emitter.setLife(3);
        this._m_emitter.setLifeVar(1);
        this._m_emitter.setStartSpin(0);
        this._m_emitter.setStartSpinVar(0);
        this._m_emitter.setEndSpin(0);
        this._m_emitter.setEndSpinVar(2E3);
        this._m_emitter.setStartColor(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setStartColorVar(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setEndColor(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setEndColorVar(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setStartSize(30);
        this._m_emitter.setStartSizeVar(0);
        this._m_emitter.setEndSize(cc.kParticleStartSizeEqualToEndSize);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setIsBlendAdditive(!1);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleRotFlower"
    }
}),
DemoMeteor = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleMeteor.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleMeteor"
    }
}),
DemoSpiral = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleSpiral.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleSpiral"
    }
}),
DemoExplosion = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleExplosion.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_stars1));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this._m_emitter.setIsAutoRemoveOnFinish(!0);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleExplosion"
    }
}),
DemoSmoke = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleSmoke.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        var a = this._m_emitter.getPosition();
        this._m_emitter.setPosition(cc.PointMake(a.x, 100));
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleSmoke"
    }
}),
DemoSnow = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleSnow.node();
        this._m_background.addChild(this._m_emitter, 10);
        var a = this._m_emitter.getPosition();
        this._m_emitter.setPosition(cc.PointMake(a.x, a.y - 110));
        this._m_emitter.setLife(3);
        this._m_emitter.setLifeVar(1);
        this._m_emitter.setGravity(cc.PointMake(0, -10));
        this._m_emitter.setSpeed(130);
        this._m_emitter.setSpeedVar(30);
        a = this._m_emitter.getStartColor();
        a.r = 0.9;
        a.g = 0.9;
        a.b = 0.9;
        this._m_emitter.setStartColor(a);
        a = this._m_emitter.getStartColorVar();
        a.b = 0.1;
        this._m_emitter.setStartColorVar(a);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_snow));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleSnow"
    }
}),
DemoRain = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleRain.node();
        this._m_background.addChild(this._m_emitter, 10);
        var a = this._m_emitter.getPosition();
        this._m_emitter.setPosition(cc.PointMake(a.x, a.y - 100));
        this._m_emitter.setLife(4);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this.setEmitterPosition()
    },
    title: function() {
        return "ParticleRain"
    }
}),
DemoModernArt = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithTotalParticles(200);
        this._m_background.addChild(this._m_emitter, 10);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_emitter.setDuration( - 1);
        this._m_emitter.setGravity(cc.PointMake(0, 0));
        this._m_emitter.setAngle(0);
        this._m_emitter.setAngleVar(360);
        this._m_emitter.setRadialAccel(70);
        this._m_emitter.setRadialAccelVar(10);
        this._m_emitter.setTangentialAccel(80);
        this._m_emitter.setTangentialAccelVar(0);
        this._m_emitter.setSpeed(50);
        this._m_emitter.setSpeedVar(10);
        this._m_emitter.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        this._m_emitter.setPosVar(cc.PointZero());
        this._m_emitter.setLife(2);
        this._m_emitter.setLifeVar(0.3);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setStartColor(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setStartColorVar(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setEndColor(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setEndColorVar(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setStartSize(1);
        this._m_emitter.setStartSizeVar(1);
        this._m_emitter.setEndSize(32);
        this._m_emitter.setEndSizeVar(8);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this._m_emitter.setIsBlendAdditive(!1);
        this.setEmitterPosition()
    },
    title: function() {
        return "Varying size"
    }
}),
DemoRing = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_emitter = cc.ParticleFlower.node();
        this._m_background.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_stars1));
        this._m_emitter.setShapeType(cc.kParticleStarShape);
        this._m_emitter.setLifeVar(0);
        this._m_emitter.setLife(10);
        this._m_emitter.setSpeed(100);
        this._m_emitter.setSpeedVar(0);
        this._m_emitter.setEmissionRate(1E4);
        this.setEmitterPosition()
    },
    title: function() {
        return "Ring Demo"
    }
}),
ParallaxParticle = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this._m_background.getParent().removeChild(this._m_background, !0);
        this._m_background = null;
        var a = cc.ParallaxNode.node();
        this.addChild(a, 5);
        var b = cc.Sprite.spriteWithFile(s_back3),
        c = cc.Sprite.spriteWithFile(s_back3);
        a.addChild(b, 1, cc.PointMake(0.5, 1), cc.PointMake(0, 250));
        a.addChild(c, 2, cc.PointMake(1.5, 1), cc.PointMake(0, 50));
        this._m_emitter = cc.ParticleFlower.node();
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        b.addChild(this._m_emitter, 10);
        this._m_emitter.setPosition(cc.PointMake(250, 200));
        b = cc.ParticleSun.node();
        c.addChild(b, 10);
        b.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        c = cc.MoveBy.actionWithDuration(4, cc.PointMake(300, 0));
        b = c.reverse();
        c = cc.Sequence.actions(c, b, null);
        a.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "Parallax + Particles"
    }
}),
DemoParticleFromFile = ParticleDemo.extend({
    m_title: "",
    ctor: function(a) {
        this._super();
        this.m_title = a
    },
    onEnter: function() {
        this._super();
        this.setColor(cc.BLACK());
        this.removeChild(this._m_background, !0);
        this._m_background = null;
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithFile("Resources/Images/" + this.m_title + ".plist");
        this.addChild(this._m_emitter, 10);
        this.setEmitterPosition()
    },
    title: function() {
        return this.m_title
    }
}),
RadiusMode1 = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this.setColor(cc.BLACK());
        this.removeChild(this._m_background, !0);
        this._m_background = null;
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithTotalParticles(150);
        this.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_starsGrayscale));
        this._m_emitter.setDuration(cc.kCCParticleDurationInfinity);
        this._m_emitter.setEmitterMode(cc.kCCParticleModeRadius);
        this._m_emitter.setStartRadius(0);
        this._m_emitter.setStartRadiusVar(0);
        this._m_emitter.setEndRadius(160);
        this._m_emitter.setEndRadiusVar(0);
        this._m_emitter.setRotatePerSecond(180);
        this._m_emitter.setRotatePerSecondVar(0);
        this._m_emitter.setAngle(90);
        this._m_emitter.setAngleVar(0);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_emitter.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this._m_emitter.setPosVar(cc.PointZero());
        this._m_emitter.setLife(5);
        this._m_emitter.setLifeVar(0);
        this._m_emitter.setStartSpin(0);
        this._m_emitter.setStartSpinVar(0);
        this._m_emitter.setEndSpin(0);
        this._m_emitter.setEndSpinVar(0);
        this._m_emitter.setStartColor(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setStartColorVar(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setEndColor(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setEndColorVar(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setStartSize(32);
        this._m_emitter.setStartSizeVar(0);
        this._m_emitter.setEndSize(cc.kCCParticleStartSizeEqualToEndSize);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setIsBlendAdditive(!1)
    },
    title: function() {
        return "Radius Mode: Spiral"
    }
}),
RadiusMode2 = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this.setColor(cc.BLACK());
        this.removeChild(this._m_background, !0);
        this._m_background = null;
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithTotalParticles(200);
        this.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_starsGrayscale));
        this._m_emitter.setDuration(cc.kCCParticleDurationInfinity);
        this._m_emitter.setEmitterMode(cc.kCCParticleModeRadius);
        this._m_emitter.setStartRadius(100);
        this._m_emitter.setStartRadiusVar(0);
        this._m_emitter.setEndRadius(cc.kCCParticleStartRadiusEqualToEndRadius);
        this._m_emitter.setEndRadiusVar(0);
        this._m_emitter.setRotatePerSecond(45);
        this._m_emitter.setRotatePerSecondVar(0);
        this._m_emitter.setAngle(90);
        this._m_emitter.setAngleVar(0);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_emitter.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this._m_emitter.setPosVar(cc.PointZero());
        this._m_emitter.setLife(4);
        this._m_emitter.setLifeVar(0);
        this._m_emitter.setStartSpin(0);
        this._m_emitter.setStartSpinVar(0);
        this._m_emitter.setEndSpin(0);
        this._m_emitter.setEndSpinVar(0);
        this._m_emitter.setStartColor(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setStartColorVar(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setEndColor(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setEndColorVar(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setStartSize(32);
        this._m_emitter.setStartSizeVar(0);
        this._m_emitter.setEndSize(cc.kCCParticleStartSizeEqualToEndSize);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setIsBlendAdditive(!1)
    },
    title: function() {
        return "Radius Mode: Semi Circle"
    }
}),
Issue704 = ParticleDemo.extend({
    onEnter: function() {
        this._super();
        this.setColor(cc.BLACK());
        this.removeChild(this._m_background, !0);
        this._m_background = null;
        this._m_emitter = new cc.ParticleSystemQuad;
        this._m_emitter.initWithTotalParticles(100);
        this.addChild(this._m_emitter, 10);
        this._m_emitter.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        this._m_emitter.setShapeType(cc.kParticleBallShape);
        this._m_emitter.setDuration(cc.kCCParticleDurationInfinity);
        this._m_emitter.setStartRadius(50);
        this._m_emitter.setStartRadiusVar(0);
        this._m_emitter.setEndRadius(cc.kCCParticleStartRadiusEqualToEndRadius);
        this._m_emitter.setEndRadiusVar(0);
        this._m_emitter.setRotatePerSecond(0);
        this._m_emitter.setRotatePerSecondVar(0);
        this._m_emitter.setAngle(90);
        this._m_emitter.setAngleVar(0);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_emitter.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this._m_emitter.setPosVar(cc.PointZero());
        this._m_emitter.setLife(5);
        this._m_emitter.setLifeVar(0);
        this._m_emitter.setStartSpin(0);
        this._m_emitter.setStartSpinVar(0);
        this._m_emitter.setEndSpin(0);
        this._m_emitter.setEndSpinVar(0);
        this._m_emitter.setStartColor(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setStartColorVar(new cc.Color4F(0.5, 0.5, 0.5, 1));
        this._m_emitter.setEndColor(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setEndColorVar(new cc.Color4F(0.1, 0.1, 0.1, 0.2));
        this._m_emitter.setStartSize(16);
        this._m_emitter.setStartSizeVar(0);
        this._m_emitter.setEndSize(cc.kCCParticleStartSizeEqualToEndSize);
        this._m_emitter.setEmissionRate(this._m_emitter.getTotalParticles() / this._m_emitter.getLife());
        this._m_emitter.setIsBlendAdditive(!1);
        a = cc.RotateBy.actionWithDuration(16, 360);
        this._m_emitter.runAction(cc.RepeatForever.actionWithAction(a))
    },
    title: function() {
        return "Issue 704. Free + Rot"
    },
    subtitle: function() {
        return "Emitted particles should not rotate"
    }
}),
Issue870 = ParticleDemo.extend({
    _m_nIndex: 0,
    onEnter: function() {
        this._super();
        this.setColor(cc.BLACK());
        this.removeChild(this._m_background, !0);
        this._m_background = null;
        var a = new cc.ParticleSystemQuad;
        a.initWithFile("Images/SpinningPeas.plist");
        a.setTextureWithRect(cc.TextureCache.sharedTextureCache().addImage("Images/particles.png"), cc.RectMake(0, 0, 32, 32));
        this.addChild(a, 10);
        this._m_emitter = a;
        this._m_nIndex = 0;
        this.schedule(this.updateQuads, 2)
    },
    title: function() {
        return "Issue 870. SubRect"
    },
    subtitle: function() {
        return "Every 2 seconds the particle should change"
    },
    updateQuads: function() {
        this._m_nIndex = (this._m_nIndex + 1) % 4;
        var a = cc.RectMake(32 * this._m_nIndex, 0, 32, 32);
        this._m_emitter.setTextureWithRect(this._m_emitter.getTexture(), a)
    }
});
var sceneIdx_Progress = -1,
MAX_LAYER_Progress = 3,
nextProgressAction = function() {
    sceneIdx_Progress++;
    sceneIdx_Progress %= MAX_LAYER_Progress;
    return createLayer(sceneIdx_Progress)
},
backProgressAction = function() {
    sceneIdx_Progress--;
    0 > sceneIdx_Progress && (sceneIdx_Progress += MAX_LAYER_Progress);
    return createLayer(sceneIdx_Progress)
},
restartProgressAction = function() {
    return createLayer(sceneIdx_Progress)
},
createLayer = function(a) {
    switch (a) {
    case 0:
        return new SpriteProgressToRadial;
    case 1:
        return new SpriteProgressToHorizontal;
    case 2:
        return new SpriteProgressToVertical
    }
    return null
},
SpriteDemo = cc.Layer.extend({
    ctor: function() {
        this._super()
    },
    title: function() {
        return "ProgressActionsTest"
    },
    subtitle: function() {
        return ""
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 18);
        this.addChild(b, 1);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        b = this.subtitle();
        "" != b && (b = cc.LabelTTF.labelWithString(b, "Thonburi", 22), this.addChild(b, 1), b.setPosition(cc.PointMake(a.width / 2, a.height - 80)));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new ProgressActionsTestScene;
        a.addChild(restartProgressAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new ProgressActionsTestScene;
        a.addChild(nextProgressAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new ProgressActionsTestScene;
        a.addChild(backProgressAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
SpriteProgressToRadial = SpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ProgressTo.actionWithDuration(2, 100),
        c = cc.ProgressTo.actionWithDuration(2, 100),
        d = cc.ProgressTimer.progressWithFile(s_pPathSister1);
        d.setType(cc.kCCProgressTimerTypeRadialCW);
        this.addChild(d);
        d.setPosition(cc.PointMake(100, a.height / 2));
        d.runAction(cc.RepeatForever.actionWithAction(b));
        b = cc.ProgressTimer.progressWithFile(s_pPathBlock);
        b.setType(cc.kCCProgressTimerTypeRadialCCW);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width - 100, a.height / 2));
        b.runAction(cc.RepeatForever.actionWithAction(c))
    },
    subtitle: function() {
        return "ProgressTo Radial"
    }
}),
SpriteProgressToHorizontal = SpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ProgressTo.actionWithDuration(2, 100),
        c = cc.ProgressTo.actionWithDuration(2, 100),
        d = cc.ProgressTimer.progressWithFile(s_pPathSister1);
        d.setType(cc.kCCProgressTimerTypeHorizontalBarLR);
        this.addChild(d);
        d.setPosition(cc.PointMake(100, a.height / 2));
        d.runAction(cc.RepeatForever.actionWithAction(b));
        b = cc.ProgressTimer.progressWithFile(s_pPathSister2);
        b.setType(cc.kCCProgressTimerTypeHorizontalBarRL);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width - 100, a.height / 2));
        b.runAction(cc.RepeatForever.actionWithAction(c))
    },
    subtitle: function() {
        return "ProgressTo Horizontal"
    }
}),
SpriteProgressToVertical = SpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ProgressTo.actionWithDuration(2, 100),
        c = cc.ProgressTo.actionWithDuration(2, 100),
        d = cc.ProgressTimer.progressWithFile(s_pPathSister1);
        d.setType(cc.kCCProgressTimerTypeVerticalBarBT);
        this.addChild(d);
        d.setPosition(cc.PointMake(100, a.height / 2));
        d.runAction(cc.RepeatForever.actionWithAction(b));
        b = cc.ProgressTimer.progressWithFile(s_pPathSister2);
        b.setType(cc.kCCProgressTimerTypeVerticalBarTB);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width - 100, a.height / 2));
        b.runAction(cc.RepeatForever.actionWithAction(c))
    },
    subtitle: function() {
        return "ProgressTo Vertical"
    }
}),
ProgressActionsTestScene = TestScene.extend({
    runThisTest: function() {
        sceneIdx_Progress = -1;
        MAX_LAYER_Progress = 3;
        this.addChild(nextProgressAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
cc.kTagLayer = 1;
var LayerTests = ["LayerTest1", "LayerTest2", "LayerTestBlend", "LayerGradient"],
s_nLayerTestsIdx = -1;
function nextLayerTestAction() {++s_nLayerTestsIdx;
    s_nLayerTestsIdx %= LayerTests.length;
    return new window[LayerTests[s_nLayerTestsIdx]]
}
function backLayerTestAction() {--s_nLayerTestsIdx;
    0 > s_nLayerTestsIdx && (s_nLayerTestsIdx += LayerTests.length);
    return new window[LayerTests[s_nLayerTestsIdx]]
}
function restartLayerTestAction() {
    return new window[LayerTests[s_nLayerTestsIdx]]
}
var LayerTestScene = TestScene.extend({
    runThisTest: function() {
        s_nLayerTestsIdx = -1;
        this.addChild(nextLayerTestAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
LayerTest = cc.Layer.extend({
    m_strTitle: null,
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 32);
        this.addChild(b, 1);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        if (b = this.subtitle()) b = cc.LabelTTF.labelWithString(b, "Thonburi", 16),
        this.addChild(b, 1),
        b.setPosition(cc.ccp(a.width / 2, a.height - 80));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new LayerTestScene;
        a.addChild(restartLayerTestAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new LayerTestScene;
        a.addChild(nextLayerTestAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new LayerTestScene;
        a.addChild(backLayerTestAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
LayerTest1 = LayerTest.extend({
    onEnter: function() {
        this._super();
        this.setIsTouchEnabled(!0);
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(255, 0, 0, 128), 200, 200);
        b.setIsRelativeAnchorPoint(!0);
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        this.addChild(b, 1, cc.kTagLayer)
    },
    title: function() {
        return "ColorLayer resize (tap & move)"
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, cc.kCCMenuTouchPriority + 1, !0)
    },
    updateSize: function(a) {
        var a = a.locationInView(a.view()),
        a = cc.Director.sharedDirector().convertToGL(a),
        b = cc.Director.sharedDirector().getWinSize(),
        a = cc.SizeMake(2 * Math.abs(a.x - b.width / 2), 2 * Math.abs(a.y - b.height / 2));
        this.getChildByTag(cc.kTagLayer).setContentSize(a)
    },
    ccTouchBegan: function(a) {
        this.updateSize(a);
        return ! 0
    },
    ccTouchMoved: function(a) {
        this.updateSize(a)
    },
    ccTouchEnded: function(a) {
        this.updateSize(a)
    }
}),
LayerTest2 = LayerTest.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(255, 255, 0, 80), 100, 300);
        b.setPosition(cc.PointMake(a.width / 3, a.height / 2));
        b.setIsRelativeAnchorPoint(!0);
        this.addChild(b, 1);
        var c = cc.LayerColor.layerWithColorWidthHeight(cc.ccc4(0, 0, 255, 255), 100, 300);
        c.setPosition(cc.PointMake(2 * (a.width / 3), a.height / 2));
        c.setIsRelativeAnchorPoint(!0);
        this.addChild(c, 1);
        var a = cc.TintBy.actionWithDuration(2, -255, -127, 0),
        d = a.reverse(),
        a = cc.Sequence.actions(a, d, null);
        b.runAction(a);
        b = cc.FadeOut.actionWithDuration(2);
        a = b.reverse();
        b = cc.Sequence.actions(b, a, null);
        c.runAction(b)
    },
    title: function() {
        return "ColorLayer: fade and tint"
    }
}),
LayerTestBlend = LayerTest.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LayerColor.layerWithColor(cc.ccc4(255, 255, 255, 80)),
        c = cc.Sprite.spriteWithFile(s_pPathSister1),
        d = cc.Sprite.spriteWithFile(s_pPathSister2);
        this.addChild(c);
        this.addChild(d);
        this.addChild(b, 100, cc.kTagLayer);
        c.setPosition(cc.PointMake(160, a.height / 2));
        d.setPosition(cc.PointMake(320, a.height / 2));
        this.schedule(this.newBlend, 1)
    },
    newBlend: function() {
        var a = this.getChildByTag(cc.kTagLayer),
        b,
        c;
        a.getBlendFunc().dst == cc.ZERO ? (b = cc.BLEND_SRC, c = cc.BLEND_DST) : (b = cc.ONE_MINUS_DST_COLOR, c = cc.ZERO);
        a.setBlendFunc({
            src: b,
            dst: c
        })
    },
    title: function() {
        return "ColorLayer: blend"
    }
}),
LayerGradient = LayerTest.extend({
    ctor: function() {
        this.addChild(cc.LayerGradient.layerWithColor(cc.ccc4(255, 0, 0, 255), cc.ccc4(0, 255, 0, 255), cc.ccp(0.9, 0.9)), 0, cc.kTagLayer);
        this.setIsTouchEnabled(!0)
    },
    prevLocation: null,
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !0)
    },
    ccTouchBegan: function() {
        return ! 0
    },
    ccTouchEnded: function() {
        this.prevLocation = null
    },
    ccTouchCancelled: function() {},
    ccTouchMoved: function(a) {
        var b = cc.Director.sharedDirector().getWinSize(),
        a = a.locationInView(a.view()),
        b = cc.ccpSub(cc.ccp(b.width / 2, b.height / 2), a),
        b = cc.ccpNormalize(b);
        this.getChildByTag(1).setVector(b)
    },
    title: function() {
        return "LayerGradient"
    },
    subtitle: function() {
        return "Touch the screen and move your finger"
    },
    toggleItem: function() {
        var a = this.getChildByTag(cc.kTagLayer);
        a.setIsCompressedInterpolation(!a.getIsCompressedInterpolation())
    }
});
var MID_PUSHSCENE = 100,
MID_PUSHSCENETRAN = 101,
MID_QUIT = 102,
MID_REPLACESCENE = 103,
MID_REPLACESCENETRAN = 104,
MID_GOBACK = 105;
SceneTestLayer1 = cc.Layer.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.MenuItemFont.itemFromString("Test pushScene", this, this.onPushScene),
        c = cc.MenuItemFont.itemFromString("Test pushScene w/transition", this, this.onPushSceneTran),
        d = cc.MenuItemFont.itemFromString("Quit", this,
        function() {
            alert("quit")
        }),
        b = cc.Menu.menuWithItems(b, c, d);
        b.alignItemsVertically();
        this.addChild(b);
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width - 40, a.height / 2));
        a = cc.RotateBy.actionWithDuration(2, 360);
        a = cc.RepeatForever.actionWithAction(a);
        b.runAction(a);
        this._super()
    },
    onEnter: function() {
        cc.LOG("SceneTestLayer1#onEnter");
        this._super()
    },
    onEnterTransitionDidFinish: function() {
        cc.LOG("SceneTestLayer1#onEnterTransitionDidFinish");
        this._super()
    },
    testDealloc: function() {},
    onPushScene: function() {
        var a = new SceneTestScene,
        b = new SceneTestLayer2;
        a.addChild(b, 0);
        cc.Director.sharedDirector().pushScene(a)
    },
    onPushSceneTran: function() {
        var a = new SceneTestScene,
        b = new SceneTestLayer2;
        a.addChild(b, 0);
        cc.Director.sharedDirector().pushScene(cc.TransitionSlideInT.transitionWithDuration(1, a))
    },
    onQuit: function() {}
});
SceneTestLayer2 = cc.Layer.extend({
    m_timeCounter: 0,
    ctor: function() {
        this.m_timeCounter = 0;
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.MenuItemFont.itemFromString("replaceScene", this, this.onReplaceScene),
        c = cc.MenuItemFont.itemFromString("replaceScene w/transition", this, this.onReplaceSceneTran),
        d = cc.MenuItemFont.itemFromString("Go Back", this, this.onGoBack),
        b = cc.Menu.menuWithItems(b, c, d, null);
        b.alignItemsVertically();
        this.addChild(b);
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width - 40, a.height / 2));
        a = cc.RotateBy.actionWithDuration(2, 360);
        a = cc.RepeatForever.actionWithAction(a);
        b.runAction(a);
        this._super()
    },
    testDealloc: function() {},
    onGoBack: function() {
        cc.Director.sharedDirector().popScene()
    },
    onReplaceScene: function() {
        var a = new SceneTestScene,
        b = new SceneTestLayer3;
        a.addChild(b, 0);
        cc.Director.sharedDirector().replaceScene(a)
    },
    onReplaceSceneTran: function() {
        var a = new SceneTestScene,
        b = new SceneTestLayer3;
        a.addChild(b, 0);
        cc.Director.sharedDirector().replaceScene(cc.TransitionSlideInT.transitionWithDuration(2, a))
    }
});
SceneTestLayer3 = cc.LayerColor.extend({
    ctor: function() {
        this._super();
        this.setIsTouchEnabled(!0);
        var a = cc.LabelTTF.labelWithString("Touch to popScene", "Arial", 28);
        this.addChild(a);
        var b = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.PointMake(b.width / 2, b.height / 2));
        a = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(a);
        a.setPosition(cc.PointMake(b.width - 40, b.height / 2));
        b = cc.RotateBy.actionWithDuration(2, 360);
        b = cc.RepeatForever.actionWithAction(b);
        a.runAction(b)
    },
    testDealloc: function() {},
    ccTouchesEnded: function() {
        cc.Director.sharedDirector().popScene()
    }
});
SceneTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new SceneTestLayer1);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var TextureCacheTest = cc.Layer.extend({
    _m_pLabelLoading: null,
    _m_pLabelPercent: null,
    _m_nNumberOfSprites: 20,
    _m_nNumberOfLoadedSprites: 0,
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_pLabelLoading = cc.LabelTTF.labelWithString("loading...", "Arial", 15);
        this._m_pLabelPercent = cc.LabelTTF.labelWithString("%0", "Arial", 15);
        this._m_pLabelLoading.setPosition(cc.PointMake(a.width / 2, a.height / 2 - 20));
        this._m_pLabelPercent.setPosition(cc.PointMake(a.width / 2, a.height / 2 + 20));
        this.addChild(this._m_pLabelLoading);
        this.addChild(this._m_pLabelPercent);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/HelloWorld.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_01.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_02.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_03.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_04.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_05.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_06.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_07.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_08.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_09.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_10.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_11.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_12.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_13.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/grossini_dance_14.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/background1.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/background2.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/background3.png", this, this.loadingCallBack);
        cc.TextureCache.sharedTextureCache().addImageAsync("Resources/Images/blocks.png", this, this.loadingCallBack)
    },
    addSprite: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile("Resources/Images/HelloWorld.png");
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        var a = cc.Sprite.spriteWithFile("Resources/Images/grossini.png"),
        c = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_01.png"),
        d = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_02.png"),
        e = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_03.png"),
        f = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_04.png"),
        g = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_05.png"),
        h = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_06.png"),
        i = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_07.png"),
        j = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_08.png"),
        k = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_09.png"),
        l = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_10.png"),
        m = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_11.png"),
        n = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_12.png"),
        o = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_13.png"),
        p = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_14.png");
        cc.Sprite.spriteWithFile("Resources/Images/background1.png");
        cc.Sprite.spriteWithFile("Resources/Images/background2.png");
        cc.Sprite.spriteWithFile("Resources/Images/background3.png");
        cc.Sprite.spriteWithFile("Resources/Images/blocks.png");
        a.setPosition(cc.PointMake(50, 50));
        c.setPosition(cc.PointMake(60, 50));
        d.setPosition(cc.PointMake(70, 50));
        e.setPosition(cc.PointMake(80, 50));
        f.setPosition(cc.PointMake(90, 50));
        g.setPosition(cc.PointMake(100, 50));
        h.setPosition(cc.PointMake(50, 180));
        i.setPosition(cc.PointMake(60, 180));
        j.setPosition(cc.PointMake(70, 180));
        k.setPosition(cc.PointMake(80, 180));
        l.setPosition(cc.PointMake(90, 180));
        m.setPosition(cc.PointMake(100, 180));
        n.setPosition(cc.PointMake(50, 270));
        o.setPosition(cc.PointMake(60, 270));
        p.setPosition(cc.PointMake(70, 270));
        this.addChild(b);
        this.addChild(a);
        this.addChild(c);
        this.addChild(d);
        this.addChild(e);
        this.addChild(f);
        this.addChild(g);
        this.addChild(h);
        this.addChild(i);
        this.addChild(j);
        this.addChild(k);
        this.addChild(l);
        this.addChild(m);
        this.addChild(n);
        this.addChild(o);
        this.addChild(p)
    },
    loadingCallBack: function() {++this._m_nNumberOfLoadedSprites;
        this._m_pLabelPercent = 100 * (this._m_nNumberOfLoadedSprites / this._m_nNumberOfSprites);
        this._m_nNumberOfLoadedSprites == this._m_nNumberOfSprites && (this.removeChild(this._m_pLabelLoading, !0), this.removeChild(this._m_pLabelPercent, !0), this.addSprite())
    }
}),
TextureCacheTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new TextureCacheTest);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kTagSpriteBatchNode = kTagTileMap = 1,
kTagNode = 2,
kTagAnimation1 = 1,
kTagSpriteLeft = 2,
kTagSpriteRight = 3,
kTagSprite1 = 0,
kTagSprite2 = 1,
kTagSprite3 = 2,
kTagSprite4 = 3,
kTagSprite5 = 4,
kTagSprite6 = 5,
kTagSprite7 = 6,
kTagSprite8 = 7,
IDC_NEXT = 100,
IDC_BACK = 101,
IDC_RESTART = 102,
sceneIdx = -1,
MAX_LAYER = 48,
nextSpriteTestAction = function() {
    sceneIdx++;
    sceneIdx %= MAX_LAYER;
    return createSpriteTestLayer(sceneIdx)
},
backSpriteTestAction = function() {
    sceneIdx--;
    0 > sceneIdx && (sceneIdx += MAX_LAYER);
    return createSpriteTestLayer(sceneIdx)
},
restartSpriteTestAction = function() {
    return createSpriteTestLayer(sceneIdx)
},
createSpriteTestLayer = function(a) {
    switch (a) {
    case 0:
        return new Sprite1;
    case 1:
        return new SpriteBatchNode1;
    case 2:
        return new SpriteFrameTest;
    case 3:
        return new SpriteFrameAliasNameTest;
    case 4:
        return new SpriteAnchorPoint;
    case 5:
        return new SpriteBatchNodeAnchorPoint;
    case 6:
        return new SpriteOffsetAnchorRotation;
    case 7:
        return new SpriteBatchNodeOffsetAnchorRotation;
    case 8:
        return new SpriteOffsetAnchorScale;
    case 9:
        return new SpriteBatchNodeOffsetAnchorScale;
    case 10:
        return new SpriteAnimationSplit;
    case 11:
        return new SpriteColorOpacity;
    case 12:
        return new SpriteBatchNodeColorOpacity;
    case 13:
        return new SpriteZOrder;
    case 14:
        return new SpriteBatchNodeZOrder;
    case 15:
        return new SpriteBatchNodeReorder;
    case 16:
        return new SpriteBatchNodeReorderIssue744;
    case 17:
        return new SpriteBatchNodeReorderIssue766;
    case 18:
        return new SpriteBatchNodeReorderIssue767;
    case 19:
        return new SpriteZVertex;
    case 20:
        return new SpriteBatchNodeZVertex;
    case 21:
        return new Sprite6;
    case 22:
        return new SpriteFlip;
    case 23:
        return new SpriteBatchNodeFlip;
    case 24:
        return new SpriteAliased;
    case 25:
        return new SpriteBatchNodeAliased;
    case 26:
        return new SpriteNewTexture;
    case 27:
        return new SpriteBatchNodeNewTexture;
    case 28:
        return new SpriteHybrid;
    case 29:
        return new SpriteBatchNodeChildren;
    case 30:
        return new SpriteBatchNodeChildren2;
    case 31:
        return new SpriteBatchNodeChildrenZ;
    case 32:
        return new SpriteChildrenVisibility;
    case 33:
        return new SpriteChildrenVisibilityIssue665;
    case 34:
        return new SpriteChildrenAnchorPoint;
    case 35:
        return new SpriteBatchNodeChildrenAnchorPoint;
    case 36:
        return new SpriteBatchNodeChildrenScale;
    case 37:
        return new SpriteChildrenChildren;
    case 38:
        return new SpriteBatchNodeChildrenChildren;
    case 39:
        return new SpriteNilTexture;
    case 40:
        return new SpriteSubclass;
    case 41:
        return new AnimationCache;
    case 42:
        return new SpriteOffsetAnchorSkew;
    case 43:
        return new SpriteBatchNodeOffsetAnchorSkew;
    case 44:
        return new SpriteOffsetAnchorSkewScale;
    case 45:
        return new SpriteBatchNodeOffsetAnchorSkewScale;
    case 46:
        return new SpriteOffsetAnchorFlip;
    case 47:
        return new SpriteBatchNodeOffsetAnchorFlip
    }
    return null
},
SpriteTestDemo = cc.Layer.extend({
    _m_strTitle: "",
    ctor: function() {
        this._super()
    },
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 28);
        this.addChild(b, 1);
        b.setPosition(cc.ccp(a.width / 2, a.height - 50));
        b = this.subtitle();
        "" != b && (b = cc.LabelTTF.labelWithString(b, "Thonburi", 16), this.addChild(b, 1), b.setPosition(cc.ccp(a.width / 2, a.height - 80)));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.ccp(a.width / 2 - 100, 30));
        c.setPosition(cc.ccp(a.width / 2, 30));
        d.setPosition(cc.ccp(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new SpriteTestScene;
        a.addChild(restartSpriteTestAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new SpriteTestScene;
        a.addChild(nextSpriteTestAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new SpriteTestScene;
        a.addChild(backSpriteTestAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
Sprite1 = SpriteTestDemo.extend({
    ctor: function() {
        this.setIsTouchEnabled(!0);
        var a = cc.Director.sharedDirector().getWinSize();
        this.addNewSpriteWithCoords(cc.ccp(a.width / 2, a.height / 2))
    },
    title: function() {
        return "Sprite (tap screen)"
    },
    addNewSpriteWithCoords: function(a) {
        var b = 0 | 14 * cc.RANDOM_0_1(),
        b = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85 * (b % 5), 121 * (0 | b / 5), 85, 121));
        this.addChild(b);
        b.setPosition(cc.ccp(a.x, a.y));
        var a = cc.RANDOM_0_1(),
        a = 0.2 > a ? cc.ScaleBy.actionWithDuration(3, 2) : 0.4 > a ? cc.RotateBy.actionWithDuration(3, 360) : 0.6 > a ? cc.Blink.actionWithDuration(1, 3) : 0.8 > a ? cc.TintBy.actionWithDuration(2, 0, -255, -255) : cc.FadeOut.actionWithDuration(2),
        c = a.reverse(),
        a = cc.Sequence.actions(a, c, null);
        b.runAction(cc.RepeatForever.actionWithAction(a))
    },
    ccTouchesEnded: function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (!c) break;
            this.addNewSpriteWithCoords(c.locationInView(c.view()))
        }
    }
}),
SpriteBatchNode1 = SpriteTestDemo.extend({
    ctor: function() {
        this.setIsTouchEnabled(!0);
        this.addChild(cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 50), 0, kTagSpriteBatchNode);
        var a = cc.Director.sharedDirector().getWinSize();
        this.addNewSpriteWithCoords(cc.ccp(a.width / 2, a.height / 2))
    },
    title: function() {
        return "SpriteBatchNode (tap screen)"
    },
    addNewSpriteWithCoords: function(a) {
        var b = this.getChildByTag(kTagSpriteBatchNode),
        c = 0 | 14 * cc.RANDOM_0_1(),
        d = 85 * (c % 5),
        c = 121 * (0 | c / 5),
        d = cc.Sprite.spriteWithTexture(b.getTexture(), cc.RectMake(d, c, 85, 121));
        b.addChild(d);
        d.setPosition(cc.ccp(a.x, a.y));
        a = cc.RANDOM_0_1();
        a = 0.2 > a ? cc.ScaleBy.actionWithDuration(3, 2) : 0.4 > a ? cc.RotateBy.actionWithDuration(3, 360) : 0.6 > a ? cc.Blink.actionWithDuration(1, 3) : 0.8 > a ? cc.TintBy.actionWithDuration(2, 0, -255, -255) : cc.FadeOut.actionWithDuration(2);
        b = a.reverse();
        a = cc.Sequence.actions(a, b, null);
        d.runAction(cc.RepeatForever.actionWithAction(a))
    },
    ccTouchesEnded: function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (!c) break;
            this.addNewSpriteWithCoords(c.locationInView(c.view()))
        }
    }
}),
SpriteColorOpacity = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(0, 121, 85, 121)),
        b = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 121, 85, 121)),
        c = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(170, 121, 85, 121)),
        d = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(255, 121, 85, 121)),
        e = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(0, 121, 85, 121)),
        f = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 121, 85, 121)),
        g = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(170, 121, 85, 121)),
        h = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(255, 121, 85, 121)),
        i = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.ccp(1 * (i.width / 5), 1 * (i.height / 3)));
        b.setPosition(cc.ccp(2 * (i.width / 5), 1 * (i.height / 3)));
        c.setPosition(cc.ccp(3 * (i.width / 5), 1 * (i.height / 3)));
        d.setPosition(cc.ccp(4 * (i.width / 5), 1 * (i.height / 3)));
        e.setPosition(cc.ccp(1 * (i.width / 5), 2 * (i.height / 3)));
        f.setPosition(cc.ccp(2 * (i.width / 5), 2 * (i.height / 3)));
        g.setPosition(cc.ccp(3 * (i.width / 5), 2 * (i.height / 3)));
        h.setPosition(cc.ccp(4 * (i.width / 5), 2 * (i.height / 3)));
        var i = cc.FadeIn.actionWithDuration(2),
        j = i.reverse(),
        i = cc.RepeatForever.actionWithAction(cc.Sequence.actions(i, j, null)),
        j = cc.TintBy.actionWithDuration(2, 0, -255, -255),
        k = j.reverse(),
        j = cc.RepeatForever.actionWithAction(cc.Sequence.actions(j, k, null)),
        k = cc.TintBy.actionWithDuration(2, -255, 0, -255),
        l = k.reverse(),
        k = cc.RepeatForever.actionWithAction(cc.Sequence.actions(k, l, null)),
        l = cc.TintBy.actionWithDuration(2, -255, -255, 0),
        m = l.reverse(),
        l = cc.RepeatForever.actionWithAction(cc.Sequence.actions(l, m, null));
        e.runAction(j);
        f.runAction(k);
        g.runAction(l);
        h.runAction(i);
        this.addChild(a, 0, kTagSprite1);
        this.addChild(b, 0, kTagSprite2);
        this.addChild(c, 0, kTagSprite3);
        this.addChild(d, 0, kTagSprite4);
        this.addChild(e, 0, kTagSprite5);
        this.addChild(f, 0, kTagSprite6);
        this.addChild(g, 0, kTagSprite7);
        this.addChild(h, 0, kTagSprite8);
        this.schedule(this.removeAndAddSprite, 2)
    },
    removeAndAddSprite: function() {
        var a = this.getChildByTag(kTagSprite5);
        this.removeChild(a, !1);
        this.addChild(a, 0, kTagSprite5)
    },
    title: function() {
        return "Sprite: Color & Opacity"
    }
}),
SpriteBatchNodeColorOpacity = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 1);
        this.addChild(a, 0, kTagSpriteBatchNode);
        var b = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(0, 121, 85, 121)),
        c = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 121, 85, 121)),
        d = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(170, 121, 85, 121)),
        e = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(255, 121, 85, 121)),
        f = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(0, 121, 85, 121)),
        g = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 121, 85, 121)),
        h = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(170, 121, 85, 121)),
        i = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(255, 121, 85, 121)),
        j = cc.Director.sharedDirector().getWinSize();
        b.setPosition(cc.ccp(1 * (j.width / 5), 1 * (j.height / 3)));
        c.setPosition(cc.ccp(2 * (j.width / 5), 1 * (j.height / 3)));
        d.setPosition(cc.ccp(3 * (j.width / 5), 1 * (j.height / 3)));
        e.setPosition(cc.ccp(4 * (j.width / 5), 1 * (j.height / 3)));
        f.setPosition(cc.ccp(1 * (j.width / 5), 2 * (j.height / 3)));
        g.setPosition(cc.ccp(2 * (j.width / 5), 2 * (j.height / 3)));
        h.setPosition(cc.ccp(3 * (j.width / 5), 2 * (j.height / 3)));
        i.setPosition(cc.ccp(4 * (j.width / 5), 2 * (j.height / 3)));
        var j = cc.FadeIn.actionWithDuration(2),
        k = j.reverse(),
        j = cc.RepeatForever.actionWithAction(cc.Sequence.actions(j, k, null)),
        k = cc.TintBy.actionWithDuration(2, 0, -255, -255),
        l = k.reverse(),
        k = cc.RepeatForever.actionWithAction(cc.Sequence.actions(k, l, null)),
        l = cc.TintBy.actionWithDuration(2, -255, 0, -255),
        m = l.reverse(),
        l = cc.RepeatForever.actionWithAction(cc.Sequence.actions(l, m, null)),
        m = cc.TintBy.actionWithDuration(2, -255, -255, 0),
        n = m.reverse(),
        m = cc.RepeatForever.actionWithAction(cc.Sequence.actions(m, n, null));
        f.runAction(k);
        g.runAction(l);
        h.runAction(m);
        i.runAction(j);
        a.addChild(b, 0, kTagSprite1);
        a.addChild(c, 0, kTagSprite2);
        a.addChild(d, 0, kTagSprite3);
        a.addChild(e, 0, kTagSprite4);
        a.addChild(f, 0, kTagSprite5);
        a.addChild(g, 0, kTagSprite6);
        a.addChild(h, 0, kTagSprite7);
        a.addChild(i, 0, kTagSprite8);
        this.schedule(this.removeAndAddSprite, 2)
    },
    removeAndAddSprite: function() {
        var a = this.getChildByTag(kTagSpriteBatchNode),
        b = a.getChildByTag(kTagSprite5);
        a.removeChild(b, !1);
        a.addChild(b, 0, kTagSprite5)
    },
    title: function() {
        return "SpriteBatchNode: Color & Opacity"
    }
}),
SpriteZOrder = SpriteTestDemo.extend({
    _m_dir: 0,
    ctor: function() {
        this._m_dir = 1;
        for (var a = cc.Director.sharedDirector().getWinSize(), b = a.width / 11, c = 0; 5 > c; c++) {
            var d = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(0, 121, 85, 121));
            d.setPosition(cc.ccp((c + 1) * b, a.height / 2));
            this.addChild(d, c)
        }
        for (c = 5; 10 > c; c++) d = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 0, 85, 121)),
        d.setPosition(cc.ccp((c + 1) * b, a.height / 2)),
        this.addChild(d, 14 - c);
        d = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(255, 0, 85, 121));
        this.addChild(d, -1, kTagSprite1);
        d.setPosition(cc.ccp(a.width / 2, a.height / 2 - 20));
        d.setScaleX(6);
        d.setColor(cc.RED());
        this.schedule(this.reorderSprite, 1)
    },
    reorderSprite: function() {
        var a = this.getChildByTag(kTagSprite1),
        b = a.getZOrder(); - 1 > b && (this._m_dir = 1);
        10 < b && (this._m_dir = -1);
        b += 3 * this._m_dir;
        this.reorderChild(a, b)
    },
    title: function() {
        return "Sprite: Z order"
    }
}),
SpriteBatchNodeZOrder = SpriteTestDemo.extend({
    _m_dir: 0,
    ctor: function() {
        this._m_dir = 1;
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 1);
        this.addChild(a, 0, kTagSpriteBatchNode);
        for (var b = cc.Director.sharedDirector().getWinSize(), c = b.width / 11, d = 0; 5 > d; d++) {
            var e = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(0, 121, 85, 121));
            e.setPosition(cc.ccp((d + 1) * c, b.height / 2));
            a.addChild(e, d)
        }
        for (d = 5; 10 > d; d++) e = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 0, 85, 121)),
        e.setPosition(cc.ccp((d + 1) * c, b.height / 2)),
        a.addChild(e, 14 - d);
        e = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(255, 0, 85, 121));
        a.addChild(e, -1, kTagSprite1);
        e.setPosition(cc.ccp(b.width / 2, b.height / 2 - 20));
        e.setScaleX(6);
        e.setColor(cc.RED());
        this.schedule(this.reorderSprite, 1)
    },
    reorderSprite: function() {
        var a = this.getChildByTag(kTagSpriteBatchNode),
        b = a.getChildByTag(kTagSprite1),
        c = b.getZOrder(); - 1 > c && (this._m_dir = 1);
        10 < c && (this._m_dir = -1);
        c += 3 * this._m_dir;
        a.reorderChild(b, c)
    },
    title: function() {
        return "SpriteBatchNode: Z order"
    }
}),
SpriteBatchNodeReorder = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = [], b = cc.SpriteBatchNode.batchNodeWithFile(s_ghosts), c = 0; 10 > c; c++) {
            var d = cc.Sprite.spriteWithBatchNode(b, cc.RectMake(0, 0, 50, 50));
            a.push(d);
            b.addChild(d, 10)
        }
        for (c = 0; 10 > c; c++) 5 != c && b.reorderChild(a[c], 9);
        d = b.getChildren();
        for (c = 0; c < d.length; c++) {
            a = d[c];
            if (!a) break;
            a.getAtlasIndex()
        }
        b = b.getDescendants();
        for (c = 0; c < b.length; c++) {
            a = b[c];
            if (!a) break;
            a.getAtlasIndex()
        }
    },
    title: function() {
        return "SpriteBatchNode: reorder #1"
    },
    subtitle: function() {
        return "Should not crash"
    }
}),
SpriteBatchNodeReorderIssue744 = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 15);
        this.addChild(b, 0, kTagSpriteBatchNode);
        var c = cc.Sprite.spriteWithBatchNode(b, cc.RectMake(0, 0, 85, 121));
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        b.addChild(c, 3);
        b.reorderChild(c, 1)
    },
    title: function() {
        return "SpriteBatchNode: reorder issue #744"
    },
    subtitle: function() {
        return "Should not crash"
    }
}),
SpriteBatchNodeReorderIssue766 = SpriteTestDemo.extend({
    _batchNode: null,
    _sprite1: null,
    _sprite2: null,
    _sprite3: null,
    ctor: function() {
        this._batchNode = cc.SpriteBatchNode.batchNodeWithFile(s_piece, 15);
        this.addChild(this._batchNode, 1, 0);
        this._sprite1 = this.makeSpriteZ(2);
        this._sprite1.setPosition(cc.PointMake(200, 160));
        this._sprite2 = this.makeSpriteZ(3);
        this._sprite2.setPosition(cc.PointMake(264, 160));
        this._sprite3 = this.makeSpriteZ(4);
        this._sprite3.setPosition(cc.PointMake(328, 160));
        this.schedule(this.reorderSprite, 2)
    },
    title: function() {
        return "SpriteBatchNode: reorder issue #766"
    },
    subtitle: function() {
        return "In 2 seconds 1 sprite will be reordered"
    },
    reorderSprite: function() {
        this.unschedule(this.reorderSprite);
        this._batchNode.reorderChild(this._sprite1, 4)
    },
    makeSpriteZ: function(a) {
        var b = cc.Sprite.spriteWithBatchNode(this._batchNode, cc.RectMake(128, 0, 64, 64));
        this._batchNode.addChild(b, a + 1, 0);
        var c = cc.Sprite.spriteWithBatchNode(this._batchNode, cc.RectMake(0, 0, 64, 64));
        c.setOpacity(128);
        b.addChild(c, a, 3);
        c = cc.Sprite.spriteWithBatchNode(this._batchNode, cc.RectMake(64, 0, 64, 64));
        b.addChild(c, a + 2, 3);
        return b
    }
}),
SpriteBatchNodeReorderIssue767 = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_ghostsPlist, s_ghosts);
        var b = cc.SpriteBatchNode.batchNodeWithFile(s_ghosts);
        this.addChild(b, 0, kTagSprite1);
        var c = cc.Sprite.spriteWithSpriteFrameName("father.gif");
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        b.addChild(c, 0, kTagSprite2);
        var d = c.getContentSize(),
        b = cc.Sprite.spriteWithSpriteFrameName("sister1.gif");
        b.setPosition(cc.ccp( - 25 + d.width / 2, 0 + d.height / 2));
        c.addChild(b, -1, kTagSpriteLeft);
        var e = b.getContentSize(),
        a = cc.Sprite.spriteWithSpriteFrameName("sister2.gif");
        a.setPosition(cc.ccp(25 + d.width / 2, 0 + d.height / 2));
        c.addChild(a, 1, kTagSpriteRight);
        c = b.getContentSize();
        d = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        d.setScale(0.65);
        d.setPosition(cc.ccp(0 + e.width / 2, -50 + e.height / 2));
        b.addChild(d, -1);
        d = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        d.setScale(0.65);
        d.setPosition(cc.ccp(0 + e.width / 2, 50 + e.height / 2));
        b.addChild(d, 1);
        b = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        b.setScale(0.65);
        b.setPosition(cc.ccp(0 + c.width / 2, -50 + c.height / 2));
        a.addChild(b, -1);
        b = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        b.setScale(0.65);
        b.setPosition(cc.ccp(0 + c.width / 2, 50 + c.height / 2));
        a.addChild(b, 1);
        this.schedule(this.reorderSprites, 1)
    },
    title: function() {
        return "SpriteBatchNode: reorder issue #767"
    },
    subtitle: function() {
        return "Should not crash"
    },
    reorderSprites: function() {
        var a = this.getChildByTag(kTagSprite1).getChildByTag(kTagSprite2),
        b = a.getChildByTag(kTagSpriteLeft),
        c = a.getChildByTag(kTagSpriteRight),
        d = 1;
        1 == b.getZOrder() && (d = -1);
        a.reorderChild(b, d);
        a.reorderChild(c, -d)
    }
}),
SpriteZVertex = SpriteTestDemo.extend({
    _m_dir: 0,
    _m_time: 0,
    ctor: function() {
        this._m_dir = 1;
        this._m_time = 0;
        var a = cc.Director.sharedDirector().getWinSize(),
        b = a.width / 12,
        c = cc.Node.node();
        c.setContentSize(cc.SizeMake(a.width, a.height));
        c.setAnchorPoint(cc.ccp(0.5, 0.5));
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this.addChild(c, 0);
        for (var d = 0; 5 > d; d++) {
            var e = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(0, 121, 85, 121));
            e.setPosition(cc.ccp((d + 1) * b, a.height / 2));
            e.setVertexZ(10 + 40 * d);
            c.addChild(e, 0)
        }
        for (d = 5; 11 > d; d++) e = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 0, 85, 121)),
        e.setPosition(cc.ccp((d + 1) * b, a.height / 2)),
        e.setVertexZ(10 + 40 * (10 - d)),
        c.addChild(e, 0);
        c.runAction(cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0))
    },
    title: function() {
        return "Sprite: openGL Z vertex"
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.DirectorProjection3D)
    },
    onExit: function() {
        cc.Director.sharedDirector().setProjection(cc.DirectorProjection2D);
        this._super()
    }
}),
SpriteBatchNodeZVertex = SpriteTestDemo.extend({
    _m_dir: 0,
    _m_time: 0,
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = a.width / 12,
        c = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 1);
        c.setContentSize(cc.SizeMake(a.width, a.height));
        c.setAnchorPoint(cc.ccp(0.5, 0.5));
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this.addChild(c, 0, kTagSpriteBatchNode);
        for (var d = 0; 5 > d; d++) {
            var e = cc.Sprite.spriteWithTexture(c.getTexture(), cc.RectMake(0, 121, 85, 121));
            e.setPosition(cc.ccp((d + 1) * b, a.height / 2));
            e.setVertexZ(10 + 40 * d);
            c.addChild(e, 0)
        }
        for (d = 5; 11 > d; d++) e = cc.Sprite.spriteWithTexture(c.getTexture(), cc.RectMake(85, 0, 85, 121)),
        e.setPosition(cc.ccp((d + 1) * b, a.height / 2)),
        e.setVertexZ(10 + 40 * (10 - d)),
        c.addChild(e, 0);
        c.runAction(cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0))
    },
    title: function() {
        return "SpriteBatchNode: openGL Z vertex"
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.DirectorProjection3D)
    },
    onExit: function() {
        cc.Director.sharedDirector().setProjection(cc.DirectorProjection2D);
        this._super()
    }
}),
SpriteAnchorPoint = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.RotateBy.actionWithDuration(10, 360),
            c = cc.RepeatForever.actionWithAction(c),
            d = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85 * b, 121, 85, 121));
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 10);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            d.runAction(c);
            this.addChild(d, b)
        }
    },
    title: function() {
        return "Sprite: anchor point"
    }
}),
SpriteBatchNodeAnchorPoint = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 1);
        this.addChild(a, 0, kTagSpriteBatchNode);
        for (var b = cc.Director.sharedDirector().getWinSize(), c = 0; 3 > c; c++) {
            var d = cc.RotateBy.actionWithDuration(10, 360),
            d = cc.RepeatForever.actionWithAction(d),
            e = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85 * c, 121, 85, 121));
            e.setPosition(cc.ccp(b.width / 4 * (c + 1), b.height / 2));
            var f = cc.Sprite.spriteWithFile(s_pPathR1);
            f.setScale(0.25);
            f.setPosition(e.getPosition());
            this.addChild(f, 1);
            switch (c) {
            case 0:
                e.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                e.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                e.setAnchorPoint(cc.ccp(1, 1))
            }
            f.setPosition(e.getPosition());
            e.runAction(d);
            a.addChild(e, c)
        }
    },
    title: function() {
        return "SpriteBatchNode: anchor point"
    }
}),
Sprite6 = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 1);
        this.addChild(a, 0, kTagSpriteBatchNode);
        a.setIsRelativeAnchorPoint(!1);
        var b = cc.Director.sharedDirector().getWinSize();
        a.setAnchorPoint(cc.ccp(0.5, 0.5));
        a.setContentSize(cc.SizeMake(b.width, b.height));
        for (var c = cc.RotateBy.actionWithDuration(5, 360), d = c.reverse(), c = cc.Sequence.actions(c, d, null), c = cc.RepeatForever.actionWithAction(c), d = cc.ScaleBy.actionWithDuration(5, 1.5), e = d.reverse(), d = cc.Sequence.actions(d, e, null), d = cc.RepeatForever.actionWithAction(d), e = b.width / 4, f = 0; 3 > f; f++) {
            var g = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85 * f, 121, 85, 121));
            g.setPosition(cc.ccp((f + 1) * e, b.height / 2));
            var h = cc.RotateBy.actionWithDuration(5, 360),
            h = cc.RepeatForever.actionWithAction(h);
            g.runAction(h.copy());
            a.addChild(g, f)
        }
        a.runAction(d);
        a.runAction(c)
    },
    title: function() {
        return "SpriteBatchNode transformation"
    }
}),
SpriteFlip = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 121, 85, 121));
        b.setPosition(cc.ccp(a.width / 2 - 100, a.height / 2));
        this.addChild(b, 0, kTagSprite1);
        b = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 121, 85, 121));
        b.setPosition(cc.ccp(a.width / 2 + 100, a.height / 2));
        this.addChild(b, 0, kTagSprite2);
        this.schedule(this.flipSprites, 1)
    },
    title: function() {
        return "Sprite Flip X & Y"
    },
    flipSprites: function() {
        var a = this.getChildByTag(kTagSprite1),
        b = this.getChildByTag(kTagSprite2);
        cc.LOG("Pre: " + a.getContentSize().height);
        a.setFlipX(!a.isFlipX());
        b.setFlipY(!b.isFlipY());
        cc.LOG("Post: " + a.getContentSize().height)
    }
}),
SpriteBatchNodeFlip = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 10);
        this.addChild(a, 0, kTagSpriteBatchNode);
        var b = cc.Director.sharedDirector().getWinSize(),
        c = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 121, 85, 121));
        c.setPosition(cc.ccp(b.width / 2 - 100, b.height / 2));
        a.addChild(c, 0, kTagSprite1);
        c = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 121, 85, 121));
        c.setPosition(cc.ccp(b.width / 2 + 100, b.height / 2));
        a.addChild(c, 0, kTagSprite2);
        this.schedule(this.flipSprites, 1)
    },
    title: function() {
        return "SpriteBatchNode Flip X & Y"
    },
    flipSprites: function() {
        var a = this.getChildByTag(kTagSpriteBatchNode),
        b = a.getChildByTag(kTagSprite1),
        a = a.getChildByTag(kTagSprite2);
        cc.LOG("Pre: " + b.getContentSize().height);
        b.setFlipX(!b.isFlipX());
        a.setFlipY(!a.isFlipY());
        cc.LOG("Post: " + b.getContentSize().height)
    }
}),
SpriteAliased = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 121, 85, 121));
        b.setPosition(cc.ccp(a.width / 2 - 100, a.height / 2));
        this.addChild(b, 0, kTagSprite1);
        var c = cc.Sprite.spriteWithFile(s_grossini_dance_atlas, cc.RectMake(85, 121, 85, 121));
        c.setPosition(cc.ccp(a.width / 2 + 100, a.height / 2));
        this.addChild(c, 0, kTagSprite2);
        var a = cc.ScaleBy.actionWithDuration(2, 5),
        d = a.reverse(),
        a = cc.Sequence.actions(a, d, null),
        a = cc.RepeatForever.actionWithAction(a),
        d = cc.ScaleBy.actionWithDuration(2, 5),
        e = d.reverse(),
        d = cc.Sequence.actions(d, e, null),
        d = cc.RepeatForever.actionWithAction(d);
        b.runAction(a);
        c.runAction(d)
    },
    title: function() {
        return "Sprite Aliased"
    },
    onEnter: function() {
        this._super();
        this.getChildByTag(kTagSprite1)
    },
    onExit: function() {
        this.getChildByTag(kTagSprite1);
        this._super()
    }
}),
SpriteBatchNodeAliased = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 10);
        this.addChild(a, 0, kTagSpriteBatchNode);
        var b = cc.Director.sharedDirector().getWinSize(),
        c = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 121, 85, 121));
        c.setPosition(cc.ccp(b.width / 2 - 100, b.height / 2));
        a.addChild(c, 0, kTagSprite1);
        var d = cc.Sprite.spriteWithTexture(a.getTexture(), cc.RectMake(85, 121, 85, 121));
        d.setPosition(cc.ccp(b.width / 2 + 100, b.height / 2));
        a.addChild(d, 0, kTagSprite2);
        var a = cc.ScaleBy.actionWithDuration(2, 5),
        b = a.reverse(),
        a = cc.Sequence.actions(a, b, null),
        a = cc.RepeatForever.actionWithAction(a),
        b = cc.ScaleBy.actionWithDuration(2, 5),
        e = b.reverse(),
        b = cc.Sequence.actions(b, e, null),
        b = cc.RepeatForever.actionWithAction(b);
        c.runAction(a);
        d.runAction(b)
    },
    title: function() {
        return "SpriteBatchNode Aliased"
    },
    onEnter: function() {
        this._super();
        this.getChildByTag(kTagSpriteBatchNode)
    },
    onExit: function() {
        this.getChildByTag(kTagSpriteBatchNode);
        this._super()
    }
}),
SpriteNewTexture = SpriteTestDemo.extend({
    _m_usingTexture1: !1,
    _m_texture1: null,
    _m_texture2: null,
    ctor: function() {
        this.setIsTouchEnabled(!0);
        this.addChild(cc.Node.node(), 0, kTagSpriteBatchNode);
        this._m_texture1 = cc.TextureCache.sharedTextureCache().addImage(s_grossini_dance_atlas);
        this._m_texture2 = cc.TextureCache.sharedTextureCache().addImage(s_grossini_dance_atlas_mono);
        this._m_usingTexture1 = !0;
        for (var a = 0; 30 > a; a++) this.addNewSprite()
    },
    title: function() {
        return "Sprite New texture (tap)"
    },
    addNewSprite: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ccp(cc.RANDOM_0_1() * a.width, cc.RANDOM_0_1() * a.height),
        c = 0 | 14 * cc.RANDOM_0_1(),
        a = 85 * (c % 5),
        d = 121 * (0 | c / 5),
        c = this.getChildByTag(kTagSpriteBatchNode),
        a = cc.Sprite.spriteWithTexture(this._m_texture1, cc.RectMake(a, d, 85, 121));
        c.addChild(a);
        a.setPosition(cc.ccp(b.x, b.y));
        b = cc.RANDOM_0_1();
        b = 0.2 > b ? cc.ScaleBy.actionWithDuration(3, 2) : 0.4 > b ? cc.RotateBy.actionWithDuration(3, 360) : 0.6 > b ? cc.Blink.actionWithDuration(1, 3) : cc.FadeOut.actionWithDuration(2);
        c = b.reverse();
        b = cc.Sequence.actions(b, c, null);
        a.runAction(cc.RepeatForever.actionWithAction(b))
    },
    ccTouchesEnded: function() {
        var a = this.getChildByTag(kTagSpriteBatchNode).getChildren(),
        b;
        if (this._m_usingTexture1) {
            for (var c = 0; c < a.length; c++) {
                b = a[c];
                if (!b) break;
                b.setTexture(this._m_texture2)
            }
            this._m_usingTexture1 = !1
        } else {
            for (c = 0; c < a.length; c++) {
                b = a[c];
                if (!b) break;
                b.setTexture(this._m_texture1)
            }
            this._m_usingTexture1 = !0
        }
    }
}),
SpriteBatchNodeNewTexture = SpriteTestDemo.extend({
    _m_texture1: null,
    _m_texture2: null,
    ctor: function() {
        this.setIsTouchEnabled(!0);
        var a = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_dance_atlas, 50);
        this.addChild(a, 0, kTagSpriteBatchNode);
        this._m_texture1 = a.getTexture();
        this._m_texture2 = cc.TextureCache.sharedTextureCache().addImage(s_grossini_dance_atlas_mono);
        for (a = 0; 30 > a; a++) this.addNewSprite()
    },
    title: function() {
        return "SpriteBatchNode new texture (tap)"
    },
    addNewSprite: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ccp(cc.RANDOM_0_1() * a.width, cc.RANDOM_0_1() * a.height),
        c = this.getChildByTag(kTagSpriteBatchNode),
        d = 0 | 14 * cc.RANDOM_0_1(),
        a = 85 * (d % 5),
        d = 121 * (0 | d / 5),
        a = cc.Sprite.spriteWithTexture(c.getTexture(), cc.RectMake(a, d, 85, 121));
        c.addChild(a);
        a.setPosition(cc.ccp(b.x, b.y));
        b = cc.RANDOM_0_1();
        b = 0.2 > b ? cc.ScaleBy.actionWithDuration(3, 2) : 0.4 > b ? cc.RotateBy.actionWithDuration(3, 360) : 0.6 > b ? cc.Blink.actionWithDuration(1, 3) : cc.FadeOut.actionWithDuration(2);
        c = b.reverse();
        b = cc.Sequence.actions(b, c, null);
        a.runAction(cc.RepeatForever.actionWithAction(b))
    },
    ccTouchesEnded: function() {
        var a = this.getChildByTag(kTagSpriteBatchNode);
        a.getTexture() == this._m_texture1 ? a.setTexture(this._m_texture2) : a.setTexture(this._m_texture1)
    }
}),
SpriteFrameTest = SpriteTestDemo.extend({
    _m_pSprite1: null,
    _m_pSprite2: null,
    _m_nCounter: 0,
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.SpriteFrameCache.sharedSpriteFrameCache();
        b.addSpriteFramesWithFile(s_grossiniPlist);
        b.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
        b.addSpriteFramesWithFile(s_grossini_bluePlist, s_grossini_blue);
        this._m_pSprite1 = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        this._m_pSprite1.setPosition(cc.ccp(a.width / 2 - 80, a.height / 2));
        var c = cc.SpriteBatchNode.batchNodeWithFile(s_grossini);
        c.addChild(this._m_pSprite1);
        this.addChild(c);
        for (var c = [], d = "", e = 1; 15 > e; e++) d = "grossini_dance_" + (10 > e ? "0" + e: e) + ".png",
        d = b.spriteFrameByName(d),
        c.push(d);
        e = cc.Animation.animationWithFrames(c);
        this._m_pSprite1.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(e, !1)));
        this._m_pSprite1.setFlipX(!1);
        this._m_pSprite1.setFlipY(!1);
        this._m_pSprite2 = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        this._m_pSprite2.setPosition(cc.ccp(a.width / 2 + 80, a.height / 2));
        this.addChild(this._m_pSprite2);
        a = [];
        for (e = 1; 15 > e; e++) d = "grossini_dance_gray_" + (10 > e ? "0" + e: e) + ".png",
        d = b.spriteFrameByName(d),
        a.push(d);
        for (e = 1; 5 > e; e++) d = "grossini_blue_0" + e + ".png",
        d = b.spriteFrameByName(d),
        a.push(d);
        a = a.concat(c);
        b = cc.Animation.animationWithFrames(a);
        this._m_pSprite2.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(b, !1)));
        this._m_pSprite2.setFlipX(!1);
        this._m_pSprite2.setFlipY(!1);
        this.schedule(this.startIn05Secs, 0.5);
        this._m_nCounter = 0
    },
    onExit: function() {
        this._super();
        var a = cc.SpriteFrameCache.sharedSpriteFrameCache();
        a.removeSpriteFramesFromFile(s_grossiniPlist);
        a.removeSpriteFramesFromFile(s_grossini_grayPlist);
        a.removeSpriteFramesFromFile(s_grossini_bluePlist)
    },
    title: function() {
        return "Sprite vs. SpriteBatchNode animation"
    },
    subtitle: function() {
        return "Testing issue #792"
    },
    startIn05Secs: function() {
        this.unschedule(this.startIn05Secs);
        this.schedule(this.flipSprites, 1)
    },
    flipSprites: function() {
        this._m_nCounter++;
        var a = !1,
        b = !1;
        switch (this._m_nCounter % 4) {
        case 0:
            b = a = !1;
            break;
        case 1:
            a = !0;
            b = !1;
            break;
        case 2:
            a = !1;
            b = !0;
            break;
        case 3:
            b = a = !0
        }
        this._m_pSprite1.setFlipX(a);
        this._m_pSprite1.setFlipY(b);
        this._m_pSprite2.setFlipX(a);
        this._m_pSprite2.setFlipY(b)
    }
}),
SpriteFrameAliasNameTest = SpriteTestDemo.extend({
    title: function() {
        return "SpriteFrame Alias Name"
    },
    subtitle: function() {
        return "SpriteFrames are obtained using the alias name"
    },
    onEnter: function() {
        this._super()
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeSpriteFramesFromFile(s_grossini_aliasesPlist)
    }
}),
SpriteOffsetAnchorRotation = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.SpriteFrameCache.sharedSpriteFrameCache();
        b.addSpriteFramesWithFile(s_grossiniPlist);
        b.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
        for (var c = 0; 3 > c; c++) {
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (c + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 1);
            switch (c) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            for (var e = [], f = "", g = 1; 15 > g; g++) f = "grossini_dance_" + (10 > g ? "0" + g: g) + ".png",
            f = b.spriteFrameByName(f),
            e.push(f);
            e = cc.Animation.animationWithFrames(e);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(e, !1)));
            d.runAction(cc.RepeatForever.actionWithAction(cc.RotateBy.actionWithDuration(10, 360)));
            this.addChild(d, 0)
        }
    },
    onExit: function() {
        this._super();
        var a = cc.SpriteFrameCache.sharedSpriteFrameCache();
        a.removeSpriteFramesFromFile(s_grossiniPlist);
        a.removeSpriteFramesFromFile(s_grossini_grayPlist)
    },
    title: function() {
        return "Sprite offset + anchor + rot"
    }
}),
SpriteBatchNodeOffsetAnchorRotation = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 200);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            e = cc.SpriteBatchNode.batchNodeWithFile(s_grossini);
            this.addChild(e);
            for (var f = [], g = "", h = 1; 15 > h; h++) g = "grossini_dance_" + (10 > h ? "0" + h: h) + ".png",
            g = c.spriteFrameByName(g),
            f.push(g);
            c = cc.Animation.animationWithFrames(f);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(c, !1)));
            d.runAction(cc.RepeatForever.actionWithAction(cc.RotateBy.actionWithDuration(10, 360)));
            e.addChild(d, b)
        }
    },
    onExit: function() {
        this._super();
        var a = cc.SpriteFrameCache.sharedSpriteFrameCache();
        a.removeSpriteFramesFromFile(s_grossiniPlist);
        a.removeSpriteFramesFromFile(s_grossini_grayPlist)
    },
    title: function() {
        return "SpriteBatchNode offset + anchor + rot"
    }
}),
SpriteOffsetAnchorScale = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 1);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            for (var e = [], f = "", g = 1; 14 >= g; g++) f = "grossini_dance_" + (10 > g ? "0" + g: g) + ".png",
            f = c.spriteFrameByName(f),
            e.push(f);
            c = cc.Animation.animationWithFrames(e);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(c, !1)));
            c = cc.ScaleBy.actionWithDuration(2, 2);
            e = c.reverse();
            c = cc.Sequence.actions(c, e, null);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            this.addChild(d, 0)
        }
    },
    onExit: function() {
        this._super();
        var a = cc.SpriteFrameCache.sharedSpriteFrameCache();
        a.removeSpriteFramesFromFile(s_grossiniPlist);
        a.removeSpriteFramesFromFile(s_grossini_grayPlist)
    },
    title: function() {
        return "Sprite offset + anchor + scale"
    }
}),
SpriteBatchNodeOffsetAnchorScale = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 200);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            e = cc.SpriteBatchNode.batchNodeWithFile(s_grossini);
            this.addChild(e);
            for (var f = [], g = "", h = 1; 14 >= h; h++) g = "grossini_dance_" + (10 > h ? "0" + h: h) + ".png",
            g = c.spriteFrameByName(g),
            f.push(g);
            c = cc.Animation.animationWithFrames(f);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(c, !1)));
            c = cc.ScaleBy.actionWithDuration(2, 2);
            f = c.reverse();
            c = cc.Sequence.actions(c, f, null);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            e.addChild(d, b)
        }
    },
    onExit: function() {
        this._super();
        var a = cc.SpriteFrameCache.sharedSpriteFrameCache();
        a.removeSpriteFramesFromFile(s_grossiniPlist);
        a.removeSpriteFramesFromFile(s_grossini_grayPlist)
    },
    title: function() {
        return "SpriteBatchNode offset + anchor + scale"
    }
}),
SpriteOffsetAnchorSkew = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 1);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            for (var e = [], f = "", g = 1; 14 >= g; g++) f = "grossini_dance_" + (10 > g ? "0" + g: g) + ".png",
            f = c.spriteFrameByName(f),
            e.push(f);
            c = cc.Animation.animationWithFrames(e);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithDuration(2.8, c, !1)));
            c = cc.SkewBy.actionWithDuration(2, 45, 0);
            e = c.reverse();
            g = cc.SkewBy.actionWithDuration(2, 0, 45);
            f = g.reverse();
            c = cc.Sequence.actions(c, e, g, f, null);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            this.addChild(d, 0)
        }
    },
    title: function() {
        return "Sprite offset + anchor + scale"
    }
}),
SpriteBatchNodeOffsetAnchorSkew = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 200);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            e = cc.SpriteBatchNode.batchNodeWithFile(s_grossini);
            this.addChild(e);
            for (var f = [], g = "", h = 1; 14 >= h; h++) g = "grossini_dance_" + (10 > h ? "0" + h: h) + ".png",
            g = c.spriteFrameByName(g),
            f.push(g);
            c = cc.Animation.animationWithFrames(f);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithDuration(2.8, c, !1)));
            c = cc.SkewBy.actionWithDuration(2, 45, 0);
            f = c.reverse();
            h = cc.SkewBy.actionWithDuration(2, 0, 45);
            g = h.reverse();
            c = cc.Sequence.actions(c, f, h, g);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            e.addChild(d, b)
        }
    },
    title: function() {
        return "SpriteBatchNode offset + anchor + skew"
    }
}),
SpriteOffsetAnchorSkewScale = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 1);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            for (var e = [], f = "", g = 1; 14 >= g; g++) f = "grossini_dance_" + (10 > g ? "0" + g: g) + ".png",
            f = c.spriteFrameByName(f),
            e.push(f);
            c = cc.Animation.animationWithFrames(e);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithDuration(2.8, c, !1)));
            c = cc.SkewBy.actionWithDuration(2, 45, 0);
            e = c.reverse();
            g = cc.SkewBy.actionWithDuration(2, 0, 45);
            f = g.reverse();
            c = cc.Sequence.actions(c, e, g, f);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            c = cc.ScaleBy.actionWithDuration(2, 2);
            e = c.reverse();
            c = cc.Sequence.actions(c, e);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            this.addChild(d, 0)
        }
    },
    title: function() {
        return "Sprite anchor + skew + scale"
    }
}),
SpriteBatchNodeOffsetAnchorSkewScale = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 200);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            e = cc.SpriteBatchNode.batchNodeWithFile(s_grossini);
            this.addChild(e);
            for (var f = [], g = "", h = 1; 14 >= h; h++) g = "grossini_dance_" + (10 > h ? "0" + h: h) + ".png",
            g = c.spriteFrameByName(g),
            f.push(g);
            c = cc.Animation.animationWithFrames(f);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithDuration(2.8, c, !1)));
            c = cc.SkewBy.actionWithDuration(2, 45, 0);
            f = c.reverse();
            h = cc.SkewBy.actionWithDuration(2, 0, 45);
            g = h.reverse();
            c = cc.Sequence.actions(c, f, h, g);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            c = cc.ScaleBy.actionWithDuration(2, 2);
            f = c.reverse();
            c = cc.Sequence.actions(c, f);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            e.addChild(d, b)
        }
    },
    title: function() {
        return "SpriteBatchNode anchor + skew + scale"
    }
}),
SpriteOffsetAnchorFlip = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 1);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            for (var e = [], f = "", g = 1; 14 >= g; g++) f = "grossini_dance_" + (10 > g ? "0" + g: g) + ".png",
            f = c.spriteFrameByName(f),
            e.push(f);
            c = cc.Animation.animationWithFrames(e);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithDuration(2.8, c, !1)));
            c = cc.FlipY.actionWithFlipY(!0);
            e = cc.FlipY.actionWithFlipY(!1);
            g = cc.DelayTime.actionWithDuration(1);
            f = cc.DelayTime.actionWithDuration(1);
            c = cc.Sequence.actions(g, c, f, e);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            this.addChild(d, 0)
        }
    },
    title: function() {
        return "Sprite offset + anchor + flip"
    },
    subtitle: function() {
        return "issue #1078"
    }
}),
SpriteBatchNodeOffsetAnchorFlip = SpriteTestDemo.extend({
    ctor: function() {
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; 3 > b; b++) {
            var c = cc.SpriteFrameCache.sharedSpriteFrameCache();
            c.addSpriteFramesWithFile(s_grossiniPlist);
            c.addSpriteFramesWithFile(s_grossini_grayPlist, s_grossini_gray);
            var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
            d.setPosition(cc.ccp(a.width / 4 * (b + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 200);
            switch (b) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            e = cc.SpriteBatchNode.batchNodeWithFile(s_grossini);
            this.addChild(e);
            for (var f = [], g = "", h = 1; 14 >= h; h++) g = "grossini_dance_" + (10 > h ? "0" + h: h) + ".png",
            g = c.spriteFrameByName(g),
            f.push(g);
            c = cc.Animation.animationWithFrames(f);
            d.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithDuration(2.8, c, !1)));
            c = cc.FlipY.actionWithFlipY(!0);
            f = cc.FlipY.actionWithFlipY(!1);
            h = cc.DelayTime.actionWithDuration(1);
            c = cc.Sequence.actions(h, c, h.copyWithZone(null), f);
            d.runAction(cc.RepeatForever.actionWithAction(c));
            e.addChild(d, b)
        }
    },
    title: function() {
        return "SpriteBatchNode offset + anchor + flip"
    },
    subtitle: function() {
        return "issue #1078"
    }
}),
SpriteAnimationSplit = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.TextureCache.sharedTextureCache().addImage(s_dragon_animation),
        c = cc.SpriteFrame.frameWithTexture(b, cc.RectMake(0, 0, 132, 132)),
        d = cc.SpriteFrame.frameWithTexture(b, cc.RectMake(132, 0, 132, 132)),
        e = cc.SpriteFrame.frameWithTexture(b, cc.RectMake(264, 0, 132, 132)),
        f = cc.SpriteFrame.frameWithTexture(b, cc.RectMake(396, 0, 132, 132)),
        g = cc.SpriteFrame.frameWithTexture(b, cc.RectMake(0, 132, 132, 132)),
        h = cc.SpriteFrame.frameWithTexture(b, cc.RectMake(132, 132, 132, 132)),
        b = cc.Sprite.spriteWithSpriteFrame(c);
        b.setPosition(cc.ccp(a.width / 2 - 80, a.height / 2));
        this.addChild(b);
        a = [];
        a.push(c);
        a.push(d);
        a.push(e);
        a.push(f);
        a.push(g);
        a.push(h);
        c = cc.Animation.animationWithFrames(a, 0.2);
        c = cc.Animate.actionWithAnimation(c, !1);
        c = cc.Sequence.actions(c, cc.FlipX.actionWithFlipX(!0), c.copy(), cc.FlipX.actionWithFlipX(!1));
        b.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "Sprite: Animation + flip"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteHybrid = SpriteTestDemo.extend({
    _m_usingSpriteBatchNode: !1,
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Node.node(),
        c = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagNode);
        this.addChild(c, 0, kTagSpriteBatchNode);
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        for (c = 1; 250 >= c; c++) {
            var d = Math.round(14 * cc.RANDOM_0_1());
            0 == d && (d = 1);
            d = "grossini_dance_" + (10 > d ? "0" + d: d) + ".png";
            d = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(d);
            d = cc.Sprite.spriteWithSpriteFrame(d);
            b.addChild(d, c, c);
            var e = -1E3,
            f = -1E3;
            0.2 > cc.RANDOM_0_1() && (e = cc.RANDOM_0_1() * a.width, f = cc.RANDOM_0_1() * a.height);
            d.setPosition(cc.ccp(e, f));
            e = cc.RotateBy.actionWithDuration(4, 360);
            d.runAction(cc.RepeatForever.actionWithAction(e))
        }
        this._m_usingSpriteBatchNode = !1;
        this.schedule(this.reparentSprite, 2)
    },
    title: function() {
        return "Hybrcc.Sprite* sprite Test"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeSpriteFramesFromFile(s_grossiniPlist)
    },
    reparentSprite: function() {
        var a = this.getChildByTag(kTagNode),
        b = this.getChildByTag(kTagSpriteBatchNode),
        c = [];
        if (this._m_usingSpriteBatchNode) var d = b,
        b = a,
        a = d;
        for (var d = a.getChildren(), e = 0; e < d.length; e++) {
            var f = d[e];
            if (!f) break;
            c.push(f)
        }
        a.removeAllChildrenWithCleanup(!1);
        for (e = 0; e < c.length; e++) {
            f = c[e];
            if (!f) break;
            b.addChild(f, e, e)
        }
        this._m_usingSpriteBatchNode = !this._m_usingSpriteBatchNode
    }
}),
SpriteBatchNodeChildren = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagSpriteBatchNode);
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        var c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(a.width / 3, a.height / 2));
        a = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        a.setPosition(cc.ccp(50, 50));
        var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        d.setPosition(cc.ccp( - 50, -50));
        b.addChild(c);
        c.addChild(a);
        c.addChild(d);
        for (var b = [], e = "", d = 1; 15 > d; d++) e = "grossini_dance_" + (10 > d ? "0" + d: d) + ".png",
        e = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(e),
        b.push(e);
        b = cc.Animation.animationWithFrames(b, 0.2);
        c.runAction(cc.RepeatForever.actionWithAction(cc.Animate.actionWithAnimation(b, !1)));
        var b = cc.MoveBy.actionWithDuration(2, cc.ccp(200, 0)),
        d = b.reverse(),
        e = cc.RotateBy.actionWithDuration(2, 360),
        f = cc.ScaleBy.actionWithDuration(2, 2),
        g = f.reverse(),
        h = e.reverse();
        a.runAction(cc.RepeatForever.actionWithAction(h));
        c.runAction(cc.RepeatForever.actionWithAction(e));
        c.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(b, d, null)));
        c.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(f, g, null)))
    },
    title: function() {
        return "SpriteBatchNode Grand Children"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteBatchNodeChildren2 = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagSpriteBatchNode);
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        var c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(a.width / 3, a.height / 2));
        var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        d.setScale(0.2);
        var e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        e.setScale(0.2);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, 2);
        d.setHonorParentTransform(d.getHonorParentTransform() & ~cc.HONOR_PARENT_TRANSFORM_ROTATE);
        e.setHonorParentTransform(e.getHonorParentTransform() & ~ (cc.HONOR_PARENT_TRANSFORM_SCALE | cc.HONOR_PARENT_TRANSFORM_ROTATE));
        var d = cc.MoveBy.actionWithDuration(2, cc.ccp(200, 0)),
        e = d.reverse(),
        f = cc.RotateBy.actionWithDuration(2, 360),
        g = cc.ScaleBy.actionWithDuration(2, 2),
        h = g.reverse();
        c.runAction(cc.RepeatForever.actionWithAction(f));
        c.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(d, e, null)));
        c.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(g, h, null)));
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(2 * a.width / 3, a.height / 2 - 50));
        a = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        a.setPosition(cc.ccp(20, 30));
        a.setScale(0.8);
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        d.setPosition(cc.ccp( - 20, 30));
        d.setScale(0.8);
        b.addChild(c);
        c.addChild(a, -2);
        c.addChild(d, 2);
        a.setHonorParentTransform(a.getHonorParentTransform() & ~cc.HONOR_PARENT_TRANSFORM_TRANSLATE);
        d.setHonorParentTransform(d.getHonorParentTransform() & ~cc.HONOR_PARENT_TRANSFORM_SCALE);
        c.runAction(cc.RepeatForever.actionWithAction(cc.RotateBy.actionWithDuration(1, 360)));
        c.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(cc.ScaleTo.actionWithDuration(0.5, 5), cc.ScaleTo.actionWithDuration(0.5, 1), null)))
    },
    title: function() {
        return "SpriteBatchNode HonorTransform"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteBatchNodeChildrenZ = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b,
        c,
        d,
        e;
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagSpriteBatchNode);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(a.width / 3, a.height / 2));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        b.addChild(c);
        c.addChild(d, 2);
        c.addChild(e, -2);
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagSpriteBatchNode);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(2 * a.width / 3, a.height / 2));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, 2);
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagSpriteBatchNode);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(a.width / 2 - 90, a.height / 4));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(a.width / 2 - 60, a.height / 4));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp(a.width / 2 - 30, a.height / 4));
        b.addChild(c, 10);
        b.addChild(d, -10);
        b.addChild(e, -5);
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0, kTagSpriteBatchNode);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(a.width / 2 + 30, a.height / 4));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(a.width / 2 + 60, a.height / 4));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp(a.width / 2 + 90, a.height / 4));
        b.addChild(c, -10);
        b.addChild(d, -5);
        b.addChild(e, -2)
    },
    title: function() {
        return "SpriteBatchNode Children Z"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteChildrenVisibility = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        var b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        b.setPosition(cc.ccp(a.width / 3, a.height / 2));
        this.addChild(b, 0);
        var c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(0, 0));
        var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        var e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, 2);
        c.runAction(cc.Blink.actionWithDuration(5, 10));
        b = cc.Node.node();
        b.setPosition(cc.ccp(2 * a.width / 3, a.height / 2));
        this.addChild(b, 0);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(0, 0));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, 2);
        c.runAction(cc.Blink.actionWithDuration(5, 10))
    },
    title: function() {
        return "Sprite & SpriteBatchNode Visibility"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteChildrenVisibilityIssue665 = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        var b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        b.setPosition(cc.ccp(a.width / 3, a.height / 2));
        this.addChild(b, 0);
        var c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(0, 0));
        var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        var e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        c.setIsVisible(!1);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, 2);
        b = cc.Node.node();
        b.setPosition(cc.ccp(2 * a.width / 3, a.height / 2));
        this.addChild(b, 0);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_01.png");
        c.setPosition(cc.ccp(0, 0));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        c.setIsVisible(!1);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, 2)
    },
    title: function() {
        return "Sprite & SpriteBatchNode Visibility"
    },
    subtitle: function() {
        return "No sprites should be visible"
    }
}),
SpriteChildrenAnchorPoint = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        var b = cc.Node.node();
        this.addChild(b, 0);
        var c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_08.png");
        c.setPosition(cc.ccp(a.width / 4, a.height / 2));
        c.setAnchorPoint(cc.ccp(0, 0));
        var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        var e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        var f = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_04.png");
        f.setPosition(cc.ccp(0, 0));
        f.setScale(0.5);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, -2);
        c.addChild(f, 3);
        d = cc.Sprite.spriteWithFile(s_pPathR1);
        d.setScale(0.25);
        d.setPosition(c.getPosition());
        this.addChild(d, 10);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_08.png");
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        c.setAnchorPoint(cc.ccp(0.5, 0.5));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        f = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_04.png");
        f.setPosition(cc.ccp(0, 0));
        f.setScale(0.5);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, -2);
        c.addChild(f, 3);
        d = cc.Sprite.spriteWithFile(s_pPathR1);
        d.setScale(0.25);
        d.setPosition(c.getPosition());
        this.addChild(d, 10);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_08.png");
        c.setPosition(cc.ccp(a.width / 2 + a.width / 4, a.height / 2));
        c.setAnchorPoint(cc.ccp(1, 1));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        f = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_04.png");
        f.setPosition(cc.ccp(0, 0));
        f.setScale(0.5);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, -2);
        c.addChild(f, 3);
        d = cc.Sprite.spriteWithFile(s_pPathR1);
        d.setScale(0.25);
        d.setPosition(c.getPosition());
        this.addChild(d, 10)
    },
    title: function() {
        return "Sprite: children + anchor"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteBatchNodeChildrenAnchorPoint = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        var b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini, 50);
        this.addChild(b, 0);
        var c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_08.png");
        c.setPosition(cc.ccp(a.width / 4, a.height / 2));
        c.setAnchorPoint(cc.ccp(0, 0));
        var d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        var e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        var f = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_04.png");
        f.setPosition(cc.ccp(0, 0));
        f.setScale(0.5);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, -2);
        c.addChild(f, 3);
        d = cc.Sprite.spriteWithFile(s_pPathR1);
        d.setScale(0.25);
        d.setPosition(c.getPosition());
        this.addChild(d, 10);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_08.png");
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        c.setAnchorPoint(cc.ccp(0.5, 0.5));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        f = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_04.png");
        f.setPosition(cc.ccp(0, 0));
        f.setScale(0.5);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, -2);
        c.addChild(f, 3);
        d = cc.Sprite.spriteWithFile(s_pPathR1);
        d.setScale(0.25);
        d.setPosition(c.getPosition());
        this.addChild(d, 10);
        c = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_08.png");
        c.setPosition(cc.ccp(a.width / 2 + a.width / 4, a.height / 2));
        c.setAnchorPoint(cc.ccp(1, 1));
        d = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_02.png");
        d.setPosition(cc.ccp(20, 30));
        e = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_03.png");
        e.setPosition(cc.ccp( - 20, 30));
        f = cc.Sprite.spriteWithSpriteFrameName("grossini_dance_04.png");
        f.setPosition(cc.ccp(0, 0));
        f.setScale(0.5);
        b.addChild(c);
        c.addChild(d, -2);
        c.addChild(e, -2);
        c.addChild(f, 3);
        d = cc.Sprite.spriteWithFile(s_pPathR1);
        d.setScale(0.25);
        d.setPosition(c.getPosition());
        this.addChild(d, 10)
    },
    title: function() {
        return "SpriteBatchNode: children + anchor"
    },
    onExit: function() {
        this._super();
        cc.SpriteFrameCache.sharedSpriteFrameCache().removeUnusedSpriteFrames()
    }
}),
SpriteBatchNodeChildrenScale = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossini_familyPlist);
        var b = cc.RotateBy.actionWithDuration(10, 360),
        c = cc.RepeatForever.actionWithAction(b),
        b = cc.Node.node(),
        d = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister1.png");
        d.setPosition(cc.ccp(a.width / 4, a.height / 4));
        d.setScaleX(0.5);
        d.setScaleY(2);
        d.runAction(c);
        c = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister2.png");
        c.setPosition(cc.ccp(50, 0));
        this.addChild(b);
        b.addChild(d);
        d.addChild(c);
        b = cc.RotateBy.actionWithDuration(10, 360);
        c = cc.RepeatForever.actionWithAction(b);
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_family);
        d = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister1.png");
        d.setPosition(cc.ccp(3 * a.width / 4, a.height / 4));
        d.setScaleX(0.5);
        d.setScaleY(2);
        d.runAction(c);
        c = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister2.png");
        c.setPosition(cc.ccp(50, 0));
        this.addChild(b);
        b.addChild(d);
        d.addChild(c);
        b = cc.RotateBy.actionWithDuration(10, 360);
        c = cc.RepeatForever.actionWithAction(b);
        b = cc.Node.node();
        d = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister1.png");
        d.setPosition(cc.ccp(a.width / 4, 2 * a.height / 3));
        d.setScaleX(1.5);
        d.setScaleY(0.5);
        d.runAction(c);
        c = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister2.png");
        c.setPosition(cc.ccp(50, 0));
        this.addChild(b);
        b.addChild(d);
        d.addChild(c);
        b = cc.RotateBy.actionWithDuration(10, 360);
        c = cc.RepeatForever.actionWithAction(b);
        b = cc.SpriteBatchNode.batchNodeWithFile(s_grossini_family);
        d = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister1.png");
        d.setPosition(cc.ccp(3 * a.width / 4, 2 * a.height / 3));
        d.setScaleX(1.5);
        d.setScaleY(0.5);
        d.runAction(c);
        c = cc.Sprite.spriteWithSpriteFrameName("grossinis_sister2.png");
        c.setPosition(cc.ccp(50, 0));
        this.addChild(b);
        b.addChild(d);
        d.addChild(c)
    },
    title: function() {
        return "Sprite/BatchNode + child + scale + rot"
    }
}),
SpriteChildrenChildren = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_ghostsPlist);
        var b = cc.RotateBy.actionWithDuration(10, 360),
        c = cc.RepeatForever.actionWithAction(b),
        b = b.reverse(),
        b = cc.RepeatForever.actionWithAction(b),
        d = cc.Node.node();
        this.addChild(d);
        var e = cc.Sprite.spriteWithSpriteFrameName("father.gif");
        e.setPosition(cc.ccp(a.width / 2, a.height / 2));
        e.runAction(c.copy());
        d.addChild(e);
        var f = e.getContentSize(),
        c = cc.Sprite.spriteWithSpriteFrameName("sister1.gif");
        c.setPosition(cc.ccp( - 50 + f.width / 2, 0 + f.height / 2));
        c.runAction(b.copy());
        e.addChild(c);
        d = c.getContentSize();
        a = cc.Sprite.spriteWithSpriteFrameName("sister2.gif");
        a.setPosition(cc.ccp(50 + f.width / 2, 0 + f.height / 2));
        a.runAction(b.copy());
        e.addChild(a);
        b = c.getContentSize();
        e = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        e.setScale(0.45);
        e.setPosition(cc.ccp(0 + d.width / 2, -100 + d.height / 2));
        c.addChild(e);
        f = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        f.setScale(0.45);
        e.setPosition(cc.ccp(0 + d.width / 2, 100 + d.height / 2));
        c.addChild(f);
        e = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        e.setScale(0.45);
        e.setFlipY(!0);
        e.setPosition(cc.ccp(0 + b.width / 2, -100 + b.height / 2));
        a.addChild(e);
        c = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        c.setScale(0.45);
        c.setFlipY(!0);
        e.setPosition(cc.ccp(0 + b.width / 2, 100 + b.height / 2));
        a.addChild(c)
    },
    title: function() {
        return "Sprite multiple levels of children"
    }
}),
SpriteBatchNodeChildrenChildren = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_ghostsPlist);
        var b = cc.RotateBy.actionWithDuration(10, 360),
        c = cc.RepeatForever.actionWithAction(b),
        b = b.reverse(),
        b = cc.RepeatForever.actionWithAction(b),
        d = cc.SpriteBatchNode.batchNodeWithFile(s_ghosts);
        this.addChild(d);
        var e = cc.Sprite.spriteWithSpriteFrameName("father.gif");
        e.setPosition(cc.ccp(a.width / 2, a.height / 2));
        e.runAction(c.copy());
        d.addChild(e);
        var f = e.getContentSize(),
        c = cc.Sprite.spriteWithSpriteFrameName("sister1.gif");
        c.setPosition(cc.ccp( - 50 + f.width / 2, 0 + f.height / 2));
        c.runAction(b.copy());
        e.addChild(c);
        d = c.getContentSize();
        a = cc.Sprite.spriteWithSpriteFrameName("sister2.gif");
        a.setPosition(cc.ccp(50 + f.width / 2, 0 + f.height / 2));
        a.runAction(b.copy());
        e.addChild(a);
        b = c.getContentSize();
        e = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        e.setScale(0.45);
        e.setPosition(cc.ccp(0 + d.width / 2, -100 + d.height / 2));
        c.addChild(e);
        f = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        f.setScale(0.45);
        e.setPosition(cc.ccp(0 + d.width / 2, 100 + d.height / 2));
        c.addChild(f);
        e = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        e.setScale(0.45);
        e.setFlipY(!0);
        e.setPosition(cc.ccp(0 + b.width / 2, -100 + b.height / 2));
        a.addChild(e);
        c = cc.Sprite.spriteWithSpriteFrameName("child1.gif");
        c.setScale(0.45);
        c.setFlipY(!0);
        e.setPosition(cc.ccp(0 + b.width / 2, 100 + b.height / 2));
        a.addChild(c)
    },
    title: function() {
        return "SpriteBatchNode multiple levels of children"
    }
}),
SpriteNilTexture = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = new cc.Sprite;
        b.init();
        b.setTextureRect(cc.RectMake(0, 0, 300, 300));
        b.setColor(cc.RED());
        b.setOpacity(128);
        b.setPosition(cc.ccp(3 * a.width / 4, a.height / 2));
        this.addChild(b, 100);
        b = new cc.Sprite;
        b.init();
        b.setTextureRect(cc.RectMake(0, 0, 300, 300));
        b.setColor(cc.BLUE());
        b.setOpacity(128);
        b.setPosition(cc.ccp(1 * a.width / 4, a.height / 2));
        this.addChild(b, 100)
    },
    title: function() {
        return "Sprite without texture"
    },
    subtitle: function() {
        return "opacity and color should work"
    }
}),
MySprite1 = cc.Sprite.extend({
    _ivar: 0,
    ctor: function() {}
});
MySprite1.spriteWithSpriteFrameName = function(a) {
    var a = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(a),
    b = new MySprite1;
    b.initWithSpriteFrame(a);
    return b
};
var MySprite2 = cc.Sprite.extend({
    _ivar: 0,
    ctor: function() {}
});
MySprite2.spriteWithFile = function(a) {
    var b = new MySprite2;
    b.initWithFile(a);
    return b
};
var SpriteSubclass = SpriteTestDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_ghostsPlist);
        var b = cc.SpriteBatchNode.batchNodeWithFile(s_ghosts),
        c = MySprite1.spriteWithSpriteFrameName("father.gif");
        c.setPosition(cc.ccp(1 * (a.width / 4), a.height / 2));
        b.addChild(c);
        this.addChild(b);
        b = MySprite2.spriteWithFile(s_pPathGrossini);
        this.addChild(b);
        b.setPosition(cc.ccp(3 * (a.width / 4), a.height / 2))
    },
    title: function() {
        return "Sprite subclass"
    },
    subtitle: function() {
        return "Testing initWithTexture:rect method"
    }
}),
AnimationCache = SpriteTestDemo.extend({
    ctor: function() {
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossiniPlist);
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossini_grayPlist);
        cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFramesWithFile(s_grossini_bluePlist);
        for (var a = [], b = "", c = 1; 15 > c; c++) b = "grossini_dance_" + (10 > c ? "0" + c: c) + ".png",
        b = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(b),
        a.push(b);
        a = cc.Animation.animationWithFrames(a, 0.2);
        cc.AnimationCache.sharedAnimationCache().addAnimation(a, "dance");
        a = [];
        for (c = 1; 15 > c; c++) b = "grossini_dance_gray_" + (10 > c ? "0" + c: c) + ".png",
        b = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(b),
        a.push(b);
        a = cc.Animation.animationWithFrames(a, 0.2);
        cc.AnimationCache.sharedAnimationCache().addAnimation(a, "dance_gray");
        a = [];
        for (c = 1; 4 > c; c++) b = "grossini_blue_0" + c + ".png",
        b = cc.SpriteFrameCache.sharedSpriteFrameCache().spriteFrameByName(b),
        a.push(b);
        a = cc.Animation.animationWithFrames(a, 0.2);
        cc.AnimationCache.sharedAnimationCache().addAnimation(a, "dance_blue");
        c = cc.AnimationCache.sharedAnimationCache();
        b = c.animationByName("dance");
        a = c.animationByName("dance_gray");
        c = c.animationByName("dance_blue");
        b = cc.Animate.actionWithAnimation(b);
        a = cc.Animate.actionWithAnimation(a);
        c = cc.Animate.actionWithAnimation(c);
        a = cc.Sequence.actions(b, a, c);
        c = new cc.Sprite;
        c.init();
        b = cc.Director.sharedDirector().getWinSize();
        c.setPosition(cc.ccp(b.width / 2, b.height / 2));
        this.addChild(c);
        c.runAction(a)
    },
    title: function() {
        return "AnimationCache"
    },
    subtitle: function() {
        return "Sprite should be animated"
    }
}),
SpriteTestScene = TestScene.extend({
    runThisTest: function() {
        sceneIdx = -1;
        MAX_LAYER = 48;
        this.addChild(nextSpriteTestAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var MUSIC_FILE = "Resources/background",
EFFECT_FILE = "Resources/effect2",
DenshionTests = "playBackgroundMusic stopBackgroundMusic pauseBackgroundMusic resumeBackgroundMusic rewindBackgroundMusic isBackgroundMusicPlaying playEffect playEffectRepeatly stopEffect unloadEffect addBackgroundMusicVolume subBackgroundMusicVolume addEffectsVolume subEffectsVolume pauseEffect resumeEffect pauseAllEffects resumeAllEffects stopAllEffects".split(" ");
CocosDenshionTest = cc.Layer.extend({
    _m_pItmeMenu: null,
    _m_tBeginPos: cc.PointZero(),
    bIsMouseDown: !1,
    _m_nTestCount: 0,
    ctor: function() {
        this._m_pItmeMenu = cc.Menu.menuWithItems(null);
        for (var a = cc.Director.sharedDirector().getWinSize(), b = 0; b < DenshionTests.length; b++) {
            var c = cc.LabelTTF.labelWithString(DenshionTests[b], "Arial", 24),
            c = cc.MenuItemLabel.itemWithLabel(c, this, this.menuCallback);
            this._m_pItmeMenu.addChild(c, b + 1E4);
            c.setPosition(cc.PointMake(a.width / 2, a.height - (b + 1) * LINE_SPACE))
        }
        this._m_nTestCount = b;
        this._m_pItmeMenu.setContentSize(cc.SizeMake(a.width, (this._m_nTestCount + 1) * LINE_SPACE));
        this._m_pItmeMenu.setPosition(cc.PointZero());
        this.addChild(this._m_pItmeMenu);
        this.setIsTouchEnabled(!0);
        cc.AudioManager.sharedEngine().setEffectsVolume(0.5);
        cc.AudioManager.sharedEngine().setBackgroundMusicVolume(0.5)
    },
    menuCallback: function(a) {
        a = a.getZOrder() - 1E4;
        new window[DenshionTests[a]]
    },
    ccTouchesMoved: function(a) {
        if (this.bIsMouseDown) {
            var a = a[0].locationInView(0),
            b = a.y - this._m_tBeginPos.y,
            c = this._m_pItmeMenu.getPosition(),
            b = cc.ccp(c.x, c.y + b),
            c = cc.Director.sharedDirector().getWinSize();
            0 > b.y ? this._m_pItmeMenu.setPosition(cc.PointZero()) : b.y > (this._m_nTestCount + 1) * LINE_SPACE - c.height ? this._m_pItmeMenu.setPosition(cc.ccp(0, (this._m_nTestCount + 1) * LINE_SPACE - c.height)) : (this._m_pItmeMenu.setPosition(b), this._m_tBeginPos = cc.ccp(0, a.y))
        }
    },
    ccTouchesBegan: function(a) {
        this.bIsMouseDown || (this._m_tBeginPos = a[0].locationInView(0));
        this.bIsMouseDown = !0
    },
    ccTouchesEnded: function() {
        this.bIsMouseDown = !1
    },
    onExit: function() {
        this._super();
        cc.AudioManager.sharedEngine().end()
    }
});
CocosDenshionTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new CocosDenshionTest);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var m_nSoundId = null,
playBackgroundMusic = function() {
    cc.LOG("play background music");
    cc.AudioManager.sharedEngine().playBackgroundMusic(MUSIC_FILE, !1)
},
stopBackgroundMusic = function() {
    cc.LOG("stop background music");
    cc.AudioManager.sharedEngine().stopBackgroundMusic()
},
pauseBackgroundMusic = function() {
    cc.LOG("pause background music");
    cc.AudioManager.sharedEngine().pauseBackgroundMusic()
},
resumeBackgroundMusic = function() {
    cc.LOG("resume background music");
    cc.AudioManager.sharedEngine().resumeBackgroundMusic()
},
rewindBackgroundMusic = function() {
    cc.LOG("rewind background music");
    cc.AudioManager.sharedEngine().rewindBackgroundMusic()
},
isBackgroundMusicPlaying = function() {
    cc.AudioManager.sharedEngine().isBackgroundMusicPlaying() ? cc.LOG("background music is playing") : cc.LOG("background music is not playing")
},
playEffect = function() {
    cc.LOG("play effect");
    m_nSoundId = cc.AudioManager.sharedEngine().playEffect(EFFECT_FILE)
},
playEffectRepeatly = function() {
    cc.LOG("play effect repeatly");
    m_nSoundId = cc.AudioManager.sharedEngine().playEffect(EFFECT_FILE, !0)
},
stopEffect = function() {
    cc.LOG("stop effect");
    cc.AudioManager.sharedEngine().stopEffect(m_nSoundId)
},
unloadEffect = function() {
    cc.LOG("unload effect");
    cc.AudioManager.sharedEngine().unloadEffect(EFFECT_FILE)
},
addBackgroundMusicVolume = function() {
    cc.LOG("add bakcground music volume");
    cc.AudioManager.sharedEngine().setBackgroundMusicVolume(cc.AudioManager.sharedEngine().getBackgroundMusicVolume() + 0.1)
},
subBackgroundMusicVolume = function() {
    cc.LOG("sub backgroud music volume");
    cc.AudioManager.sharedEngine().setBackgroundMusicVolume(cc.AudioManager.sharedEngine().getBackgroundMusicVolume() - 0.1)
},
addEffectsVolume = function() {
    cc.LOG("add effects volume");
    cc.AudioManager.sharedEngine().setEffectsVolume(cc.AudioManager.sharedEngine().getEffectsVolume() + 0.1)
},
subEffectsVolume = function() {
    cc.LOG("sub effects volume");
    cc.AudioManager.sharedEngine().setEffectsVolume(cc.AudioManager.sharedEngine().getEffectsVolume() - 0.1)
},
pauseEffect = function() {
    cc.LOG("pause effect");
    cc.AudioManager.sharedEngine().pauseEffect(m_nSoundId)
},
resumeEffect = function() {
    cc.LOG("resume effect");
    cc.AudioManager.sharedEngine().resumeEffect(m_nSoundId)
},
pauseAllEffects = function() {
    cc.LOG("pause all effects");
    cc.AudioManager.sharedEngine().pauseAllEffects()
},
resumeAllEffects = function() {
    cc.LOG("resume all effects");
    cc.AudioManager.sharedEngine().resumeAllEffects()
},
stopAllEffects = function() {
    cc.LOG("stop all effects");
    cc.AudioManager.sharedEngine().stopAllEffects()
};
var kTagSprite1 = 1,
kTagSprite2 = 2,
kTagSprite3 = 3,
kTagSlider = 4,
sceneIdx = -1,
MAX_LAYER = 9,
nextCocosNodeAction = function() {
    sceneIdx++;
    sceneIdx %= MAX_LAYER;
    return createCocosNodeLayer(sceneIdx)
},
backCocosNodeAction = function() {
    sceneIdx--;
    0 > sceneIdx && (sceneIdx += MAX_LAYER);
    return createCocosNodeLayer(sceneIdx)
},
restartCocosNodeAction = function() {
    return createCocosNodeLayer(sceneIdx)
},
createCocosNodeLayer = function(a) {
    switch (a) {
    case 0:
        return new CCNodeTest2;
    case 1:
        return new CCNodeTest4;
    case 2:
        return new CCNodeTest5;
    case 3:
        return new CCNodeTest6;
    case 4:
        return new StressTest1;
    case 5:
        return new StressTest2;
    case 6:
        return new NodeToWorld;
    case 7:
        return new SchedulerTest1;
    case 8:
        return new ConvertToNode
    }
    return null
},
TestCocosNodeDemo = cc.Layer.extend({
    ctor: function() {},
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 32);
        this.addChild(b, 1);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        b = this.subtitle();
        "" == !b && (b = cc.LabelTTF.labelWithString(b, "Thonburi", 16), this.addChild(b, 1), b.setPosition(cc.PointMake(a.width / 2, a.height - 80)));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new CocosNodeTestScene;
        a.addChild(restartCocosNodeAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new CocosNodeTestScene;
        a.addChild(nextCocosNodeAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new CocosNodeTestScene;
        a.addChild(backCocosNodeAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
CCNodeTest2 = TestCocosNodeDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile(s_pPathSister1),
        c = cc.Sprite.spriteWithFile(s_pPathSister2),
        d = cc.Sprite.spriteWithFile(s_pPathSister1),
        e = cc.Sprite.spriteWithFile(s_pPathSister2);
        b.setPosition(cc.PointMake(150, a.height / 2));
        c.setPosition(cc.PointMake(a.width - 150, a.height / 2));
        this.addChild(b);
        this.addChild(c);
        d.setScale(0.25);
        e.setScale(0.25);
        b.addChild(d);
        c.addChild(e);
        d = cc.RotateBy.actionWithDuration(2, 360);
        e = cc.ScaleBy.actionWithDuration(2, 2);
        a = cc.RepeatForever.actionWithAction(cc.Sequence.actions(d, e, e.reverse()));
        d = cc.RepeatForever.actionWithAction(cc.Sequence.actions(d.copy(), e.copy(), e.reverse()));
        c.setAnchorPoint(cc.PointMake(0, 0));
        b.runAction(a);
        c.runAction(d)
    },
    title: function() {
        return "anchorPoint and children"
    }
}),
SID_DELAY2 = 1,
SID_DELAY4 = 2,
CCNodeTest4 = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Sprite.spriteWithFile(s_pPathSister1),
        b = cc.Sprite.spriteWithFile(s_pPathSister2),
        c = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.PointMake(150, c.height / 2));
        b.setPosition(cc.PointMake(c.width - 150, c.height / 2));
        this.addChild(a, 0, 2);
        this.addChild(b, 0, 3);
        this.schedule(this.delay2, 2);
        this.schedule(this.delay4, 4)
    },
    delay2: function() {
        var a = this.getChildByTag(2),
        b = cc.RotateBy.actionWithDuration(1, 360);
        a.runAction(b)
    },
    delay4: function() {
        this.unschedule(this.delay4);
        this.removeChildByTag(3, !1)
    },
    title: function() {
        return "tags"
    }
}),
CCNodeTest5 = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Sprite.spriteWithFile(s_pPathSister1),
        b = cc.Sprite.spriteWithFile(s_pPathSister2),
        c = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.PointMake(150, c.height / 2));
        b.setPosition(cc.PointMake(c.width - 150, c.height / 2));
        var c = cc.RotateBy.actionWithDuration(2, 360),
        d = c.reverse(),
        c = cc.RepeatForever.actionWithAction(cc.Sequence.actions(c, d)),
        d = c.copy();
        c.setTag(101);
        d.setTag(102);
        this.addChild(a, 0, kTagSprite1);
        this.addChild(b, 0, kTagSprite2);
        a.runAction(c);
        b.runAction(d);
        this.schedule(this.addAndRemove, 2)
    },
    addAndRemove: function() {
        var a = this.getChildByTag(kTagSprite1),
        b = this.getChildByTag(kTagSprite2);
        this.removeChild(a, !1);
        this.removeChild(b, !0);
        this.addChild(a, 0, kTagSprite1);
        this.addChild(b, 0, kTagSprite2)
    },
    title: function() {
        return "remove and cleanup"
    }
}),
CCNodeTest6 = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Sprite.spriteWithFile(s_pPathSister1),
        b = cc.Sprite.spriteWithFile(s_pPathSister1),
        c = cc.Sprite.spriteWithFile(s_pPathSister2),
        d = cc.Sprite.spriteWithFile(s_pPathSister2),
        e = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.PointMake(150, e.height / 2));
        c.setPosition(cc.PointMake(e.width - 150, e.height / 2));
        var e = cc.RotateBy.actionWithDuration(2, 360),
        f = e.reverse(),
        e = cc.RepeatForever.actionWithAction(cc.Sequence.actions(e, f)),
        f = e.copy(),
        g = e.copy(),
        h = e.copy();
        this.addChild(a, 0, kTagSprite1);
        a.addChild(b);
        this.addChild(c, 0, kTagSprite2);
        c.addChild(d);
        a.runAction(e);
        b.runAction(f);
        c.runAction(g);
        d.runAction(h);
        this.schedule(this.addAndRemove, 2)
    },
    addAndRemove: function() {
        var a = this.getChildByTag(kTagSprite1),
        b = this.getChildByTag(kTagSprite2);
        this.removeChild(a, !1);
        this.removeChild(b, !0);
        this.addChild(a, 0, kTagSprite1);
        this.addChild(b, 0, kTagSprite2)
    },
    title: function() {
        return "remove/cleanup with children"
    }
}),
StressTest1 = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile(s_pPathSister1);
        this.addChild(b, 0, kTagSprite1);
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        this.schedule(this.shouldNotCrash, 1)
    },
    shouldNotCrash: function() {
        this.unschedule(this.shouldNotCrash);
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ParticleSun.node();
        b.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        this.runAction(cc.Sequence.actions(cc.RotateBy.actionWithDuration(2, 360), cc.CallFunc.actionWithTarget(this, this.removeMe)));
        this.addChild(b)
    },
    removeMe: function(a) {
        this._m_pParent.removeChild(a, !0);
        this.nextCallback(this)
    },
    title: function() {
        return "stress test #1: no crashes"
    }
}),
StressTest2 = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Layer.node(),
        c = cc.Sprite.spriteWithFile(s_pPathSister1);
        c.setPosition(cc.PointMake(80, a.height / 2));
        var d = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        d = cc.EaseInOut.actionWithAction(d.copy(), 2),
        e = d.reverse(),
        d = cc.Sequence.actions(d, e);
        c.runAction(cc.RepeatForever.actionWithAction(d));
        b.addChild(c, 1);
        c = cc.ParticleFire.node();
        c.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        c.setPosition(cc.PointMake(80, a.height / 2 - 50));
        a = d.copy();
        c.runAction(cc.RepeatForever.actionWithAction(a));
        b.addChild(c, 2);
        this.schedule(this.shouldNotLeak, 6);
        this.addChild(b, 0, kTagSprite1)
    },
    shouldNotLeak: function() {
        this.unschedule(this.shouldNotLeak);
        this.getChildByTag(kTagSprite1).removeAllChildrenWithCleanup(!0)
    },
    title: function() {
        return "stress test #2: no leaks"
    }
}),
SchedulerTest1 = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Layer.node();
        this.addChild(a, 0);
        a.schedule(this.doSomething);
        a.unschedule(this.doSomething)
    },
    doSomething: function() {},
    title: function() {
        return "cocosnode scheduler test #1"
    }
}),
NodeToWorld = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Sprite.spriteWithFile(s_back3);
        this.addChild(a, -10);
        a.setAnchorPoint(cc.PointMake(0, 0));
        var b = a.getContentSize(),
        c = cc.MenuItemImage.itemFromNormalImage(s_PlayNormal, s_PlaySelect),
        d = cc.Menu.menuWithItems(c, null);
        d.alignItemsVertically();
        d.setPosition(cc.PointMake(b.width / 2, b.height / 2));
        a.addChild(d);
        b = cc.RotateBy.actionWithDuration(5, 360);
        b = cc.RepeatForever.actionWithAction(b);
        c.runAction(b);
        c = cc.MoveBy.actionWithDuration(3, cc.PointMake(200, 0));
        b = c.reverse();
        c = cc.Sequence.actions(c, b);
        c = cc.RepeatForever.actionWithAction(c);
        a.runAction(c)
    },
    title: function() {
        return "nodeToParent transform"
    }
}),
CameraOrbitTest = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile(s_back3);
        this.addChild(b, 0);
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        b.setOpacity(128);
        var a = b.getContentSize(),
        c = cc.Sprite.spriteWithFile(s_pPathGrossini);
        c.setScale(0.5);
        b.addChild(c, 0);
        c.setPosition(cc.PointMake(1 * (a.width / 4), a.height / 2));
        c.getCamera();
        var d = cc.OrbitCamera.actionWithDuration(2, 1, 0, 0, 360, 0, 0);
        c.runAction(cc.RepeatForever.actionWithAction(d));
        c = cc.Sprite.spriteWithFile(s_pPathGrossini);
        c.setScale(1);
        b.addChild(c, 0);
        c.setPosition(cc.PointMake(2 * (a.width / 4), a.height / 2));
        d = cc.OrbitCamera.actionWithDuration(2, 1, 0, 0, 360, 45, 0);
        c.runAction(cc.RepeatForever.actionWithAction(d));
        c = cc.Sprite.spriteWithFile(s_pPathGrossini);
        c.setScale(2);
        b.addChild(c, 0);
        c.setPosition(cc.PointMake(3 * (a.width / 4), a.height / 2));
        c.getContentSize();
        d = cc.OrbitCamera.actionWithDuration(2, 1, 0, 0, 360, 90, -45);
        c.runAction(cc.RepeatForever.actionWithAction(d));
        d = cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 90);
        b.runAction(cc.RepeatForever.actionWithAction(d));
        this.setScale(1)
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.kCCDirectorProjection3D)
    },
    onExit: function() {
        cc.Director.sharedDirector().setProjection(cc.kCCDirectorProjection2D);
        this._super()
    },
    title: function() {
        return "Camera Orbit test"
    }
}),
CameraZoomTest = TestCocosNodeDemo.extend({
    _m_z: 0,
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(b, 0);
        b.setPosition(cc.PointMake(1 * (a.width / 4), a.height / 2));
        b.getCamera().setEyeXYZ(0, 0, 415);
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(b, 0, 40);
        b.setPosition(cc.PointMake(2 * (a.width / 4), a.height / 2));
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(b, 0, 20);
        b.setPosition(cc.PointMake(3 * (a.width / 4), a.height / 2));
        this._m_z = 0;
        this.scheduleUpdate()
    },
    update: function(a) {
        this._m_z += 100 * a;
        a = this.getChildByTag(20);
        a = a.getCamera();
        a.setEyeXYZ(0, 0, this._m_z);
        a = this.getChildByTag(40);
        a = a.getCamera();
        a.setEyeXYZ(0, 0, this._m_z)
    },
    onEnter: function() {
        this._super();
        cc.Director.sharedDirector().setProjection(cc.kCCDirectorProjection3D)
    },
    onExit: function() {
        cc.Director.sharedDirector().setProjection(cc.kCCDirectorProjection2D);
        this._super()
    },
    title: function() {
        return "Camera Zoom test"
    }
}),
CameraCenterTest = TestCocosNodeDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = new cc.Sprite;
        b.init();
        this.addChild(b, 0);
        b.setPosition(cc.PointMake(1 * (a.width / 5), 1 * (a.height / 5)));
        b.setColor(cc.RED());
        b.setTextureRect(cc.RectMake(0, 0, 120, 50));
        var c = cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0);
        b.runAction(cc.RepeatForever.actionWithAction(c));
        b = new cc.Sprite;
        b.init();
        this.addChild(b, 0, 40);
        b.setPosition(cc.PointMake(1 * (a.width / 5), 4 * (a.height / 5)));
        b.setColor(cc.BLUE());
        b.setTextureRect(cc.RectMake(0, 0, 120, 50));
        c = cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0);
        b.runAction(cc.RepeatForever.actionWithAction(c));
        b = new cc.Sprite;
        b.init();
        this.addChild(b, 0);
        b.setPosition(cc.PointMake(4 * (a.width / 5), 1 * (a.height / 5)));
        b.setColor(cc.YELLOW());
        b.setTextureRect(cc.RectMake(0, 0, 120, 50));
        c = cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0);
        b.runAction(cc.RepeatForever.actionWithAction(c));
        b = new cc.Sprite;
        b.init();
        this.addChild(b, 0, 40);
        b.setPosition(cc.PointMake(4 * (a.width / 5), 4 * (a.height / 5)));
        b.setColor(cc.GREEN());
        b.setTextureRect(cc.RectMake(0, 0, 120, 50));
        c = cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0);
        b.runAction(cc.RepeatForever.actionWithAction(c));
        b = new cc.Sprite;
        b.init();
        this.addChild(b, 0, 40);
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        b.setColor(cc.WHITE());
        b.setTextureRect(cc.RectMake(0, 0, 120, 50));
        c = cc.OrbitCamera.actionWithDuration(10, 1, 0, 0, 360, 0, 0);
        b.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "Camera Center test"
    },
    subtitle: function() {
        return "Sprites should rotate at the same speed"
    }
}),
ConvertToNode = TestCocosNodeDemo.extend({
    ctor: function() {
        this.setIsTouchEnabled(!0);
        for (var a = cc.Director.sharedDirector().getWinSize(), b = cc.RotateBy.actionWithDuration(10, 360), b = cc.RepeatForever.actionWithAction(b), c = 0; 3 > c; c++) {
            var d = cc.Sprite.spriteWithFile(s_pPathGrossini);
            d.setPosition(cc.ccp(a.width / 4 * (c + 1), a.height / 2));
            var e = cc.Sprite.spriteWithFile(s_pPathR1);
            e.setScale(0.25);
            e.setPosition(d.getPosition());
            this.addChild(e, 10, 100 + c);
            switch (c) {
            case 0:
                d.setAnchorPoint(cc.PointZero());
                break;
            case 1:
                d.setAnchorPoint(cc.ccp(0.5, 0.5));
                break;
            case 2:
                d.setAnchorPoint(cc.ccp(1, 1))
            }
            e.setPosition(d.getPosition());
            e = b.copy();
            d.runAction(e);
            this.addChild(d, c)
        }
    },
    ccTouchesEnded: function(a) {
        for (var b = 0; b < a.length; b++) for (var c = a[b], c = c.locationInView(c.view()), c = cc.Director.sharedDirector().convertToGL(c), d = 0; 3 > d; d++) {
            var e = this.getChildByTag(100 + d),
            f = e.convertToNodeSpaceAR(c),
            e = e.convertToNodeSpace(c);
            cc.LOG("AR: x=" + f.x.toFixed(2) + ", y=" + f.y.toFixed(2) + " -- Not AR: x=" + e.x.toFixed(2) + ", y=" + e.y.toFixed(2))
        }
    },
    title: function() {
        return "Convert To Node Space"
    },
    subtitle: function() {
        return "testing convertToNodeSpace / AR. Touch and see console"
    }
}),
CocosNodeTestScene = TestScene.extend({
    runThisTest: function() {
        sceneIdx = -1;
        MAX_LAYER = 9;
        this.addChild(nextCocosNodeAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var RotateWorldTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(RotateWorldMainLayer.node());
        this.runAction(cc.RotateBy.actionWithDuration(4, -360));
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
SpriteLayer = cc.Layer.extend({
    onEnter: function() {
        this._super();
        var a, b, c = cc.Director.sharedDirector().getWinSize();
        a = c.width;
        b = c.height;
        var d = cc.Sprite.spriteWithFile(s_pPathGrossini),
        c = cc.Sprite.spriteWithFile(s_pPathSister1),
        e = cc.Sprite.spriteWithFile(s_pPathSister2);
        d.setScale(1.5);
        c.setScale(1.5);
        e.setScale(1.5);
        d.setPosition(cc.PointMake(a / 2, b / 2));
        c.setPosition(cc.PointMake(40, b / 2));
        e.setPosition(cc.PointMake(a - 40, b / 2));
        a = cc.RotateBy.actionWithDuration(16, -3600);
        this.addChild(d);
        this.addChild(c);
        this.addChild(e);
        d.runAction(a);
        a = cc.JumpBy.actionWithDuration(4, cc.PointMake( - 400, 0), 100, 4);
        d = a.reverse();
        b = cc.RotateBy.actionWithDuration(4, 720);
        var f = b.reverse();
        c.runAction(cc.Repeat.actionWithAction(cc.Sequence.actions(d, a, null), 5));
        e.runAction(cc.Repeat.actionWithAction(cc.Sequence.actions(a.copy(), d.copy(), null), 5));
        c.runAction(cc.Repeat.actionWithAction(cc.Sequence.actions(b, f, null), 5));
        e.runAction(cc.Repeat.actionWithAction(cc.Sequence.actions(f.copy(), b.copy(), null), 5))
    }
});
SpriteLayer.node = function() {
    return new SpriteLayer
};
var TestLayer = cc.Layer.extend({
    onEnter: function() {
        this._super();
        var a, b;
        b = cc.Director.sharedDirector().getWinSize();
        a = b.width;
        b = b.height;
        var c = cc.LabelTTF.labelWithString("cocos2d", "Tahoma", 64);
        c.setPosition(cc.PointMake(a / 2, b / 2));
        this.addChild(c)
    }
});
TestLayer.node = function() {
    return new TestLayer
};
var RotateWorldMainLayer = cc.Layer.extend({
    onEnter: function() {
        this._super();
        var a, b, c = cc.Director.sharedDirector().getWinSize();
        a = c.width;
        b = c.height;
        var c = cc.LayerColor.layerWithColor(cc.ccc4(0, 0, 255, 255)),
        d = cc.LayerColor.layerWithColor(cc.ccc4(255, 0, 0, 255)),
        e = cc.LayerColor.layerWithColor(cc.ccc4(0, 255, 0, 255)),
        f = cc.LayerColor.layerWithColor(cc.ccc4(255, 255, 255, 255));
        c.setScale(0.5);
        c.setPosition(cc.PointMake( - a / 4, -b / 4));
        c.addChild(SpriteLayer.node());
        d.setScale(0.5);
        d.setPosition(cc.PointMake(a / 4, -b / 4));
        e.setScale(0.5);
        e.setPosition(cc.PointMake( - a / 4, b / 4));
        e.addChild(TestLayer.node());
        f.setScale(0.5);
        f.setPosition(cc.PointMake(a / 4, b / 4));
        this.addChild(c, -1);
        this.addChild(f);
        this.addChild(e);
        this.addChild(d);
        a = cc.RotateBy.actionWithDuration(8, 720);
        c.runAction(a);
        d.runAction(a.copy());
        e.runAction(a.copy());
        f.runAction(a.copy())
    }
});
RotateWorldMainLayer.node = function() {
    return new RotateWorldMainLayer
};
IntervalLayer = cc.Layer.extend({
    m_label0: null,
    m_label1: null,
    m_label2: null,
    m_label3: null,
    m_label4: null,
    m_time0: null,
    m_time1: null,
    m_time2: null,
    m_time3: null,
    m_time4: null,
    ctor: function() {
        this.m_time0 = this.m_time1 = this.m_time2 = this.m_time3 = this.m_time4 = 0;
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.ParticleSun.node();
        b.setTexture(cc.TextureCache.sharedTextureCache().addImage(s_fire));
        b.setPosition(cc.PointMake(a.width - 32, a.height - 32));
        b.setTotalParticles(130);
        b.setLife(0.6);
        this.addChild(b);
        this.m_label0 = cc.LabelTTF.labelWithString("0", "Arial", 24);
        this.m_label1 = cc.LabelTTF.labelWithString("0", "Arial", 24);
        this.m_label2 = cc.LabelTTF.labelWithString("0", "Arial", 24);
        this.m_label3 = cc.LabelTTF.labelWithString("0", "Arial", 24);
        this.m_label4 = cc.LabelTTF.labelWithString("0", "Arial", 24);
        this.scheduleUpdate();
        this.schedule(this.step1);
        this.schedule(this.step2, 0);
        this.schedule(this.step3, 1);
        this.schedule(this.step4, 2);
        this.m_label0.setPosition(cc.PointMake(1 * a.width / 6, a.height / 2));
        this.m_label1.setPosition(cc.PointMake(2 * a.width / 6, a.height / 2));
        this.m_label2.setPosition(cc.PointMake(3 * a.width / 6, a.height / 2));
        this.m_label3.setPosition(cc.PointMake(4 * a.width / 6, a.height / 2));
        this.m_label4.setPosition(cc.PointMake(5 * a.width / 6, a.height / 2));
        this.addChild(this.m_label0);
        this.addChild(this.m_label1);
        this.addChild(this.m_label2);
        this.addChild(this.m_label3);
        this.addChild(this.m_label4);
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        b.setPosition(cc.PointMake(40, 50));
        var c = cc.JumpBy.actionWithDuration(3, cc.PointMake(a.width - 80, 0), 50, 4);
        this.addChild(b);
        b.runAction(cc.RepeatForever.actionWithAction(cc.Sequence.actions(c, c.reverse(), null)));
        b = cc.MenuItemFont.itemFromString("Pause", this, this.onPause);
        b = cc.Menu.menuWithItems(b, null);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        this.addChild(b)
    },
    onPause: function() {
        cc.Director.sharedDirector().isPaused() ? cc.Director.sharedDirector().resume() : cc.Director.sharedDirector().pause()
    },
    onExit: function() {
        cc.Director.sharedDirector().isPaused() && cc.Director.sharedDirector().resume();
        this._super()
    },
    step1: function(a) {
        this.m_time1 += a;
        this.m_label1.setString(this.m_time1.toFixed(1))
    },
    step2: function(a) {
        this.m_time2 += a;
        this.m_label2.setString(this.m_time2.toFixed(1))
    },
    step3: function(a) {
        this.m_time3 += a;
        this.m_label3.setString(this.m_time3.toFixed(1))
    },
    step4: function(a) {
        this.m_time4 += a;
        this.m_label4.setString(this.m_time4.toFixed(1))
    },
    update: function(a) {
        this.m_time0 += a;
        this.m_label0.setString(this.m_time0.toFixed(1))
    }
});
IntervalTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new IntervalLayer);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kTagNode = 5560,
kTagGrossini = 5561,
kTagSequence = 5562,
sceneIdx = -1,
MAX_LAYER = 5,
nextActionManagerAction = function() {
    sceneIdx++;
    sceneIdx %= MAX_LAYER;
    return createActionManagerLayer(sceneIdx)
},
backActionManagerAction = function() {
    sceneIdx--;
    0 > sceneIdx && (sceneIdx += MAX_LAYER);
    return createActionManagerLayer(sceneIdx)
},
restartActionManagerAction = function() {
    return createActionManagerLayer(sceneIdx)
},
createActionManagerLayer = function(a) {
    switch (a) {
    case 0:
        return new CrashTest;
    case 1:
        return new LogicTest;
    case 2:
        return new PauseTest;
    case 3:
        return new RemoveTest;
    case 4:
        return new ResumeTest
    }
    return null
},
ActionManagerTest = cc.Layer.extend({
    _m_atlas: null,
    _m_strTitle: "",
    ctor: function() {
        this._super()
    },
    title: function() {
        return "No title"
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 32);
        this.addChild(b, 1);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new ActionManagerTestScene;
        a.addChild(restartActionManagerAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new ActionManagerTestScene;
        a.addChild(nextActionManagerAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new ActionManagerTestScene;
        a.addChild(backActionManagerAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
CrashTest = ActionManagerTest.extend({
    title: function() {
        return "Test 1. Should not crash"
    },
    onEnter: function() {
        this._super();
        var a = cc.Sprite.spriteWithFile(s_pPathGrossini);
        a.setPosition(cc.PointMake(200, 200));
        this.addChild(a, 1);
        a.runAction(cc.RotateBy.actionWithDuration(1.5, 90));
        a.runAction(cc.Sequence.actions(cc.DelayTime.actionWithDuration(1.4), cc.FadeOut.actionWithDuration(1.1)));
        this.runAction(cc.Sequence.actions(cc.DelayTime.actionWithDuration(1.4), cc.CallFunc.actionWithTarget(this, this.removeThis)))
    },
    removeThis: function() {
        this._m_pParent.removeChild(this, !0);
        this.nextCallback(this)
    }
}),
LogicTest = ActionManagerTest.extend({
    title: function() {
        return "Logic test"
    },
    onEnter: function() {
        this._super();
        var a = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(a, 0, 2);
        a.setPosition(cc.PointMake(200, 200));
        a.runAction(cc.Sequence.actions(cc.MoveBy.actionWithDuration(1, cc.PointMake(150, 0)), cc.CallFunc.actionWithTarget(this, this.bugMe)))
    },
    bugMe: function(a) {
        a.stopAllActions();
        a.runAction(cc.ScaleTo.actionWithDuration(2, 2))
    }
}),
PauseTest = ActionManagerTest.extend({
    title: function() {
        return "Pause Test"
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("After 5 seconds grossini should move", "Thonburi", 16);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width / 2, 245));
        a = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(a, 0, kTagGrossini);
        a.setPosition(cc.PointMake(200, 200));
        b = cc.MoveBy.actionWithDuration(1, cc.PointMake(150, 0));
        cc.ActionManager.sharedManager().addAction(b, a, !0);
        this.schedule(this.unpause, 3)
    },
    unpause: function() {
        this.unschedule(this.unpause);
        var a = this.getChildByTag(kTagGrossini);
        cc.ActionManager.sharedManager().resumeTarget(a)
    }
}),
RemoveTest = ActionManagerTest.extend({
    title: function() {
        return "Remove Test"
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("Should not crash", "Thonburi", 16);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width / 2, 245));
        a = cc.MoveBy.actionWithDuration(2, cc.PointMake(200, 0));
        b = cc.CallFunc.actionWithTarget(this, this.stopAction);
        a = cc.Sequence.actions(a, b);
        a.setTag(kTagSequence);
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        b.setPosition(cc.PointMake(200, 200));
        this.addChild(b, 1, kTagGrossini);
        b.runAction(a)
    },
    stopAction: function() {
        this.getChildByTag(kTagGrossini).stopActionByTag(kTagSequence)
    }
}),
ResumeTest = ActionManagerTest.extend({
    title: function() {
        return "Resume Test"
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("Grossini only rotate/scale in 3 seconds", "Thonburi", 16);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width / 2, 245));
        b = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this.addChild(b, 0, kTagGrossini);
        b.setPosition(cc.PointMake(a.width / 2, a.height / 2));
        b.runAction(cc.ScaleBy.actionWithDuration(2, 2));
        cc.ActionManager.sharedManager().pauseTarget(b);
        b.runAction(cc.RotateBy.actionWithDuration(2, 360));
        this.schedule(this.resumeGrossini, 3)
    },
    resumeGrossini: function() {
        this.unschedule(this.resumeGrossini);
        var a = this.getChildByTag(kTagGrossini);
        cc.ActionManager.sharedManager().resumeTarget(a)
    }
}),
ActionManagerTestScene = TestScene.extend({
    runThisTest: function() {
        sceneIdx = -1;
        MAX_LAYER = 5;
        this.addChild(nextActionManagerAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
kTagAction1 = 1;
kTagAction2 = 2;
var kTagSlider = 1,
EaseActionsTests = "SpriteEase SpriteEaseInOut SpriteEaseExponential SpriteEaseExponentialInOut SpriteEaseSine SpriteEaseSineInOut SpriteEaseElastic SpriteEaseElasticInOut SpriteEaseBounce SpriteEaseBounceInOut SpriteEaseBack SpriteEaseBackInOut SpeedTest SchedulerTest".split(" "),
s_nEaseActionIdx = -1;
function nextEaseAction() {++s_nEaseActionIdx;
    s_nEaseActionIdx %= EaseActionsTests.length;
    return new window[EaseActionsTests[s_nEaseActionIdx]]
}
function backEaseAction() {--s_nEaseActionIdx;
    0 > s_nEaseActionIdx && (s_nEaseActionIdx += EaseActionsTests.length);
    return new window[EaseActionsTests[s_nEaseActionIdx]]
}
function restartEaseAction() {
    return new window[EaseActionsTests[s_nEaseActionIdx]]
}
var EaseActionsTestScene = TestScene.extend({
    runThisTest: function() {
        s_nEaseActionIdx = -1;
        this.addChild(nextEaseAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
EaseSpriteDemo = cc.Layer.extend({
    _m_grossini: null,
    _m_tamara: null,
    _m_kathia: null,
    _m_strTitle: null,
    title: function() {
        return "No title"
    },
    onEnter: function() {
        this._super();
        this._m_grossini = cc.Sprite.spriteWithFile(s_pPathGrossini);
        this._m_tamara = cc.Sprite.spriteWithFile(s_pPathSister1);
        this._m_kathia = cc.Sprite.spriteWithFile(s_pPathSister2);
        this.addChild(this._m_grossini, 3);
        this.addChild(this._m_kathia, 2);
        this.addChild(this._m_tamara, 1);
        var a = cc.Director.sharedDirector().getWinSize();
        this._m_grossini.setPosition(cc.PointMake(60, 50));
        this._m_kathia.setPosition(cc.PointMake(60, 150));
        this._m_tamara.setPosition(cc.PointMake(60, 250));
        var b = cc.LabelTTF.labelWithString(this.title(), "Arial", 32);
        this.addChild(b);
        b.setPosition(cc.PointMake(a.width / 2, a.height - 50));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.PointMake(a.width / 2 - 100, 30));
        c.setPosition(cc.PointMake(a.width / 2, 30));
        d.setPosition(cc.PointMake(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new EaseActionsTestScene;
        a.addChild(restartEaseAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new EaseActionsTestScene;
        a.addChild(nextEaseAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new EaseActionsTestScene;
        a.addChild(backEaseAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    positionForTwo: function() {
        this._m_grossini.setPosition(cc.PointMake(60, 120));
        this._m_tamara.setPosition(cc.PointMake(60, 220));
        this._m_kathia.setIsVisible(!1)
    }
}),
SpriteEase = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseIn.actionWithAction(a.copy(), 3),
        d = c.reverse(),
        e = cc.EaseOut.actionWithAction(a.copy(), 3),
        f = e.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null),
        e = cc.Sequence.actions(e, f, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a)).setTag(1);
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c)).setTag(1);
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(e)).setTag(1);
        this.schedule(this.testStopAction, 6)
    },
    title: function() {
        return "EaseIn - EaseOut - Stop"
    },
    testStopAction: function() {
        this.unschedule(this.testStopAction);
        this._m_tamara.stopActionByTag(1);
        this._m_kathia.stopActionByTag(1);
        this._m_grossini.stopActionByTag(1)
    }
}),
SpriteEaseInOut = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = cc.EaseInOut.actionWithAction(a.copy(), 2),
        c = b.reverse(),
        d = cc.EaseInOut.actionWithAction(a.copy(), 3),
        e = d.reverse(),
        a = cc.EaseInOut.actionWithAction(a.copy(), 4),
        f = a.reverse(),
        b = cc.Sequence.actions(b, c, null),
        d = cc.Sequence.actions(d, e, null),
        e = cc.Sequence.actions(a, f, null);
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(b));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(d));
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "EaseInOut and rates"
    }
}),
SpriteEaseExponential = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseExponentialIn.actionWithAction(a.copy()),
        d = c.reverse(),
        e = cc.EaseExponentialOut.actionWithAction(a.copy()),
        f = e.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null),
        e = cc.Sequence.actions(e, f, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "ExpIn - ExpOut actions"
    }
}),
SpriteEaseExponentialInOut = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseExponentialInOut.actionWithAction(a.copy()),
        d = c.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null);
        this.positionForTwo();
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "EaseExponentialInOut action"
    }
}),
SpriteEaseSine = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseSineIn.actionWithAction(a.copy()),
        d = c.reverse(),
        e = cc.EaseSineOut.actionWithAction(a.copy()),
        f = e.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null),
        e = cc.Sequence.actions(e, f, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "EaseSineIn - EaseSineOut"
    }
}),
SpriteEaseSineInOut = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseSineInOut.actionWithAction(a.copy()),
        d = c.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null);
        this.positionForTwo();
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "EaseSineInOut action"
    }
}),
SpriteEaseElastic = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseElasticIn.actionWithAction(a.copy()),
        d = c.reverse(),
        e = cc.EaseElasticOut.actionWithAction(a.copy()),
        f = e.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null),
        e = cc.Sequence.actions(e, f, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "Elastic In - Out actions"
    }
}),
SpriteEaseElasticInOut = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = cc.EaseElasticInOut.actionWithAction(a.copy(), 0.3),
        c = b.reverse(),
        d = cc.EaseElasticInOut.actionWithAction(a.copy(), 0.45),
        e = d.reverse(),
        a = cc.EaseElasticInOut.actionWithAction(a.copy(), 0.6),
        f = a.reverse(),
        b = cc.Sequence.actions(b, c, null),
        d = cc.Sequence.actions(d, e, null),
        e = cc.Sequence.actions(a, f, null);
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(b));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(d));
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "EaseElasticInOut action"
    }
}),
SpriteEaseBounce = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseBounceIn.actionWithAction(a.copy()),
        d = c.reverse(),
        e = cc.EaseBounceOut.actionWithAction(a.copy()),
        f = e.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null),
        e = cc.Sequence.actions(e, f, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "Bounce In - Out actions"
    }
}),
SpriteEaseBounceInOut = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseBounceInOut.actionWithAction(a.copy()),
        d = c.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null);
        this.positionForTwo();
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "EaseBounceInOut action"
    }
}),
SpriteEaseBack = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseBackIn.actionWithAction(a.copy()),
        d = c.reverse(),
        e = cc.EaseBackOut.actionWithAction(a.copy()),
        f = e.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null),
        e = cc.Sequence.actions(e, f, null);
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c));
        this._m_kathia.runAction(cc.RepeatForever.actionWithAction(e))
    },
    title: function() {
        return "Back In - Out actions"
    }
}),
SpriteEaseBackInOut = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.MoveBy.actionWithDuration(3, cc.PointMake(350, 0)),
        b = a.reverse(),
        c = cc.EaseBackInOut.actionWithAction(a.copy()),
        d = c.reverse(),
        a = cc.Sequence.actions(a, b, null),
        c = cc.Sequence.actions(c, d, null);
        this.positionForTwo();
        this._m_grossini.runAction(cc.RepeatForever.actionWithAction(a));
        this._m_tamara.runAction(cc.RepeatForever.actionWithAction(c))
    },
    title: function() {
        return "EaseBackInOut action"
    }
}),
SpeedTest = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.JumpBy.actionWithDuration(4, cc.PointMake( - 400, 0), 100, 4),
        b = a.reverse(),
        c = cc.RotateBy.actionWithDuration(4, 720),
        d = c.reverse(),
        a = cc.Sequence.actions(b, a, null),
        c = cc.Sequence.actions(c, d, null),
        c = cc.Spawn.actions(a, c, null),
        c = cc.Speed.actionWithAction(cc.RepeatForever.actionWithAction(c), 1);
        c.setTag(kTagAction1);
        d = c.copy();
        a = c.copy();
        d.setTag(kTagAction1);
        a.setTag(kTagAction1);
        this._m_grossini.runAction(d);
        this._m_tamara.runAction(a);
        this._m_kathia.runAction(c);
        this.schedule(this.altertime, 1)
    },
    title: function() {
        return "Speed action"
    },
    altertime: function() {
        var a = this._m_grossini.getActionByTag(kTagAction1),
        b = this._m_tamara.getActionByTag(kTagAction1),
        c = this._m_kathia.getActionByTag(kTagAction1);
        a.setSpeed(2 * cc.RANDOM_0_1());
        b.setSpeed(2 * cc.RANDOM_0_1());
        c.setSpeed(2 * cc.RANDOM_0_1())
    }
}),
SchedulerTest = EaseSpriteDemo.extend({
    onEnter: function() {
        this._super();
        var a = cc.JumpBy.actionWithDuration(4, cc.PointMake( - 400, 0), 100, 4),
        b = a.reverse(),
        c = cc.RotateBy.actionWithDuration(4, 720),
        d = c.reverse(),
        a = cc.Sequence.actions(b, a, null),
        c = cc.Sequence.actions(c, d, null),
        c = cc.Spawn.actions(a, c, null),
        c = cc.RepeatForever.actionWithAction(c),
        d = c.copy(),
        a = c.copy();
        this._m_grossini.runAction(cc.Speed.actionWithAction(c, 0.5));
        this._m_tamara.runAction(cc.Speed.actionWithAction(d, 1.5));
        this._m_kathia.runAction(cc.Speed.actionWithAction(a, 1));
        c = new cc.ParticleFireworks;
        c.initWithTotalParticles(250);
        c.setTexture(cc.TextureCache.sharedTextureCache().addImage("Resources/Images/fire.png"));
        this.addChild(c)
    },
    title: function() {
        return "Scheduler scaleTime Test"
    }
});
kTagNode = 9960;
kTagGrossini = 9961;
sceneIdx = -1;
MAX_LAYER = 2;
function createParallaxTestLayer(a) {
    switch (a) {
    case 0:
        return new Parallax1;
    case 1:
        return new Parallax2
    }
    return null
}
function nextParallaxAction() {
    sceneIdx++;
    sceneIdx %= MAX_LAYER;
    return createParallaxTestLayer(sceneIdx)
}
function backParallaxAction() {
    sceneIdx--;
    var a = MAX_LAYER;
    0 > sceneIdx && (sceneIdx += a);
    return createParallaxTestLayer(sceneIdx)
}
function restartParallaxAction() {
    return createParallaxTestLayer(sceneIdx)
}
ParallaxDemo = cc.Layer.extend({
    _m_atlas: null,
    ctor: function() {},
    title: function() {
        return "No title"
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 28);
        this.addChild(b, 1);
        b.setPosition(cc.ccp(a.width / 2, a.height - 50));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.ccp(a.width / 2 - 100, 30));
        c.setPosition(cc.ccp(a.width / 2, 30));
        d.setPosition(cc.ccp(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new ParallaxTestScene;
        a.addChild(restartParallaxAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new ParallaxTestScene;
        a.addChild(nextParallaxAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new ParallaxTestScene;
        a.addChild(backParallaxAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
});
Parallax1 = ParallaxDemo.extend({
    _m_root: null,
    _m_target: null,
    _m_streak: null,
    ctor: function() {
        var a = cc.Sprite.spriteWithFile(s_Power);
        a.setScale(0.5);
        a.setAnchorPoint(cc.ccp(0, 0));
        var b = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test2.tmx");
        b.setAnchorPoint(cc.ccp(0, 0));
        var c = cc.Sprite.spriteWithFile(s_back);
        c.setAnchorPoint(cc.ccp(0, 0));
        var d = cc.ParallaxNode.node();
        d.addChild(c, -1, cc.ccp(0.4, 0.5), cc.PointZero());
        d.addChild(b, 1, cc.ccp(2.2, 1), cc.ccp(0, 0));
        d.addChild(a, 2, cc.ccp(3, 2.5), cc.ccp(0, 0));
        var a = cc.MoveBy.actionWithDuration(4, cc.ccp(0, 100)),
        b = a.reverse(),
        c = cc.MoveBy.actionWithDuration(8, cc.ccp(200, 0)),
        e = c.reverse(),
        a = cc.Sequence.actions(a, c, b, e, null);
        d.runAction(cc.RepeatForever.actionWithAction(a));
        this.addChild(d)
    },
    title: function() {
        return "Parallax: parent and 3 children"
    }
});
Parallax2 = ParallaxDemo.extend({
    _m_root: null,
    _m_target: null,
    _m_streak: null,
    ctor: function() {
        this.setIsTouchEnabled(!0);
        var a = cc.Sprite.spriteWithFile(s_Power);
        a.setScale(0.5);
        a.setAnchorPoint(cc.ccp(0, 0));
        var b = cc.TMXTiledMap.tiledMapWithTMXFile("Resources/TileMaps/orthogonal-test2.tmx");
        b.setAnchorPoint(cc.ccp(0, 0));
        var c = cc.Sprite.spriteWithFile(s_back);
        c.setAnchorPoint(cc.ccp(0, 0));
        var d = cc.ParallaxNode.node();
        d.addChild(c, -1, cc.ccp(0.4, 0.5), cc.PointZero());
        d.addChild(b, 1, cc.ccp(1, 1), cc.ccp(0, 0));
        d.addChild(a, 2, cc.ccp(3, 2.5), cc.ccp(0, 0));
        this.addChild(d, 0, kTagNode)
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !0)
    },
    ccTouchBegan: function() {
        return ! 0
    },
    ccTouchEnded: function() {
        this._prevLocation = null
    },
    ccTouchCancelled: function() {},
    _prevLocation: null,
    ccTouchMoved: function(a) {
        if (null == this._prevLocation) this._prevLocation = a.locationInView(a.view());
        else {
            var b = a.locationInView(a.view()),
            a = cc.ccpSub(b, this._prevLocation);
            this._prevLocation = cc.ccp(b.x, b.y);
            var b = this.getChildByTag(kTagNode),
            c = b.getPosition();
            b.setPosition(cc.ccpAdd(c, a))
        }
    },
    title: function() {
        return "Parallax: drag screen"
    }
});
ParallaxTestScene = TestScene.extend({
    runThisTest: function() {
        sceneIdx = -1;
        MAX_LAYER = 2;
        this.addChild(nextParallaxAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var MAX_LAYER = 1,
sceneIdx = -1,
s_currentOrientation = cc.DeviceOrientationPortrait;
function createTestCaseLayer(a) {
    switch (a) {
    case 0:
        return a = new Director1,
        a.init(),
        a;
    default:
        return null
    }
}
function nextDirectorTestCase() {
    sceneIdx++;
    sceneIdx %= MAX_LAYER;
    return createTestCaseLayer(sceneIdx)
}
function backDirectorTestCase() {
    sceneIdx--;
    0 > sceneIdx && (sceneIdx += MAX_LAYER);
    return createTestCaseLayer(sceneIdx)
}
function restartDirectorTestCase() {
    return createTestCaseLayer(sceneIdx)
}
DirectorTest = cc.Layer.extend({
    init: function() {
        var a = !1;
        if (this._super()) {
            var a = cc.Director.sharedDirector().getWinSize(),
            b = cc.LabelTTF.labelWithString(this.title(), "Arial", 26);
            this.addChild(b, 1);
            b.setPosition(cc.ccp(a.width / 2, a.height - 50));
            b = this.subtitle();
            b.length && (b = cc.LabelTTF.labelWithString(b, "Thonburi", 16), this.addChild(b, 1), b.setPosition(cc.ccp(a.width / 2, a.height - 80)));
            a = !0
        }
        return a
    },
    restartCallback: function() {
        var a = new DirectorTestScene;
        a.addChild(restartDirectorTestCase());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new DirectorTestScene;
        a.addChild(nextDirectorTestCase());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new DirectorTestScene;
        a.addChild(backDirectorTestCase());
        cc.Director.sharedDirector().replaceScene(a)
    },
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    }
});
Director1 = DirectorTest.extend({
    init: function() {
        var a = !1;
        if (this._super()) {
            this.setIsTouchEnabled(!0);
            var a = cc.Director.sharedDirector().getWinSize(),
            b = cc.MenuItemFont.itemFromString("Rotate Device", this, this.rotateDevice),
            b = cc.Menu.menuWithItems(b, null);
            b.setPosition(cc.ccp(a.width / 2, a.height / 2));
            this.addChild(b);
            a = !0
        }
        return a
    },
    newOrientation: function() {
        switch (s_currentOrientation) {
        case cc.DeviceOrientationLandscapeLeft:
            s_currentOrientation = cc.DeviceOrientationPortrait;
            break;
        case cc.DeviceOrientationPortrait:
            s_currentOrientation = cc.DeviceOrientationLandscapeRight;
            break;
        case cc.DeviceOrientationLandscapeRight:
            s_currentOrientation = cc.DeviceOrientationPortraitUpsideDown;
            break;
        case cc.DeviceOrientationPortraitUpsideDown:
            s_currentOrientation = cc.DeviceOrientationLandscapeLeft
        }
        cc.Director.sharedDirector().setDeviceOrientation(s_currentOrientation)
    },
    rotateDevice: function() {
        this.newOrientation();
        this.restartCallback(null)
    },
    ccTouchesEnded: function(a) {
        var b;
        if (! (0 >= a.length)) for (var c = 0; c < a.length; c++) {
            b = a[c];
            if (!b) break;
            b = b.locationInView(b.view());
            var d = cc.Director.sharedDirector(),
            d = d.convertToUI(d.convertToGL(b));
            cc.Log("(" + b.x + "," + b.y + ") ==( " + d.x + "," + d.y + ")")
        }
    },
    title: function() {
        return "Testing conversion"
    },
    subtitle: function() {
        return "Tap screen and see the debug console"
    }
});
DirectorTestScene = TestScene.extend({
    runThisTest: function() {
        MAX_LAYER = 1;
        s_currentOrientation = cc.DeviceOrientationPortrait;
        this.addChild(nextDirectorTestCase());
        cc.Director.sharedDirector().replaceScene(this)
    },
    MainMenuCallback: function(a) {
        cc.Director.sharedDirector().setDeviceOrientation(cc.DeviceOrientationPortrait);
        this._super(a)
    }
});
var kItemTagBasic = 1E3,
nCurCase = 0,
PerformanceTests = ["PerformanceNodeChildrenTest", "PerformanceParticleTest", "PerformanceSpriteTest", "PerformanceTextureTest", "PerformanceTouchesTest"],
PerformanceMainLayer = cc.Layer.extend({
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.Menu.menuWithItems(null);
        b.setPosition(cc.PointZero());
        cc.MenuItemFont.setFontName("Arial");
        cc.MenuItemFont.setFontSize(24);
        for (var c = 0; c < PerformanceTests.length; c++) {
            var d = cc.MenuItemFont.itemFromString(PerformanceTests[c], this, this.menuCallback);
            d.setPosition(cc.ccp(a.width / 2, a.height - (c + 1) * LINE_SPACE));
            b.addChild(d, kItemTagBasic + c)
        }
        this.addChild(b)
    },
    menuCallback: function(a) {
        switch (a.getZOrder() - kItemTagBasic) {
        case 0:
            runNodeChildrenTest();
            break;
        case 1:
            runParticleTest();
            break;
        case 2:
            runSpriteTest();
            break;
        case 3:
            runTextureTest();
            break;
        case 4:
            runTouchesTest()
        }
    }
}),
PerformBasicLayer = cc.Layer.extend({
    _m_bControlMenuVisible: !0,
    _m_nMaxCases: 1,
    _m_nCurCase: 0,
    ctor: function() {
        this._m_nCurCase = nCurCase
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize();
        cc.MenuItemFont.setFontName("Arial");
        cc.MenuItemFont.setFontSize(24);
        var b = cc.MenuItemFont.itemFromString("Back", this, this.toMainLayer);
        b.setPosition(cc.ccp(a.width - 50, 25));
        b = cc.Menu.menuWithItems(b, null);
        b.setPosition(cc.PointZero());
        if (this._m_bControlMenuVisible) {
            var c = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
            d = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
            e = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback);
            c.setPosition(cc.ccp(a.width / 2 - 100, 30));
            d.setPosition(cc.ccp(a.width / 2, 30));
            e.setPosition(cc.ccp(a.width / 2 + 100, 30));
            b.addChild(c, kItemTagBasic);
            b.addChild(d, kItemTagBasic);
            b.addChild(e, kItemTagBasic)
        }
        this.addChild(b)
    },
    restartCallback: function() {
        this.showCurrentTest()
    },
    nextCallback: function() {
        this._m_nCurCase++;
        nCurCase = this._m_nCurCase %= this._m_nMaxCases;
        this.showCurrentTest()
    },
    backCallback: function() {
        this._m_nCurCase--;
        0 > this._m_nCurCase && (this._m_nCurCase += this._m_nMaxCases);
        nCurCase = this._m_nCurCase;
        this.showCurrentTest()
    },
    showCurrentTest: function() {},
    toMainLayer: function() { (new PerformanceTestScene).runThisTest()
    }
}),
PerformanceTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new PerformanceMainLayer);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kMaxSprites = 1E3,
kSpritesIncrease = 50,
kTagInfoLayer = 1,
kTagMainLayer = 2,
kTagSpriteMenuLayer = kMaxSprites + 1E3,
s_nSpriteCurCase = 0,
SubTest = cc.Class.extend({
    _subtestNumber: null,
    _batchNode: null,
    _parent: null,
    removeByTag: function(a) {
        switch (this._subtestNumber) {
        case 1:
        case 4:
        case 7:
            this._parent.removeChildByTag(a + 100, !0);
            break;
        case 2:
        case 3:
        case 5:
        case 6:
        case 8:
        case 9:
            this._batchNode.removeChildAtIndex(a, !0)
        }
    },
    createSpriteWithTag: function(a) {
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888);
        var b = null;
        switch (this._subtestNumber) {
        case 1:
            b = cc.Sprite.spriteWithFile("Resources/Images/grossinis_sister1.png");
            this._parent.addChild(b, 0, a + 100);
            break;
        case 2:
        case 3:
            b = cc.Sprite.spriteWithBatchNode(this._batchNode, cc.RectMake(0, 0, 52, 139));
            this._batchNode.addChild(b, 0, a + 100);
            break;
        case 4:
            b = parseInt(1400 * cc.RANDOM_0_1() / 100) + 1;
            b = 10 > b ? "0" + b: b.toString();
            b = cc.Sprite.spriteWithFile("Resources/Images/grossini_dance_" + b + ".png");
            this._parent.addChild(b, 0, a + 100);
            break;
        case 5:
        case 6:
            var c;
            c = 1400 * cc.RANDOM_0_1() / 100;
            b = cc.Sprite.spriteWithBatchNode(this._batchNode, cc.RectMake(85 * (c % 5), 121 * (c / 5), 85, 121));
            this._batchNode.addChild(b, 0, a + 100);
            break;
        case 7:
            c = 6400 * cc.RANDOM_0_1() / 100;
            b = parseInt(c / 8);
            c = parseInt(c % 8);
            b = cc.Sprite.spriteWithFile("Resources/Images/sprites_test/sprite-" + c + "-" + b + ".png");
            this._parent.addChild(b, 0, a + 100);
            break;
        case 8:
        case 9:
            c = 6400 * cc.RANDOM_0_1() / 100,
            b = cc.Sprite.spriteWithBatchNode(this._batchNode, cc.RectMake(32 * (c % 8), 32 * (c / 8), 32, 32)),
            this._batchNode.addChild(b, 0, a + 100)
        }
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_Default);
        return b
    },
    initWithSubTest: function(a, b) {
        this._subtestNumber = a;
        this._parent = b;
        this._batchNode = null;
        var c = cc.TextureCache.sharedTextureCache();
        c.removeTexture(c.addImage("Resources/Images/grossinis_sister1.png"));
        c.removeTexture(c.addImage("Resources/Images/grossini_dance_atlas.png"));
        c.removeTexture(c.addImage("Resources/Images/spritesheet1.png"));
        switch (this._subtestNumber) {
        case 2:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888);
            this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/grossinis_sister1.png", 100);
            b.addChild(this._batchNode, 0);
            break;
        case 3:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA4444);
            this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/grossinis_sister1.png", 100);
            b.addChild(this._batchNode, 0);
            break;
        case 5:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888);
            this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/grossini_dance_atlas.png", 100);
            b.addChild(this._batchNode, 0);
            break;
        case 6:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA4444);
            this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/grossini_dance_atlas.png", 100);
            b.addChild(this._batchNode, 0);
            break;
        case 8:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888);
            this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/spritesheet1.png", 100);
            b.addChild(this._batchNode, 0);
            break;
        case 9:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA4444),
            this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/spritesheet1.png", 100),
            b.addChild(this._batchNode, 0)
        }
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_Default)
    }
}),
SpriteMenuLayer = PerformBasicLayer.extend({
    _m_nMaxCases: 7,
    showCurrentTest: function() {
        var a = null,
        b = this.getParent(),
        c = b.getSubTestNum(),
        b = b.getNodesNum();
        switch (this._m_nCurCase) {
        case 0:
            a = new SpritePerformTest1;
            break;
        case 1:
            a = new SpritePerformTest2;
            break;
        case 2:
            a = new SpritePerformTest3;
            break;
        case 3:
            a = new SpritePerformTest4;
            break;
        case 4:
            a = new SpritePerformTest5;
            break;
        case 5:
            a = new SpritePerformTest6;
            break;
        case 6:
            a = new SpritePerformTest7
        }
        s_nSpriteCurCase = this._m_nCurCase;
        a && (a.initWithSubTest(c, b), cc.Director.sharedDirector().replaceScene(a))
    }
}),
SpriteMainScene = cc.Scene.extend({
    _lastRenderedCount: null,
    _quantityNodes: null,
    _m_pSubTest: null,
    _subtestNumber: 1,
    title: function() {
        return "No title"
    },
    initWithSubTest: function(a, b) {
        this._subtestNumber = a;
        this._m_pSubTest = new SubTest;
        this._m_pSubTest.initWithSubTest(a, this);
        var c = cc.Director.sharedDirector().getWinSize();
        this._quantityNodes = this._lastRenderedCount = 0;
        var d = cc.LabelTTF.labelWithString(this.title(), "Arial", 40);
        this.addChild(d, 1);
        d.setPosition(cc.ccp(c.width / 2, c.height - 32));
        d.setColor(cc.ccc3(255, 255, 40));
        cc.MenuItemFont.setFontSize(65);
        d = cc.MenuItemFont.itemFromString(" - ", this, this.onDecrease);
        d.setColor(cc.ccc3(0, 200, 20));
        var e = cc.MenuItemFont.itemFromString(" + ", this, this.onIncrease);
        e.setColor(cc.ccc3(0, 200, 20));
        d = cc.Menu.menuWithItems(d, e, null);
        d.alignItemsHorizontally();
        d.setPosition(cc.ccp(c.width / 2, c.height - 65));
        this.addChild(d, 1);
        d = cc.LabelTTF.labelWithString("0 nodes", "Marker Felt", 30);
        d.setColor(cc.ccc3(0, 200, 20));
        d.setPosition(cc.ccp(c.width / 2, c.height - 90));
        this.addChild(d, 1, kTagInfoLayer);
        this.addChild(new SpriteMenuLayer(!0, 7, s_nSpriteCurCase), 1, kTagSpriteMenuLayer);
        cc.MenuItemFont.setFontSize(32);
        d = cc.Menu.menuWithItems(null);
        for (e = 1; 9 >= e; ++e) {
            var f = cc.MenuItemFont.itemFromString(e.toString(), this, this.testNCallback);
            f.setTag(e);
            d.addChild(f, 10);
            3 >= e ? f.setColor(cc.ccc3(200, 20, 20)) : 6 >= e ? f.setColor(cc.ccc3(0, 200, 20)) : f.setColor(cc.ccc3(0, 20, 200))
        }
        d.alignItemsHorizontally();
        d.setPosition(cc.ccp(c.width / 2, 80));
        for (this.addChild(d, 2); this._quantityNodes < b;) this.onIncrease(this)
    },
    updateNodes: function() {
        if (this._quantityNodes != this._lastRenderedCount) {
            var a = this._quantityNodes + " nodes";
            this.getChildByTag(kTagInfoLayer).setString(a);
            this._lastRenderedCount = this._quantityNodes
        }
    },
    testNCallback: function(a) {
        this._subtestNumber = a.getTag();
        this.getChildByTag(kTagSpriteMenuLayer).restartCallback(a)
    },
    onIncrease: function() {
        if (! (this._quantityNodes >= kMaxSprites)) {
            for (var a = 0; a < kSpritesIncrease; a++) this.doTest(this._m_pSubTest.createSpriteWithTag(this._quantityNodes)),
            this._quantityNodes++;
            this.updateNodes()
        }
    },
    onDecrease: function() {
        if (! (0 >= this._quantityNodes)) {
            for (var a = 0; a < kSpritesIncrease; a++) this._quantityNodes--,
            this._m_pSubTest.removeByTag(this._quantityNodes);
            this.updateNodes()
        }
    },
    doTest: function() {},
    getSubTestNum: function() {
        return this._subtestNumber
    },
    getNodesNum: function() {
        return this._quantityNodes
    }
});
function performanceActions(a) {
    var b = cc.Director.sharedDirector().getWinSize();
    a.setPosition(cc.ccp(parseInt(Math.random() * b.width), parseInt(Math.random() * b.height)));
    var b = 0.5 + 1E3 * Math.random() / 500,
    b = cc.RotateBy.actionWithDuration(b, 360 * cc.RANDOM_0_1()),
    c = b.reverse(),
    b = cc.RepeatForever.actionWithAction(cc.Sequence.actions(b, c, null));
    a.runAction(b);
    b = 0.5 + 1E3 * Math.random() / 500;
    b = cc.ScaleBy.actionWithDuration(b, 0.5, 0.5);
    b = cc.RepeatForever.actionWithAction(cc.Sequence.actionOneTwo(b, b.reverse()));
    a.runAction(b)
}
function performanceActions20(a) {
    var b = cc.Director.sharedDirector().getWinSize();
    0.2 > cc.RANDOM_0_1() ? a.setPosition(cc.ccp(parseInt(Math.random() * b.width), parseInt(Math.random() * b.height))) : a.setPosition(cc.ccp( - 1E3, -1E3));
    var b = 0.5 + 1E3 * Math.random() / 500,
    b = cc.RotateBy.actionWithDuration(b, 360 * cc.RANDOM_0_1()),
    c = b.reverse(),
    b = cc.RepeatForever.actionWithAction(cc.Sequence.actions(b, c, null));
    a.runAction(b);
    b = 0.5 + 1E3 * Math.random() / 500;
    b = cc.ScaleBy.actionWithDuration(b, 0.5, 0.5);
    b = cc.RepeatForever.actionWithAction(cc.Sequence.actionOneTwo(b, b.reverse()));
    a.runAction(b)
}
function performanceRotationScale(a) {
    var b = cc.Director.sharedDirector().getWinSize();
    a.setPosition(cc.ccp(parseInt(Math.random() * b.width), parseInt(Math.random() * b.height)));
    a.setRotation(360 * cc.RANDOM_0_1());
    a.setScale(2 * cc.RANDOM_0_1())
}
function performancePosition(a) {
    var b = cc.Director.sharedDirector().getWinSize();
    a.setPosition(cc.ccp(parseInt(Math.random() * b.width), parseInt(Math.random() * b.height)))
}
function performanceout20(a) {
    var b = cc.Director.sharedDirector().getWinSize();
    0.2 > cc.RANDOM_0_1() ? a.setPosition(cc.ccp(parseInt(Math.random() * b.width), parseInt(Math.random() * b.height))) : a.setPosition(cc.ccp( - 1E3, -1E3))
}
function performanceOut100(a) {
    a.setPosition(cc.ccp( - 1E3, -1E3))
}
function performanceScale(a) {
    var b = cc.Director.sharedDirector().getWinSize();
    a.setPosition(cc.ccp(parseInt(Math.random() * b.width), parseInt(Math.random() * b.height)));
    a.setScale(100 * cc.RANDOM_0_1() / 50)
}
var SpritePerformTest1 = SpriteMainScene.extend({
    doTest: function(a) {
        performancePosition(a)
    },
    title: function() {
        return "A (" + this._subtestNumber + ") position"
    }
}),
SpritePerformTest2 = SpriteMainScene.extend({
    doTest: function(a) {
        performanceScale(a)
    },
    title: function() {
        return "B (" + this._subtestNumber + ") scale"
    }
}),
SpritePerformTest3 = SpriteMainScene.extend({
    doTest: function(a) {
        performanceRotationScale(a)
    },
    title: function() {
        return "C (" + this._subtestNumber + ") scale + rot"
    }
}),
SpritePerformTest4 = SpriteMainScene.extend({
    doTest: function(a) {
        performanceOut100(a)
    },
    title: function() {
        return "D (" + this._subtestNumber + ") 100% out"
    }
}),
SpritePerformTest5 = SpriteMainScene.extend({
    doTest: function(a) {
        performanceout20(a)
    },
    title: function() {
        return "E (" + this._subtestNumber + ") 80% out"
    }
}),
SpritePerformTest6 = SpriteMainScene.extend({
    doTest: function(a) {
        performanceActions(a)
    },
    title: function() {
        return "F (" + this._subtestNumber + ") actions"
    }
}),
SpritePerformTest7 = SpriteMainScene.extend({
    doTest: function(a) {
        performanceActions20(a)
    },
    title: function() {
        return "G (" + this._subtestNumber + ") actions 80% out"
    }
});
function runSpriteTest() {
    var a = new SpritePerformTest1;
    a.initWithSubTest(1, 50);
    cc.Director.sharedDirector().replaceScene(a)
};
var kTagParticleSystem = 3,
kTagLabelAtlas = 4,
kMaxParticles = 1E3,
kParticleNodesIncrease = 50,
s_nParCurIdx = 0,
kTagParticleMenuLayer = 1E3,
ParticleMenuLayer = PerformBasicLayer.extend({
    _m_nMaxCases: 4,
    showCurrentTest: function() {
        var a = this.getParent(),
        b = a.getSubTestNum(),
        a = a.getParticlesNum(),
        c = null;
        switch (this._m_nCurCase) {
        case 0:
            c = new ParticlePerformTest1;
            break;
        case 1:
            c = new ParticlePerformTest2;
            break;
        case 2:
            c = new ParticlePerformTest3;
            break;
        case 3:
            c = new ParticlePerformTest4
        }
        s_nParCurIdx = this._m_nCurCase;
        c && (c.initWithSubTest(b, a), cc.Director.sharedDirector().replaceScene(c))
    }
}),
ParticleMainScene = cc.Scene.extend({
    _lastRenderedCount: null,
    _quantityParticles: null,
    _subtestNumber: null,
    initWithSubTest: function(a, b) {
        this._subtestNumber = a;
        var c = cc.Director.sharedDirector().getWinSize();
        this._lastRenderedCount = 0;
        this._quantityParticles = b;
        cc.MenuItemFont.setFontSize(65);
        var d = cc.MenuItemFont.itemFromString(" - ", this, this.onDecrease);
        d.setColor(cc.ccc3(0, 200, 20));
        var e = cc.MenuItemFont.itemFromString(" + ", this, this.onIncrease);
        e.setColor(cc.ccc3(0, 200, 20));
        d = cc.Menu.menuWithItems(d, e, null);
        d.alignItemsHorizontally();
        d.setPosition(cc.ccp(c.width / 2, c.height / 2 + 15));
        this.addChild(d, 1);
        d = cc.LabelTTF.labelWithString("0 nodes", "Marker Felt", 30);
        d.setColor(cc.ccc3(0, 200, 20));
        d.setPosition(cc.ccp(c.width / 2, c.height - 90));
        this.addChild(d, 1, kTagInfoLayer);
        d = cc.LabelTTF.labelWithString("0000", "Marker Felt", 30);
        this.addChild(d, 0, kTagLabelAtlas);
        d.setPosition(cc.ccp(c.width - 66, 50));
        this.addChild(new ParticleMenuLayer(!0, 4, s_nParCurIdx), 1, kTagParticleMenuLayer);
        cc.MenuItemFont.setFontSize(40);
        d = cc.Menu.menuWithItems(null);
        for (e = 1; 3 >= e; ++e) {
            var f = cc.MenuItemFont.itemFromString(e.toString(), this, this.testNCallback);
            f.setTag(e);
            d.addChild(f, 10);
            1 >= e ? f.setColor(cc.ccc3(200, 20, 20)) : f.setColor(cc.ccc3(0, 200, 20))
        }
        d.alignItemsHorizontally();
        d.setPosition(cc.ccp(c.width / 2, 80));
        this.addChild(d, 2);
        d = cc.LabelTTF.labelWithString(this.title(), "Arial", 40);
        this.addChild(d, 1);
        d.setPosition(cc.ccp(c.width / 2, c.height - 32));
        d.setColor(cc.ccc3(255, 255, 40));
        this.updateQuantityLabel();
        this.createParticleSystem();
        this.schedule(this.step)
    },
    title: function() {
        return "No title"
    },
    step: function() {
        var a = this.getChildByTag(kTagLabelAtlas),
        b = this.getChildByTag(kTagParticleSystem).getParticleCount();
        a.setString(b)
    },
    createParticleSystem: function() {
        var a = null;
        this.removeChildByTag(kTagParticleSystem, !0);
        a = cc.TextureCache.sharedTextureCache().addImage("Resources/Images/fire.png");
        cc.TextureCache.sharedTextureCache().removeTexture(a);
        a = new cc.ParticleSystemQuad;
        switch (this._subtestNumber) {
        case 1:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888);
            a.initWithTotalParticles(this._quantityParticles);
            a.setTexture(cc.TextureCache.sharedTextureCache().addImage("Resources/Images/fire.png"));
            break;
        case 2:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA4444);
            a.initWithTotalParticles(this._quantityParticles);
            a.setTexture(cc.TextureCache.sharedTextureCache().addImage("Resources/Images/fire.png"));
            break;
        case 3:
            cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_A8);
            a.initWithTotalParticles(this._quantityParticles);
            a.setTexture(cc.TextureCache.sharedTextureCache().addImage("Resources/Images/fire.png"));
            break;
        default:
            a = null,
            cc.LOG("Shall not happen!")
        }
        this.addChild(a, 0, kTagParticleSystem);
        this.doTest();
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888)
    },
    onDecrease: function() {
        this._quantityParticles -= kParticleNodesIncrease;
        0 > this._quantityParticles && (this._quantityParticles = 0);
        this.updateQuantityLabel();
        this.createParticleSystem()
    },
    onIncrease: function() {
        this._quantityParticles += kParticleNodesIncrease;
        this._quantityParticles > kMaxParticles && (this._quantityParticles = kMaxParticles);
        this.updateQuantityLabel();
        this.createParticleSystem()
    },
    testNCallback: function(a) {
        this._subtestNumber = a.getTag();
        this.getChildByTag(kTagParticleMenuLayer).restartCallback(a)
    },
    updateQuantityLabel: function() {
        if (this._quantityParticles != this._lastRenderedCount) {
            var a = this._quantityParticles + " particles";
            this.getChildByTag(kTagInfoLayer).setString(a);
            this._lastRenderedCount = this._quantityParticles
        }
    },
    getSubTestNum: function() {
        return this._subtestNumber
    },
    getParticlesNum: function() {
        return this._quantityParticles
    },
    doTest: function() {}
}),
ParticlePerformTest1 = ParticleMainScene.extend({
    title: function() {
        return "A " + this._subtestNumber + " size=4"
    },
    doTest: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = this.getChildByTag(kTagParticleSystem);
        b.setDuration( - 1);
        b.setGravity(cc.ccp(0, -90));
        b.setAngle(90);
        b.setAngleVar(0);
        b.setRadialAccel(0);
        b.setRadialAccelVar(0);
        b.setSpeed(180);
        b.setSpeedVar(50);
        b.setPosition(cc.ccp(a.width / 2, 100));
        b.setPosVar(cc.ccp(a.width / 2, 0));
        b.setLife(2);
        b.setLifeVar(1);
        b.setEmissionRate(b.getTotalParticles() / b.getLife());
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColor(a);
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColorVar(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColor(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColorVar(a);
        b.setEndSize(4);
        b.setStartSize(4);
        b.setEndSizeVar(0);
        b.setStartSizeVar(0);
        b.setIsBlendAdditive(!1)
    }
}),
ParticlePerformTest2 = ParticleMainScene.extend({
    title: function() {
        return "B " + this._subtestNumber + " size=8"
    },
    doTest: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = this.getChildByTag(kTagParticleSystem);
        b.setDuration( - 1);
        b.setGravity(cc.ccp(0, -90));
        b.setAngle(90);
        b.setAngleVar(0);
        b.setRadialAccel(0);
        b.setRadialAccelVar(0);
        b.setSpeed(180);
        b.setSpeedVar(50);
        b.setPosition(cc.ccp(a.width / 2, 100));
        b.setPosVar(cc.ccp(a.width / 2, 0));
        b.setLife(2);
        b.setLifeVar(1);
        b.setEmissionRate(b.getTotalParticles() / b.getLife());
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColor(a);
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColorVar(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColor(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColorVar(a);
        b.setEndSize(8);
        b.setStartSize(8);
        b.setEndSizeVar(0);
        b.setStartSizeVar(0);
        b.setIsBlendAdditive(!1)
    }
}),
ParticlePerformTest3 = ParticleMainScene.extend({
    title: function() {
        return "C " + this._subtestNumber + " size=32"
    },
    doTest: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = this.getChildByTag(kTagParticleSystem);
        b.setDuration( - 1);
        b.setGravity(cc.ccp(0, -90));
        b.setAngle(90);
        b.setAngleVar(0);
        b.setRadialAccel(0);
        b.setRadialAccelVar(0);
        b.setSpeed(180);
        b.setSpeedVar(50);
        b.setPosition(cc.ccp(a.width / 2, 100));
        b.setPosVar(cc.ccp(a.width / 2, 0));
        b.setLife(2);
        b.setLifeVar(1);
        b.setEmissionRate(b.getTotalParticles() / b.getLife());
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColor(a);
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColorVar(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColor(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColorVar(a);
        b.setEndSize(32);
        b.setStartSize(32);
        b.setEndSizeVar(0);
        b.setStartSizeVar(0);
        b.setIsBlendAdditive(!1)
    }
}),
ParticlePerformTest4 = ParticleMainScene.extend({
    title: function() {
        return "D " + this._subtestNumber + " size=64"
    },
    doTest: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = this.getChildByTag(kTagParticleSystem);
        b.setDuration( - 1);
        b.setGravity(cc.ccp(0, -90));
        b.setAngle(90);
        b.setAngleVar(0);
        b.setRadialAccel(0);
        b.setRadialAccelVar(0);
        b.setSpeed(180);
        b.setSpeedVar(50);
        b.setPosition(cc.ccp(a.width / 2, 100));
        b.setPosVar(cc.ccp(a.width / 2, 0));
        b.setLife(2);
        b.setLifeVar(1);
        b.setEmissionRate(b.getTotalParticles() / b.getLife());
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColor(a);
        a = new cc.Color4F(0.5, 0.5, 0.5, 1);
        b.setStartColorVar(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColor(a);
        a = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
        b.setEndColorVar(a);
        b.setEndSize(64);
        b.setStartSize(64);
        b.setEndSizeVar(0);
        b.setStartSizeVar(0);
        b.setIsBlendAdditive(!1)
    }
});
function runParticleTest() {
    var a = new ParticlePerformTest1;
    a.initWithSubTest(1, kParticleNodesIncrease);
    cc.Director.sharedDirector().replaceScene(a)
};
var kTagBase = 2E3,
kMaxNodes = 1500,
kNodesIncrease = 50,
s_nCurCase = 0,
NodeChildrenMenuLayer = PerformBasicLayer.extend({
    _m_nMaxCases: 4,
    showCurrentTest: function() {
        var a = this.getParent().getQuantityOfNodes(),
        b = null;
        switch (this._m_nCurCase) {
        case 0:
            b = new IterateSpriteSheetCArray;
            break;
        case 1:
            b = new AddSpriteSheet;
            break;
        case 2:
            b = new RemoveSpriteSheet;
            break;
        case 3:
            b = new ReorderSpriteSheet
        }
        s_nCurCase = this._m_nCurCase;
        b && (b.initWithQuantityOfNodes(a), cc.Director.sharedDirector().replaceScene(b))
    }
}),
NodeChildrenMainScene = cc.Scene.extend({
    _lastRenderedCount: null,
    _quantityOfNodes: null,
    _currentQuantityOfNodes: null,
    initWithQuantityOfNodes: function(a) {
        var b = cc.Director.sharedDirector().getWinSize(),
        c = cc.LabelTTF.labelWithString(this.title(), "Arial", 40);
        this.addChild(c, 1);
        c.setPosition(cc.ccp(b.width / 2, b.height - 32));
        c.setColor(cc.ccc3(255, 255, 40));
        c = this.subtitle();
        c.length && (c = cc.LabelTTF.labelWithString(c, "Thonburi", 16), this.addChild(c, 1), c.setPosition(cc.ccp(b.width / 2, b.height - 80)));
        this._currentQuantityOfNodes = this._lastRenderedCount = 0;
        this._quantityOfNodes = a;
        cc.MenuItemFont.setFontSize(65);
        a = cc.MenuItemFont.itemFromString(" - ", this, this.onDecrease);
        a.setColor(cc.ccc3(0, 200, 20));
        c = cc.MenuItemFont.itemFromString(" + ", this, this.onIncrease);
        c.setColor(cc.ccc3(0, 200, 20));
        a = cc.Menu.menuWithItems(a, c, null);
        a.alignItemsHorizontally();
        a.setPosition(cc.ccp(b.width / 2, b.height / 2 + 15));
        this.addChild(a, 1);
        a = cc.LabelTTF.labelWithString("0 nodes", "Marker Felt", 30);
        a.setColor(cc.ccc3(0, 200, 20));
        a.setPosition(cc.ccp(b.width / 2, b.height / 2 - 15));
        this.addChild(a, 1, kTagInfoLayer);
        this.addChild(new NodeChildrenMenuLayer(!0, 4, s_nCurCase));
        this.updateQuantityLabel();
        this.updateQuantityOfNodes()
    },
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    },
    updateQuantityOfNodes: function() {},
    onDecrease: function() {
        this._quantityOfNodes -= kNodesIncrease;
        0 > this._quantityOfNodes && (this._quantityOfNodes = 0);
        this.updateQuantityLabel();
        this.updateQuantityOfNodes()
    },
    onIncrease: function() {
        this._quantityOfNodes += kNodesIncrease;
        this._quantityOfNodes > kMaxNodes && (this._quantityOfNodes = kMaxNodes);
        this.updateQuantityLabel();
        this.updateQuantityOfNodes()
    },
    updateQuantityLabel: function() {
        if (this._quantityOfNodes != this._lastRenderedCount) {
            var a = this._quantityOfNodes + " nodes";
            this.getChildByTag(kTagInfoLayer).setString(a);
            this._lastRenderedCount = this._quantityOfNodes
        }
    },
    getQuantityOfNodes: function() {
        return this._quantityOfNodes
    }
}),
IterateSpriteSheet = NodeChildrenMainScene.extend({
    _batchNode: null,
    _profilingTimer: null,
    ctor: function() {
        cc.ENABLE_PROFILERS && (this._profilingTimer = new cc.ProfilingTimer)
    },
    updateQuantityOfNodes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        if (this._currentQuantityOfNodes < this._quantityOfNodes) for (var b = 0; b < this._quantityOfNodes - this._currentQuantityOfNodes; b++) {
            var c = cc.Sprite.spriteWithTexture(this._batchNode.getTexture(), cc.RectMake(0, 0, 32, 32));
            this._batchNode.addChild(c);
            c.setPosition(cc.ccp(cc.RANDOM_0_1() * a.width, cc.RANDOM_0_1() * a.height))
        } else if (this._currentQuantityOfNodes > this._quantityOfNodes) for (b = 0; b < this._currentQuantityOfNodes - this._quantityOfNodes; b++) this._batchNode.removeChildAtIndex(this._currentQuantityOfNodes - b - 1, !0);
        this._currentQuantityOfNodes = this._quantityOfNodes
    },
    initWithQuantityOfNodes: function(a) {
        this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/spritesheet1.png");
        this.addChild(this._batchNode);
        this._super(a);
        cc.ENABLE_PROFILERS && (this._profilingTimer = cc.Profiler.timerWithName(this.profilerName(), this));
        this.scheduleUpdate()
    },
    update: function() {},
    profilerName: function() {
        return "none"
    }
}),
IterateSpriteSheetFastEnum = IterateSpriteSheet.extend({
    update: function() {
        var a = this._batchNode.getChildren();
        cc.ENABLE_PROFILERS && cc.ProfilingBeginTimingBlock(this._profilingTimer);
        for (var b = 0; b < a.length; b++) a[b].setIsVisible(!1);
        cc.ENABLE_PROFILERS && cc.ProfilingEndTimingBlock(this._profilingTimer)
    },
    title: function() {
        return "A - Iterate SpriteSheet"
    },
    subtitle: function() {
        return "Iterate children using Fast Enum API. See console"
    },
    profilerName: function() {
        return "iter fast enum"
    }
}),
IterateSpriteSheetCArray = IterateSpriteSheet.extend({
    update: function() {
        var a = this._batchNode.getChildren();
        cc.ENABLE_PROFILERS && cc.ProfilingBeginTimingBlock(this._profilingTimer);
        for (var b = 0; b < a.length; b++) a[b].setIsVisible(!1);
        cc.ENABLE_PROFILERS && cc.ProfilingEndTimingBlock(this._profilingTimer)
    },
    title: function() {
        return "B - Iterate SpriteSheet"
    },
    subtitle: function() {
        return "Iterate children using Array API. See console"
    },
    profilerName: function() {
        return "iter c-array"
    }
}),
AddRemoveSpriteSheet = NodeChildrenMainScene.extend({
    _batchNode: null,
    ctor: function() {
        cc.ENABLE_PROFILERS && (this._profilingTimer = new cc.ProfilingTimer)
    },
    updateQuantityOfNodes: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        if (this._currentQuantityOfNodes < this._quantityOfNodes) for (var b = 0; b < this._quantityOfNodes - this._currentQuantityOfNodes; b++) {
            var c = cc.Sprite.spriteWithTexture(this._batchNode.getTexture(), cc.RectMake(0, 0, 32, 32));
            this._batchNode.addChild(c);
            c.setPosition(cc.ccp(cc.RANDOM_0_1() * a.width, cc.RANDOM_0_1() * a.height));
            c.setIsVisible(!1)
        } else if (this._currentQuantityOfNodes > this._quantityOfNodes) for (b = 0; b < this._currentQuantityOfNodes - this._quantityOfNodes; b++) this._batchNode.removeChildAtIndex(this._currentQuantityOfNodes - b - 1, !0);
        this._currentQuantityOfNodes = this._quantityOfNodes
    },
    initWithQuantityOfNodes: function(a) {
        this._batchNode = cc.SpriteBatchNode.batchNodeWithFile("Resources/Images/spritesheet1.png");
        this.addChild(this._batchNode);
        this._super(a);
        cc.ENABLE_PROFILERS && (this._profilingTimer = cc.Profiler.timerWithName(this.profilerName(), this));
        this.scheduleUpdate()
    },
    update: function() {},
    profilerName: function() {
        return "none"
    }
}),
AddSpriteSheet = AddRemoveSpriteSheet.extend({
    update: function() {
        var a = 0.15 * this._currentQuantityOfNodes;
        if (0 < a) {
            for (var b = [], c = [], d = 0; d < a; d++) {
                var e = cc.Sprite.spriteWithTexture(this._batchNode.getTexture(), cc.RectMake(0, 0, 32, 32));
                b.push(e);
                c[d] = 50 * cc.RANDOM_MINUS1_1()
            }
            cc.ENABLE_PROFILERS && cc.ProfilingBeginTimingBlock(this._profilingTimer)
        }
        for (d = 0; d < a; d++) this._batchNode.addChild(b[d], c[d], kTagBase + d);
        cc.ENABLE_PROFILERS && cc.ProfilingEndTimingBlock(this._profilingTimer);
        for (d = 0; d < a; d++) this._batchNode.removeChildByTag(kTagBase + d, !0);
        delete c
    },
    title: function() {
        return "C - Add to spritesheet"
    },
    subtitle: function() {
        return "Adds %10 of total sprites with random z. See console"
    },
    profilerName: function() {
        return "add sprites"
    }
}),
RemoveSpriteSheet = AddRemoveSpriteSheet.extend({
    update: function() {
        var a = 0.15 * this._currentQuantityOfNodes;
        if (0 < a) {
            for (var b = [], c = 0; c < a; c++) {
                var d = cc.Sprite.spriteWithTexture(this._batchNode.getTexture(), cc.RectMake(0, 0, 32, 32));
                b.push(d)
            }
            for (c = 0; c < a; c++) this._batchNode.addChild(b[c], 50 * cc.RANDOM_MINUS1_1(), kTagBase + c);
            cc.ENABLE_PROFILERS && cc.ProfilingBeginTimingBlock(this._profilingTimer);
            for (c = 0; c < a; c++) this._batchNode.removeChildByTag(kTagBase + c, !0);
            cc.ENABLE_PROFILERS && cc.ProfilingEndTimingBlock(this._profilingTimer)
        }
    },
    title: function() {
        return "D - Del from spritesheet"
    },
    subtitle: function() {
        return "Remove %10 of total sprites placed randomly. See console"
    },
    profilerName: function() {
        return "remove sprites"
    }
}),
ReorderSpriteSheet = AddRemoveSpriteSheet.extend({
    update: function() {
        var a = 0.15 * this._currentQuantityOfNodes;
        if (0 < a) {
            for (var b = [], c = 0; c < a; c++) {
                var d = cc.Sprite.spriteWithTexture(this._batchNode.getTexture(), cc.RectMake(0, 0, 32, 32));
                b.push(d)
            }
            for (c = 0; c < a; c++) this._batchNode.addChild(b[c], 50 * cc.RANDOM_MINUS1_1(), kTagBase + c);
            cc.ENABLE_PROFILERS && cc.ProfilingBeginTimingBlock(this._profilingTimer);
            for (c = 0; c < a; c++) this._batchNode.reorderChild(this._batchNode.getChildren()[c], 50 * cc.RANDOM_MINUS1_1());
            cc.ENABLE_PROFILERS && cc.ProfilingEndTimingBlock(this._profilingTimer)
        }
        for (c = 0; c < a; c++) this._batchNode.removeChildByTag(kTagBase + c, !0)
    },
    title: function() {
        return "E - Reorder from spritesheet"
    },
    subtitle: function() {
        return "Reorder %10 of total sprites placed randomly. See console"
    },
    profilerName: function() {
        return "reorder sprites"
    }
});
function runNodeChildrenTest() {
    var a = new IterateSpriteSheetCArray;
    a.initWithQuantityOfNodes(kNodesIncrease);
    cc.Director.sharedDirector().replaceScene(a)
};
var s_nTexCurCase = 0,
TextureMenuLayer = PerformBasicLayer.extend({
    showCurrentTest: function() {
        var a = null;
        switch (this._m_nCurCase) {
        case 0:
            a = TextureTest.scene()
        }
        s_nTexCurCase = this._m_nCurCase;
        a && cc.Director.sharedDirector().replaceScene(a)
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 40);
        this.addChild(b, 1);
        b.setPosition(cc.ccp(a.width / 2, a.height - 32));
        b.setColor(cc.ccc3(255, 255, 40));
        b = this.subtitle();
        b.length && (b = cc.LabelTTF.labelWithString(b, "Thonburi", 16), this.addChild(b, 1), b.setPosition(cc.ccp(a.width / 2, a.height - 80)));
        this.performTests()
    },
    title: function() {
        return "no title"
    },
    subtitle: function() {
        return "no subtitle"
    },
    performTests: function() {}
}),
TextureTest = TextureMenuLayer.extend({
    performTests: function() {
        cc.Log("--------");
        cc.Log("--- PNG 128x128 ---");
        this.performTestsPNG("Resources/Images/test_image.png");
        cc.Log("--- PNG 512x512 ---");
        this.performTestsPNG("Resources/Images/texture512x512.png");
        cc.Log("EMPTY IMAGE");
        cc.Log("--- PNG 1024x1024 ---");
        this.performTestsPNG("Resources/Images/texture1024x1024.png");
        cc.Log("LANDSCAPE IMAGE");
        cc.Log("--- PNG 1024x1024 ---");
        this.performTestsPNG("Resources/Images/landscape-1024x1024.png")
    },
    title: function() {
        return "Texture Performance Test"
    },
    subtitle: function() {
        return "See console for results"
    },
    performTestsPNG: function(a) {
        var b = cc.timeval(),
        c,
        d = cc.TextureCache.sharedTextureCache();
        cc.Log("RGBA 8888");
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA8888);
        b = cc.Time.gettimeofdayCocos2d(); (c = d.addImage(a)) ? cc.Log("  ms:" + calculateDeltaTime(b)) : cc.Log(" ERROR");
        d.removeTexture(c);
        cc.Log("RGBA 4444");
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGBA4444);
        b = cc.Time.gettimeofdayCocos2d(); (c = d.addImage(a)) ? cc.Log("  ms:" + calculateDeltaTime(b)) : cc.Log(" ERROR");
        d.removeTexture(c);
        cc.Log("RGBA 5551");
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGB5A1);
        b = cc.Time.gettimeofdayCocos2d(); (c = d.addImage(a)) ? cc.Log("  ms:" + calculateDeltaTime(b)) : cc.Log(" ERROR");
        d.removeTexture(c);
        cc.Log("RGB 565");
        cc.Texture2D.setDefaultAlphaPixelFormat(cc.kCCTexture2DPixelFormat_RGB565);
        b = cc.Time.gettimeofdayCocos2d(); (c = d.addImage(a)) ? cc.Log("  ms:" + calculateDeltaTime(b)) : cc.Log(" ERROR");
        d.removeTexture(c)
    }
});
TextureTest.scene = function() {
    var a = cc.Scene.node(),
    b = new TextureTest(!1, 1, s_nTexCurCase);
    a.addChild(b);
    return a
};
function runTextureTest() {
    s_nTexCurCase = 0;
    var a = TextureTest.scene();
    cc.Director.sharedDirector().replaceScene(a)
}
function calculateDeltaTime(a) {
    var b = cc.Time.gettimeofdayCocos2d();
    return b.tv_sec - a.tv_sec + (b.tv_usec - a.tv_usec) / 1E6
};
var kTagLabel1 = 550,
kTagLabel2 = 551,
kTagLabel3 = 552,
kTagLabel4 = 553,
fontIdx = 0,
fontList = "Verdana;Lucida Sans Unicode;Bookman Old Style;Symbol;Georgia;Trebuchet MS;Comic Sans MS;Arial Black;Tahoma;Impact".split(";");
function nextFontTestAction() {
    fontIdx++;
    fontIdx %= fontList.length;
    return fontList[fontIdx]
}
function backFontTestAction() {
    fontIdx--;
    0 > fontIdx && (fontIdx += fontList.length);
    return fontList[fontIdx]
}
function restartFontTestAction() {
    return fontList[fontIdx]
}
FontTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(FontTest.node());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
FontTest = cc.Layer.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.ccp(a.width / 2 - 100, 30));
        c.setPosition(cc.ccp(a.width / 2, 30));
        d.setPosition(cc.ccp(a.width / 2 + 100, 30));
        this.addChild(e, 1);
        this.showFont(restartFontTestAction())
    },
    showFont: function(a) {
        this.removeChildByTag(kTagLabel1, !0);
        this.removeChildByTag(kTagLabel2, !0);
        this.removeChildByTag(kTagLabel3, !0);
        this.removeChildByTag(kTagLabel4, !0);
        var b = cc.Director.sharedDirector().getWinSize(),
        c = cc.LabelTTF.labelWithString(a, a, 24),
        d = cc.LabelTTF.labelWithString("alignment left", cc.SizeMake(b.width, 50), cc.TextAlignmentLeft, a, 32),
        e = cc.LabelTTF.labelWithString("alignment center", cc.SizeMake(b.width, 50), cc.TextAlignmentCenter, a, 32),
        a = cc.LabelTTF.labelWithString("alignment right", cc.SizeMake(b.width, 50), cc.TextAlignmentRight, a, 32);
        c.setPosition(cc.ccp(b.width / 2, 3 * b.height / 4));
        d.setPosition(cc.ccp(b.width / 2, b.height / 2));
        e.setPosition(cc.ccp(b.width / 2, 3 * b.height / 8));
        a.setPosition(cc.ccp(b.width / 2, b.height / 4));
        this.addChild(d, 0, kTagLabel1);
        this.addChild(a, 0, kTagLabel2);
        this.addChild(e, 0, kTagLabel3);
        this.addChild(c, 0, kTagLabel4)
    },
    restartCallback: function() {
        this.showFont(restartFontTestAction())
    },
    nextCallback: function() {
        this.showFont(nextFontTestAction())
    },
    backCallback: function() {
        this.showFont(backFontTestAction())
    },
    title: function() {
        return "Font test"
    }
});
FontTest.node = function() {
    var a = new FontTest;
    a.init();
    return a
};
var s_nTouchCurCase = 0,
TouchesMainScene = PerformBasicLayer.extend({
    _m_nMaxCases: 2,
    _m_plabel: null,
    _numberOfTouchesB: 0,
    _numberOfTouchesM: 0,
    _numberOfTouchesE: 0,
    _numberOfTouchesC: 0,
    _elapsedTime: null,
    showCurrentTest: function() {
        var a = null;
        switch (this._m_nCurCase) {
        case 0:
            a = new TouchesPerformTest1(!0, 2, this._m_nCurCase);
            break;
        case 1:
            a = new TouchesPerformTest2(!0, 2, this._m_nCurCase)
        }
        s_nTouchCurCase = this._m_nCurCase;
        if (a) {
            var b = cc.Scene.node();
            b.addChild(a);
            cc.Director.sharedDirector().replaceScene(b)
        }
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 32);
        this.addChild(b, 1);
        b.setPosition(cc.ccp(a.width / 2, a.height - 50));
        this.scheduleUpdate();
        this._m_plabel = cc.LabelTTF.labelWithString("00.0", "Arial", 16);
        this._m_plabel.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this.addChild(this._m_plabel);
        this._numberOfTouchesB = this._numberOfTouchesM = this._numberOfTouchesE = this._numberOfTouchesC = this._elapsedTime = 0
    },
    title: function() {
        return "No title"
    },
    update: function(a) {
        this._elapsedTime += a;
        if (1 < this._elapsedTime) {
            var a = (this._numberOfTouchesB / this._elapsedTime).toFixed(1),
            b = (this._numberOfTouchesM / this._elapsedTime).toFixed(1),
            c = (this._numberOfTouchesE / this._elapsedTime).toFixed(1),
            d = (this._numberOfTouchesC / this._elapsedTime).toFixed(1);
            this._numberOfTouchesB = this._numberOfTouchesM = this._numberOfTouchesE = this._numberOfTouchesC = this._elapsedTime = 0;
            this._m_plabel.setString(a + " " + b + " " + c + " " + d)
        }
    }
}),
TouchesPerformTest1 = TouchesMainScene.extend({
    onEnter: function() {
        this._super();
        this.setIsTouchEnabled(!0)
    },
    title: function() {
        return "Targeted touches"
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !0)
    },
    ccTouchBegan: function() {
        this._numberOfTouchesB++;
        return ! 0
    },
    ccTouchMoved: function() {
        this._numberOfTouchesM++
    },
    ccTouchEnded: function() {
        this._numberOfTouchesE++
    },
    ccTouchCancelled: function() {
        this._numberOfTouchesC++
    }
}),
TouchesPerformTest2 = TouchesMainScene.extend({
    onEnter: function() {
        this._super();
        this.setIsTouchEnabled(!0)
    },
    title: function() {
        return "Standard touches"
    },
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addStandardDelegate(this, 0)
    },
    ccTouchesBegan: function(a) {
        this._numberOfTouchesB += a.length
    },
    ccTouchesMoved: function(a) {
        this._numberOfTouchesM += a.length
    },
    ccTouchesEnded: function(a) {
        this._numberOfTouchesE += a.length
    },
    ccTouchesCancelled: function(a) {
        this._numberOfTouchesC += a.length
    }
});
function runTouchesTest() {
    s_nTouchCurCase = 0;
    var a = cc.Scene.node(),
    b = new TouchesPerformTest1(!0, 2, s_nTouchCurCase);
    a.addChild(b);
    cc.Director.sharedDirector().replaceScene(a)
};
var kTagLabel = 1,
kTagLabelSpriteManager = 1,
kTagBitmapAtlas1 = kTagAnimation1 = 1,
kTagBitmapAtlas2 = 2,
kTagBitmapAtlas3 = 3,
kTagLabelSprite1 = 660,
kTagLabelSprite2 = 661,
kTagLabelSprite3 = 662,
kTagLabelSprite4 = 663,
kTagLabelSprite5 = 664,
kTagLabelSprite6 = 665,
kTagLabelSprite7 = 666,
kTagLabelSprite8 = 667,
AtlasTests = "LabelAtlasTest LabelAtlasColorTest LabelAtlasHD LabelTTFTest LabelTTFMultiline LabelTTFChinese".split(" "),
s_nAtlasIdx = -1;
function nextAtlasAction() {++s_nAtlasIdx;
    s_nAtlasIdx %= AtlasTests.length;
    return new window[AtlasTests[s_nAtlasIdx]]
}
function backAtlasAction() {--s_nAtlasIdx;
    0 > s_nAtlasIdx && (s_nAtlasIdx += AtlasTests.length);
    return new window[AtlasTests[s_nAtlasIdx]]
}
function restartAtlasAction() {
    return new window[AtlasTests[s_nAtlasIdx]]
}
var LabelTestScene = TestScene.extend({
    runThisTest: function() {
        s_nAtlasIdx = -1;
        this.addChild(nextAtlasAction());
        cc.Director.sharedDirector().replaceScene(this)
    }
}),
AtlasDemo = cc.Layer.extend({
    title: function() {
        return "No title"
    },
    subtitle: function() {
        return ""
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 28);
        this.addChild(b, 1);
        b.setPosition(cc.ccp(a.width / 2, a.height - 50));
        if (b = this.subtitle()) b = cc.LabelTTF.labelWithString(b.toString(), "Thonburi", 16),
        this.addChild(b, 1),
        b.setPosition(cc.ccp(a.width / 2, a.height - 80));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d, null);
        e.setPosition(cc.PointZero());
        b.setPosition(cc.ccp(a.width / 2 - 100, 30));
        c.setPosition(cc.ccp(a.width / 2, 30));
        d.setPosition(cc.ccp(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    },
    restartCallback: function() {
        var a = new LabelTestScene;
        a.addChild(restartAtlasAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new LabelTestScene;
        a.addChild(nextAtlasAction());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new LabelTestScene;
        a.addChild(backAtlasAction());
        cc.Director.sharedDirector().replaceScene(a)
    }
}),
Atlas1 = AtlasDemo.extend({
    m_textureAtlas: null,
    ctor: function() {
        this.m_textureAtlas = cc.TextureAtlas.textureAtlasWithFile(s_AtlasTest, 3);
        for (var a = cc.Director.sharedDirector().getWinSize(), a = [new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(0, 0, 0), cc.ccc4(0, 0, 255, 255), new cc.Tex2F(0, 1)), new cc.V3F_C4B_T2F(new cc.Vertex3F(a.width, 0, 0), cc.ccc4(0, 0, 255, 0), new cc.Tex2F(1, 1)), new cc.V3F_C4B_T2F(new cc.Vertex3F(0, a.height, 0), cc.ccc4(0, 0, 255, 0), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(a.width, a.height, 0), cc.ccc4(0, 0, 255, 255), new cc.Tex2F(1, 0))), new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(40, 40, 0), cc.ccc4(255, 255, 255, 255), new cc.Tex2F(0, 0.2)), new cc.V3F_C4B_T2F(new cc.Vertex3F(120, 80, 0), cc.ccc4(255, 0, 0, 255), new cc.Tex2F(0.5, 0.2)), new cc.V3F_C4B_T2F(new cc.Vertex3F(40, 160, 0), cc.ccc4(255, 255, 255, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(160, 160, 0), cc.ccc4(0, 255, 0, 255), new cc.Tex2F(0.5, 0))), new cc.V3F_C4B_T2F_Quad(new cc.V3F_C4B_T2F(new cc.Vertex3F(a.width / 2, 40, 0), cc.ccc4(255, 0, 0, 255), new cc.Tex2F(0, 1)), new cc.V3F_C4B_T2F(new cc.Vertex3F(a.width, 40, 0), cc.ccc4(0, 255, 0, 255), new cc.Tex2F(1, 1)), new cc.V3F_C4B_T2F(new cc.Vertex3F(a.width / 2 - 50, 200, 0), cc.ccc4(0, 0, 255, 255), new cc.Tex2F(0, 0)), new cc.V3F_C4B_T2F(new cc.Vertex3F(a.width, 100, 0), cc.ccc4(255, 255, 0, 255), new cc.Tex2F(1, 0)))], b = 0; 3 > b; b++) this.m_textureAtlas.updateQuad(a[b], b)
    },
    title: function() {
        return "cc.TextureAtlas"
    },
    subtitle: function() {
        return "Manual creation of cc.TextureAtlas"
    },
    draw: function() {
        this._super();
        this.m_textureAtlas.drawQuads()
    }
}),
LabelAtlasTest = AtlasDemo.extend({
    m_time: null,
    ctor: function() {
        this.m_time = 0;
        var a = cc.LabelAtlas.labelWithString("123 Test", "Resources/fonts/tuffy_bold_italic-charmap.png", 48, 64, " ");
        this.addChild(a, 0, kTagLabelSprite1);
        a.setPosition(cc.ccp(10, 100));
        a.setOpacity(200);
        a = cc.LabelAtlas.labelWithString("0123456789", "Resources/fonts/tuffy_bold_italic-charmap.png", 48, 64, " ");
        this.addChild(a, 0, kTagLabelSprite2);
        a.setPosition(cc.ccp(10, 200));
        a.setOpacity(32);
        this.schedule(this.step)
    },
    step: function(a) {
        this.m_time += a;
        var a = this.getChildByTag(kTagLabelSprite1),
        b = this.m_time.toFixed(2) + " Test";
        a.setString(b);
        a = this.getChildByTag(kTagLabelSprite2);
        b = parseInt(this.m_time).toString();
        a.setString(b)
    },
    title: function() {
        return "LabelAtlas"
    },
    subtitle: function() {
        return "Updating label should be fast"
    }
}),
LabelAtlasColorTest = AtlasDemo.extend({
    m_time: null,
    ctor: function() {
        var a = cc.LabelAtlas.labelWithString("123 Test", "Resources/fonts/tuffy_bold_italic-charmap.png", 48, 64, " ");
        this.addChild(a, 0, kTagLabelSprite1);
        a.setPosition(cc.ccp(10, 100));
        a.setOpacity(200);
        a = cc.LabelAtlas.labelWithString("0123456789", "Resources/fonts/tuffy_bold_italic-charmap.png", 48, 64, " ");
        this.addChild(a, 0, kTagLabelSprite2);
        a.setPosition(cc.ccp(10, 200));
        a.setColor(cc.RED());
        var b = cc.FadeOut.actionWithDuration(1),
        c = b.reverse(),
        b = cc.Sequence.actions(b, c, null),
        b = cc.RepeatForever.actionWithAction(b);
        a.runAction(b);
        this.m_time = 0;
        this.schedule(this.step)
    },
    step: function(a) {
        this.m_time += a;
        a = this.m_time.toFixed(2) + " Test";
        this.getChildByTag(kTagLabelSprite1).setString(a);
        var a = this.getChildByTag(kTagLabelSprite2),
        b = parseInt(this.m_time).toString();
        a.setString(b)
    },
    title: function() {
        return "cc.LabelAtlas"
    },
    subtitle: function() {
        return "Opacity + Color should work at the same time"
    }
}),
Atlas3 = AtlasDemo.extend({
    m_time: null,
    ctor: function() {
        this.m_time = 0;
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(128, 128, 128, 255)), -10);
        var a = cc.LabelBMFont.labelWithString("Test", "Resources/fonts/bitmapFontTest2.fnt");
        a.setAnchorPoint(cc.ccp(0, 0));
        this.addChild(a, 0, kTagBitmapAtlas1);
        var b = cc.FadeOut.actionWithDuration(1),
        c = b.reverse(),
        b = cc.Sequence.actions(b, c, null),
        c = cc.RepeatForever.actionWithAction(b);
        a.runAction(c);
        b = cc.LabelBMFont.labelWithString("Test", "Resources/fonts/bitmapFontTest2.fnt");
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        b.setColor(cc.RED());
        this.addChild(b, 0, kTagBitmapAtlas2);
        b.runAction(c.copy());
        c = cc.LabelBMFont.labelWithString("Test", "Resources/fonts/bitmapFontTest2.fnt");
        c.setAnchorPoint(cc.ccp(1, 1));
        this.addChild(c, 0, kTagBitmapAtlas3);
        var d = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.ccp(0, 0));
        b.setPosition(cc.ccp(d.width / 2, d.height / 2));
        c.setPosition(cc.ccp(d.width, d.height));
        this.schedule(this.step)
    },
    step: function(a) {
        this.m_time += a;
        a = this.m_time + "Test j";
        this.getChildByTag(kTagBitmapAtlas1).setString(a);
        this.getChildByTag(kTagBitmapAtlas2).setString(a);
        this.getChildByTag(kTagBitmapAtlas3).setString(a)
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Testing alignment. Testing opacity + tint"
    }
}),
Atlas4 = AtlasDemo.extend({
    m_time: null,
    ctor: function() {
        this.m_time = 0;
        var a = cc.LabelBMFont.labelWithString("Bitmap Font Atlas", "Resources/fonts/bitmapFontTest.fnt");
        this.addChild(a);
        var b = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.ccp(b.width / 2, b.height / 2));
        a.setAnchorPoint(cc.ccp(0.5, 0.5));
        var c = a.getChildByTag(0),
        d = a.getChildByTag(7),
        a = a.getChildByTag(12),
        e = cc.RotateBy.actionWithDuration(2, 360),
        e = cc.RepeatForever.actionWithAction(e),
        f = cc.ScaleBy.actionWithDuration(2, 1.5),
        g = f.reverse(),
        f = cc.Sequence.actions(f, g, null),
        f = cc.RepeatForever.actionWithAction(f),
        g = cc.JumpBy.actionWithDuration(0.5, cc.PointZero(), 60, 1),
        g = cc.RepeatForever.actionWithAction(g),
        h = cc.FadeOut.actionWithDuration(1),
        i = cc.FadeIn.actionWithDuration(1),
        h = cc.Sequence.actions(h, i, null),
        h = cc.RepeatForever.actionWithAction(h);
        c.runAction(e);
        c.runAction(f);
        d.runAction(g);
        a.runAction(h);
        c = cc.LabelBMFont.labelWithString("00.0", "Resources/fonts/bitmapFontTest.fnt");
        this.addChild(c, 0, kTagBitmapAtlas2);
        c.setPosition(cc.ccp(b.width / 2, 80));
        c.getChildByTag(3).runAction(e.copy());
        this.schedule(this.step, 0.1)
    },
    step: function(a) {
        a = this.m_time += a;
        this.getChildByTag(kTagBitmapAtlas2).setString(a)
    },
    draw: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        cc.drawLine(cc.ccp(0, a.height / 2), cc.ccp(a.width, a.height / 2));
        cc.drawLine(cc.ccp(a.width / 2, 0), cc.ccp(a.width / 2, a.height))
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Using fonts as cc.Sprite objects. Some characters should rotate."
    }
}),
Atlas5 = AtlasDemo.extend({
    cotr: function() {
        var a = cc.LabelBMFont.labelWithString("abcdefg", "Resources/fonts/bitmapFontTest4.fnt");
        this.addChild(a);
        var b = cc.Director.sharedDirector().getWinSize();
        a.setPosition(cc.ccp(b.width / 2, b.height / 2));
        a.setAnchorPoint(cc.ccp(0.5, 0.5))
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Testing padding"
    }
}),
Atlas6 = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = null,
        b = cc.LabelBMFont.labelWithString("FaFeFiFoFu", "Resources/fonts/bitmapFontTest5.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2 + 50));
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        b = cc.LabelBMFont.labelWithString("fafefifofu", "Resources/fonts/bitmapFontTest5.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2));
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        b = cc.LabelBMFont.labelWithString("aeiou", "Resources/fonts/bitmapFontTest5.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2 - 50));
        b.setAnchorPoint(cc.ccp(0.5, 0.5))
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Rendering should be OK. Testing offset"
    }
}),
AtlasBitmapColor = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = null,
        b = cc.LabelBMFont.labelWithString("Blue", "Resources/fonts/bitmapFontTest5.fnt");
        b.setColor(cc.BLUE());
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 4));
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        b = cc.LabelBMFont.labelWithString("Red", "Resources/fonts/bitmapFontTest5.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, 2 * a.height / 4));
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        b.setColor(cc.RED());
        b = cc.LabelBMFont.labelWithString("G", "Resources/fonts/bitmapFontTest5.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, 3 * a.height / 4));
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        b.setColor(ccGREEN);
        b.setString("Green")
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Testing color"
    }
}),
AtlasFastBitmap = AtlasDemo.extend({
    ctor: function() {
        for (var a = 0; 100 > a; a++) {
            var b = cc.LabelBMFont.labelWithString("-" + a + "-", "Resources/fonts/bitmapFontTest.fnt");
            this.addChild(b);
            var c = cc.Director.sharedDirector().getWinSize(),
            c = cc.ccp(cc.RANDOM_0_1() * c.width, cc.RANDOM_0_1() * c.height);
            b.setPosition(c);
            b.setAnchorPoint(cc.ccp(0.5, 0.5))
        }
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Creating several cc.LabelBMFont with the same .fnt file should be fast"
    }
}),
BitmapFontMultiLine = AtlasDemo.extend({
    ctor: function() {
        var a, b = cc.LabelBMFont.labelWithString("Multi line\nLeft", "Resources/fonts/bitmapFontTest3.fnt");
        b.setAnchorPoint(cc.ccp(0, 0));
        this.addChild(b, 0, kTagBitmapAtlas1);
        a = b.getContentSize();
        cc.LOG("content size: %.2x%.2", a.width, a.height);
        var c = cc.LabelBMFont.labelWithString("Multi line\nCenter", "Resources/fonts/bitmapFontTest3.fnt");
        c.setAnchorPoint(cc.ccp(0.5, 0.5));
        this.addChild(c, 0, kTagBitmapAtlas2);
        a = c.getContentSize();
        cc.LOG("content size: %.2x%.2", a.width, a.height);
        var d = cc.LabelBMFont.labelWithString("Multi line\nRight\nThree lines Three", "Resources/fonts/bitmapFontTest3.fnt");
        d.setAnchorPoint(cc.ccp(1, 1));
        this.addChild(d, 0, kTagBitmapAtlas3);
        a = d.getContentSize();
        cc.LOG("content size: %.2x%.2", a.width, a.height);
        a = cc.Director.sharedDirector().getWinSize();
        b.setPosition(cc.ccp(0, 0));
        c.setPosition(cc.ccp(a.width / 2, a.height / 2));
        d.setPosition(cc.ccp(a.width, a.height))
    },
    title: function() {
        return "cc.LabelBMFont"
    },
    subtitle: function() {
        return "Multiline + anchor point"
    }
}),
LabelsEmpty = AtlasDemo.extend({
    setEmpty: null,
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelBMFont.labelWithString("", "Resources/fonts/bitmapFontTest3.fnt");
        this.addChild(b, 0, kTagBitmapAtlas1);
        b.setPosition(cc.ccp(a.width / 2, a.height - 100));
        b = cc.LabelTTF.labelWithString("", "Arial", 24);
        this.addChild(b, 0, kTagBitmapAtlas2);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2));
        b = cc.LabelAtlas.labelWithString("", "Resources/fonts/tuffy_bold_italic-charmap.png", 48, 64, " ");
        this.addChild(b, 0, kTagBitmapAtlas3);
        b.setPosition(cc.ccp(a.width / 2, 100));
        this.schedule(this.updateStrings, 1);
        this.setEmpty = !1
    },
    updateStrings: function() {
        var a = this.getChildByTag(kTagBitmapAtlas1),
        b = this.getChildByTag(kTagBitmapAtlas2),
        c = this.getChildByTag(kTagBitmapAtlas3);
        this.setEmpty ? (a.setString(""), b.setString(""), c.setString(""), this.setEmpty = !1) : (a.setString("not empty"), b.setString("not empty"), c.setString("hi"), this.setEmpty = !0)
    },
    title: function() {
        return "Testing empty labels"
    },
    subtitle: function() {
        return "3 empty labels: LabelAtlas, LabelTTF and LabelBMFont"
    }
}),
LabelBMFontHD = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelBMFont.labelWithString("TESTING RETINA DISPLAY", "Resources/fonts/konqa32.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2))
    },
    title: function() {
        return "Testing Retina Display BMFont"
    },
    subtitle: function() {
        return "loading arista16 or arista16-hd"
    }
}),
LabelAtlasHD = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelAtlas.labelWithString("TESTING RETINA DISPLAY", "Resources/fonts/larabie-16.png", 10, 20, "A");
        b.setAnchorPoint(cc.ccp(0.5, 0.5));
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2))
    },
    title: function() {
        return "LabelAtlas with Retina Display"
    },
    subtitle: function() {
        return "loading larabie-16 / larabie-16-hd"
    }
}),
LabelGlyphDesigner = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize();
        this.addChild(cc.LayerColor.layerWithColor(cc.ccc4(128, 128, 128, 255)), -10);
        var b = cc.LabelBMFont.labelWithString("Testing Glyph Designer", "Resources/fonts/futura-48.fnt");
        this.addChild(b);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2))
    },
    title: function() {
        return "Testing Glyph Designer"
    },
    subtitle: function() {
        return "You should see a font with shawdows and outline"
    }
}),
LabelTTFTest = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("align left", cc.SizeMake(a.width, 50), cc.TextAlignmentLeft, "Marker Felt", 32),
        c = cc.LabelTTF.labelWithString("align center", cc.SizeMake(a.width, 50), cc.TextAlignmentCenter, "Marker Felt", 32),
        d = cc.LabelTTF.labelWithString("align right", cc.SizeMake(a.width, 50), cc.TextAlignmentRight, "Marker Felt", 32);
        b.setPosition(cc.ccp(a.width / 2, 200));
        c.setPosition(cc.ccp(a.width / 2, 150));
        d.setPosition(cc.ccp(a.width / 2, 100));
        this.addChild(b);
        this.addChild(c);
        this.addChild(d)
    },
    title: function() {
        return "Testing cc.LabelTTF"
    },
    subtitle: function() {
        return "You should see 3 labels aligned left, center and right"
    }
}),
LabelTTFMultiline = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("word wrap \"testing\" (bla0) bla1 'bla2' [bla3] (bla4) {bla5} {bla6} [bla7] (bla8) [bla9] 'bla0' \"bla1\"", cc.SizeMake(a.width / 2, 200), cc.TextAlignmentCenter, "Marker Felt", 32);
        b.setPosition(cc.ccp(a.width / 2, 150));
        this.addChild(b)
    },
    title: function() {
        return "Testing cc.LabelTTF Word Wrap"
    },
    subtitle: function() {
        return "Word wrap using cc.LabelTTF"
    }
}),
LabelTTFChinese = AtlasDemo.extend({
    ctor: function() {
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("\u4e2d\u56fd", "Marker Felt", 30);
        b.setPosition(cc.ccp(a.width / 2, a.height / 2));
        this.addChild(b)
    },
    title: function() {
        return "Testing cc.LabelTTF with Chinese character"
    }
});
var CurrentLanguageTest = cc.Layer.extend({
    ctor: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString("Current language Test", "Arial", 28);
        this.addChild(b, 0);
        b.setPosition(new cc.Point(a.width / 2, a.height - 50));
        b = cc.LabelTTF.labelWithString("", "Arial", 20);
        b.setPosition(new cc.Point(a.width / 2, a.height / 2));
        switch (cc.Application.getCurrentLanguage()) {
        case cc.kLanguageEnglish:
            b.setString("current language is English");
            break;
        case cc.kLanguageChinese:
            b.setString("current language is Chinese");
            break;
        case cc.kLanguageFrench:
            b.setString("current language is French");
            break;
        case cc.kLanguageGerman:
            b.setString("current language is German");
            break;
        case cc.kLanguageItalian:
            b.setString("current language is Italian");
            break;
        case cc.kLanguageRussian:
            b.setString("current language is Russian");
            break;
        case cc.kLanguageSpanish:
            b.setString("current language is Spanish")
        }
        this.addChild(b)
    }
}),
CurrentLanguageTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new CurrentLanguageTest);
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kTextFieldTTFDefaultTest = 0,
kTextFieldTTFActionTest = 1,
kTextInputTestsCount = 2,
textInput_FONT_NAME = "Thonburi",
textInput_FONT_SIZE = 36,
inputTestIdx = -1,
createTextInputTest = function(a) {
    switch (a) {
    case kTextFieldTTFDefaultTest:
        return new TextFieldTTFDefaultTest;
    case kTextFieldTTFActionTest:
        return new TextFieldTTFActionTest;
    default:
        return 0
    }
},
restartTextInputTest = function() {
    var a = new TextInputTest,
    b = createTextInputTest(inputTestIdx);
    a.addKeyboardNotificationLayer(b);
    return a
},
nextTextInputTest = function() {
    inputTestIdx++;
    inputTestIdx %= kTextInputTestsCount;
    return restartTextInputTest()
},
backTextInputTest = function() {
    inputTestIdx--;
    0 > inputTestIdx && (inputTestIdx += kTextInputTestsCount);
    return restartTextInputTest()
},
textInputGetRect = function(a) {
    a = new cc.Rect(a.getPosition().x, a.getPosition().y, a.getContentSize().width, a.getContentSize().height);
    a.origin.x -= a.size.width / 2;
    a.origin.y -= a.size.height / 2;
    return a
},
TextInputTest = cc.Layer.extend({
    m_pNotificationLayer: null,
    ctor: function() {},
    restartCallback: function() {
        var a = new TextInputTestScene;
        a.addChild(restartTextInputTest());
        cc.Director.sharedDirector().replaceScene(a)
    },
    nextCallback: function() {
        var a = new TextInputTestScene;
        a.addChild(nextTextInputTest());
        cc.Director.sharedDirector().replaceScene(a)
    },
    backCallback: function() {
        var a = new TextInputTestScene;
        a.addChild(backTextInputTest());
        cc.Director.sharedDirector().replaceScene(a)
    },
    title: function() {
        return "text input test"
    },
    addKeyboardNotificationLayer: function(a) {
        this.m_pNotificationLayer = a;
        this.addChild(a)
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.LabelTTF.labelWithString(this.title(), "Arial", 24);
        this.addChild(b);
        b.setPosition(new cc.Point(a.width / 2, a.height - 50));
        if ((b = this.m_pNotificationLayer.subtitle()) && "" != b) b = cc.LabelTTF.labelWithString(b, "Thonburi", 16),
        this.addChild(b, 1),
        b.setPosition(new cc.Point(a.width / 2, a.height - 80));
        var b = cc.MenuItemImage.itemFromNormalImage(s_pPathB1, s_pPathB2, this, this.backCallback),
        c = cc.MenuItemImage.itemFromNormalImage(s_pPathR1, s_pPathR2, this, this.restartCallback),
        d = cc.MenuItemImage.itemFromNormalImage(s_pPathF1, s_pPathF2, this, this.nextCallback),
        e = cc.Menu.menuWithItems(b, c, d);
        e.setPosition(cc.PointZero());
        b.setPosition(new cc.Point(a.width / 2 - 100, 30));
        c.setPosition(new cc.Point(a.width / 2, 30));
        d.setPosition(new cc.Point(a.width / 2 + 100, 30));
        this.addChild(e, 1)
    }
}),
KeyboardNotificationLayer = cc.Layer.extend({
    _pTrackNode: null,
    _beginPos: null,
    ctor: function() {
        this.setIsTouchEnabled(!0)
    },
    subtitle: function() {
        return ""
    },
    onClickTrackNode: function() {},
    registerWithTouchDispatcher: function() {
        cc.TouchDispatcher.sharedDispatcher().addTargetedDelegate(this, 0, !1)
    },
    keyboardWillShow: function(a) {
        cc.Log("TextInputTest:keyboardWillShowAt(origin:" + a.end.origin.x + "," + a.end.origin.y + ", size:" + a.end.size.width + "," + a.end.size.height + ")");
        if (this._pTrackNode) {
            var b = textInputGetRect(this._pTrackNode);
            cc.Log("TextInputTest:trackingNodeAt(origin:" + a.end.origin.x + "," + a.end.origin.y + ", size:" + a.end.size.width + "," + a.end.size.height + ")");
            if (cc.Rect.CCRectIntersectsRect(b, a.end)) {
                a = cc.Rect.CCRectGetMaxY(a.end) - cc.Rect.CCRectGetMinY(b);
                cc.Log("TextInputTest:needAdjustVerticalPosition(" + a + ")");
                for (var b = this.getChildren(), c = 0; c < b.length; ++c) {
                    var d = b[c],
                    e = d.getPosition();
                    e.y += a;
                    d.setPosition(e)
                }
            }
        }
    },
    ccTouchBegan: function(a) {
        cc.Log("++++++++++++++++++++++++++++++++++++++++++++");
        this._beginPos = a.locationInView(a.view());
        this._beginPos = cc.Director.sharedDirector().convertToGL(this._beginPos);
        return ! 0
    },
    ccTouchEnded: function(a) {
        if (this._pTrackNode) {
            var b = a.locationInView(a.view()),
            b = cc.Director.sharedDirector().convertToGL(b);
            5 < Math.abs(b.x - this._beginPos.x) || 5 < Math.abs(b.y - this._beginPos.y) ? this._beginPos.x = this._beginPos.y = -1 : (a = this.convertTouchToNodeSpaceAR(a), cc.Log("KeyboardNotificationLayer:clickedAt(" + a.x + "," + a.y + ")"), b = textInputGetRect(this._pTrackNode), cc.Log("KeyboardNotificationLayer:TrackNode at(origin:" + b.origin.x + "," + b.origin.y + ", size:" + b.size.width + "," + b.size.height + ")"), this.onClickTrackNode(cc.Rect.CCRectContainsPoint(b, a)), cc.Log("----------------------------------"))
        }
    }
}),
TextFieldTTFDefaultTest = KeyboardNotificationLayer.extend({
    subtitle: function() {
        return "TextFieldTTF with default behavior test"
    },
    onClickTrackNode: function(a) {
        var b = this._pTrackNode;
        a ? (cc.Log("TextFieldTTFDefaultTest:CCTextFieldTTF attachWithIME"), b.attachWithIME()) : (cc.Log("TextFieldTTFDefaultTest:CCTextFieldTTF detachWithIME"), b.detachWithIME())
    },
    onEnter: function() {
        this._super();
        var a = cc.Director.sharedDirector().getWinSize(),
        b = cc.TextFieldTTF.textFieldWithPlaceHolder("<click here for input>", textInput_FONT_NAME, textInput_FONT_SIZE);
        this.addChild(b);
        b.setPosition(new cc.Point(a.width / 2, a.height / 2));
        this._pTrackNode = b
    }
}),
TextFieldTTFActionTest = KeyboardNotificationLayer.extend({
    _pTextField: null,
    _pTextFieldAction: null,
    _bAction: !1,
    _nCharLimit: 0,
    ctor: function() {
        this._super()
    },
    callbackRemoveNodeWhenDidAction: function(a) {
        this.removeChild(a, !0)
    },
    subtitle: function() {
        return "CCTextFieldTTF with action and char limit test"
    },
    onClickTrackNode: function(a) {
        var b = this._pTrackNode;
        a ? (cc.Log("TextFieldTTFActionTest:CCTextFieldTTF attachWithIME"), b.attachWithIME()) : (cc.Log("TextFieldTTFActionTest:CCTextFieldTTF detachWithIME"), b.detachWithIME())
    },
    onEnter: function() {
        this._super();
        this._nCharLimit = 20;
        this._pTextFieldAction = cc.RepeatForever.actionWithAction(cc.Sequence.actions(cc.FadeOut.actionWithDuration(0.25), cc.FadeIn.actionWithDuration(0.25)));
        this._bAction = !1;
        var a = cc.Director.sharedDirector().getWinSize();
        this._pTextField = cc.TextFieldTTF.textFieldWithPlaceHolder("<click here for input>", textInput_FONT_NAME, textInput_FONT_SIZE);
        this.addChild(this._pTextField);
        this._pTextField.setDelegate(this);
        this._pTextField.setPosition(new cc.Point(a.width / 2, a.height / 2));
        this._pTrackNode = this._pTextField
    },
    onExit: function() {
        this._super()
    },
    onTextFieldAttachWithIME: function() {
        this._bAction || (this._pTextField.runAction(this._pTextFieldAction), this._bAction = !0);
        return ! 1
    },
    onTextFieldDetachWithIME: function() {
        this._bAction && (this._pTextField.stopAction(this._pTextFieldAction), this._pTextField.setOpacity(255), this._bAction = !1);
        return ! 1
    },
    onTextFieldInsertText: function(a, b) {
        if ("\n" == b) return ! 1;
        if (a.getCharCount() >= this._nCharLimit) return ! 0;
        var c = cc.LabelTTF.labelWithString(b, textInput_FONT_NAME, textInput_FONT_SIZE);
        this.addChild(c);
        var d = new cc.Color3B(226, 121, 7);
        c.setColor(d);
        d = new cc.Point(a.getPositionX(), a.getPositionY());
        a.getCharCount() && (d.x += a.getContentSize().width / 2);
        var e = c.getContentSize(),
        e = new cc.Point(d.x, cc.Director.sharedDirector().getWinSize().height - 2 * e.height);
        c.setPosition(e);
        c.setScale(8);
        d = cc.Sequence.actions(cc.Spawn.actions(cc.MoveTo.actionWithDuration(0.5, d), cc.ScaleTo.actionWithDuration(0.5, 1), cc.FadeOut.actionWithDuration(0.5)), cc.CallFunc.actionWithTarget(this, this.callbackRemoveNodeWhenDidAction));
        c.runAction(d);
        return ! 1
    },
    onTextFieldDeleteBackward: function(a, b) {
        var c = cc.LabelTTF.labelWithString(b, textInput_FONT_NAME, textInput_FONT_SIZE);
        this.addChild(c);
        var d = new cc.Point(a.getPositionX(), a.getPositionY()),
        e = a.getContentSize(),
        f = c.getContentSize();
        d.x += (e.width - f.width) / 2;
        e = cc.Director.sharedDirector().getWinSize();
        e = new cc.Point( - e.width / 4, e.height * (0.5 + Math.random() / 2));
        c.setPosition(d);
        d = cc.Sequence.actions(cc.Spawn.actions(cc.MoveTo.actionWithDuration(1, e), cc.Repeat.actionWithAction(cc.RotateBy.actionWithDuration(0.2, Math.random() % 2 ? 360 : -360), 5), cc.FadeOut.actionWithDuration(1)), cc.CallFunc.actionWithTarget(this, this.callbackRemoveNodeWhenDidAction));
        c.runAction(d);
        return ! 1
    },
    onDraw: function() {
        return ! 1
    }
}),
TextInputTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(nextTextInputTest());
        cc.Director.sharedDirector().replaceScene(this)
    }
});
var kTagSpriteManager = 1,
PTM_RATIO = 32;
Box2DTestLayer = cc.Layer.extend({
    world: null,
    ctor: function() {
        this.setIsTouchEnabled(!0);
        var a = Box2D.Common.Math.b2Vec2,
        b = Box2D.Dynamics.b2BodyDef,
        c = Box2D.Dynamics.b2Body,
        d = Box2D.Dynamics.b2FixtureDef,
        e = Box2D.Dynamics.b2World,
        f = Box2D.Collision.Shapes.b2PolygonShape,
        g = cc.Director.sharedDirector().getWinSize();
        this.world = new e(new a(0, 10), !0);
        this.world.SetContinuousPhysics(!0);
        a = new d;
        a.density = 1;
        a.friction = 0.5;
        a.restitution = 0.2;
        b = new b;
        b.type = c.b2_staticBody;
        a.shape = new f;
        a.shape.SetAsBox(20, 2);
        b.position.Set(10, g.height / PTM_RATIO + 1.8);
        this.world.CreateBody(b).CreateFixture(a);
        b.position.Set(10, -1.8);
        this.world.CreateBody(b).CreateFixture(a);
        a.shape.SetAsBox(2, 14);
        b.position.Set( - 1.8, 13);
        this.world.CreateBody(b).CreateFixture(a);
        b.position.Set(26.8, 13);
        this.world.CreateBody(b).CreateFixture(a);
        this.addChild(cc.SpriteBatchNode.batchNodeWithFile(s_pPathBlock, 150), 0, kTagSpriteManager);
        this.addNewSpriteWithCoords(cc.PointMake(g.width / 2, g.height / 2));
        c = cc.LabelTTF.labelWithString("Tap screen", "Marker Felt", 32);
        this.addChild(c, 0);
        c.setColor(cc.ccc3(0, 0, 255));
        c.setPosition(cc.PointMake(g.width / 2, g.height - 50));
        this.scheduleUpdate()
    },
    addNewSpriteWithCoords: function(a) {
        var b = this.getChildByTag(kTagSpriteManager),
        c = 0.5 < cc.RANDOM_0_1() ? 0 : 1,
        d = 0.5 < cc.RANDOM_0_1() ? 0 : 1,
        c = cc.Sprite.spriteWithTexture(b.getTexture(), cc.RectMake(32 * c, 32 * d, 32, 32));
        b.addChild(c);
        c.setPosition(cc.PointMake(a.x, a.y));
        var e = Box2D.Dynamics.b2Body,
        b = Box2D.Dynamics.b2FixtureDef,
        d = Box2D.Collision.Shapes.b2PolygonShape,
        f = new Box2D.Dynamics.b2BodyDef;
        f.type = e.b2_dynamicBody;
        f.position.Set(a.x / PTM_RATIO, a.y / PTM_RATIO);
        f.userData = c;
        a = this.world.CreateBody(f);
        c = new d;
        c.SetAsBox(0.5, 0.5);
        b = new b;
        b.shape = c;
        b.density = 1;
        b.friction = 0.3;
        a.CreateFixture(b)
    },
    update: function(a) {
        this.world.Step(a, 8, 1);
        for (a = this.world.GetBodyList(); a; a = a.GetNext()) if (null != a.GetUserData()) {
            var b = a.GetUserData();
            b.setPosition(cc.PointMake(a.GetPosition().x * PTM_RATIO, a.GetPosition().y * PTM_RATIO));
            b.setRotation( - 1 * cc.RADIANS_TO_DEGREES(a.GetAngle()))
        }
    },
    ccTouchesEnded: function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (!c) break;
            this.addNewSpriteWithCoords(c.locationInView(c.view()))
        }
    }
});
Box2DTestScene = TestScene.extend({
    runThisTest: function() {
        this.addChild(new Box2DTestLayer);
        cc.Director.sharedDirector().replaceScene(this)
    }
});