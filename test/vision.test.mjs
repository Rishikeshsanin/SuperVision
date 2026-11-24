import test from 'node:test';import assert from 'node:assert/strict';import {fit,iou,associate,direction} from '../public/vision.mjs';
test('letterbox mapping',()=>{assert.deepEqual(fit(640,480,320,320),{scale:.5,x:0,y:40});assert.equal(fit(0,0,1,1).scale,0);});
test('box overlap',()=>{assert.equal(iou([0,0,10,10],[0,0,10,10]),1);assert.equal(iou([0,0,10,10],[20,20,10,10]),0);});
test('temporary track continuity and unique IDs',()=>{const old=[{id:1,class:'book',bbox:[0,0,10,10]}];const p=[{class:'book',score:.9,bbox:[1,0,10,10]},{class:'book',score:.8,bbox:[2,0,10,10]}];const a=associate(old,p,2);assert.deepEqual(a.tracks.map(x=>x.id),[1,2]);assert.equal(a.nextId,3);});
test('compass normalization',()=>{assert.equal(direction(360),'N');assert.equal(direction(90),'E');assert.equal(direction(-90),'W');assert.equal(direction(null),'—');});
