class MoveError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MoveError.prototype);
  }
}

export default MoveError;
