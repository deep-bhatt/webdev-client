import BoxDemo from "./BoxDemo";
import BoxModelDemo from "./BoxModelDemo";
import NestingOrderDemo from "./NestingOrderDemo";
import CardDemo from "./CardDemo";

export default function ChildrenPage() {
  return (
    <div id="wd-lab3-children">
      <h2>Composing Styles with Children</h2>
      <h4>One configurable Box</h4>
      <BoxDemo />
      <h4>One component per box-model layer</h4>
      <BoxModelDemo />
      <NestingOrderDemo />
      <h4>Children can be anything</h4>
      <CardDemo />
    </div>
  );
}
