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
var Reward = (function (_super) {
    __extends(Reward, _super);
    //抽奖结果
    function Reward() {
        return _super.call(this) || this;
    }
    Reward.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Reward.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Reward.prototype.init = function () {
        this.reward.text = StartBefore.result;
        this.btn_reward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnTap, this);
    };
    //关闭按钮
    Reward.prototype.closeBtnTap = function () {
        console.log("前往APP领取");
    };
    return Reward;
}(eui.Component));
__reflect(Reward.prototype, "Reward", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Reward.js.map