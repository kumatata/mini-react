export class Component {

  /**
   *
   * @private {object}
   */
  _state = {}

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  /**
   *
   * @private {object}
   */
  _prevState = {}

  get prevState() {
    return this._prevState;
  }

  set prevState(value) {
    this._prevState = value;
  }

  /**
   *
   * @private {Dom}
   */
  _dom

  get dom() {
    return this._dom;
  }

  set dom(value) {
    this._dom = value;
  }

  constructor(properties) {
    this.properties = properties;
    this._state = {};
    this._prevState;
    this.prevRender = null;
  }

  display = () => {
    if (this.shouldUpdate()) this.prevRender = this.render();
    return this.prevRender;
  };

  setState = newState => {
    this.prevState = this.state;
    this.state = newState;
    this.display();
  };

  getState = () => {
    return this.state;
  };

  shouldUpdate = () => {
    return (
      JSON.stringify(this.properties) != JSON.stringify(this.newProps) ||
      JSON.stringify(this.state) != JSON.stringify(this.prevState)
    );
  };
}
