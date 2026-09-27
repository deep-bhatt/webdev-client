export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>About me</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input id="wd-your-first-name" defaultValue="Deep" />
      <br />
      <label htmlFor="wd-your-middle-name">Middle name: </label>
      <input id="wd-your-middle-name" defaultValue="Dushyantkumar" />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input id="wd-your-last-name" defaultValue="Bhatt" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID: </label>
      <input type="password" id="wd-your-student-id" placeholder="NUID" />
      <br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to learn how to build full stack web apps with React, Next.js, Node.js, and MongoDB, and end the term with a project I can show."
      />

      <h5>Class standing</h5>
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-frontend"
        defaultChecked
      />
      <label htmlFor="wd-your-frontend">Frontend development</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-backend"
        defaultChecked
      />
      <label htmlFor="wd-your-backend">Backend development</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-databases" />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-cloud" />
      <label htmlFor="wd-your-cloud">Cloud and deployment</label>

      <h5>Program</h5>
      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="SE">Software Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics I want to get better at: </label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "MONGODB"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODEJS">Node.js</option>
        <option value="MONGODB">MongoDB</option>
        <option value="TAILWIND">Tailwind CSS</option>
      </select>

      <h5>Details</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        id="wd-your-email"
        defaultValue="bhatt.dee@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        min={2026}
        max={2032}
        defaultValue={2027}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        id="wd-your-start-date"
        min="2020-01-01"
        max="2030-12-31"
        defaultValue="2025-09-03"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited am I about this course (0 to 10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={8}
      />
      <br />
      <br />
      <button id="wd-your-save" type="submit">
        Save
      </button>{" "}
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
