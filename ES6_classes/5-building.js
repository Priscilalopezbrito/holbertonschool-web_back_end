class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Abstract class cannot be instantiated directly.');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Error: Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-disable class-methods-use-this */
}

export default Building;
