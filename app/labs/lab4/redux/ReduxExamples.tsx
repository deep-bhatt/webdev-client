"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div id="wd-redux-examples">
        <h2>Redux Toolkit</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <hr />
      </div>
    </Provider>
  );
}
