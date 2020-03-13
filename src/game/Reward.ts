//抽奖结果
class  Reward extends eui.Component implements  eui.UIComponent {
	//关闭按钮
	private btn_reward:eui.Button;
    private reward:eui.Label;
    
	//抽奖结果


	public constructor(){
		super();
		
	}
	protected partAdded(partName:string,instance:any):void{
		super.partAdded(partName,instance);
	}
	protected childrenCreated():void{
		super.childrenCreated();

		this.init();
	}
	private init():void{
		this.reward.text  = StartBefore.result;
		this.btn_reward.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnTap,this);
	}
	//关闭按钮
	private closeBtnTap():void{
		console.log("前往APP领取");
	}
}