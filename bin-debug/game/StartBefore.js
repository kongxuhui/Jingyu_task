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
// TypeScript file
var StartBefore = (function (_super) {
    __extends(StartBefore, _super);
    function StartBefore() {
        var _this = _super.call(this) || this;
        //当前位置
        _this.num = 1;
        SoundMenager.Shared();
        SoundMenager.Shared().PlayBGM();
        _this.skinName = "resource/skins/StartBefore.exml";
        return _this;
    }
    StartBefore.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.pointerTween();
        this.pointer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startBtnTap, this);
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startBtnTap, this);
        this.time = new egret.Timer(100);
        this.time2 = new egret.Timer(3000);
        this.time.addEventListener(egret.TimerEvent.TIMER, this.flickerCallback, this);
        this.time2.addEventListener(egret.TimerEvent.TIMER, this.barrageCallback, this);
        this.time.start();
        this.time2.start();
    };
    StartBefore.prototype.pointerTween = function () {
        egret.Tween.get(this.pointer, { loop: true }).
            to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quadIn).
            to({ scaleX: 1.2, scaleY: 1.2 }, 100, egret.Ease.quadOut).
            to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quadIn);
    };
    //开始
    StartBefore.prototype.startBtnTap = function (e) {
        if (this.pointer.parent) {
            this.pointer.parent.removeChild(this.pointer);
        }
        SoundMenager.Shared().StopBGM();
        SoundMenager.Shared().PlayRotation();
        // this.lotteryResults();//抽取最终奖品
        this.time1 = new egret.Timer(300, 1);
        this.time1.addEventListener(egret.TimerEvent.TIMER, this.timeCallback, this);
        this.time1.start(); //开始计时
    };
    //中奖切换回调
    StartBefore.prototype.barrageCallback = function (e) {
        this.num++;
        if (this.num > 7) {
            this.num = 1;
        }
        this.hjmd1.source = "resource/assets/image/barrage/barrage_" + this.num + ".png";
    };
    //闪烁回调
    StartBefore.prototype.flickerCallback = function (e) {
        this.zpbg3.rotation += 22.5;
    };
    //生成权重随机数
    StartBefore.RandomNumBoth = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入      
        return num;
    };
    StartBefore.getWeightRandom = function (weightArr) {
        var totalWeight = 0;
        for (var i = 0; i < weightArr.length; i++) {
            var locWeight = weightArr[i];
            totalWeight += locWeight;
        }
        var random = Math.random() * totalWeight;
        var tempCount = 0;
        var reIndex = 0;
        for (var i = 0; i < weightArr.length; i++) {
            var locWeight = weightArr[i];
            tempCount += locWeight;
            if (random <= tempCount) {
                reIndex = i;
                break;
            }
        }
        return reIndex;
    };
    ;
    StartBefore.getWeightRandomValue = function (valueWeightArr) {
        var weightArr = [];
        for (var i = 0; i < valueWeightArr.length; i++) {
            var locWeigh = valueWeightArr[i][1];
            weightArr.push(locWeigh);
        }
        var index = this.getWeightRandom(weightArr);
        var value = valueWeightArr[index][0];
        return value;
    };
    ;
    //计时器回调
    StartBefore.prototype.timeCallback = function (e) {
        var randNum = StartBefore.getWeightRandomValue([
            [StartBefore.RandomNumBoth(0, 45), 0.00008],
            [StartBefore.RandomNumBoth(46, 90), 0.92],
            [StartBefore.RandomNumBoth(91, 135), 0.0002],
            [StartBefore.RandomNumBoth(136, 180), 0.002],
            [StartBefore.RandomNumBoth(181, 225), 0.002],
            [StartBefore.RandomNumBoth(226, 270), 0.02],
            [StartBefore.RandomNumBoth(271, 315), 0.00002],
            [StartBefore.RandomNumBoth(316, 360), 0.2]
        ]);
        egret.Tween.get(this.zpnr, { loop: false }).
            to({ rotation: 5040 + randNum }, 6000, egret.Ease.quadInOut).wait(150).
            call(this.tweenComplete, this);
    };
    //抽奖结果展示
    StartBefore.prototype.tweenComplete = function () {
        SoundMenager.Shared().PlayVictory();
        var currentRotation = this.zpnr.rotation;
        if (currentRotation < 0) {
            currentRotation = 360 + currentRotation;
        }
        switch (true) {
            case currentRotation > 0 && currentRotation <= 45:
                StartBefore.result = '16.6元';
                break;
            case currentRotation > 45 && currentRotation <= 90:
                StartBefore.result = 'btn_again';
                break;
            case currentRotation > 90 && currentRotation <= 135:
                StartBefore.result = '18.8元';
                break;
            case currentRotation > 135 && currentRotation <= 180:
                StartBefore.result = '38.8元';
                break;
            case currentRotation > 180 && currentRotation <= 225:
                StartBefore.result = '28.8元';
                break;
            case currentRotation > 225 && currentRotation <= 270:
                StartBefore.result = '';
                break;
            case currentRotation > 270 && currentRotation <= 315:
                StartBefore.result = '26.6元';
                break;
            case currentRotation > 315 && currentRotation <= 360:
                StartBefore.result = '36.6元';
                break;
        }
        if (currentRotation > 225 && currentRotation <= 270) {
            this.g = new GameFail();
            this.g.skinName = "resource/skins/GameFail.exml";
            this.stage.addChild(this.g);
        }
        else if (currentRotation > 45 && currentRotation <= 90) {
            this.g = new GameFail();
            this.g.skinName = "resource/skins/GameFail.exml";
            this.stage.addChild(this.g);
        }
        else {
            this.r = new Reward();
            this.r.skinName = "resource/skins/Reward.exml";
            this.stage.addChild(this.r);
        }
    };
    return StartBefore;
}(eui.Component));
__reflect(StartBefore.prototype, "StartBefore", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StartBefore.js.map