// TypeScript file
class StartBefore extends eui.Component implements eui.UIComponent {

	private _stage: egret.DisplayObject;
	//计时器
	private time: egret.Timer;
	private time1: egret.Timer;
	private time2: egret.Timer;

	//当前位置
	private num: number = 1;
	//实例化结束对象
	public r: Reward;
	public g: GameFail;
	//抽奖结果
	static result: string;

	public constructor() {
		super();
		SoundMenager.Shared();
		            SoundMenager.Shared().PlayBGM();                

		this.skinName = "resource/skins/StartBefore.exml";
	}
	

	protected childrenCreated(): void {
		super.childrenCreated();

		this.pointerTween();
		this.pointer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startBtnTap, this);
		this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startBtnTap, this);
		this.time = new egret.Timer(100);
		this.time2 = new egret.Timer(3000);

		this.time.addEventListener(egret.TimerEvent.TIMER, this.flickerCallback, this);
		this.time2.addEventListener(egret.TimerEvent.TIMER, this.barrageCallback, this);

		this.time.start();
		this.time2.start();
	}
	//初始状态
	public pointer: eui.Button;
	public start: eui.Button;
	public zpbg3: eui.Image;
	public hjmd1: eui.Image;
	public zpnr: eui.Image;


	private pointerTween(): void {
		egret.Tween.get(this.pointer, { loop: true }).
			to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quadIn).
			to({ scaleX: 1.2, scaleY: 1.2 }, 100, egret.Ease.quadOut).
			to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quadIn);
	}
	//开始
	private startBtnTap(e: egret.TouchEvent): void {
		if (this.pointer.parent) {
			this.pointer.parent.removeChild(this.pointer);
		}
		SoundMenager.Shared().StopBGM();
		SoundMenager.Shared().PlayRotation();		
		// this.lotteryResults();//抽取最终奖品
		this.time1 = new egret.Timer(300, 1);
		this.time1.addEventListener(egret.TimerEvent.TIMER, this.timeCallback, this);
		this.time1.start();//开始计时
	}
	//中奖切换回调
	private barrageCallback(e: egret.TimerEvent): void {
		this.num++;
		if (this.num > 7) {
			this.num = 1;
		}
		this.hjmd1.source = "resource/assets/image/barrage/barrage_" + this.num + ".png";
	}
	//闪烁回调
	private flickerCallback(e: egret.TimerEvent): void {
		this.zpbg3.rotation += 22.5;
	}
	//生成权重随机数
	public static RandomNumBoth(Min, Max) {
		var Range = Max - Min;
		var Rand = Math.random();
		var num = Min + Math.round(Rand * Range); //四舍五入      
		return num;
	}
	public static getWeightRandom(weightArr) {
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
	public static getWeightRandomValue(valueWeightArr) {
		var weightArr = [];
		for (var i = 0; i < valueWeightArr.length; i++) {
			var locWeigh = valueWeightArr[i][1];
			weightArr.push(locWeigh);
		}
		var index = this.getWeightRandom(weightArr);
		var value = valueWeightArr[index][0];
		return value;
	};
	//计时器回调
	private timeCallback(e: egret.TimerEvent): void {
		let randNum = StartBefore.getWeightRandomValue([
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
	}
	//抽奖结果展示
	private tweenComplete() {
		SoundMenager.Shared().PlayVictory();				
		let currentRotation = this.zpnr.rotation;
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
		} else if (currentRotation > 45 && currentRotation <= 90) {
			this.g = new GameFail();
			this.g.skinName = "resource/skins/GameFail.exml";
			this.stage.addChild(this.g);
		} else {
			this.r = new Reward();
			this.r.skinName = "resource/skins/Reward.exml";
			this.stage.addChild(this.r);
		}
	}

}
