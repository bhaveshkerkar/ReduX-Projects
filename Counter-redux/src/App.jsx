import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";

function app() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
          <Container></Container>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              fdprocessedid="uotl9"
            >
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              fdprocessedid="422fpx"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default app;
