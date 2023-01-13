import * as React from "react";
const SvgCeth = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "64px", viewBox: "0 0 64 64", enableBackground: "new 0 0 64 64", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 64, height: 64, x: 0, y: 0, href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEVMaXEbjrI/0ape1rpK 0rQ7160216ow1Kgv16cu1KYt06VU1rsx1qjx//F128JG07Qp0qNI0baAx85GzrMrzacvzqk30rAz za1AzbT4/Pww2Kqu5948z7RMzbY6yLLM6ec80q4zxa/u8fPs7/Hv8fTk6PLt7/GMle7w8/Xs7/Hu 8fPr8PLs7vFByLbt8PLs8vY+w7bu8PJIwrjs7/Hs7vJJvb7t8PJQvcHt8PJhuMtYvcXu8PNWuMZY tcpdr85fss5qrNdpstFjqdV/q+CbrPF4q95qpNuYpfN+p+J2pONwneLu8vSBo+l2n+Z+n+Z5mejt 7/KAl+yHnuuKm/GFk/CHj/TU0vyWmvqVivze3vadmPqOkPeTiPyYjf2iofqWkPuQjPuakP2UkvuY jv2flvyto/Wckv2Yjf2glv2lmvsp26kr4a0o1qYl06Iw3rMz1aocz54h0KAv0KgizKNX2LmD48ux 7t7I8enf+PLq+vfx+/rR8e2Q5tFq28JA0LE03bjj9/T///8px6k51rk81K3+///9/v/9//80ya79 /f1K0LZE1MKN3NGl59tAyLj2+Pnu8fPt7/Ly9Pbs7/H7+/3w8/T+/v/z9fcyvrKd4Nr6+/tIx7/L 0NN8iJNXZnM7S1k9vLirs7oXKThSZHN1hpNJzsh/09AgMUBecYCcqrS95ugbLTwrPEpsfYzW3OD3 +v1Qv8Hv9/olNkSDkZtPwspAtr50y85LW2ppeohld4ZbbXy1wMia2NyXoqxQtsbj5+lkdYPO1dq+ xs1HVmKot8Cvvcals7yMm6X09vaquMGrucJgt82TnKTe4uRbss/n9Pi1u8BitNpXqM/b7fXEytDH 4u+t0+iOweBzrtxZaHRuruTX5fZkndukyejG2vJ7qfKGseOvx+/+/f91keqbqfKIo/yjtPGNn/99 i/Dz8/+Rmvve3f2pov2/vPnBxvmckf+Ngv2Qhf3q6f+3r/6knP2Givaup/2Uif6XjP+Yl/+JhfnK x/3u7f/53/ldAAAAanRSTlMAAQMjVISzzuP0/DXJAQ9n/XYUf/776P69Auz+8V7+hJ/+nvysBX4D +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 OjM5OjQ2KzAwOjAwka9g1QAAAABJRU5ErkJggg==" }));
export default SvgCeth;
