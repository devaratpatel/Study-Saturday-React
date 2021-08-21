import axios from "axios";
import React, { Component } from "react";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get("/student");
      this.setState({ students: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            {this.state.students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
