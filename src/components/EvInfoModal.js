import React, { Component } from 'react'

export class EvInfoModal extends Component {
    render() {
        return (
            <div>
                  <div className={`modal ${active}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button
                onClick={this.handleClick}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g Alex Smith"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" />I agree to get you the gift you
                    pest...
                  </label>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button onClick={this.handleClick} className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>

        <button onClick={this.handleClick} className="button is-small is-info">
          Show Modal
        </button> 
            </div>
        )
    }
}

export default EvInfoModal
