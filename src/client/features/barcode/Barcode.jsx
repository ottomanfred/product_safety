import { useZxing } from "react-zxing";

function Barcode({ result, setResult }) {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <div>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
}

export default Barcode;
