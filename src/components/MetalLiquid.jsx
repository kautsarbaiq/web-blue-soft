import React, { useEffect, useRef } from 'react';

const MetalLiquid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) return;

    const vertexSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float aspect = resolution.x / resolution.y;
        uv.x *= aspect;

        // Abstract Domain Warping
        vec2 p = uv;
        float t = time * 0.15;
        
        // Chaotic interference layers
        for(float i = 1.0; i < 15.0; i++) {
          p.x += 0.3 / i * sin(i * p.y + t + cos(t * 0.5 + i));
          p.y += 0.2 / i * cos(i * p.x + t + sin(t * 0.3 + i));
          // Recursive warping
          p += 0.1 * vec2(sin(p.y * 2.0), cos(p.x * 2.0));
        }

        // Spectral Metallic Colors
        vec3 col1 = vec3(0.01, 0.05, 0.1);  // Deep Cyan
        vec3 col2 = vec3(0.0, 0.8, 1.0);    // Electric Blue
        vec3 col3 = vec3(0.4, 0.0, 0.8);    // Deep Purple / Iridescence
        vec3 col4 = vec3(1.0, 1.0, 1.0);    // Pure Chrome

        // Abstract pattern mapping
        float f1 = sin(p.x * 2.0 + p.y * 1.5);
        float f2 = cos(length(p) * 0.5 - t);
        float f3 = sin(p.x * 5.0 - p.y * 3.0 + t * 2.0);

        // Blend layers into a surreal mix
        vec3 color = mix(col1, col2, 0.5 + 0.5 * f1);
        color = mix(color, col3, 0.3 * (0.5 + 0.5 * f2));
        
        // Add "high-energy" highlights
        float flash = pow(0.5 + 0.5 * f3, 20.0);
        color += col4 * flash * 0.4;
        
        // Iridescent edge highlights
        float iris = pow(max(0.0, sin(length(p) * 4.0 - t)), 10.0);
        color += vec3(0.0, 1.0, 0.8) * iris * 0.15;

        // Depth & Mood
        float d = length(uv - vec2(0.5 * aspect, 0.5));
        color *= smoothstep(2.0, 0.1, d);
        
        // Subtle chromatic aberration effect via UV offset in color channels
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const program = gl.createProgram();
    const vs = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vs || !fs) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    let animationFrameId;
    const render = (now) => {
      gl.uniform1f(timeLocation, now * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    const resize = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', resize);
    resize();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-100"
      style={{ filter: 'contrast(1.2) brightness(0.8)' }}
    />
  );
};

export default MetalLiquid;
