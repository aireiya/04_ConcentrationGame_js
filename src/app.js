 //myScene.js

var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var gameLayer = new game();
        this.addChild(gameLayer);
    }
});


var game = cc.Layer.extend({
    sprite: null,
    // ブロックを保持しておく配列
    dropSpriteArray: null,
    // 配列の宣言　ブロックの名前を指定
    dropArray: [res.drop01_png, res.drop02_png, res.drop03_png, res.drop04_png, res.drop05_png],
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        this.dropSpriteArray = new Array();
        var i = 1;
        var n = 1;
        for (i = 0; i < 16; i++) {
            var tile = cc.Sprite.create(res.cover_png);
            this.addChild(tile, 0);
            //タイルを格子状に配置する計算式
            tile.setPosition(49 + i % 4 * 74, 400 - Math.floor(i / 4) * 74);
        }
    }

});
