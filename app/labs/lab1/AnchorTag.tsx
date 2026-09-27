export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/deep-bhatt/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      A site I visit often:{" "}
      <a href="https://map.riftkit.net/" id="wd-your-link">
        RiftKit Map
      </a>
      <br />
      <a
        href="https://github.com/deep-bhatt"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub profile
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
