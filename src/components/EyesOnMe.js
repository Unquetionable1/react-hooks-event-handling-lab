// Code EyesOnMe Component Here
function EyesOnMe() {
  function handleFocus(e) {
    e.preventDefault();
    console.log("Good!");
  }

  function handleBlur(e) {
    e.preventDefault();
    console.log("Hey! Eyes on me!");
  }
  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes on me
    </button>
  );
}
export default EyesOnMe;
