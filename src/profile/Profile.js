import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import "../nav.css";
import View1 from "../components/view1";
import View2 from "../components/view2";
import MainText from "../components/MainText";

const Profile = props => {
  console.log("props", props);
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  let userName = JSON.parse(user);
  const [compone, setComponent] = useState(false);
  const [comp, setComp] = useState(false);
  const [defaultScreen, setdefaultScreen] = useState(false);

  const checkUrl1 = event => {
    event.persist();
    if (event.target.value.includes("url1")) {
      setComponent(true);
    } else if (event.target.value.includes("url2")) {
      setComp(true);
    } else {
      setdefaultScreen(true);
    }
  };
  const checkUrl2 = event => {
    event.persist();
    if (event.target.value.includes("url1")) {
      setComponent(true);
    } else if (event.target.value.includes("url2")) {
      setComp(true);
    } else {
      setdefaultScreen(true);
    }
  };

  return (
    <React.Fragment>
      {token ? (
        <>
          <div className="topnav" id="myTopnav">
            <Link href="#home" className="active">
              {userName.email}
            </Link>
            <label htmlFor="" style={{float: "left"}}>
              <input
                type="text"
                className="ab"
                placeholder="Put Url1"
                onChange={checkUrl1}
              />
            </label>
            <div style={{float: "right"}}>
              <label htmlFor="">
                <input
                  type="text"
                  className="ab"
                  placeholder="Put Url2"
                  onChange={checkUrl2}
                />
              </label>
              <Link
                to="/"
                className="ab"
                style={{backgroundColor: "black", color: "white"}}
              >
                Login/Register Page
              </Link>
            </div>
            <Link
              to="/"
              className="icon"
              style={{backgroundColor: "black", color: "white"}}
            >
              Login/Register Page
            </Link>
          </div>
          {compone === true ? (
            <View1 />
          ) : comp === true ? (
            <View2 />
          ) : (
            <MainText />
          )}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
};

export default Profile;
