"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export type SignaturePadHandle = {
  clear: () => void;
  getDataUrl: () => string | null;
};

const DISPLAY_HEIGHT = 180;
const PHYSICAL_WIDTH = 692;
const PHYSICAL_HEIGHT = 360;

export const SignaturePad = forwardRef<
  SignaturePadHandle,
  { onChange?: (hasSignature: boolean) => void }
>(function SignaturePad({ onChange }, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const hasSignatureRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  useImperativeHandle(ref, () => ({
    clear() {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasSignatureRef.current = false;
      onChange?.(false);
    },
    getDataUrl() {
      if (!hasSignatureRef.current) return null;
      return canvasRef.current?.toDataURL("image/png") ?? null;
    },
  }));

  function getPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    canvasRef.current?.setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastPointRef.current = getPos(e);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !lastPointRef.current) return;
    const point = getPos(e);
    ctx.strokeStyle = "#172A2E";
    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    lastPointRef.current = point;
    if (!hasSignatureRef.current) {
      hasSignatureRef.current = true;
      onChange?.(true);
    }
  }

  function handlePointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    drawingRef.current = false;
    lastPointRef.current = null;
    canvasRef.current?.releasePointerCapture(e.pointerId);
  }

  return (
    <canvas
      ref={canvasRef}
      width={PHYSICAL_WIDTH}
      height={PHYSICAL_HEIGHT}
      style={{ height: DISPLAY_HEIGHT, touchAction: "none" }}
      className="w-full bg-paper"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
});
