
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","bg":"resource/eui_skins/bg.exml"};generateEUI.paths['resource/skins/bg.exml'] = window.bg = (function (_super) {
	__extends(bg, _super);
	function bg() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
	}
	var _proto = bg.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "clip";
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "title_png";
		t.width = 729;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 644;
		t.left = 0;
		t.right = 0;
		t.source = "circle_bg_png";
		t.y = 558;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "barrage_bg_png";
		t.y = 424;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 662;
		t.horizontalCenter = 0;
		t.source = "circle_outside_png";
		t.width = 662;
		t.y = 542;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 610;
		t.horizontalCenter = 0;
		t.source = "circle_light_png";
		t.width = 610;
		t.y = 567;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "barrage_0_png";
		t.y = 436;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 535;
		t.horizontalCenter = 0.5;
		t.source = "circle_inside_png";
		t.width = 535;
		t.y = 603.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_start_png";
		t.y = 789;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "pointer_png";
		t.x = 332;
		t.y = 828;
		return t;
	};
	return bg;
})(eui.Skin);generateEUI.paths['resource/skins/GameFail.exml'] = window.gameFail = (function (_super) {
	__extends(gameFail, _super);
	var gameFail$Skin1 = 	(function (_super) {
		__extends(gameFail$Skin1, _super);
		function gameFail$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameFail$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_again_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameFail$Skin1;
	})(eui.Skin);

	function gameFail() {
		_super.call(this);
		this.skinParts = ["again_bg","btn_again"];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.again_bg_i(),this.btn_again_i()];
	}
	var _proto = gameFail.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.66;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.top = 0;
		return t;
	};
	_proto.again_bg_i = function () {
		var t = new eui.Image();
		this.again_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 515;
		t.horizontalCenter = 0;
		t.source = "again_bg_png";
		t.width = 515;
		t.y = 350;
		return t;
	};
	_proto.btn_again_i = function () {
		var t = new eui.Button();
		this.btn_again = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 291;
		t.y = 763;
		t.skinName = gameFail$Skin1;
		return t;
	};
	return gameFail;
})(eui.Skin);generateEUI.paths['resource/skins/Reward.exml'] = window.gameFail = (function (_super) {
	__extends(gameFail, _super);
	var gameFail$Skin2 = 	(function (_super) {
		__extends(gameFail$Skin2, _super);
		function gameFail$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameFail$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_reward_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameFail$Skin2;
	})(eui.Skin);

	function gameFail() {
		_super.call(this);
		this.skinParts = ["pack","btn_reward","reward"];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this.pack_i(),this.btn_reward_i(),this.reward_i()];
	}
	var _proto = gameFail.prototype;

	_proto.pack_i = function () {
		var t = new eui.Image();
		this.pack = t;
		t.horizontalCenter = 0.5;
		t.source = "pack_png";
		t.y = 204;
		return t;
	};
	_proto.btn_reward_i = function () {
		var t = new eui.Button();
		this.btn_reward = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 1;
		t.label = "";
		t.verticalCenter = 114;
		t.width = 330;
		t.skinName = gameFail$Skin2;
		return t;
	};
	_proto.reward_i = function () {
		var t = new eui.Label();
		this.reward = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 108;
		t.horizontalCenter = 0;
		t.size = 66;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 302;
		t.y = 704;
		return t;
	};
	return gameFail;
})(eui.Skin);generateEUI.paths['resource/skins/StartBefore.exml'] = window.startBefore = (function (_super) {
	__extends(startBefore, _super);
	var startBefore$Skin3 = 	(function (_super) {
		__extends(startBefore$Skin3, _super);
		function startBefore$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startBefore$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startBefore$Skin3;
	})(eui.Skin);

	var startBefore$Skin4 = 	(function (_super) {
		__extends(startBefore$Skin4, _super);
		function startBefore$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startBefore$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pointer_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startBefore$Skin4;
	})(eui.Skin);

	function startBefore() {
		_super.call(this);
		this.skinParts = ["bg","top","zpbg1","zpbg2","zpbg3","zpnr","start","pointer","zp","hjbg","hjmd1"];
		
		this.height = 1624;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.top_i(),this.zp_i(),this._Group1_i()];
	}
	var _proto = startBefore.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "clip";
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto.top_i = function () {
		var t = new eui.Image();
		this.top = t;
		t.anchorOffsetX = 0;
		t.height = 471;
		t.source = "title_png";
		t.width = 729;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.zp_i = function () {
		var t = new eui.Group();
		this.zp = t;
		t.anchorOffsetY = 0;
		t.height = 650;
		t.left = 0;
		t.right = 0;
		t.y = 510;
		t.elementsContent = [this.zpbg1_i(),this.zpbg2_i(),this.zpbg3_i(),this.zpnr_i(),this.start_i(),this.pointer_i()];
		return t;
	};
	_proto.zpbg1_i = function () {
		var t = new eui.Image();
		this.zpbg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 644;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_bg_png";
		t.y = 54;
		return t;
	};
	_proto.zpbg2_i = function () {
		var t = new eui.Image();
		this.zpbg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 662;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_outside_png";
		t.width = 662;
		t.y = 38;
		return t;
	};
	_proto.zpbg3_i = function () {
		var t = new eui.Image();
		this.zpbg3 = t;
		t.anchorOffsetX = 305;
		t.anchorOffsetY = 305;
		t.height = 610;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_light_png";
		t.width = 610;
		t.x = 70;
		t.y = 369;
		return t;
	};
	_proto.zpnr_i = function () {
		var t = new eui.Image();
		this.zpnr = t;
		t.anchorOffsetX = 268;
		t.anchorOffsetY = 268;
		t.height = 536;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_inside_png";
		t.width = 536;
		t.x = 108;
		t.y = 368;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Button();
		this.start = t;
		t.height = 192;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 239;
		t.y = 261;
		t.skinName = startBefore$Skin3;
		return t;
	};
	_proto.pointer_i = function () {
		var t = new eui.Button();
		this.pointer = t;
		t.anchorOffsetX = 88;
		t.anchorOffsetY = 106;
		t.height = 210;
		t.horizontalCenter = 38;
		t.label = "";
		t.width = 172;
		t.y = 420;
		t.skinName = startBefore$Skin4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 48;
		t.left = 0;
		t.right = 0;
		t.y = 472;
		t.elementsContent = [this.hjbg_i(),this.hjmd1_i()];
		return t;
	};
	_proto.hjbg_i = function () {
		var t = new eui.Image();
		this.hjbg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "barrage_bg_png";
		t.top = 0;
		t.width = 566;
		return t;
	};
	_proto.hjmd1_i = function () {
		var t = new eui.Image();
		this.hjmd1 = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "barrage_0_png";
		t.verticalCenter = 0;
		t.width = 349;
		return t;
	};
	return startBefore;
})(eui.Skin);