import React from "react";
import { Button, Input, Textarea } from "components/Form";
import Card from "components/Card";
import { Menu, MenuItem } from "components/Menu";
import { EmployeesBox } from "components/Employees";

function Modul3() {
  return (
    <div>
      <h3>Buttons</h3>
      <Button label="Label from prop" bgColor="belize hole"/>
      <Button>Label from children</Button>
      <Button label="Button with icon!" icon="user"/>
      <h3>Input & Textarea</h3>
      <Input color="clouds"/>
      <Textarea value="Some text"/>
      <h3>Card</h3>
      <Card
        title="Cupidatat ipsum id non exercitation consectetur."
        intro="Occaecat velit elit ut duis tempor cupidatat anim exercitation commodo incididunt ex ut. Nostrud Lorem nulla deserunt fugiat ut. Quis dolore officia veniam consectetur sunt nisi voluptate. Mollit exercitation laboris ullamco eiusmod."
        image="https://picsum.photos/id/1/200/300"
        content="Adipisicing quis consequat et deserunt voluptate commodo dolore laborum esse commodo anim ipsum ad. Esse laboris nulla in amet do cillum. Voluptate anim sunt quis quis ut cillum.
        Sint mollit exercitation Lorem irure et amet adipisicing fugiat consequat do dolore qui. Esse ex nostrud culpa nostrud eiusmod commodo velit anim mollit. Nostrud cupidatat quis reprehenderit pariatur culpa. Amet elit excepteur sunt est deserunt deserunt cupidatat duis eiusmod excepteur excepteur. Laborum minim excepteur excepteur cupidatat commodo culpa cupidatat ad elit eu nostrud.
        Ut sint est proident ut incididunt pariatur consectetur irure eiusmod ad deserunt sint. Mollit sunt ipsum sint mollit incididunt ea cupidatat. Commodo et cupidatat sint mollit proident quis laborum mollit fugiat dolor culpa excepteur tempor. Minim aliquip irure amet qui ipsum velit officia cupidatat. Sint ut ad labore esse cillum quis consequat laboris qui. Irure occaecat id non enim est anim ea est nulla ullamco adipisicing esse."
      />
      <h3>Menu</h3>
      <Menu>
        <MenuItem to="/" label="Home"/>
        <MenuItem to="/about" label="About"/>
        <MenuItem to="/contact" label="Contact"/>
        <MenuItem to="/posts" label="Posts"/>
      </Menu>
      <h3>Employees</h3>
      <EmployeesBox/>
    </div>
  )
}

export default Modul3;