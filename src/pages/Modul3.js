import React from "react";
import { Button } from "components/Form";
import Card from "components/Card";
import { Menu, MenuItem } from "components/Menu";
import { EmployeesBox } from "components/Employees";

function Modul3() {
  return (
    <>
      <Button label="Label from prop" bgColor="belize hole"/>
      <Button>Label from children</Button>
      <Button label="Button with icon!" icon="user"/>
      <Card
      title="Cupidatat ipsum id non exercitation consectetur."
      intro="Occaecat velit elit ut duis tempor cupidatat anim exercitation commodo incididunt ex ut. Nostrud Lorem nulla deserunt fugiat ut. Quis dolore officia veniam consectetur sunt nisi voluptate. Mollit exercitation laboris ullamco eiusmod."
      image="https://picsum.photos/id/1/200/300"
      content="Adipisicing quis consequat et deserunt voluptate commodo dolore laborum esse commodo anim ipsum ad. Esse laboris nulla in amet do cillum. Voluptate anim sunt quis quis ut cillum.

Sint mollit exercitation Lorem irure et amet adipisicing fugiat consequat do dolore qui. Esse ex nostrud culpa nostrud eiusmod commodo velit anim mollit. Nostrud cupidatat quis reprehenderit pariatur culpa. Amet elit excepteur sunt est deserunt deserunt cupidatat duis eiusmod excepteur excepteur. Laborum minim excepteur excepteur cupidatat commodo culpa cupidatat ad elit eu nostrud.

Ut sint est proident ut incididunt pariatur consectetur irure eiusmod ad deserunt sint. Mollit sunt ipsum sint mollit incididunt ea cupidatat. Commodo et cupidatat sint mollit proident quis laborum mollit fugiat dolor culpa excepteur tempor. Minim aliquip irure amet qui ipsum velit officia cupidatat. Sint ut ad labore esse cillum quis consequat laboris qui. Irure occaecat id non enim est anim ea est nulla ullamco adipisicing esse."
      />
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
        <MenuItem to="/posts">Posts</MenuItem>
      </Menu>
      <EmployeesBox/>
    </>
  )
}

export default Modul3;