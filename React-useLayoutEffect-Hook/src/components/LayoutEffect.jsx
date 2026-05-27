import { useState, useLayoutEffect, useRef } from "react";

function LayoutEffect() {

  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  useLayoutEffect(() => {

    if (open) {
      inputRef.current.focus();
    }

  }, [open]);

  return (
    <div>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {
        open && (
          <div style={{
            width: "300px",
            padding: "20px",
            marginTop: "20px",
            border: "1px solid black"
          }}>

            <h2>Login</h2>

            <input
              ref={inputRef}
              type="text"
              placeholder="Enter Name"
            />

          </div>
        )
      }

    </div>
  );
}

export default LayoutEffect;