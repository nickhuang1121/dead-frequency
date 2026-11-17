import"./three-renderer-C45WVl5R.js";import{k as et,O as ut,m as tt,ca as Qe,Q as G,bH as k,q as I,b as J,H,T as W,cb as ht,C as te,g as z,M as ae,G as it,ai as De,cc as ft,a1 as ge,ag as xe,aa as Xe,ab as Ze,bz as dt,y as mt,t as pt,v as vt,am as Ye,s as gt,U as xt,bC as St,o as Mt,cd as Tt,d as _t,aX as bt,c0 as Dt,b$ as Et,b_ as wt,bZ as yt,bY as Pt,bX as Ct,bW as Rt,ce as At,aP as He,cf as Se,h as Ut,J as qe,Y as Nt,P as zt,av as Lt,V as $e,n as Ft}from"./three-core-CktFoGrt.js";const ee={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ie{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bt=new ut(-1,1,1,-1,0,1);class It extends tt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const Ot=new It;class Ee{constructor(e){this._mesh=new et(Ot,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vt extends ie{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof G?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=k.clone(e.uniforms),this.material=new G({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ee(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ke extends ie{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let s,l;this.inverse?(s=0,l=1):(s=1,l=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),i.buffers.stencil.setClear(l),i.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}}class Gt extends ie{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new I);this._width=a.width,this._height=a.height,t=new J(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:H}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vt(ee),this.copyPass.material.blending=W,this.clock=new ht}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let r=0,i=this.passes.length;r<i;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),s.needsSwap){if(a){const l=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ke!==void 0&&(s instanceof Ke?a=!0:s instanceof Gt&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new I);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(a,r),this.renderTarget2.setSize(a,r);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(a,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qt extends ie{constructor(e,t,a=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(e,t,a){const r=e.autoClear;e.autoClear=!1;let i,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const Me={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new I},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ae},cameraProjectionMatrixInverse:{value:new ae},cameraWorldMatrix:{value:new ae},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new z(-1,-1,-1)},sceneBoxMax:{value:new z(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Te={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ke={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ht(x=5){const e=Math.floor(x)%2===0?Math.floor(x)+1:Math.floor(x),t=kt(e),a=t.length,r=new Uint8Array(a*4);for(let s=0;s<a;++s){const l=t[s],h=2*Math.PI*l/a,o=new z(Math.cos(h),Math.sin(h),0).normalize();r[s*4]=(o.x*.5+.5)*255,r[s*4+1]=(o.y*.5+.5)*255,r[s*4+2]=127,r[s*4+3]=255}const i=new it(r,e,e);return i.wrapS=De,i.wrapT=De,i.needsUpdate=!0,i}function kt(x){const e=Math.floor(x)%2===0?Math.floor(x)+1:Math.floor(x),t=e*e,a=Array(t).fill(0);let r=Math.floor(e/2),i=e-1;for(let s=1;s<=t;){if(r===-1&&i===e?(i=e-2,r=0):(i===e&&(i=0),r<0&&(r=e-1)),a[r*e+i]!==0){i-=2,r++;continue}else a[r*e+i]=s++;i++,r--}return a}const _e={defines:{SAMPLES:16,SAMPLE_VECTORS:at(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new I},cameraProjectionMatrixInverse:{value:new ae},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function at(x,e,t){const a=jt(x,e,t);let r="vec3[SAMPLES](";for(let i=0;i<x;i++){const s=a[i];r+=`vec3(${s.x}, ${s.y}, ${s.z})${i<x-1?",":")"}`}return r}function jt(x,e,t){const a=[];for(let r=0;r<x;r++){const i=2*Math.PI*e*r/x,s=Math.pow(r/(x-1),t);a.push(new z(Math.cos(i),Math.sin(i),s))}return a}class Wt{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let a,r,i;const s=.5*(Math.sqrt(3)-1),l=(e+t)*s,h=Math.floor(e+l),o=Math.floor(t+l),n=(3-Math.sqrt(3))/6,f=(h+o)*n,S=h-f,u=o-f,_=e-S,v=t-u;let P,E;_>v?(P=1,E=0):(P=0,E=1);const T=_-P+n,C=v-E+n,y=_-1+2*n,w=v-1+2*n,U=h&255,A=o&255,c=this.perm[U+this.perm[A]]%12,m=this.perm[U+P+this.perm[A+E]]%12,d=this.perm[U+1+this.perm[A+1]]%12;let g=.5-_*_-v*v;g<0?a=0:(g*=g,a=g*g*this._dot(this.grad3[c],_,v));let p=.5-T*T-C*C;p<0?r=0:(p*=p,r=p*p*this._dot(this.grad3[m],T,C));let D=.5-y*y-w*w;return D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[d],y,w)),70*(a+r+i)}noise3d(e,t,a){let r,i,s,l;const o=(e+t+a)*.3333333333333333,n=Math.floor(e+o),f=Math.floor(t+o),S=Math.floor(a+o),u=1/6,_=(n+f+S)*u,v=n-_,P=f-_,E=S-_,T=e-v,C=t-P,y=a-E;let w,U,A,c,m,d;T>=C?C>=y?(w=1,U=0,A=0,c=1,m=1,d=0):T>=y?(w=1,U=0,A=0,c=1,m=0,d=1):(w=0,U=0,A=1,c=1,m=0,d=1):C<y?(w=0,U=0,A=1,c=0,m=1,d=1):T<y?(w=0,U=1,A=0,c=0,m=1,d=1):(w=0,U=1,A=0,c=1,m=1,d=0);const g=T-w+u,p=C-U+u,D=y-A+u,M=T-c+2*u,R=C-m+2*u,b=y-d+2*u,O=T-1+3*u,X=C-1+3*u,N=y-1+3*u,L=n&255,j=f&255,F=S&255,B=this.perm[L+this.perm[j+this.perm[F]]]%12,K=this.perm[L+w+this.perm[j+U+this.perm[F+A]]]%12,pe=this.perm[L+c+this.perm[j+m+this.perm[F+d]]]%12,ve=this.perm[L+1+this.perm[j+1+this.perm[F+1]]]%12;let Z=.6-T*T-C*C-y*y;Z<0?r=0:(Z*=Z,r=Z*Z*this._dot3(this.grad3[B],T,C,y));let Y=.6-g*g-p*p-D*D;Y<0?i=0:(Y*=Y,i=Y*Y*this._dot3(this.grad3[K],g,p,D));let q=.6-M*M-R*R-b*b;q<0?s=0:(q*=q,s=q*q*this._dot3(this.grad3[pe],M,R,b));let $=.6-O*O-X*X-N*N;return $<0?l=0:($*=$,l=$*$*this._dot3(this.grad3[ve],O,X,N)),32*(r+i+s+l)}noise4d(e,t,a,r){const i=this.grad4,s=this.simplex,l=this.perm,h=(Math.sqrt(5)-1)/4,o=(5-Math.sqrt(5))/20;let n,f,S,u,_;const v=(e+t+a+r)*h,P=Math.floor(e+v),E=Math.floor(t+v),T=Math.floor(a+v),C=Math.floor(r+v),y=(P+E+T+C)*o,w=P-y,U=E-y,A=T-y,c=C-y,m=e-w,d=t-U,g=a-A,p=r-c,D=m>d?32:0,M=m>g?16:0,R=d>g?8:0,b=m>p?4:0,O=d>p?2:0,X=g>p?1:0,N=D+M+R+b+O+X,L=s[N][0]>=3?1:0,j=s[N][1]>=3?1:0,F=s[N][2]>=3?1:0,B=s[N][3]>=3?1:0,K=s[N][0]>=2?1:0,pe=s[N][1]>=2?1:0,ve=s[N][2]>=2?1:0,Z=s[N][3]>=2?1:0,Y=s[N][0]>=1?1:0,q=s[N][1]>=1?1:0,$=s[N][2]>=1?1:0,We=s[N][3]>=1?1:0,we=m-L+o,ye=d-j+o,Pe=g-F+o,Ce=p-B+o,Re=m-K+2*o,Ae=d-pe+2*o,Ue=g-ve+2*o,Ne=p-Z+2*o,ze=m-Y+3*o,Le=d-q+3*o,Fe=g-$+3*o,Be=p-We+3*o,Ie=m-1+4*o,Oe=d-1+4*o,Ve=g-1+4*o,Ge=p-1+4*o,se=P&255,re=E&255,oe=T&255,ne=C&255,rt=l[se+l[re+l[oe+l[ne]]]]%32,ot=l[se+L+l[re+j+l[oe+F+l[ne+B]]]]%32,nt=l[se+K+l[re+pe+l[oe+ve+l[ne+Z]]]]%32,lt=l[se+Y+l[re+q+l[oe+$+l[ne+We]]]]%32,ct=l[se+1+l[re+1+l[oe+1+l[ne+1]]]]%32;let le=.6-m*m-d*d-g*g-p*p;le<0?n=0:(le*=le,n=le*le*this._dot4(i[rt],m,d,g,p));let ce=.6-we*we-ye*ye-Pe*Pe-Ce*Ce;ce<0?f=0:(ce*=ce,f=ce*ce*this._dot4(i[ot],we,ye,Pe,Ce));let ue=.6-Re*Re-Ae*Ae-Ue*Ue-Ne*Ne;ue<0?S=0:(ue*=ue,S=ue*ue*this._dot4(i[nt],Re,Ae,Ue,Ne));let he=.6-ze*ze-Le*Le-Fe*Fe-Be*Be;he<0?u=0:(he*=he,u=he*he*this._dot4(i[lt],ze,Le,Fe,Be));let fe=.6-Ie*Ie-Oe*Oe-Ve*Ve-Ge*Ge;return fe<0?_=0:(fe*=fe,_=fe*fe*this._dot4(i[ct],Ie,Oe,Ve,Ge)),27*(n+f+S+u+_)}_dot(e,t,a){return e[0]*t+e[1]*a}_dot3(e,t,a,r){return e[0]*t+e[1]*a+e[2]*r}_dot4(e,t,a,r,i){return e[0]*t+e[1]*a+e[2]*r+e[3]*i}}class Q extends ie{constructor(e,t,a=512,r=512,i,s,l){super(),this.width=a,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ht(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new J(this.width,this.height,{type:H}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new G({defines:Object.assign({},Me.defines),uniforms:k.clone(Me.uniforms),vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,blending:W,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ft,this.normalMaterial.blending=W,this.pdMaterial=new G({defines:Object.assign({},_e.defines),uniforms:k.clone(_e.uniforms),vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new G({defines:Object.assign({},Te.defines),uniforms:k.clone(Te.uniforms),vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,blending:W}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new G({uniforms:k.clone(ee.uniforms),vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ze,blendDst:xe,blendEquation:ge,blendSrcAlpha:Xe,blendDstAlpha:xe,blendEquationAlpha:ge}),this.blendMaterial=new G({uniforms:k.clone(ke.uniforms),vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:dt,blendSrc:Ze,blendDst:xe,blendEquation:ge,blendSrcAlpha:Xe,blendDstAlpha:xe,blendEquationAlpha:ge}),this._fsQuad=new Ee(null),this._originalClearColor=new te,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),l!==void 0&&this.updatePdMaterial(l)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new mt,this.depthTexture.format=pt,this.depthTexture.type=vt,this.normalRenderTarget=new J(this.width,this.height,{minFilter:Ye,magFilter:Ye,type:H,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const a=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=a,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=a,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=at(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,a){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Q.OUTPUT.Off:break;case Q.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=a.texture,this.copyMaterial.blending=W,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=W,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=W,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=W,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Q.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=a.texture,this.copyMaterial.blending=W,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,a,r,i){e.getClearColor(this._originalClearColor);const s=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(s)}_renderOverride(e,t,a,r,i){e.getClearColor(this._originalClearColor);const s=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this._originalClearColor),e.setClearAlpha(s)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(a){(a.isPoints||a.isLine||a.isLine2)&&a.visible&&(a.visible=!1,t.push(a))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new Wt,a=e*e*4,r=new Uint8Array(a);for(let s=0;s<e;s++)for(let l=0;l<e;l++){const h=s,o=l;r[(s*e+l)*4]=(t.noise(h,o)*.5+.5)*255,r[(s*e+l)*4+1]=(t.noise(h+e,o)*.5+.5)*255,r[(s*e+l)*4+2]=(t.noise(h,o+e)*.5+.5)*255,r[(s*e+l)*4+3]=(t.noise(h+e,o+e)*.5+.5)*255}const i=new it(r,e,e,gt,xt);return i.wrapS=De,i.wrapT=De,i.needsUpdate=!0,i}}Q.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Qt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class me extends ie{constructor(e,t=1,a,r){super(),this.strength=t,this.radius=a,this.threshold=r,this.resolution=e!==void 0?new I(e.x,e.y):new I(256,256),this.clearColor=new te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new J(i,s,{type:H}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let n=0;n<this.nMips;n++){const f=new J(i,s,{type:H});f.texture.name="UnrealBloomPass.h"+n,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const S=new J(i,s,{type:H});S.texture.name="UnrealBloomPass.v"+n,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),i=Math.round(i/2),s=Math.round(s/2)}const l=Qt;this.highPassUniforms=k.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new G({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];i=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let n=0;n<this.nMips;n++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[n])),this.separableBlurMaterials[n].uniforms.invSize.value=new I(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const o=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=o,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=k.clone(ee.uniforms),this.blendMaterial=new G({uniforms:this.copyUniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader,blending:St,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new te,this._oldClearAlpha=1,this._basic=new Mt,this._fsQuad=new Ee(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(a,r);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(a,r),this.renderTargetsVertical[i].setSize(a,r),this.separableBlurMaterials[i].uniforms.invSize.value=new I(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2)}render(e,t,a,r,i){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[h].uniforms.direction.value=me.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=me.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],a=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(a*a))/a);return new G({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new I(.5,.5)},direction:{value:new I(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new G({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}me.BlurDirectionX=new I(1,0);me.BlurDirectionY=new I(0,1);const be={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $t extends ie{constructor(){super(),this.uniforms=k.clone(be.uniforms),this.material=new Tt({name:be.name,uniforms:this.uniforms,vertexShader:be.vertexShader,fragmentShader:be.fragmentShader}),this._fsQuad=new Ee(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Et?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ct?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Rt&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Kt={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new I(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};class Jt extends At{constructor(e){super(e),this.type=H}parse(e){const s=function(c,m){switch(c){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(m||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(m||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(m||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(m||""))}},f=function(c,m,d){m=m||1024;let p=c.pos,D=-1,M=0,R="",b=String.fromCharCode.apply(null,new Uint16Array(c.subarray(p,p+128)));for(;0>(D=b.indexOf(`
`))&&M<m&&p<c.byteLength;)R+=b,M+=b.length,p+=128,b+=String.fromCharCode.apply(null,new Uint16Array(c.subarray(p,p+128)));return-1<D?(c.pos+=M+D+1,R+b.slice(0,D)):!1},S=function(c){const m=/^#\?(\S+)/,d=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,g=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,p=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,M={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let R,b;for((c.pos>=c.byteLength||!(R=f(c)))&&s(1,"no header found"),(b=R.match(m))||s(3,"bad initial token"),M.valid|=1,M.programtype=b[1],M.string+=R+`
`;R=f(c),R!==!1;){if(M.string+=R+`
`,R.charAt(0)==="#"){M.comments+=R+`
`;continue}if((b=R.match(d))&&(M.gamma=parseFloat(b[1])),(b=R.match(g))&&(M.exposure=parseFloat(b[1])),(b=R.match(p))&&(M.valid|=2,M.format=b[1]),(b=R.match(D))&&(M.valid|=4,M.height=parseInt(b[1],10),M.width=parseInt(b[2],10)),M.valid&2&&M.valid&4)break}return M.valid&2||s(3,"missing format specifier"),M.valid&4||s(3,"missing image size specifier"),M},u=function(c,m,d){const g=m;if(g<8||g>32767||c[0]!==2||c[1]!==2||c[2]&128)return new Uint8Array(c);g!==(c[2]<<8|c[3])&&s(3,"wrong scanline width");const p=new Uint8Array(4*m*d);p.length||s(4,"unable to allocate buffer space");let D=0,M=0;const R=4*g,b=new Uint8Array(4),O=new Uint8Array(R);let X=d;for(;X>0&&M<c.byteLength;){M+4>c.byteLength&&s(1),b[0]=c[M++],b[1]=c[M++],b[2]=c[M++],b[3]=c[M++],(b[0]!=2||b[1]!=2||(b[2]<<8|b[3])!=g)&&s(3,"bad rgbe scanline format");let N=0,L;for(;N<R&&M<c.byteLength;){L=c[M++];const F=L>128;if(F&&(L-=128),(L===0||N+L>R)&&s(3,"bad scanline data"),F){const B=c[M++];for(let K=0;K<L;K++)O[N++]=B}else O.set(c.subarray(M,M+L),N),N+=L,M+=L}const j=g;for(let F=0;F<j;F++){let B=0;p[D]=O[F+B],B+=g,p[D+1]=O[F+B],B+=g,p[D+2]=O[F+B],B+=g,p[D+3]=O[F+B],D+=4}X--}return p},_=function(c,m,d,g){const p=c[m+3],D=Math.pow(2,p-128)/255;d[g+0]=c[m+0]*D,d[g+1]=c[m+1]*D,d[g+2]=c[m+2]*D,d[g+3]=1},v=function(c,m,d,g){const p=c[m+3],D=Math.pow(2,p-128)/255;d[g+0]=Se.toHalfFloat(Math.min(c[m+0]*D,65504)),d[g+1]=Se.toHalfFloat(Math.min(c[m+1]*D,65504)),d[g+2]=Se.toHalfFloat(Math.min(c[m+2]*D,65504)),d[g+3]=Se.toHalfFloat(1)},P=new Uint8Array(e);P.pos=0;const E=S(P),T=E.width,C=E.height,y=u(P.subarray(P.pos),T,C);let w,U,A;switch(this.type){case He:A=y.length/4;const c=new Float32Array(A*4);for(let d=0;d<A;d++)_(y,d*4,c,d*4);w=c,U=He;break;case H:A=y.length/4;const m=new Uint16Array(A*4);for(let d=0;d<A;d++)v(y,d*4,m,d*4);w=m,U=H;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:T,height:C,data:w,header:E.string,gamma:E.gamma,exposure:E.exposure,type:U}}setDataType(e){return this.type=e,this}load(e,t,a,r){function i(s,l){switch(s.type){case He:case H:s.colorSpace=Ut,s.minFilter=qe,s.magFilter=qe,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,l)}return super.load(e,i,a,r)}}function ei(x,e=!1){const t=x[0].index!==null,a=new Set(Object.keys(x[0].attributes)),r=new Set(Object.keys(x[0].morphAttributes)),i={},s={},l=x[0].morphTargetsRelative,h=new tt;let o=0;for(let n=0;n<x.length;++n){const f=x[n];let S=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!a.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;i[u]===void 0&&(i[u]=[]),i[u].push(f.attributes[u]),S++}if(S!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!r.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+".  .morphAttributes must be consistent throughout all geometries."),null;s[u]===void 0&&(s[u]=[]),s[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". The geometry must have either an index or a position attribute"),null;h.addGroup(o,u,n),o+=u}}if(t){let n=0;const f=[];for(let S=0;S<x.length;++S){const u=x[S].index;for(let _=0;_<u.count;++_)f.push(u.getX(_)+n);n+=x[S].attributes.position.count}h.setIndex(f)}for(const n in i){const f=Je(i[n]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+n+" attribute."),null;h.setAttribute(n,f)}for(const n in s){const f=s[n][0].length;if(f===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[n]=[];for(let S=0;S<f;++S){const u=[];for(let v=0;v<s[n].length;++v)u.push(s[n][v][S]);const _=Je(u);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+n+" morphAttribute."),null;h.morphAttributes[n].push(_)}}return h}function Je(x){let e,t,a,r=-1,i=0;for(let o=0;o<x.length;++o){const n=x[o];if(e===void 0&&(e=n.array.constructor),e!==n.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=n.itemSize),t!==n.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=n.normalized),a!==n.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=n.gpuType),r!==n.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=n.count*t}const s=new e(i),l=new Nt(s,t,a);let h=0;for(let o=0;o<x.length;++o){const n=x[o];if(n.isInterleavedBufferAttribute){const f=h/t;for(let S=0,u=n.count;S<u;S++)for(let _=0;_<t;_++){const v=n.getComponent(S,_);l.setComponent(S+f,_,v)}}else s.set(n.array,h);h+=n.count*t}return r!==void 0&&(l.gpuType=r),l}class je extends et{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new zt;const a=this,r=t.color!==void 0?new te(t.color):new te(8355711),i=t.textureWidth||512,s=t.textureHeight||512,l=t.clipBias||0,h=t.shader||je.ReflectorShader,o=t.multisample!==void 0?t.multisample:4,n=new Lt,f=new z,S=new z,u=new z,_=new ae,v=new z(0,0,-1),P=new $e,E=new z,T=new z,C=new $e,y=new ae,w=this.camera,U=new J(i,s,{samples:o,type:H}),A=new G({name:h.name!==void 0?h.name:"unspecified",uniforms:k.clone(h.uniforms),fragmentShader:h.fragmentShader,vertexShader:h.vertexShader});A.uniforms.tDiffuse.value=U.texture,A.uniforms.color.value=r,A.uniforms.textureMatrix.value=y,this.material=A,this.onBeforeRender=function(c,m,d){if(S.setFromMatrixPosition(a.matrixWorld),u.setFromMatrixPosition(d.matrixWorld),_.extractRotation(a.matrixWorld),f.set(0,0,1),f.applyMatrix4(_),E.subVectors(S,u),E.dot(f)>0===!0&&this.forceUpdate===!1)return;E.reflect(f).negate(),E.add(S),_.extractRotation(d.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(u),T.subVectors(S,v),T.reflect(f).negate(),T.add(S),w.position.copy(E),w.up.set(0,1,0),w.up.applyMatrix4(_),w.up.reflect(f),w.lookAt(T),w.far=d.far,w.updateMatrixWorld(),w.projectionMatrix.copy(d.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(a.matrixWorld),n.setFromNormalAndCoplanarPoint(f,S),n.applyMatrix4(w.matrixWorldInverse),P.set(n.normal.x,n.normal.y,n.normal.z,n.constant);const p=w.projectionMatrix;C.x=(Math.sign(P.x)+p.elements[8])/p.elements[0],C.y=(Math.sign(P.y)+p.elements[9])/p.elements[5],C.z=-1,C.w=(1+p.elements[10])/p.elements[14],P.multiplyScalar(2/P.dot(C)),p.elements[2]=P.x,p.elements[6]=P.y,p.elements[10]=P.z+1-l,p.elements[14]=P.w,a.visible=!1;const D=c.getRenderTarget(),M=c.xr.enabled,R=c.shadowMap.autoUpdate;c.xr.enabled=!1,c.shadowMap.autoUpdate=!1,c.setRenderTarget(U),c.state.buffers.depth.setMask(!0),c.autoClear===!1&&c.clear(),c.render(m,w),c.xr.enabled=M,c.shadowMap.autoUpdate=R,c.setRenderTarget(D);const b=d.viewport;b!==void 0&&c.state.viewport(b),a.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return U},this.dispose=function(){U.dispose(),a.material.dispose()}}}je.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const de=new z;function V(x,e,t,a,r,i){const s=2*Math.PI*r/4,l=Math.max(i-2*r,0),h=Math.PI/4;de.copy(e),de[a]=0,de.normalize();const o=.5*s/(s+l),n=1-de.angleTo(x)/h;return Math.sign(de[t])===1?n*o:l/(s+l)+o+o*(1-n)}class st extends Ft{constructor(e=1,t=1,a=1,r=2,i=.1){const s=r*2+1;if(i=Math.min(e/2,t/2,a/2,i),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:a,segments:r,radius:i},s===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const h=new z,o=new z,n=new z(e,t,a).divideScalar(2).subScalar(i),f=this.attributes.position.array,S=this.attributes.normal.array,u=this.attributes.uv.array,_=f.length/6,v=new z,P=.5/s;for(let E=0,T=0;E<f.length;E+=3,T+=2)switch(h.fromArray(f,E),o.copy(h),o.x-=Math.sign(o.x)*P,o.y-=Math.sign(o.y)*P,o.z-=Math.sign(o.z)*P,o.normalize(),f[E+0]=n.x*Math.sign(h.x)+o.x*i,f[E+1]=n.y*Math.sign(h.y)+o.y*i,f[E+2]=n.z*Math.sign(h.z)+o.z*i,S[E+0]=o.x,S[E+1]=o.y,S[E+2]=o.z,Math.floor(E/_)){case 0:v.set(1,0,0),u[T+0]=V(v,o,"z","y",i,a),u[T+1]=1-V(v,o,"y","z",i,t);break;case 1:v.set(-1,0,0),u[T+0]=1-V(v,o,"z","y",i,a),u[T+1]=1-V(v,o,"y","z",i,t);break;case 2:v.set(0,1,0),u[T+0]=1-V(v,o,"x","z",i,e),u[T+1]=V(v,o,"z","x",i,a);break;case 3:v.set(0,-1,0),u[T+0]=1-V(v,o,"x","z",i,e),u[T+1]=1-V(v,o,"z","x",i,a);break;case 4:v.set(0,0,1),u[T+0]=1-V(v,o,"x","y",i,e),u[T+1]=1-V(v,o,"y","x",i,t);break;case 5:v.set(0,0,-1),u[T+0]=V(v,o,"x","y",i,e),u[T+1]=1-V(v,o,"y","x",i,t);break}}static fromJSON(e){return new st(e.width,e.height,e.depth,e.segments,e.radius)}}export{Yt as E,Kt as F,Q as G,Jt as H,$t as O,je as R,Vt as S,me as U,st as a,qt as b,ei as m};
