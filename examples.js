import { SvgPath } from "./index.js";

const src = "M10 10 L15 15";
const transformed = new SvgPath(src)
                    .scale(0.5)
                    .translate(100,200)
                    .rel()
                    .round(1)
                    .toString();

console.log(src);
console.log(transformed);

const sp = new SvgPath(src);
sp.iterate((s, index, x, y) => {
  console.log(s, index, x, y);
});
