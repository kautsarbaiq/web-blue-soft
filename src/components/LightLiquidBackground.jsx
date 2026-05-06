import React, { useEffect, useRef } from 'react';

const LightLiquidBackground = () => {
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

        // Abstract Domain Warping (Same as MetalLiquid)
        vec2 p = uv;
        float t = time * 0.15;
        
        // Chaotic interference layers
        for(float i = 1.0; i < 15.0; i++) {
          p.x += 0.3 / i * sin(i * p.y + t + cos(t * 0.5 + i));
          p.y += 0.2 / i * cos(i * p.x + t + sin(t * 0.3 + i));
          // Recursive warping
          p += 0.1 * vec2(sin(p.y * 2.0), cos(p.x * 2.0));
        }

        // Rich Grayscale Metallic Palette
        vec3 col1 = vec3(1.0, 1.0, 1.0);      // High-Gloss White
        vec3 col2 = vec3(0.8, 0.8, 0.82);     // Polished Silver
        vec3 col3 = vec3(0.5, 0.5, 0.53);     // Brushed Steel
        vec3 col4 = vec3(0.2, 0.2, 0.22);     // Dark Chrome
        vec3 col5 = vec3(0.05, 0.05, 0.07);   // Deep Onyx (Contrast)
        
        // Subtle Holographic Hint
        vec3 holo = vec3(0.8, 0.9, 1.0) * 0.5 + vec3(1.0, 0.8, 0.9) * 0.5;

        // Abstract pattern mapping with higher complexity for "more gradients"
        float noise = sin(p.x * 2.0 + t * 0.2) * cos(p.y * 2.5 - t * 0.3);
        float f1 = sin(p.x * 1.8 + p.y * 1.2 + noise + t * 0.5);
        float f2 = cos(length(p) * 0.8 - noise - t * 0.2);
        float f3 = sin(p.x * 4.0 - p.y * 3.0 + t * 1.2);
        float f4 = cos(p.x * 2.5 + p.y * 4.0 - t * 0.8);
        
        // Multi-layered Metallic Blending
        vec3 color = mix(col1, col2, 0.5 + 0.5 * f1);
        color = mix(color, col3, 0.4 * (0.5 + 0.5 * f2));
        color = mix(color, col4, 0.3 * (0.5 + 0.5 * f3));
        color = mix(color, col5, 0.25 * (0.5 + 0.5 * f4));
        
        // Tiny hint of holographic pearl
        float holoFactor = pow(0.5 + 0.5 * sin(p.x * 5.0 + p.y * 3.0 + t), 10.0);
        color = mix(color, holo, holoFactor * 0.08);
        
        // Sharp Specular highlights
        float highlights = pow(0.5 + 0.5 * sin(p.x * 6.0 - p.y * 5.0 + t * 2.0), 30.0);
        color += vec3(1.0) * highlights * 0.8;

        // Punchy Contrast
        color = pow(color, vec3(1.15)); 
        
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
      className="absolute inset-0 w-full h-full z-0"
      style={{ filter: 'brightness(1.05)' }}
    />
  );
};

export default LightLiquidBackground;
