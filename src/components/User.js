import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(this.props.user.id)}
          className="delete-icon"
        />
        <IoHammerSharp
          onClick={() => {
            this.setState({
              editForm: !this.state.editForm,
            });
          }}
          className="edit-icon"
        />
        <h3>
          {this.props.user.first_name}
          {this.props.user.last_name}
        </h3>
        <img src={this.props.user.avatar} />
        <p>{this.props.user.email}</p>
        <b>{this.props.user.isHappy ? "Happy :=)))" : "Unhappy :=((("}</b>

        {this.state.editForm && (
          <AddUser user={this.props.user} onAdd={this.props.onEdit} />
        )}
      </div>
    );
  }
}

export default User;
