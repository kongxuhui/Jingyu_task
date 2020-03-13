var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//抽奖结果
var GameFail = (function (_super) {
    __extends(GameFail, _super);
    function GameFail() {
        return _super.call(this) || this;
    }
    GameFail.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameFail.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameFail.prototype.init = function () {
        if (StartBefore.result != '') {
            this.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnTap, this);
        }
        setTimeout(function () {
            SoundMenager.Shared();
            SoundMenager.Shared().PlayBGM();
        }, 3000);
    };
    //再来一次按钮
    GameFail.prototype.closeBtnTap = function () {
        this.parent.removeChild(this);
    };
    return GameFail;
}(eui.Component));
__reflect(GameFail.prototype, "GameFail", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameFail.js.map