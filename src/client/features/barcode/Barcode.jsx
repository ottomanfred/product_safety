import React, { useEffect, useRef } from "react";
import Quagga from "quagga";
import { useNavigate, useOutletContext } from "react-router-dom";

const Barcode = () => {
  const videoRef = useRef(null);
  const [result, setResult] = useOutletContext();
  const navigate = useNavigate();

  // const handleDetected = (result) => {
  //     navigate("/");
  // };

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current, // Use useRef here
          constraints: {
            facingMode: "environment", // or "user" for front camera
          },
        },
        decoder: {
          readers: ["upc_reader"], // specify the type of barcode you want to detect
        },
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        
        Quagga.onProcessed(function (result) {
          var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

          if (result) {
            if (result.boxes) {
              drawingCtx.clearRect(
                0,
                0,
                parseInt(drawingCanvas.getAttribute("width")),
                parseInt(drawingCanvas.getAttribute("height"))
              );
              result.boxes
                .filter(function (box) {
                  return box !== result.box;
                })
                .forEach(function (box) {
                  Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                    color: "green",
                    lineWidth: 2,
                  });
                });
            }

            if (result.box) {
              Quagga.ImageDebug.drawPath(
                result.box,
                { x: 0, y: 1 },
                drawingCtx,
                { color: "#00F", lineWidth: 2 }
              );
            }

            if (result.codeResult && result.codeResult.code) {
              Quagga.ImageDebug.drawPath(
                result.line,
                { x: "x", y: "y" },
                drawingCtx,
                { color: "red", lineWidth: 3 }
              );
            }
          }
        });
        Quagga.onDetected(function(result) {
          setResult(result.codeResult.code);
        });
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []); // Empty dependency array ensures useEffect only runs once

  return (
    <>
      <div ref={videoRef}>{/* <video  className="viewport"></video> */}</div>
      <p>Result:{result}</p>
    </>
  );
};

export default Barcode;
