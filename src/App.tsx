import React from "react";
import ReactDOM from "react-dom/client";

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 30,
    lineHeight: 1.5,
    color: 'red',
  }
});

ReactDOM.createRoot(document.body).render(
    <>
        <b>Hello from React</b>
        <div {...stylex.props(styles.base)}>Hello from StyleX</div>
    </>
);