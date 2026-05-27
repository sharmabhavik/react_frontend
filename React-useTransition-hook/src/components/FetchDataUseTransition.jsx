import { useState, useTransition } from "react";

function FetchDataUseTransition() {

  const [tab, setTab] = useState("Home");

  const [isPending, startTransition] = useTransition();

  function changeTab(nextTab) {

    startTransition(() => {
      setTab(nextTab);
    });

  }

  function renderHeavyContent() {

    const items = [];

    for (let i = 0; i < 2000; i++) {
      items.push(<p key={i}>{tab} Content {i}</p>);
    }

    return items;
  }

  return (
    <div>

      <button onClick={() => changeTab("Home")}>
        Home
      </button>

      <button onClick={() => changeTab("About")}>
        About
      </button>

      <button onClick={() => changeTab("Contact")}>
        Contact
      </button>

      {
        isPending && <h2>Loading Tab...</h2>
      }

      <h1>{tab}</h1>

      {renderHeavyContent()}

    </div>
  );
}

export default FetchDataUseTransition;