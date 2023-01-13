import * as React from "react";
const SvgTlab = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "65px", viewBox: "0 0 64 65", enableBackground: "new 0 0 64 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 64, height: 65, x: 0, y: 0, href: "data:image/png;base64,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 gg==" }));
export default SvgTlab;
