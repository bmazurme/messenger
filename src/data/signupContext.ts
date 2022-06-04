import Signup from "../components/pages/signup";
import Button from "../components/blocks/button";

export const signupContext = new Signup({
  button: [
    new Button({
      type: "submit",
      class: "button_signup button_submit",
      text: 'Зарегистрироваться'
    }).render(),
  ].join(''),
});
