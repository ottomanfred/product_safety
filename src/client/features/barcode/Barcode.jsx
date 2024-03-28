import { useZxing } from "react-zxing";
import { useNavigate, useOutletContext } from "react-router-dom";

function Barcode() {
  const [setResult] = useOutletContext();
  const navigate = useNavigate();

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      navigate("/");
    },
  });

  return (
    <div>
      <video ref={ref} />
    </div>
  );
}

export default Barcode;
