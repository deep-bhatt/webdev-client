export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const course = { course: "CS5610", credits: 4 };
  const sampleCourse = { course: "RS101", credits: 4, online: false };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      course = {JSON.stringify(course)} <br />
      sampleCourse = {JSON.stringify(sampleCourse)}
      <hr />
    </div>
  );
}
