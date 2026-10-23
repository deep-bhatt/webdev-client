export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let city = "Boston";
  let year = 2026;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      city = {city}, typeof city = {typeof city}  <br />
      year = {year}, typeof year = {typeof year}  <br />
      sampleCount = {sampleCount}, typeof sampleCount = {typeof sampleCount} <br />
      sampleLabel = {sampleLabel}, typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}
