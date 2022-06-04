import Signin from "../components/pages/signin";
import Button from "../components/blocks/button";

export const signinContext = new Signin({
  button: [
    new Button({
      type: "submit",
      class: "button_signin button_submit",
      text: 'Авторизоваться'
    }).render(),
  ].join(''),
});
