//* Dependencies
import React, { useState } from "react";
import "./App.css";

//* Custom components
import Button from "./components/button/Button";
import Layout from "./components/layout/layout";
import Label from "./components/label/Label";
import TextBox from "./components/textbox/TextBox";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onClick = () => {
    isDarkMode === false ? setIsDarkMode(true) : setIsDarkMode(false);
    console.log("isDarkMode: ", isDarkMode);
  };

  return (
    <div className="App">
      <Layout isDarkMode={isDarkMode}>
        <TextBox boxStyle={"textbox-wide"}>
          The big cheese lancashire cheese triangles. Melted cheese queso who
          moved my cheese cauliflower cheese cheesy feet swiss squirty cheese
          cheeseburger. Feta cauliflower cheese fondue babybel cut the cheese
          halloumi blue castello monterey jack. Stilton boursin ricotta stinking
          bishop st. agur blue cheese camembert de normandie parmesan manchego.
          Brie paneer cream cheese pepper jack.
        </TextBox>
        <TextBox boxStyle={"textbox-narrow"}>
          {" "}
          The big cheese lancashire cheese triangles. Melted cheese queso who
          moved my cheese cauliflower cheese cheesy feet swiss squirty cheese
          cheeseburger. Feta cauliflower cheese fondue babybel cut the cheese
          halloumi blue castello monterey jack. Stilton boursin ricotta stinking
          bishop st. agur blue cheese camembert de normandie parmesan manchego.
          Brie paneer cream cheese pepper jack.
        </TextBox>
        <TextBox boxStyle={"textbox"}>
          {" "}
          The big cheese lancashire cheese triangles. Melted cheese queso who
          moved my cheese cauliflower cheese cheesy feet swiss squirty cheese
          cheeseburger. Feta cauliflower cheese fondue babybel cut the cheese
          halloumi blue castello monterey jack. Stilton boursin ricotta stinking
          bishop st. agur blue cheese camembert de normandie parmesan manchego.
          Brie paneer cream cheese pepper jack.
        </TextBox>
        <Label isDarkMode={isDarkMode}>Button:</Label>
        <Button label="Toggle Dark" isDarkMode={isDarkMode} onClick={onClick} />
      </Layout>
    </div>
  );
}

export default App;
