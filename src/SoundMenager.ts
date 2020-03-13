class SoundMenager {
    private static shared: SoundMenager;
    public static Shared(): SoundMenager {
        if(SoundMenager.shared == null)
            SoundMenager.shared = new SoundMenager();
        return SoundMenager.shared;
    }
    private _bgm: egret.Sound;//背景音乐
	private _rotation: egret.Sound;
	private _victory: egret.Sound;
	private _bgm_channel: egret.SoundChannel;//保存用来静音用
	private volNum: number = 0.5;
    public constructor() {
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
    public PlayBGM() {
        if(this.IsMusic) {
            this._bgm_channel = this._bgm.play(0,0)
        }
    }
    public StopBGM() {
        if(this._bgm_channel != null) {
            this._bgm_channel.stop();
        }
    }
	public PlayRotation() {
        if(this.IsSound) {
            this._rotation.play(0,1);
        }
    }
	public PlayVictory() {
        if(this.IsSound) {
            this._victory.play(0,1);
        }
    }
    //音乐是否播放，保存设置
    public set IsMusic(value) {
        if(!value) {
            egret.localStorage.setItem("ismusic","0");
            this.StopBGM();
        } else {
            egret.localStorage.setItem("ismusic","1");
            this.PlayBGM();
        }
    }
    public get IsMusic(): boolean {
        var b = egret.localStorage.getItem("ismusic");
        if(b == null || b == "") {
            return true;
        }
        else {
            return b == "1";
        }
    }
    //声效是否播放，保存设置
    public set IsSound(value) {
        if(value) {
            egret.localStorage.setItem("isSound","1");
        } else {
            egret.localStorage.setItem("isSound","0");
        }
    }
    public get IsSound(): boolean {
        var b = egret.localStorage.getItem("isSound");
        if(b == null || b == "") {
            return true;
        }
        else {
            return b == "1";
        }
    }
}