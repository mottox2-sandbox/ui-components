import { Button } from "./button";

export default {
  title: "Example/MyButton",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "MyButton",
};
