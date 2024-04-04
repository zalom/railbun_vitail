import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]
  connect() {
  }

  greet() {
    const outputElement = this.outputTarget
    outputElement.innerHTML = `, ${this.name}`
  }

  get name() {
    return this.nameTarget.value
  }
}
