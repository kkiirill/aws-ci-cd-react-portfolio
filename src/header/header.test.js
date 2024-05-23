import { render } from "@testing-library/react";
import Header from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("render header", async () => {
  render(
    <Router>
      <Header />
    </Router>
  );
});
