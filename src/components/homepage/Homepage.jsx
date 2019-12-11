import React, { Component } from "react";
import "./homepage.style.scss";

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      social: [
        {
          name: "facebook",
          url: "https://www.facebook.com/Lamina.leks",
          className: "fa fa-facebook"
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/skelanimal/",
          className: "fa fa-linkedin"
        },
        {
          name: "github",
          url: "https://github.com/Skelanimal",
          className: "fa fa-github"
        }
      ]
    };
  }

  render() {
    return (
      <div className="main-field">
        <h1 className="title">Matthew McCarthy</h1>
        <h2 className="role">Software Engineer</h2>
        <ul className="social">
          {this.state.social.map(network => (
            <li key={network.name}>
              <a href={network.url}>
                <i className={network.className}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Homepage;
