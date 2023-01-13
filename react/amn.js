import * as React from "react";
const SvgAmn = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "123px", height: "123px", viewBox: "0 0 123 123", enableBackground: "new 0 0 123 123", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 123, height: 123, x: 0, y: 0, href: "data:image/png;base64,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 YII=" }));
export default SvgAmn;
