//抽奖结果
class  GameFail extends eui.Component implements  eui.UIComponent {
	//关闭按钮
	private btn_again:eui.Button;
	
	public time: egret.Timer;


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
        if(StartBefore.result != ''){
		    this.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnTap,this);
        }
		setTimeout(() => {
			SoundMenager.Shared();
			SoundMenager.Shared().PlayBGM();
		},3000)
		
	}
	//再来一次按钮
	private closeBtnTap():void{
		this.parent.removeChild(this);
	}
}