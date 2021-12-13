import Control from '../common/control'

export default class FormCheck extends Control {
  private labelCheck: Control<HTMLLabelElement>;
  private inputCheck: Control<HTMLInputElement>;
  public typeForm: string;
  constructor({ parentNode, type, typeForm }: { parentNode: HTMLElement; type: string; typeForm: string; }) {
    super(parentNode);
    this.labelCheck = new Control(this.node, 'label', 'checkbox', '');
    this.labelCheck.node.classList.add(typeForm);
    this.labelCheck.node.classList.add(type);
    this.typeForm = typeForm;
    this.inputCheck = new Control(this.node, 'input');
    this.inputCheck.node.type = 'checkbox';
    this.labelCheck.node.append(this.inputCheck.node);
    this.inputCheck.node.onchange = () => {
      this.checked();
    }
  }

  checked() {
    if (this.inputCheck.node.checked) {
      const Title = new Control(document.body, 'h1', '', this.typeForm);
    }
  }
}

