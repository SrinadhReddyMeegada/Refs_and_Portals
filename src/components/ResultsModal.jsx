import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { onReset, targettime, timeRemaining },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const youLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targettime * 1000)) * 100);
  return createPortal(
    <>
      <dialog className="result-modal" ref={dialog} onClose={onReset}>
        {youLost && <h2>You Lost</h2>}
        {!youLost && <h2>Your Score : {score}</h2>}
        <p>
          The target time was <strong>{targettime} seconds</strong>
        </p>
        <p>
          You stopped the timer <strong> {formattedTime} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")
  );
});
export default ResultModal;
