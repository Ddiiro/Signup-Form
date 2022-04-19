export function Nav() {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Services</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
}

export function Title() {
  return <h1>SignUp Form</h1>;
}

export function Paragraph() {
  return <p>Please signup for a new account here.</p>;
}

export function Form() {
  return (
    <form>
      <label>Surname</label>
      <br></br>
      <input></input>
      <br></br>
      <label>Lastname</label>
      <br></br>
      <input></input>
      <br></br>
      <label>Email</label>
      <br></br>
      <input></input>
      <br></br>
      <label>Phone Number</label>
      <br></br>
      <input></input> <br></br>
      <label>Password</label>
      <br></br>
      <input></input> <br></br>
      <label>Confirm Password</label>
      <br></br>
      <input></input> <br></br>
      <button>SignUp</button>
    </form>
  );
}

