(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"serres_newHaiku_atlas_1", frames: [[0,0,994,444],[0,446,1139,360],[0,808,1320,140]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["serres_newHaiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["serres_newHaiku_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["serres_newHaiku_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.rectanglebutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("Au1CqIAAlTIdrAAIAAFTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3399").s().p("Au1CqIAAlTIdrAAIAAFTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3399").s().p("AuXCWIAAkrIcvAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:0}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{y:0.025}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-17,189.9,34.1);


(lib.mouse = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#66CC00").ss(3,1,1).p("AAAglIAAgBQAAgFAAgGAgHgBQgCAUAAAfAAAglIAABXQAAgDAFgLQAFgLAAgPQAAgMgFgOQgFgMAAgJgAgHgBQAFgHACgMQAAgGAAgLAAAgmQgEALgDAa");
	this.shape.setTransform(67.85,88.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(3,1,1).p("AAJsZIgxAAQgHAxgGBKQgHBGAAAUQAAA+AKAXQANAeAlAAQAsAAgBiNQAAiIgigzgAolhzQAAABAAACQgCAOgBAPQgGBMAAAVQAAC3BTDeQBFC4BZB3QAEABADABAolhzIABAAQgBABAAACQgNAagPA5QgBABAAABQgHAMgHAQQAPgzAThBIADAAgAqlFmQAAgBAAAAQAKj7CBlBQgEAXgDAgQgCAVgCAYApQABQgHASgHAXQgIAfgHAWIAAAAQAAABgBABAo4gRIAAAGQAHgcADgGIAAgKQgFAFgFAHQgFAGgEAIQgHAagHAeQgEAQgDAPQAGgLAFgIQAKgRAFgSIAAgCQABgCAAAAIAAgBQACgGABgEIAAAZIgeBkQAAgDABgDQAPhDAKglAo4gRQABgNgBgNAo7gBQACgIABgIApgBLIAAgBQgBABAAABIAAABIAAAAAphBMQAAgBABAAApqBhQADgFAEgEQABgCACgCIAAgGIAAgDQABgCABgBQAEgIAEgGQgZBsgFASQgCAGgIAUIAAgZIAAgJIAAgeIAAgCIAAgUQAJgOAHgLIAAgBIAAAAQAAgBABAAQAAgBAAgBApuBiIAAgBQAAAAAAAAIABAAQAGgLAGgJQgFAJgEALApuBjQAAgBAAAAApzBzIADgKQABgEABgCAp0B2QgFAPgDAIAp+CQQAFgNAGgQQgBABAAACQAFgMAFgJQgLAfgJAwQgDAOgDAQQgCANgCAOQgBABAAACQgDAGgCAGQgFALgDAKQgFAOgBALQgGAmgCATIgBADAp+CSQABgDABgCQgBACgBABApWByQgGASgJAtQAAACAAACIgBACQgFAagJAtAqTFCQARgcAEg5IAAgbQgEAJgGAOQgEAcgEAgQgBAPgCAOQgGBBgDA5QAABtCMBSQBLAsCIArQAJALAIALIgJAAIgpAAQgVgLgagNQgngTg0gVQg4gXgegQQgKgGgHgEQgYgQgQgVQgPgTgKgXQgTgvgDhNQAEgzAFgrQACgVACgTQACgNABgMQABgIABgIQAJhBANgqAplC1QAGgcAJgnAptBfQANgnAQg3AqlFmIAAABQAAAAgBABQAAABAAABQAAAFAAACIAAAEQAAgGAAgFAqlFkQAAABAAABAqdFOQAGgFAEgHAqmF1IAAAtIAAAQQAAgDAAgDQAAgFAAgFAIEhJQgGBEgGB8QgJCngJBYQgiEshxBaIAAAVIAAAJQB+AIBtiLQBpiHAAiaQAAhDgehHQgOgggyhZQgXgogPghQgMgcgHgVQgKghgCghQgCgTABgSIAEgFQgCARgBAZgAIUBZQAQAXAcAoQAUAeANAYQAFAIADAHQAoBQACBnAJvIHQAQg0AAgwQAAgogPhHQgPhHAAgNIAAgSIAAgCQAQAPAPAjQAEAJAEAKQAVA1AAAmQAAAzgMAmQgBAJgBAKQgNBPgyBCQAAgBABgCQADgKAEgKQAehOAWgnQABgDACgCAIDhuQAAgWAFgXAH8K8Qg6AshRAoIgKAAQBIAHBEhDQAAAAABAAQgBAAAAAAIAAAAIgKAAQAGgBAGgCQABgBACgBQAWgWAVgeQgSARgVAQQgEAKgDALQgBABAAACQACgDACgCQAzgWAlhQQgJALgKALQgMAOgOAOQAEgGADgFQAGgJAGgIQAng+ASg6QgHAKgIAKQgsA2gMASQgXAkgRAsQgCAEgCAFgAGAL6QgDABgCABIAQAAIAEAAQADAAAWgOQAIgFAJgGQAngaAJgJQgPAAgNADQgZAGgUAPQgRAMgPAWgAHNLDQgJAHgMAJQgpAdgPAKAHpKsQgDAEgZATAKTGVIAAAEAKRHFQgBAEgBAEQgCAEgCAEQgJAXgTAbAKTGeQAAAUgCAT");
	this.shape_1.setTransform(68.925,118.4468);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(3,1,1).p("AKiJTIAAgBQAAhUgThCQgBgFgCgFQgMgpgkhEQgcg2gOgnQgDgJgDgJQgWhJAAhhQAAgCABgIQABgiAIiMQAKisAAgNQAAldiWifQiXiglNAAQgGAAgJABQgZABgqAIIghAAQgLACgKACAiivXQgXAEgfAAQieAihZCAQhaCAAAC/QAABNAUCKQAUCKAABBQAAAigRBLQgFAVgFAYQgKAogNAwQgNAugPA2QgBADgBADQgCAFgBAFQgPAzgMAuQgDALgDAKQgFAVgFAVQgGAYgFAWQgHAfgEAaAqWIgQAAABAAABQAAABAAAAAqXIoQgKA7AAAmQAABLA5A8QAXAZAiAWQBEAtBtAiQApANAvALQD3A8EKAAQBHAABAgTQAdgIAbgNQAPgGAOgIQAugYAqgjQADgEAEgDQAZgWAWgXQATgWAPgXQAmg3AOg+QABgIACgIQADgXABgYIAAgF");
	this.shape_2.setTransform(67.425,99.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAJjQQhwAAglCWQgUBQAAC2QAACSAeBGQAnBZBfAAQBzAAAeigQAKg3ABhQQABgsgChHQAAgkABhIQgBg+gKglQgbhkhxAAgAgUhiQAAAkgPAkQgPAkAAApQAAAeALAoQANAuAGAWAAAn8QAAC+AJBQ");
	this.shape_3.setTransform(65.9063,51.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AFdMBQBxhaAiksQAJhYAJioQAGh8AGhEQACAhAKAhQAHAWAMAbQAOAoAcA2QAkBEAMAoIADAKQATBCAABVQgChogohPIgIgPIAAgCQAQAPAPAiQgPgigQgPIAAACQgNgZgUgeIgsg+IAsA+QAUAeANAZIAAASQAAANAPBHQAPBGAAApQAAAwgQAzIgPAUQgsA2gMATQgXAkgRArQgqAjguAYIARgLQAngZAJgJQgPAAgNADQAZgTADgEQgDAEgZATQgZAFgUAPQgRAMgPAWIgFADIAQAAQgbAMgdAJgAGFMBIAFgDQAPgJApgeIAVgPIgVAPQgpAegPAJQAPgWARgMQAUgPAZgFQANgDAPAAQgJAJgnAZIgRALIgdAPgAkrLtQgvgMgpgMQgngTg0gVQg4gXgegQQgigXgXgZQgPgTgKgXQgTgugDhOIAJhdIgJBdIAAgJIAAgtIAAgMIAAgBIABgCIAAAAIAAgBIAAgBIAAgCIABgDQAEgbAHgeQAFgXAGgYIAKgpIAGgVQAMguAPg0IADgKIACgFIAchkIAXhXIAKgtIgEAtIgGAAIAGAAIAAACQgNAbgPA5IgBABIABgBIgOA4IgHAfIAHgfIAOg4IAJgPIAKgLIAAAKQgDAGgHAbIAAgFIABgQIgBgLIABALIgBAQIgDAOIAAABIgBAEIAAABIAAgBIABgEIAAgBIADgJIAAAaIgeBkIABgHIAZhoIgZBoIgBAHQgGARgJAuIAAAEIgBACIgOBHIAOhHIABgCIAPhDIAehkIAAgaQAHgbADgGIAAgKIgKALIgJAPQAPg5ANgbIgDAeQgGBMAAAVQAAC3BTDeQBFC3BZB4IARAWgAqSHBQAABtCMBSQBLAsCIArQiIgrhLgsQiMhSAAhtQADg6AGhAQARgcAEg6IAAgbIgKAXIAEgaIgEAaIgBADIgFAMIAFgMIABgDQgEAcgEAhIgDAdQgEAHgGAFIAEgoIgEAoQAGgFAEgHQgGBAgDA6IAAAAgAqbFrIAAgCIAAACgAp0DWIAKgZQAFgTAZhrIALgTQAKgSAFgSQgFASgKASIgLATIgIAOIAIgOQgZBrgFATIgKAZIAAgYIAAAYIAAAAgApWBZIgDADIADgDIAAgHgAHXLIIAAAAgAIyJoQAMgTAsg2IAPgUQAQgzAAgwQAAgpgPhGQgPhHAAgNIAAgSIAIAPQAoBPACBoIAAAAIAAAEIAAAGQgBAXgDAXIgEAJQgJAXgTAaQATgaAJgXIAEgJIgDARQgWAmgeBPQgPAWgTAWQAng+ASg6QgSA6gnA+QgWAYgZAWIgHAGQARgrAXgkgAJiJXIAAAAgAKWHiQgOA9gmA4QAehPAWgmgAKZHRIAAAAgAKdGZIAAAAgAqTFTIAAAAgAqJFHIADgdQAEghAEgcIAKgXIAAAbQgEA6gRAcIAAAAgAp+DtIAAAAgAp0DWgAJrDTIAAAAgApbC6IAAAAgApbC2QAJguAGgRIgPBDIAAgEgApMB3IAAAAgAoxACIAAAAgAougMIAAAFIgDAJIADgOgAougHgAobhsIAAAAgAobhugAgonqQgKgYAAg9QAAgVAHhFQAGhLAHgxIAxAAQAiAzAACJQABCNgtAAQgkAAgNgeg");
	this.shape_4.setTransform(67.925,117.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AjuOmIAJAAIgRgWIAHACIgHgCQhZh3hFi4QhTjeAAi3QAAgWAGhMIADgdIABgDIgBAAIAEgtQARhLAAgiQAAhBgUiKQgUiKAAhNQAAi/BaiAQBZiACegiQAfAAAXgEQAqgIAZgBIAPgBQFNAACXCgQCWCfAAFdIgKC5IgJCuQgFAXAAAWIgBANIACAYQgGBEgGB9QgJCngJBYQgiEshxBaIAAAVQhAAThHAAQkLAAj2g8gAAtAiQBzAAAeifQAKg3ABhQIAAgYIgBhbIABhtQgBg+gKglQgbhkhxAAQBxAAAbBkQAKAlABA+IgBBtIABBbIAAAYQgBBQgKA3QgeCfhzAAQhfAAgnhYQgehGAAiSQAAi2AUhRQAliWBwAAQhwAAglCWQgUBRAAC2QAACSAeBGQAnBYBfAAIAAAAgAA8g3QAAgDAFgLQAFgLAAgPQAAgNgFgOQgFgMAAgJIAAgBIAAgLIAAALQgFALgDAaQgCAVAAAfQAAgfACgVQAFgHACgMIABgRgAARngQgHBGAAAUQAAA+AKAXQANAeAlAAQAtAAgBiNQAAiIgigzIgyAAQgHAxgGBKgAgJmnQAAAeAKAoIATBEIgThEQgKgoAAgeQAAgpAOglQAPgkAAgkQAAAkgPAkQgOAlAAApIAAAAgAAyrJQgKhQAAi+QAAC+AKBQgAj2OQIAAAAgAn3M/QAeAQA4AXQA0AVAnATQhtgihEgtgAppKJQAAgmAKg7IAAAHIAAAEIAAAtIAAAQIAAgGQADBNATAvQAKAXAPATQg5g8AAhLgApfJgIAAAKIAAAGgApfJqIAAAAgApfIvIAAgHIAAALgApfIoIAAAAgAJXC2QgKghgCghIADgqIgEAFQAAgWAFgXIgBAKQAABhAWBJIAGASQgMgcgHgWgAJLB0IgCgYIABgNIAEgFIgDAqIAAAAgAneBKIABAAIgBADIAAgDgAneBKgAJPAiIAAAAgAA8iPQAAAJAFAMQAFAOAAANQAAAPgFALQgFALAAADgAA0hrIAAAAgAA8iQIAAABIgBARQgCAMgFAHQADgaAFgLg");
	this.shape_5.setTransform(61.825,99.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouse, new cjs.Rectangle(-1.5,-1.5,139.9,201.9), null);


(lib.keyboard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// letters
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-264,-165.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// keys
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(37,37,38,0)").ss(3,1,1).p("AvYuXIBpAAIFUAAIAyAAAwKK8IAAk2IAyAAAvsK8IgeAAAKFDNIAAkmIAeAAANREsIg3AAAQLCvIAAAeAvsOYIgeAAIAAjc");
	this.shape.setTransform(-180.45,-75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAnkAOYIAAigIFjAAIAACggEAhUAOYIAAigIFjAAIAACggAbDOYIAAigIFjAAIAACggAU5OYIAAlUIFUAAIAAFUgAMYOYIAAlUIH0AAIAAFUgAyFOYIAAlUIdqAAIAAFUgA6wOYIAAlUIH0AAIAAFUgEgg1AOYIAAlUIFUAAIAAFUgEgnAAOYIAAlUIFUAAIAAFUgEgtGAOYIAAlUIFUAAIAAFUgEAhUALkIAAigIFjAAIAACggAe5IhIAAlUIOOAAIAAFUgAYzIhIAAlUIFUAAIAAFUgASfIhIAAlUIFUAAIAAFUgAMYIhIAAlUIFUAAIAAFUgAGOIhIAAlUIFUAAIAAFUgAAMIhIAAlUIFUAAIAAFUgAl5IhIAAlUIFUAAIAAFUgAr/IhIAAlUIFUAAIAAFUgAyFIhIAAj1IAAhfIC6AAICaAAIAAFUgA4QIhIAAlUIC/AAICVAAIAABfIAAD1gA+RIhIAAlUIFUAAIAAFUgEgtGAIhIAAlUIOOAAIAAFUgEAhjACvIAAlTILkAAIAAFTgAbdCvIAAlTIFUAAIAAFTgAVSCvIAAlTIFUAAIAAFTgAPRCvIAAlTIFUAAIAAFTgAJMCvIAAlTIFUAAIAAFTgADGCvIAAlTIFUAAIAAFTgAi1CvIAAlTIFTAAIAAFTgAo7CvIAAlTIFUAAIAAFTgAu3CvIAAlTIFUAAIAAFTgA0zCvIAAkIIAAhLIFUAAIAAFTgA6wCvIAAlTIFUAAIAAFTgEgg1ACvIAAlTIFUAAIAAFTgEgtGACvIAAlTILkAAIAAFTgEAnzgDNIAAlTIFUAAIAAFTgEAhjgDNIAAlTIFUAAIAAFTgAbDjNIAAlTIFUAAIAAFTgAU5jNIAAlTIFUAAIAAFTgAOgjNIAAlTIFUAAIAAFTgAIajNIAAlTIFUAAIAAFTgACDjNIAAlTIFUAAIAAFTgAkPjNIAAlTIFTAAIAAFTgAqbjNIAAlTIFUAAIAAFTgAwljNIAAlTIFUAAIAAFTgA2rjNIAAlTIFUAAIAAFTgA8xjNIAAlTIFUAAIAAFTgEgitgDNIAAlTIFUAAIAAFTgEgtGgDNIAAlTIJiAAIAAFTgEAjlgJDIAAlUIJiAAIAAFUgAdVpDIAAlUIFUAAIAAFUgAW9pDIAAlUIFUAAIAAFUgAQmpDIAAlUIFUAAIAAFUgAKYpDIAAlUIFUAAIAAFUgAD4pDIAAlUIFUAAIAAFUgAiNpDIAAlUIFTAAIAAFUgAolpDIAAlUIFUAAIAAFUgAurpDIAAlUIFUAAIAAFUgA0npDIAAlUIFUAAIAAFUgA6wpDIAAlUIFUAAIAAFUgEgg1gJDIAAlUIFUAAIAAFUgEgnAgJDIAAlUIFUAAIAAFUgEgtGgJDIAAlUIFUAAIAAFUg");
	this.shape_1.setTransform(20.275,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(37,37,38,0)").ss(3,1,1).p("EAupgBFIAACLMhdRAAAIAAiB");
	this.shape_2.setTransform(21.525,40.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("EAu9AQuMheXAAAMAAAghbMBe1AAAMAAAAhbg");
	this.shape_3.setTransform(19.525,-73.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.keyboard, new cjs.Rectangle(-285.4,-181,608.4,229.6), null);


(lib.cursor = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAIAAQgGgHgCgDIgPAIQAFAGAFAGQAQAYAIANQADgCAHgGQAHgFACgDQgBgDgSgRQgGgHgFgEQAMgIAWgMQgPgEgfgKQgggLgFgBQAHAWAFBFQAJgVAPgOQACgCADgCQADgDAFgDg");
	this.shape.setTransform(4.225,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAKIAFgEIAIgGIALALQASARABACQgCADgHAGIgKAIQgIgOgQgXgAgpguIAlANIAuANQgWAMgMAIIgIgKIgPAIIAKAMQgPAOgJAVQgFhFgHgWgAgPgCIAPgIIAIAKIgIAGIgFAEIgKgMgAAIAAIAAAAg");
	this.shape_1.setTransform(4.225,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cursor, new cjs.Rectangle(-1,-1,10.5,11.4), null);


(lib.mousetween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AEdgEQAAgIAEgfQAFgeAIgzQAQhigDg0AhNEJQAEABADABQAGABAAAHQgDgDgKgHQgXgPg8glQh0hJgmgZIAUAAABfBBQgBgBgEgGQgQgVhKhaQhShogMgv");
	this.shape.setTransform(-221.3263,-187.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23).to({_off:false},0).wait(25));

	// mouse
	this.instance = new lib.mouse();
	this.instance.setTransform(2.55,18.55,1,1,0,0,0,68.4,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-0.65,y:12.15},0).wait(1).to({x:-4.4,y:5.9},0).wait(1).to({x:-8.6,y:-0.15},0).wait(1).to({x:-13.3,y:-5.95},0).wait(1).to({x:-18.45,y:-11.55},0).wait(1).to({x:-24.1,y:-17},0).wait(1).to({x:-30.2,y:-22.2},0).wait(1).to({x:-36.8,y:-27.2},0).wait(1).to({x:-43.9,y:-31.95},0).wait(1).to({x:-51.45,y:-36.55},0).wait(1).to({x:-59.5,y:-40.95},0).wait(1).to({x:-68,y:-45.1},0).wait(1).to({x:-77,y:-49.05},0).wait(1).to({x:-86.45,y:-52.85},0).wait(1).to({x:-96.45,y:-56.4},0).wait(1).to({x:-106.85,y:-59.75},0).wait(1).to({x:-117.8,y:-62.9},0).wait(1).to({x:-129.2,y:-65.85},0).wait(1).to({x:-141.1,y:-68.55},0).wait(1).to({x:-153.45,y:-71.1},0).wait(1).to({x:-166.35,y:-73.45},0).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.3,-216.3,326.8,335.8);


(lib.monitor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cursor
	this.instance = new lib.cursor();
	this.instance.setTransform(120.25,45.1,1,1,0,0,0,4.2,4.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAIAAQAMgIAWgLQgPgFgfgKQgggKgFgCQAHAWAFBFQAJgVAPgOQAQAXAIAOQADgCAHgGQAHgGACgDQgBgCgSgQQgGgIgFgEQgGgHgCgDIgPAIQAFAGAFAGQACgCADgCQADgDAFgDg");
	this.shape.setTransform(-15.525,-68.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAKIAFgEIAIgGIALALQASARABADQgCADgHAFIgKAIQgIgNgQgYgAgpguIAlAMIAuAPQgWALgMAIIgIgKIgPAJIAKALQgPAOgJAUQgFhEgHgWgAgFAKIAAAAgAgFAKIAAAAgAgPgBIAPgJIAIAKIgIAGIgFAEIgKgLgAAIAAIAAAAg");
	this.shape_1.setTransform(-15.525,-68.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:118.2,y:37.7},0).wait(1).to({x:115.7,y:30.45},0).wait(1).to({x:112.8,y:23.2},0).wait(1).to({x:109.45,y:16.15},0).wait(1).to({x:105.6,y:9.15},0).wait(1).to({x:101.25,y:2.4},0).wait(1).to({x:96.45,y:-4.2},0).wait(1).to({x:91.1,y:-10.65},0).wait(1).to({x:85.25,y:-16.85},0).wait(1).to({x:78.95,y:-22.75},0).wait(1).to({x:72.15,y:-28.45},0).wait(1).to({x:64.9,y:-33.8},0).wait(1).to({x:57.2,y:-38.85},0).wait(1).to({x:49.1,y:-43.65},0).wait(1).to({x:40.65,y:-48.1},0).wait(1).to({x:31.9,y:-52.2},0).wait(1).to({x:22.8,y:-56},0).wait(1).to({x:13.45,y:-59.5},0).wait(1).to({x:3.9,y:-62.7},0).wait(1).to({x:-5.85,y:-65.6},0).wait(1).to({x:-15.8,y:-68.25},0).wait(2).to({_off:true},1).wait(24));

	// website
	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-141.4,-54.9,0.2801,0.2801);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC3300").ss(1,1,1).p("Ak1ipIJrAAIAAFTIprAAg");
	this.shape_2.setTransform(-84.95,42.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#336633").ss(1,1,1).p("Ak1ipIJrAAIAAFTIprAAg");
	this.shape_3.setTransform(-3.45,42.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#003366").ss(1,1,1).p("Ak1ipIJrAAIAAFTIprAAg");
	this.shape_4.setTransform(80.5,42.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CC99FF").ss(1,1,1).p("Ak1ipIJrAAIAAFTIprAAg");
	this.shape_5.setTransform(80.5,-0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#996666").ss(1,1,1).p("Ak1ipIJrAAIAAFTIprAAg");
	this.shape_6.setTransform(-3.45,-0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#99CC00").ss(1,1,1).p("Ak1ipIJrAAIAAFTIprAAg");
	this.shape_7.setTransform(-84.95,-0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#33CCFF").ss(1,1,1).p("ABWAAQAAAjgaAZQgZAagjAAQgiAAgagaQgZgZAAgjQAAgjAZgZQAagZAiAAQAjAAAZAZQAaAZAAAjg");
	this.shape_8.setTransform(115,-38.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(1,1,1).p("AKMhFIAACLAKMhFICMAAIAACLIiMAAI2jAAIAAiLg");
	this.shape_9.setTransform(6.85,-38.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AOQgjIAIAAQgKgFgKAAQgRAAgLAKQgKAJAAAPQAAAMANAKQAMAKAQAAQARAAAKgMQAHgKAAgNQAAgPgGgGQgFgEgOgBgAOdAaQADAEAOALAutgiIAAA0QA2gVALgDQgVgFgsgXg");
	this.shape_10.setTransform(-10.975,-37.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1,1,1).p("AhGgsQgXABgIATQgHAOAAAdQAAAZAeAGQAMADArAAQBFAAAUgFQArgLAAgnQAAgjgcgKQgPgFg3AAQgfAAgKABQgbACgNAFgAgygsIgUAA");
	this.shape_11.setTransform(-102.825,-38.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(1,1,1).p("AhKAcICVAAAhKADICVAAAhKgbICVAA");
	this.shape_12.setTransform(-127.95,-39.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC3300").s().p("Ak1CqIAAlTIJrAAIAAFTg");
	this.shape_13.setTransform(-84.95,42.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003366").s().p("Ak1CqIAAlTIJrAAIAAFTg");
	this.shape_14.setTransform(80.5,42.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#336633").s().p("Ak1CqIAAlTIJrAAIAAFTg");
	this.shape_15.setTransform(-3.45,42.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC99CC").s().p("Ak1CqIAAlTIJrAAIAAFTg");
	this.shape_16.setTransform(80.5,-0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996666").s().p("Ak1CqIAAlTIJrAAIAAFTg");
	this.shape_17.setTransform(-3.45,-0.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#99CC00").s().p("Ak1CqIAAlTIJrAAIAAFTg");
	this.shape_18.setTransform(-84.95,-0.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CCFF").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_19.setTransform(115,-38.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AhFBGIAAiLICLAAIAACLgAArAxQgOgLgEgFQAEAFAOALgAglAAQAAANANAKQAMAKAQAAQAQAAAKgMQAIgKgBgNQAAgPgFgGQgGgEgNgBQANABAGAEQAFAGAAAPQABANgIAKQgKAMgQAAQgQAAgMgKQgNgKAAgNQAAgOAKgJQALgKAQAAQAKAAAKAFIgHAAIAHAAQgKgFgKAAQgQAAgLAKQgKAJAAAOIAAAAgAAUgcg");
	this.shape_20.setTransform(79,-38.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ArQBGIAAiLIWiAAIAACLg");
	this.shape_21.setTransform(-0.15,-38.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgggZQArAWAVAEIhAAZg");
	this.shape_22.setTransform(-101.95,-38.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AhOAyQgegGAAgZQAAgdAHgOQAIgTAXgBIAUAAIgUAAQANgFAbgCIApgBQA3AAAPAGQAcAJAAAkQAAAmgrAKQgUAFhFABQgrAAgMgDgAgXAcIBAgaQgVgEgrgWg");
	this.shape_23.setTransform(-102.825,-38.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},24).wait(24));

	// browser
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DB7DCB").ss(1,1,1).p("AAPhAIVzAAIAACBMgsDAAAIAAiBIFFAAIImAA");
	this.shape_24.setTransform(0.025,-60.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#33CC33").ss(1,1,1).p("AAXAAQAAAKgHAGQgGAHgKAAQgJAAgGgHQgHgGAAgKQAAgJAHgGQAGgHAJAAQAKAAAGAHQAHAGAAAJg");
	this.shape_25.setTransform(-118.2,-75.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFCC33").ss(1,1,1).p("AAWAAQAAAKgGAGQgHAHgJAAQgJAAgGgHQgHgGAAgKQAAgJAHgGQAGgHAJAAQAJAAAHAHQAGAGAAAJg");
	this.shape_26.setTransform(-125.7,-75.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0033").ss(1,1,1).p("AAXAAQAAAKgHAGQgHAHgJAAQgJAAgGgHQgHgGAAgKQAAgJAHgGQAGgHAJAAQAJAAAHAHQAHAGAAAJg");
	this.shape_27.setTransform(-133.2,-75.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE4FD").s().p("AAPBOIAAgBIAAiaIVzAAIAACbgA2BBOIAAibIFFAAIAACbgAytgPQgHAHAAAIQAAAKAHAGQAGAHAKgBQAJABAHgHQAGgGAAgKQAAgIgGgHQgHgHgJAAQgKAAgGAHgAz4gPQgHAHAAAIQAAAKAHAGQAGAHAKgBQAJABAHgHQAGgGAAgKQAAgIgGgHQgHgHgJAAQgKAAgGAHgA1DgPQgHAHAAAIQAAAKAHAGQAGAHAKgBQAJABAHgHQAGgGAAgKQAAgIgGgHQgHgHgJAAQgKAAgGAHg");
	this.shape_28.setTransform(0.025,-75.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCCFF").s().p("AkSBOIAAiZIAAgCIIlAAIAAACIAACZg");
	this.shape_29.setTransform(-25.95,-75.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DB7DCB").s().p("A2BCOIAAiBIFFAAIImAAIomAAIAAibIImAAIAACaIAAABIIlAAIVzAAIAACBg");
	this.shape_30.setTransform(0.025,-68.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66CC33").s().p("AgPAQQgHgGABgKQgBgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJgBQgJABgGgHg");
	this.shape_31.setTransform(-118.2,-75.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC33").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHgBAIQABAKgHAGQgGAHgKgBQgIABgHgHg");
	this.shape_32.setTransform(-125.7,-75.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0033").s().p("AgPAQQgGgGAAgKQAAgIAGgHQAHgHAIAAQAJAAAHAHQAGAHABAIQgBAKgGAGQgHAHgJgBQgIABgHgHg");
	this.shape_33.setTransform(-133.2,-75.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A2BJpIAAzSMAsDAAAIAATSg");
	this.shape_34.setTransform(0.025,7.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#DB7DCB").ss(1,1,1).p("AAPhAIVzAAIAACBMgsDAAAIAAiBIFFAA");
	this.shape_35.setTransform(0.025,-60.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("A2BJpIAAzSMAsDAAAIAATSg");
	this.shape_36.setTransform(0.025,7.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB7DCB").s().p("A2BCPIAAiCIFFAAIImAAIAAiaIAAgBIIlAAIAAABIAACaIVzAAIAACCg");
	this.shape_37.setTransform(0.025,-68.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCCFF").s().p("AkSBOIAAibIIlAAIAACbg");
	this.shape_38.setTransform(-80.95,-75.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFE4FD").s().p("AAPBOIAAibIVzAAIAACbgA2BBOIAAibIFFAAIAACbgAytgPQgHAHAAAIQAAAKAHAGQAGAHAKgBQAJABAHgHQAGgGAAgKQAAgIgGgHQgHgHgJAAQgKAAgGAHgAz4gPQgHAHAAAIQAAAKAHAGQAGAHAKgBQAJABAHgHQAGgGAAgKQAAgIgGgHQgHgHgJAAQgKAAgGAHgA1DgPQgHAHAAAIQAAAKAHAGQAGAHAKgBQAJABAHgHQAGgGAAgKQAAgIgGgHQgHgHgJAAQgKAAgGAHg");
	this.shape_39.setTransform(0.025,-75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_36},{t:this.shape_35},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27}]},24).wait(24));

	// desktop
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFCC3D","#FF4AF3"],[0,1],70,-50,0,70,-50,363.6).s().p("A5dNwIAA7fMAy7AAAIAAbfg");
	this.shape_40.setTransform(-0.975,-6.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AgEAIIAJgP");
	this.shape_41.setTransform(49,41.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFCC3D","#FF4AF3"],[0,1],70,-50,0,70,-50,363.6).s().p("A5dNwIAA7fMAy7AAAIAAbfgAHvHuIAKgOg");
	this.shape_42.setTransform(-0.975,-6.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},24).wait(24));

	// monitor_shell
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AhUK6I4JAAIAA7gMAy7AAAIAAbgI3rAAIjHAAIAAEJIDHAAIG9AAIAABkIxLAAIAehkIGpAAABzPDIAAkJ");
	this.shape_43.setTransform(-0.975,11.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AobQmIAehjIGpAAIDHAAIG9AAIAABjgAhUPDIAAkJIDHAAIAAEJgAhUPDgABzK6IjHAAI4JAAIAA7gMAy7AAAIAAbggABzK6g");
	this.shape_44.setTransform(-0.975,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_44},{t:this.shape_43}]},24).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-97.4,330.9,217.5);


// stage content:
(lib.serres_newHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "I'm done with my work"
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "It is time to have some fun"
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "So let's watch YouTube"
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork");
		}
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("haiku");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// buttons
	this.toFrame02_btn = new lib.rectanglebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(379.85,592.8);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.rectanglebutton(), 3);

	this.toFrame01_btn = new lib.rectanglebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(379.85,592.8);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.rectanglebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// keyboard
	this.keyboard_mc = new lib.keyboard();
	this.keyboard_mc.name = "keyboard_mc";
	this.keyboard_mc.setTransform(399.2,526.75,1,1,0,0,0,18.8,-66.2);
	this.keyboard_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.keyboard_mc).wait(1).to({_off:false},0).wait(1));

	// mouse
	this.mouse_mc = new lib.mousetween();
	this.mouse_mc.name = "mouse_mc";
	this.mouse_mc.setTransform(868.2,541.55,0.6866,0.6866,0,0,0,-47,18.6);
	this.mouse_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mouse_mc).wait(1).to({_off:false},0).wait(1));

	// monitor
	this.monitor_mc = new lib.monitor();
	this.monitor_mc.name = "monitor_mc";
	this.monitor_mc.setTransform(397.85,210.1,1.785,1.785,0,0,0,-1,11.4);
	this.monitor_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.monitor_mc).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("line three", "bold 40px 'Utopia Std Black Headline'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 42;
	this.line03_txt.lineWidth = 792;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(483.85,297.95);

	this.line02_txt = new cjs.Text("line two", "bold 40px 'Utopia Std Black Headline'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 42;
	this.line02_txt.lineWidth = 792;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(483.85,228.45);

	this.line01_txt = new cjs.Text("line one", "bold 40px 'Utopia Std Black Headline'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 42;
	this.line01_txt.lineWidth = 792;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(483.85,164.45);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(138,68.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#252526").ss(3,1,1).p("EhPBg0eMCeDAAAMAAABo9MieDAAAg");
	this.shape.setTransform(475.875,319.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("EhPBA0fMAAAho9MCeDAAAMAAABo9g");
	this.shape_1.setTransform(475.875,319.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFFFF").s().p("EhPBA0fMAAAho9MCeDAAAMAAABo9g");
	this.shape_2.setTransform(481.825,320.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:475.875,y:319.875}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:481.825,y:320.925}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(448.6,302.5,540.6,355.79999999999995);
// library properties:
lib.properties = {
	id: '6769327D322E42728208987EEE147B8D',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/serres_newHaiku_atlas_1.png?1740334446244", id:"serres_newHaiku_atlas_1"}
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
an.compositions['6769327D322E42728208987EEE147B8D'] = {
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