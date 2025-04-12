(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"serres_init_atlas_1", frames: [[0,0,223,351]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["serres_init_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2685,263);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.trebleclef = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// clef
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15,1,1).p("ABIpRQAxgsBBg5QBxhoBChPQCvjSAAjkQAAhsguiDQgtiBhLhtQhPhyhYg3Qhig8hZAaQgbBVgbC3QgZCrAABRQAAEDAsDvQANBMBKE0QAEASAEASQBCETAfDtQABANACANQBKgQBCAAQDJAABlBPQB2BcAADQQAAB/hBCGQg/CChtBtQhvBuiFA/QgcAOgdALQgDAggFAgQggDsg+C4QihHek+AAQjsAAhTjIQgHgRgGgTQgchbAAiFQAAhCAZhHQAPgrAohQIB4AAIAAFAQhtB1g/AvAg7BUQBHg6B4ghQAZgHAXgFQAoFKAAGdQAACbgSCjQhwAqhtAAQk1AAiBh4Qh6hzAAkJQAAltCvkjQB5jJEIjuQAkghA3gx");
	this.shape.setTransform(0,-0.0036);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjASQAAhBAZhHQAPgrAohQIB3AAIAAE/QhsB1g/AvQgchbAAiFg");
	this.shape_1.setTransform(-64,152.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15,1,1).p("AAgpRQAxgsBBg5QBxhoBChPQCvjSAAjkQAAhsguiDQgtiBhLhtQhPhyhYg3Qhig8hYAaQgcBVgbC3QgZCrAABRQAAEDAsDvQANBMBKE0QAEASAEASQBCETAfDtQABANACANQAoFKAAGdQAACbgSCjQgDAggFAgQggDsg+C4QihHek+AAQjsAAhTjIQgHgRgGgTQgchbAAiFQAAhCAZhHQAPgrAohQIB4AAIAAFAQhtB1g/AvADIQQQB6g/BBglQByhBBLhAQDMiuAAjtQAAjohYimQhciqiggwIAAgUACiQSQhwAqhtAAQk1AAiBh4Qh6hzAAkJQAAltCvkjQB5jJEIjuQAkghA3gx");
	this.shape_2.setTransform(4,-0.0036);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("AgtpRQAwgsBBg5QBxhoBChPQCvjSAAjkQAAhsguiDQgtiBhLhtQhPhyhYg3Qhhg8hZAaQgcBVgbC3QgZCrAABRQAAEDAsDvQAOBMBKE0QAEASAEASQBBETAfDtQABANACANQAoFKAAGdQAACbgSCjQgDAggFAgQggDsg9C4QiiHek+AAQjrAAhTjIQgHgRgGgTQgdhbAAiFQAAhCAZhHQAPgrAohQIB4AAIAAFAQhtB1g+AvACOQQQFqijC+k9QDXlphDnbABUQSQhvAqhuAAQk0AAiBh4Qh7hzAAkJQAAltCvkjQB5jJEIjuQAlghA3gx");
	this.shape_3.setTransform(11.7945,-0.0036);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(15,1,1).p("AiypRQAygsBAg5QBxhoBChPQCvjSAAjkQAAhsguiDQgtiBhLhtQhQhyhXg3Qhhg8hZAaQgcBVgbC3QgZCrAABRQAAEDAsDvQANBMBKE0QAEASAFASQBCETAeDtQACANACANQAoFKAAGdQAACbgSCjQgDAggFAgQggDsg+C4QiiHek+AAQjsAAhTjIQgHgRgGgTQgchbAAiFQAAhCAZhHQAPgrAohQIB4AAIAAFAQhtB1g/AvAAKP8QGUiND+lPQDkkuBem2AgvQSQhwAqhuAAQk1AAiBh4Qh6hzAAkJQAAltCvkjQB5jJEIjuQAkghA3gx");
	this.shape_4.setTransform(25,-0.0036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},4).to({state:[{t:this.shape_1},{t:this.shape_3}]},4).to({state:[{t:this.shape_1},{t:this.shape_4}]},4).to({state:[{t:this.shape_1},{t:this.shape_3}]},4).to({state:[{t:this.shape_1},{t:this.shape_4}]},6).to({state:[{t:this.shape_1},{t:this.shape_3}]},6).to({state:[{t:this.shape_1},{t:this.shape_4}]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-207.9,213,415.8);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336633").s().p("ABsANQgGgFAAgIQAAgHAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgIAAgFgGgAiGANQgFgFAAgIQAAgHAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgIAAgGgGg");
	this.shape.setTransform(2.875,51.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:true},1).wait(5).to({_off:false},0).wait(11));

	// eyes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABSA5IgKgIQgUgUAAgdQAAgcAUgUQAVgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUIgJAIQgRAMgXAAQgWAAgRgMgAigA5IgJgIQgUgUAAgdQAAgcAUgUQAUgUAdAAQAcAAAUAUQAVAUAAAcQAAAdgVAUIgJAIQgRAMgWAAQgXAAgRgMg");
	this.shape_1.setTransform(1.625,51.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABSAqIgKgGQgUgPAAgVQAAgVAUgPQAVgPAcAAQAdAAAUAPQAUAPAAAVQAAAVgUAPIgJAGQgRAKgXAAQgWAAgRgKgAigAqIgJgGQgUgPAAgVQAAgVAUgPQAUgPAdAAQAcAAAUAPQAVAPAAAVQAAAVgVAPIgJAGQgRAKgWAAQgXAAgRgKg");
	this.shape_2.setTransform(1.625,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABSAUIgKgDQgUgHAAgKQAAgJAUgHQAVgHAcAAQAdAAAUAHQAUAHAAAJQAAAKgUAHIgJADQgRAEgXAAQgWAAgRgEgAigAUIgJgDQgUgHAAgKQAAgJAUgHQAUgHAdAAQAcAAAUAHQAVAHAAAJQAAAKgVAHIgJADQgRAEgWAAQgXAAgRgEg");
	this.shape_3.setTransform(1.625,51.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(0.8,1,1).p("AA9gOQAQATAQAFQAKAFAWAAQATAAALgEQANgFARgOAi4gNQAKAJATAIQAUAIAPAAQAUAAAPgHQARgIAKgF");
	this.shape_4.setTransform(1.425,54.75);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(4).to({_off:true},1).wait(11));

	// head
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(11,1,1).p("AAAMnIAAjCIAA2L");
	this.shape_5.setTransform(42.5,-15.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCCCC").s().p("AAUA2IgCAAIgFAAIgDAAIgFAAIgEAAIgEAAIgDAAIgEAAIgDgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgCAAIgCAAIgBAAIgCAAIgDAAIgCgBIgCgBIgCgBIgCgBIgCAAIgCgBIgBgBIgCgBIgCAAIgCgBIgCgBIgBgBIgCgBIgCAAIgCgCIgDgCIgEgBIgDgCIgBgBIgEgEIgGgDIgEgFIgGgHIgEgGIgDgGIgDgFIgFgJIgCgMIAAgJIABgJIAAgBIABgCIABgCIABgBIACgCIABgBIACgBIABgBIACAAIABAAIADAAIABAAIABAAIAFACIAEADIADAGIADAGIAAAFIAAAGIAAACIAAACIABABIAAAAIAAABIACACIAAABIABACIABACIABACIABABIABABIABABIACABIABABIAAABIABABIABABIACABIACABIABAAIACABIAAABIABAAIACABIACABIACABIABAAIACACIACABIACAAIACABIABABIACAAIABABIACAAIACABIAAAAIACAAIACAAIACABIADAAIACABIACAAIACABIAEAAIAEABIAEAAIAGAAIAHAAIABgBIABAAIADgBIACAAIABgBIACgBIABgBIACAAIACAAIABgBIABgBIABgBIACAAIACgBIACgBIACgBIABAAIABgBIACgBIACgCIABgBIACAAIABAAIACgBIABgBIACgBIACgCIABgCIABgBIABgBIABgCIACgBIABgCIABgCIAAgBIABgCIABgCIAAgCIABgCIABgBIABgCIAAgBIACgBIAAgCIAAgBIABgCIAAgBIABgCIAAgDIAAgBIABgCIABgBIABgCIABgBIABgCIACgBIACgBIACAAIABAAIACAAIACAAIABAAIAEACIAGAFQACADABAFIABAFIAAAHQAAAEgCAEIgBADIAAACIAAABIgBACIgBABIgBACIgBABIgBADIgBACIgBAAIAAACIgBACIgBACIgBACIgBACIgBABIgCACIgBACIgBABIgBACIAAABIgBABIgBABIgBACIgBABIgCABIgBABIgBABIgBABIgBABIgBABIgCACIgBABIgCABIgCAAIAAABIgBABIgCAAIgBACIgCABIgCABIgBABIgCABIgBAAIgDABIgBABIgCAAIgBABIgCABIgBABIgCABIgCAAIgBABIgCABIgCAAIgCABIgCABIgBAAIgCABIgBAAIgCABIgCAAIgCAAIgCAAgAgXAOIAAAAIAAgBIgBAAg");
	this.shape_6.setTransform(2.35,77);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlSECQiNhrAAiXQAAgOABgPQAIhJApg+IAFgHIAFgHIAKgMQAdgkAqgfQCMhrDGAAQDHAACMBrQA1AoAhAuQA3BOAABdQAACXiNBrQiMBrjHAAQjGAAiMhrgAhGBUIgCABIgCABIgBABIgBABIgBABIgBACIgBADIAAABIgCAJIABAJIACALIAEAJIAEAHIADAGIADAFIAHAIIAEAEIAFAEIAFADIABABIACACIAEACIAEACIABABIACAAIACABIACABIACABIABABIACABIACABIACABIACABIABAAIACABIACAAIADABIACABIACAAIACAAIABAAIACAAIACAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAEABIADAAIAEAAIAEAAIAFAAIAEAAIAEAAIAEAAIACAAIADAAIACAAIACAAIABgCIABAAIACgBIACAAIACgBIABgBIACAAIACAAIACgBIACAAIABgBIABgBIACgBIACgCIACAAIABgBIACgBIABAAIADgBIABAAIACgBIABgBIABgCIACgBIABgBIABgBIACAAIABgBIABgBIACgBIABgBIABgBIACgBIABgCIABgBIABgBIABgBIABgBIABgBIABgBIABgCIABgCIABgBIABgBIABgCIABgBIABgDIABgCIACgBIABgCIAAgCIABgCIABgCIABgCIAAgBIABgCIABgCIABgCIAAgBIAAgBIACgEQABgDABgEIAAgHIgBgGQgBgEgDgEIgFgEIgFgCIgBAAIgBAAIgCAAIgCAAIgCAAIgCABIgBABIgBABIgBABIgCACIgBACIgBACIAAABIAAACIgBACIAAACIgBACIAAABIAAABIgBABIAAABIgBADIgBABIgBACIgBABIgBACIgBADIAAABIgBACIgBABIgBABIgBACIgBABIgBACIgCACIgCABIgBABIgBABIgCABIgCABIgCABIgBABIgBACIgCABIgBAAIgCAAIgCABIgCABIgBABIgCABIgCABIgBABIgBABIgCAAIgBAAIgBABIgCABIgCAAIgCAAIgCABIgBAAIgBABIgHAAIgHAAIgEAAIgFgBIgDAAIgCgBIgDAAIgCAAIgCAAIgCgBIgCAAIgCAAIAAAAIgBgBIgCAAIgBgBIgDAAIgBgBIgCgBIgBgBIgCgBIgDgCIgBAAIgCAAIgBgBIgCgBIgBAAIgBgBIgCgCIgBgBIgBgBIgCgBIgBgBIgCAAIAAgBIgBgBIgCgBIgBgBIAAgCIgBgBIgBgCIgBgBIgBgCIgBgCIgCgCIAAgBIAAAAIgBgBIAAgBIAAgCIAAgGIAAgGIgCgFIgEgHIgDgCIgFgCIgCgBIgBAAIgCAAIgBAAIgCABgAGpAWIAAjBgAAACXIgBAAIABAAIAAAAg");
	this.shape_7.setTransform(0,63.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-101.4,96,201.2);


(lib.circle_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AVRAAQAAI0mOGPQmPGOo0AAQozAAmOmOQmPmPAAo0QAAozGPmOQGOmPIzAAQI0AAGPGPQGOGOAAIzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AvBPCQmPmOAAo0QAAoyGPmPQGPmPIyAAQI0AAGOGPQGPGPAAIyQAAI0mPGOQmOGPo0AAQoyAAmPmPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_button, new cjs.Rectangle(-137.1,-137.1,274.2,274.2), null);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(-7,-127.75,1,1,0,0,0,0,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-120.75},0).wait(2).to({y:-127.75},0).wait(2).to({y:-131.25},0).wait(4));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AAAEkIgGgBIgBAAIgHgEIgFgHIgEgGIgCgHIgCgHIgBgDIAAgCIAAgBIgBgBIAAgCIAAgBIAAgBIgBgCIAAgBIAAgCIAAgBIAAgCIgBgBIAAgCIgCgEIgBgEIgCgFIAAgFIgBgDIgFgZIgFgVIgGgVIgEgVIgCgQIgEgTIgDgRIgDgRIgCgQIgBgHIgDgNIgEgMIgCgMIgBgLIgBgGQgEgOgCgPIgEgeIgEgWIgCgNIgFgZIgCgQIgLgsIgKgqIgEgTQgDgQAJgNQACgEAEgBQAOgDAIAMQAHAKgBANIAMAyIAFAWQAGAWADAWIAEAYQAFAXADAXQADAVAEAUQADAPABAOQADALAEALQADAKAAALIADAVIAEATIABALIACAGIABAHIACAGIAAAGIAAAEIADAOIADAMIADAMIADAMIACAMIACAIIACAIIABAIIACAHIAAADIAAABIACADIABADIABADIABADIAAAEIAAABIABACIAAABIAAABIABgBIACAAIABAAIAEgDIAEgCIAEgBIAFgCIAFgBIAHgEIAHgCIAHgCIAGgCIAFgBIABgBIADgBIADgBIADgBIADAAIACgBIACgBIABAAIACgBIABAAIABgBIACAAIABgBIABAAIABgBIABAAIACgBIABAAIABAAIACgBQAGgEAHACQAHACAFAFQAFAGACAIQABAIgDAIQgCAGgGAEQgFADgFABIgCABIgBAAIgCABIgBAAIgBABIgCAAIgBAAIgBABIgDABIgCABIgDAAIgDABIgDABIgDABIgGACIgGACIgFACIgGACIgDAAIgCABIgEACIgEACIgEABIgFABIgDABIgCACIgDABIgCABIgDABIgDABIgBABIgFACIgGADIgGABIgFAAg");
	this.shape.setTransform(16.551,-1.4395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgSE5IgEgCIgDgDIgDgCIgDgEIgCgEIgBgBIgBgBIAAgBIgBgCIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgBIgBgBIgBgBIAAgCIgCgCIgDgCIgCgDIgBgCIgCgDIgBgBQgHgIgEgJIgKgSQgGgKgEgKQgDgIAAgJQABgLAHgJIADgFIACgEIACgDIADgEIACgEIADgEIACgCIAFgJQACgFAEgEIAHgKIAGgKIAGgKIABgCIAPgZIADgFIARgbQAJgPAIgQIAKgTQAIgPAKgNIgCgKIgEgLIgFgNIgCgKIgBgGQgIgZgFgaIgDgNQgHgXgEgXIgIgzQgDgMgBgNQgBgQAFgQQABgEADgCQAMgIALAKQALALgBAQQgBAOABAOIADAMIACALIACANIACAJIABAHIAAADIABADIABADIAAADIABAEIAAABIAHAXIAGAZIAFAWIAGAUIACALIAAACIAAABIADAGIADAHIACAFIABAGIACAGIAAACIABAAIAAABIABACIAAABIABACIABABIAAACIAAABIABACIAAABIAAACIAAABIgBAKIgEAKIgHALIgGAJIgFAHIgBABIAAABIAAAAIAAAAIgBAAIAAABIAAAAIAAABIAAgBIgIAPIgKAUQgEAJgGAIIgKAQIgEAGIAAABIgBABIAAAAIgBABIgBABIgCAFIgDAEIgDAFIAAABIAAgCIgCAFIgEAHIgHAMIgIANIgJAOIgHAKIgCAFIgCAEIgCAEIgEAFIgDAEIgCACIgBACIAAABIgBABIgBACIgBABIgBABIAAACIABADIADAEIACAEIACAFIADAFIACAEIADAFIAEAFIAEAFIAEAEIADAEIABABIABABIAAABIABACIABABIABABIAAABIABABIABACIABABIABABIAAABIABACIAEAHQADAFABAGQABAGgBAGQgBAEgDAEQgCAEgFACIgGABIgFgBgAgUBPIAAAAIAAgBIAAABg");
	this.shape_1.setTransform(-20.7531,0.027);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhgDGIgBgBIgBgBIgBAAIgCgBIgEgEIgDgFIgDgFIgCgGIAAgGIAAgFIgBgCIAAgBIAAgCIgBgCIAAgBIAAgCIAAgCIAAgBQgFgPABgPIABgYQACgRAPgBIABAAIABAAIAQgBIAgAAIASAAIAFgBIAFgBIAFgBIAFAAIAFAAIADAAIACgBIABAAIACAAIAAgBIACAAIACAAIACAAIABAAIACAAQAJgCAIAAIARAAIAVAAIAKAAIgBgEIgBgEIgBgEIAAgCQgJgegFgdIgFgWIgEgTIgGgWIgLguIgGgTQgFgVAAgVQAAgIADgHQAFgOAOADQAIACAEAGQAJANgCARIAAAHQACANAEAMQAEAOADAOIAGAUIAEATIAAAFQAEALADAMIAFAZIAFAVIAEAUIABADIACAFIABAGIACAGIAAAFIAAAAIABADIABACIABACIAAADIABADIABACIADAMIAAAEQADAKgEAKQgFAMgNgBIglAAIgbAAIgJAAIgBAAIgCAAIgBABIgBAAIgCAAIgCAAIgBABIgCAAIgCAAIgBAAIgDAAIgEABIgDABIgCAAIgEAAIgEAAIgIABIgHACIgIAAIgIAAIgKAAIgHAAIgHAAIgHAAIgIAAIAAAAIAAAJIAAABIABADIABADIABADIAAAEIAAADIAAABIABACIAAABIAAACIAAABIABACIAAABIAAACIAAACIAAABIAAABQACAFgBAFQAAAEgBAEIgFAHQgEAEgEABIgDAAIgHgBg");
	this.shape_2.setTransform(-23.1058,-12.096);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgGE1IgDAAIgDAAIgDAAIgCAAIgBAAIgCAAIgCAAIgBAAIgCAAIgCAAIgBAAQgHgCgFgFQgGgGgBgJQgBgGABgGIAAAAIAAgHIABgDIAAgCIAAgBIABgCIAAgCIAAgBIABgCIAAgCIAAgBIABgCIAAgBIAAgCIABgBIAAgCIACgJIACgJIADgKIACgLIAAgCIAAgBIAAgCIAAgBIAAgCIABgBIAAgCIAAgBIABgCIAAgEIAAgDIABgCIABgCIAAgBIAAgCIABgBIAAgCIABgBIAAgCIABgCIAAgDIABgCIABgDIABgCIAAgCIABgBIAAgCIABgDIABgEIABgFIACgEIABgDIABgFIAAgEIABgEIABgEIABgCIAAgBIABgCIAAgBIAAgCIAAgCIABgBIABgCIACgQIADgQIAEgMIADgLIADgHQABgHADgGIAFgPIAFgOIADgGIAAgBIgBgBIgBgCIAAgBIgBgCIAAgBIgBgBIAAgBIgBgBIgBgBIgBgCIAAgBIgBgBIAAgCIgDgDIgCgEIgBgEIgCgFIgBgDIgBgCIgBgDIgBgCIgCgDIgBgDIAAgEIgBgDIgFgLIgFgKIgGgLIgFgNIgCgGIAAAAIgDgHIgEgHIgDgHIgDgIIgCgHIgDgFIgCgFIgDgEIgDgGIgCgGIgBgCIgDgIIgDgHIgDgIIgDgHIgDgIIABABQgIgPgGgPQgGgPgDgRQgDgPAJgMQAFgFAHAAQALAAAGAKQAGAKgBALIAFAQIAGAOIAHAQIAFANIAEAMIACADIABADIACADIABADIABACIAAACIAEAHIAEAHIADAHIADAIIACAHIAAACQAFAIADAJIAIASIAHAPIAHAQIAGAOIACAFIACAEIACAFIABAEIABACIABABIAAABIABACIABABIABABIAAABIABACIABABIAAAAIAAABIAGALIABAEIADADQAEAGABAGQABAHgBAGQAAAGgDAFIgEAKIgDAJIgEALIgEALIgBABIgBAGIgCAHIgDAGIgDAGIAAACIgBAEIgBADIgBADIgBADIAAAAIAAAAIAAACIgBAGIgBAIIgBAFIgCAHIgBAEIAAADIgBADIgBADIAAADIgBACIgBAFIgBAEIgBAEIgBAEIgBAFIgBABIgBADIAAADIgBADIgBADIAAACIgBABIAAACIAAABIgBABIAAACIgBABIAAABIgBABIAAACIAAABIgBACIAAACIgBABIAAACIAAABIgBACIAAABIgBACIAAABIAAACIAAACIAAABIgBABIAAACIAAABIgBAJIgCAGIgBAJIgCAHIAAADIgBADIAAAFIgBACIACAAIADAAIACAAIACgBIABAAIALgBIAMAAIAOAAIAOAAIANAAQALACAFALQAGALgEALQgDANgNAAIgdABIgYAAIgCABIgDAAIgDABIgDAAIgDAAIgDAAIgBAAIgDABIgCABIgEAAgAAPgRIAAABIgBAAIABgBg");
	this.shape_3.setTransform(12.1806,-0.5771);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgrECQgFgBgEgCIgIgIIgHgIIgBAAIgHgHIgHgJIgGgIIgEgEQgJgIgHgJQgHgJgCgLQgCgNAIgJIAFgEIABgBIADgCIABgBIAngfIAZgSIAMgIIAkgZIAFgDQAQgLAPgNIAGgEIAegUIACgBIgBgBIAAgBIgBgBIgBgBIgBgBIgBgBIgCgCIgBgBIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgDgCIgBgDIgCgCIgIgHIgIgJIgBgBIgHgIIgGgJIgHgHIgDgDIgCgCIgEgDIgDgEIgDgDIgBgBIABABIgWgaIgVgXIgYgYIgYgXIgRgSQgPgPgRgOIgGgFQgPgPAJgTQAEgJAKAAQAIAAAHAGQARANAPAPIAfAfQARAQAQAQQAOAPANAQIAUAXIAIAHQANAOAMAOIAJAMIAEAEIACACIADADIACACIADACIACADIABABIABABIACACIADADIAEAEIADAEIADADIADADIABABIABABIABABIABABIABABIAAABIABACIACABIABABIAAABIABABIABABIABABIABABIABABIABABIABABIABACIABABQAEACADACQAFAFACAHQABAGAAAHQgBAGgEAFQgDAEgFABIgGABIgBAAIAAAAIgBAAIgEADIgEADIgFACIgEACQgSAOgTAMIgQALQgRAOgSAMIgUANIgRALIghAZIgCACIgMAJIABABIABABIABABIACACIACACIABACIAAABIACACIABACIABAAIAAABIABABIgBAAIABABIABABIABABIABACIACABIABABIABABIABABIABACIACABIABABIABABIABABIACACIABABIABABIAAAAIABABQAEADADAFIADAHIABAEQABAHgCAHQgCAEgDADIgDADQgEADgFAAIgCgBg");
	this.shape_4.setTransform(-6.5125,-6.6902);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgsEvIgCAAIgBAAIgCAAIgBAAIgBAAIgCAAIgBAAIgFAAIgFAAIgFAAIgFAAIgFAAIgFAAQgJgBgFgIQgEgFgBgHIgDgEIgCgGIgBgHIABgFIAAgDIAAgCIABgBIAAgCIAAgBIABgCIAAgCIABgCIACgKIAEgLIACgNQABgFACgGIAAgBIADgQIABABIAHAIIAIAIQAEACAFABQAGABAFgEIADgCIAAAEIgCALIgDAMIgCAIIgBAJIgDAHIgBAGIALAAQAFgCAGAAIAMAAIAPAAIAQAAIAQAAIABAAQALACAFAKQAGAMgEAMQgEAMgNAAIgeAAIgaAAIgBABIgCAAIgBABIgCAAIgBAAgAgyClQgDgEgEgDIgBgBIAAgBIgBAAIgBgBIgCgCIgBgBIgBgCIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgCgBIgBgCIgBgBIgBgBIgBgBIABAAIgBgBIAAgBIgBAAIgBgCIgCgDIAAAAIAEgSIACgCIAhgZIARgLIgFATIgJApIgIAlIgDgHgAg3AUIAGgWIAOgrQAHgVAJgVIANggIADAEIADADIACACIADADIAHAHIAGAIIAHAJIABAAIgPAjQgIAUgGAWIgDAJIgFAEIglAZIgMAHIAFgTgAASibIgIgHIADgIQAHgWAJgUQAHgUALgSIAPgcQAHgOAMgJQABAAAAgBQABAAAAAAQABAAABAAQAAAAABgBQAQACAGAQQAGAQgMAOIgEAGIgDADIgZAyIgJAUIgQArIgCAGQgMgPgNgNg");
	this.shape_5.setTransform(-4.225,-1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ADSDfIgCAAIgBAAIgCgBIgBAAIgCAAIgCgBIgBAAIgCAAIgBgBIgCAAIgCgBIgBAAIgCAAIgBgBIgCAAIgCgBIgBAAIgCAAIgBgBIgCAAIgCgBIgCgBIgBAAIgBgBIgCAAIgBAAIgCgBIgBAAIgDgBIgBgBIgBAAIgCgBIgCAAIgFgBIgCAAIgCAAIgCgBIgDAAIgBgBIgCAAIgCAAIgDAAIgBgBIgBAAIgCAAIgIgBIgFAAIgHAAIgHAAIgFAAQgLgCgFgLQgGgKADgLIACgGIABgBIAAAAIAAAAIABgBIAAgCIAAgBIABgBIABgBIAAgBIABgCIAAgBIAAgBIABgCIAAgBIABgBIACgEIACgEIABgEIACgDIADgFIACgCQABgGADgFIAFgKIAEgKIAFgKQACgFADgEIAIgRIAHgQIAIgPIAKgRIAHgKIABgBIgBgBIgCgBIgBAAIgCgBIgBgBIgBgBIgBgBIgCgBIgCgBIgDgCIgDgBIgEgDIgFgDIgBAAIglgQIgggQIgWgLIglgSIgIgDIgbgMQgGgDgFgDIgCgBIgRgGIgPgGIgLgGIgOgGIgMgHIgCAAIgEgDIgEgCIgFgCIgEgDIgCgCQgIgCgGgFIgMgGIgMgEIgMgHIgMgEIgDgBIgCAAIgBgBIgCAAIgBAAIgCAAIgBAAIgEAAIgBAAQgRgFgDgSQgCgOALgJQAFgDAFAAQAQgBAQAHIAdAMQAMAGAMAHIACABIADACIADACIAFACIAEADIABABIADABIACABIADACIADABIACACIACAAIACACIADABIADABIAFADIAEACIALAFIAKAEIALAEIAJAEQAFABAEADIAHACIANAGIASAIIAJAEIAGAEIAOAHIAPAIIAFACIAIADIAFADIAGADIAGADIABABQAKADAJAFIAQAJIARAGIAQAIIAPAJIAEADIABABIACAAIABABIABABIABAAIADACIADABIACACIADACIAEADIACABIABABIABABQAJAFADAJQADAIgCAIQgBAFgDAEIgDAGIgEAIIgCAGIgDAFIgEAFIgBACIgBACIgBABIgBACIgBABIgBABIgBACIgBABIgGAMIgGAMIgGANIgGANQgDAHgEAFIgFALIgEAKIgEAIIgDAIIgDAGIABABIACAAIABAAIACAAIADABIACAAIAFABIAGABIAFABIAEABIAGACIABABIABAAIACAAIABABIADAAIABABIACABIABAAIAAAAIACABIACAAIACABIABAAIACAAIABAAIADABIACABIAAAAIACAAIACABIABAAQAHAAAGAEQAGAEADAHQADAFABAHQABAGgDAGQgCAFgEADQgFAEgGAAIgBgBgAiRiWIABAAIgBgBgAiSiXIgBgBIAAAAIABABg");
	this.shape_6.setTransform(2.0739,-10.3018);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgpEvIgBAAIgCAAIgBgBIgCAAIgBgBIgBAAIgCgBIgBgBIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgCgCIgBgBIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgCIgCgCIgCgCIgCgCIgCgDIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgCIgBgBIgBgBIgBgBQgGgEgEgHQgEgIABgJQAAgIAHgGIAEgDIABgBIADgCIABgBIABgCIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgCIABgBIABgBIABgCIABgBIABgBIABgBIAAgCIABgBIABgBIAAgBIABgBIAAgBIACgDIABgDIACgDIAAgBIABgBIAAgBIABgCIABgBIAAgBIABgCIABgBIABgBIAAgBIABgBIABgDIABgCIABgCIABgDIACgDIABgCIABgCIAAABIACgEIACgFIAEgGIACgEIACgEIADgDIAAgBIABgCIAAgBIABgCIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIAAgBIABgDIACgCIABgDIACgDIABgDIAEgIIAEgIIAFgIIAEgIIAGgKIABgCIAAgBIABgBIAAgBIABgBIABgCIAAgBIABgBIABgCIABgBIABgCIAAgBIABgBIABgCIABgCIABgDIABgBIACgGIACgGIADgFIADgGIADgFIADgEIABgCIAAgBIABgCIABgCIAAgBIABgCIABgBIAAgCIABgDIABgDIABgDIACgDIABgDIACgDIAAgBIAAgBIAOgfQAJgXAMgWIAEgJIANgfQAGADAGADIAcAMIgJASIgIAWIgGAOIgIAPIgEAJIgEAKIgEALIgEAJIgFAJIgBABIgBADIgBACIgBADIgCADIgBADIgCACIAAABIgBACIgBAFIgDAIIgEAIIgDAFIgDAEIgCADIgBABIAAABIgBABIAAABIgBACIgBABIAAACIgBABIgBAFIgDAFIgCAGIgDAGIgCAGIgBABIgBABIAAACIgBABIgBABIAAABIgCADIgBADIgBABIgCAEIgCAEIgCAEIgDAEIgCAEIgDAFIgBABIAAACIgBACIgBABIgBABIAAACIgBABIAAABIgBABIAAABIgBACIgBABIAAABIgBACIgBABIgBABIAAACIgBABIAAABIgBACIgBACIgBACIgCADIgBACIgBAAIAAACIgBABIAAABIgBACIgBABIgBABIgBABIAAAAIgBADIgCADIgBACIgCADIgBACIgBACIgBABIAAABIgBACIgBABIAAAAIAAABIgBABIAAABIgBACIgBABIgBADIgBACIgCADIgBADIgCADIgBADIgBABIgBABIAAACIgBABIgBABIAAABIgBABIgBACIgBABIgCAEIgBADIgBADIgCAEIgCACIAAAAIAAABIgBABIgBABIAAACIgBABIgBABIgBABIgBABIAAABIgBABIgBACIAAAAIAAABIACACIABACIABAAIABABIABABIABABIABAAIABABIABABIAAABIABACIABABIABAAIABABIABABIABABIAAABIABAAIABABIABABIACABIABABIABAAIACABIABABIAAABIABAAIABABIABABIABABIABABIABABIABABIABABIABAAIABABIABABIABAAIABABIABAAIABABIABABIABABIABABIAAABIABAAIABABIABAAIABABIABABIABABIABABIABAAIABABQAFADADAEQAFAFACAHQACAGgBAHQgBAGgEAFQgEAFgGABIgCAAIgCAAgABqjVIgSgIIgOgGIAJgQIAXgtIAFgIIAFgEQADgCAFAAQAEAAAEACIAHAFIAEAHIACAFIAAACIAAABIABACIAAACIAAABIAAACIAAABIgBACIAAABIAAACIgBABIAAACIgDAGIgEAHIgEAIIgCAFIgEAGIAAABIgMAWIgJgEg");
	this.shape_7.setTransform(-7.2591,-1.7125);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-20.3,-34.65,0.1734,0.1734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-229.8,96,261.2);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clef
	this.clef_mc = new lib.trebleclef();
	this.clef_mc.name = "clef_mc";
	this.clef_mc.setTransform(2178.25,-512.4,1.479,1.479);

	this.timeline.addTween(cjs.Tween.get(this.clef_mc).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFAEB2","#A9A0D0"],[0,1],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(2880,-540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A9A0D0","#FFFFFF"],[0,1],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(4800,-540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FFAEB2"],[0,1],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_2.setTransform(960,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,-1080,5760,1080), null);


// stage content:
(lib.serres_init = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown",handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 75;
		
		function handleKeyDown(event){
			console.log(root.background_mc.x);
			console.log(root.quarterNote_mc.scaleX);
			
			if (root.quarterNote_mc.currentFrame == 9){
				root.quarterNote_mc.gotoAndPlay("walking");
			}
			
			if (event.keyCode == 39 && root.background_mc.x > -2940){
				root.quarterNote_mc.scaleX = 2.8829;
				root.background_mc.x = root.background_mc.x - speed;
			}
		
			if(event.keyCode ==37 && root.background_mc.x < 960){
				root.quarterNote_mc.scaleX = -2.8829;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event){
			root.quarterNote_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.clef_mc.addEventListener("click",handleClickClef);
		
		function handleClickClef(event){
			var scale_snd = createjs.Sound.play("scale");
			root.background_mc.clef_mc.play();
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("music");
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(288.85,281.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// buttons
	this.play_btn = new lib.circle_button();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(960,683.6);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1));

	// walking
	this.quarterNote_mc = new lib.walking();
	this.quarterNote_mc.name = "quarterNote_mc";
	this.quarterNote_mc.setTransform(494.55,635.3,2.8829,2.8829,0,0,0,-7,-99.4);
	this.quarterNote_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.quarterNote_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(960,540,1,1,0,0,0,960,-540);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,4800,540);
// library properties:
lib.properties = {
	id: '3EA7842AAD8B4F0BBBDAB0B8328DA407',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png?1744329958339", id:"CachedBmp_2"},
		{src:"images/serres_init_atlas_1.png?1744329958272", id:"serres_init_atlas_1"},
		{src:"sounds/music.mp3?1744329958339", id:"music"},
		{src:"sounds/scale.mp3?1744329958339", id:"scale"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3EA7842AAD8B4F0BBBDAB0B8328DA407'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;