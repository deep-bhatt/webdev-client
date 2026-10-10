export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          I grow
        </div>
        <div className="wd-bg-color-gray">I fit my text</div>
        <div className="wd-bg-color-yellow wd-width-110px">I stay 110px</div>
      </div>
      <br />
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-gray wd-width-110px">Sample pinned</div>
        <div className="wd-bg-color-yellow">Sample natural</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Sample stretches
        </div>
      </div>
    </div>
  );
}
