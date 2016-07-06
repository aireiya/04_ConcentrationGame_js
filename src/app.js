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
        for (i = 0; i < 4; i++) {
          for(n = 0; n < 4; n++){
            var sprite = new cc.Sprite(res.cover_png);
            cc.log(i);
            cc.log(this.dropArray[i]);
            sprite.attr({
                x: size.width  *0.3 + 50 * n ,
                y: size.height  * 0.3 + 50 * i,
                scale: 1.0,
                rotation: 0
            });
            //this.dropSpriteArray.push(this.sprite);
            // this.addChild(this.sprite);
            this.addChild(sprite, 0);


        }
      }
    }

});
