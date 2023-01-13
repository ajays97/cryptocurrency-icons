import * as React from "react";
const SvgForth = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "200px", height: "200px", viewBox: "0 0 200 200", enableBackground: "new 0 0 200 200", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 200, height: 200, x: 0, y: 0, href: "data:image/png;base64,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" }));
export default SvgForth;
