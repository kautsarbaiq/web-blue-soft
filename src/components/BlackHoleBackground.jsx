import React, { useEffect, useRef } from 'react';

const BlackHoleBackground = () => {
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

      // Noise function for accretion disk texture
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float aspect = resolution.x / resolution.y;
        vec2 p = uv - 0.5;
        p.x *= aspect;

        float dist = length(p);
        float angle = atan(p.y, p.x);

        // Black Hole Core (Event Horizon)
        float holeRadius = 0.12;
        float core = smoothstep(holeRadius, holeRadius - 0.005, dist);

        // Accretion Disk (Orange/Yellow Glow)
        float t = time * 0.5;
        float diskInner = holeRadius + 0.01;
        float diskOuter = 0.75;
        
        // Distortion logic for the disk
        float dScale = dist * 6.0;
        float n = noise(vec2(dScale - t, angle * 3.0 + t * 0.2));
        n += 0.5 * noise(vec2(dScale * 2.0 + t, angle * 6.0 - t));
        
        // Disk intensity profile
        float disk = smoothstep(diskInner, diskInner + 0.1, dist) * smoothstep(diskOuter, diskOuter - 0.3, dist);
        disk *= (0.6 + 0.4 * n);

        // Photon Sphere (Bright Ring)
        float photonRing = exp(-pow(dist - holeRadius - 0.01, 2.0) * 2000.0) * 1.5;

        // Color Palette (Blue/Cyan/Black)
        vec3 holeColor = vec3(0.0, 0.0, 0.0);
        vec3 cyan = vec3(0.0, 0.8, 1.0);
        vec3 electricBlue = vec3(0.4, 0.7, 1.0);
        vec3 deepBlue = vec3(0.05, 0.1, 0.4);

        // Combine layers
        vec3 color = mix(vec3(0.01, 0.02, 0.05), cyan, disk * 0.8);
        color = mix(color, electricBlue, disk * pow(n, 2.0) * 0.5);
        color += deepBlue * disk * 0.4;
        color = mix(color, holeColor, core); // Black core on top
        color += electricBlue * photonRing * 0.8; // Bright ring highlight

        // Background space dust / stars
        float stars = pow(hash(uv * 100.0), 50.0) * 0.2;
        color += stars * (1.0 - core);

        // Vignette
        color *= smoothstep(2.5, 1.0, dist);

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
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

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
      style={{ filter: 'contrast(1.1) brightness(0.9)' }}
    />
  );
};

export default BlackHoleBackground;
