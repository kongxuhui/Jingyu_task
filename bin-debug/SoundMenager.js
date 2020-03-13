var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundMenager = (function () {
    function SoundMenager() {
        this.volNum = 0.5;
        this._rotation = new egret.Sound();
        this._rotation.type = egret.Sound.MUSIC;
        this._rotation = RES.getRes("audio_rotation_mp3");
        this._bgm = new egret.Sound();
        this._bgm.type = egret.Sound.EFFECT;
        this._bgm = RES.getRes("audio_bg_mp3");
        this._victory = new egret.Sound();
        this._victory.type = egret.Sound.MUSIC;
        this._victory = RES.getRes("audio_victory_mp3");
    }
    SoundMenager.Shared = function () {
        if (SoundMenager.shared == null)
            SoundMenager.shared = new SoundMenager();
        return SoundMenager.shared;
    };
    SoundMenager.prototype.PlayBGM = function () {
        if (this.IsMusic) {
            this._bgm_channel = this._bgm.play(0, 0);
        }
    };
    SoundMenager.prototype.StopBGM = function () {
        if (this._bgm_channel != null) {
            this._bgm_channel.stop();
        }
    };
    SoundMenager.prototype.PlayRotation = function () {
        if (this.IsSound) {
            this._rotation.play(0, 1);
        }
    };
    SoundMenager.prototype.PlayVictory = function () {
        if (this.IsSound) {
            this._victory.play(0, 1);
        }
    };
    Object.defineProperty(SoundMenager.prototype, "IsMusic", {
        get: function () {
            var b = egret.localStorage.getItem("ismusic");
            if (b == null || b == "") {
                return true;
            }
            else {
                return b == "1";
            }
        },
        //音乐是否播放，保存设置
        set: function (value) {
            if (!value) {
                egret.localStorage.setItem("ismusic", "0");
                this.StopBGM();
            }
            else {
                egret.localStorage.setItem("ismusic", "1");
                this.PlayBGM();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundMenager.prototype, "IsSound", {
        get: function () {
            var b = egret.localStorage.getItem("isSound");
            if (b == null || b == "") {
                return true;
            }
            else {
                return b == "1";
            }
        },
        //声效是否播放，保存设置
        set: function (value) {
            if (value) {
                egret.localStorage.setItem("isSound", "1");
            }
            else {
                egret.localStorage.setItem("isSound", "0");
            }
        },
        enumerable: true,
        configurable: true
    });
    return SoundMenager;
}());
__reflect(SoundMenager.prototype, "SoundMenager");
//# sourceMappingURL=SoundMenager.js.map