import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import Navbar from "../Navbar/Navbar";
//import Footer from "../Footer/Footer";
import "../Signup/Signup.css";
import LogoImg from "../../Image/logoImg.png";
// import InputAdornment from "@material-ui/core/InputAdornment";
//import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  state = {
    fullName: "",
    email: "",
    password: "",
    language: "en"
  };

  signupInfo = event => {
    // console.log(event.target.value);
    console.log(event.target);
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signUp = () => {
    console.log(this.state); //This .state Email, password and language
    let emailInput = document.getElementById("email");
    if (emailInput.classList.contains("invalid")) {
      alert("Incorreect Email Format");
    } else {
      let data = this.state;
      axios.post("/data", data).then(response => {
        console.log(response.data);
        console.log(response.error);

        if (response.data.errors) {
          console.log("Login Incorrect");
          alert("Incorrect email format please type again");
          //window.location.href = "/signup";
        } else {
          console.log("Response is true, so redirecting to profile-page....");
          // window.location.href = "/signin";

          this.props.history.push("/Signin");
        }
      });
    }
  };

  selectLanguage = event => {
    console.log("select Language");
    console.log(event.target);
    this.setState({
      language: event.target.value
    });
  };

  // <div className="col s12 m7" id="containerBig">
  //         <div className="nav-wrapper container">
  //           <div>
  //             <a href={"/"}>
  //               <img
  //                 className="circle"
  //                 id="imgLogoBig"
  //                 alt="logoImg"
  //                 src={LogoImg}
  //               />
  //             </a>
  //           </div>

  //           <div className="containerBigMessage"></div>
  render() {
    return (
      <div className="row">
        <div className="col s12 m5" id="containerSmall">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img
                className="circle"
                id="imgLogoSmall"
                alt="logoImg"
                src={LogoImg}
              />
            </a>
          </div>
          <div className="containerSmallMessage">
            <h4>Create An Account</h4>
          </div>
        </div>

        <div className="col s12 m7" id="containerBig">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img
                className="circle"
                id="imgLogoBig"
                alt="logoImg"
                src={LogoImg}
              />
            </a>
          </div>
          <div className="containerBigMessage">
            <h4>Create An Account</h4>
          </div>

          <div className="row" id="formContainer">
            <div className="col s9">
              <p>PERSONAL INFORMATION</p>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                onChange={event => this.signupInfo(event)}
              />
              <br />
              <p>ACCOUNT SECURITY</p>
              <label htmlFor="email">Email</label>
              <input
                className="validate"
                type="email"
                id="email"
                onChange={event => this.signupInfo(event)}
              />
              <span
                className="helper-text"
                data-error="Incorrect Email Format"
                //data-success="right"
              ></span>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={event => this.signupInfo(event)}
              />
              <br />
              <p>LANGUAGE PREFERENCE</p>
              {/* <label htmlFor="password">Language</label> */}
              <FormControl className="col s12">
                {/* <InputLabel>Language</InputLabel> */}
                <Select
                  id="language"
                  value={this.state.language}
                  onChange={event => this.selectLanguage(event)}
                >
                  <MenuItem value="af">Afrikaans</MenuItem>
                  <MenuItem value="sq">Albanian</MenuItem>
                  <MenuItem value="am">Amharic</MenuItem>
                  <MenuItem value="ar">Arabic</MenuItem>
                  <MenuItem value="hy">Armenian</MenuItem>

                  <MenuItem value="az">Azerbaijani</MenuItem>
                  <MenuItem value="bn">Bangla</MenuItem>
                  <MenuItem value="eu">Basque</MenuItem>
                  <MenuItem value="be">Belarussian</MenuItem>
                  <MenuItem value="bs">Bosnian</MenuItem>

                  <MenuItem value="bg">Bulgarian</MenuItem>
                  <MenuItem value="my">Burmese</MenuItem>
                  <MenuItem value="ca">Catalan</MenuItem>
                  <MenuItem value="zh">Chinese</MenuItem>
                  <MenuItem value="co">Corsican</MenuItem>

                  <MenuItem value="hr">Croatian</MenuItem>
                  <MenuItem value="cs">Czech</MenuItem>
                  <MenuItem value="nl">Dutch</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="eo">Esperanto</MenuItem>

                  <MenuItem value="et">Estonian</MenuItem>
                  <MenuItem value="fl">Filipino</MenuItem>
                  <MenuItem value="fi">Finnish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="gl">Galician</MenuItem>

                  <MenuItem value="ka">Georgian</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                  <MenuItem value="el">Greek</MenuItem>
                  <MenuItem value="gu">Gujarati</MenuItem>
                  <MenuItem value="ht">Haitian</MenuItem>

                  <MenuItem value="ha">Hausa</MenuItem>
                  <MenuItem value="hw">Hawaiian</MenuItem>
                  <MenuItem value="iw">Hebrew</MenuItem>
                  <MenuItem value="hi">Hindi</MenuItem>
                  <MenuItem value="hm">Hmong</MenuItem>

                  <MenuItem value="hu">Hungarian</MenuItem>
                  <MenuItem value="is">Icelandic</MenuItem>
                  <MenuItem value="ig">Igbo</MenuItem>
                  <MenuItem value="in">Indonesian</MenuItem>
                  <MenuItem value="ir">Irish</MenuItem>

                  <MenuItem value="it">Italian</MenuItem>
                  <MenuItem value="ja">Japanese</MenuItem>
                  <MenuItem value="jw">Javanese</MenuItem>
                  <MenuItem value="kn">Kannada</MenuItem>
                  <MenuItem value="kk">Kazakh</MenuItem>

                  <MenuItem value="ko">Korean</MenuItem>
                  <MenuItem value="km">Khmer</MenuItem>
                  <MenuItem value="ku">Kurdish</MenuItem>
                  <MenuItem value="ky">Kirghiz</MenuItem>
                  <MenuItem value="lo">Lao</MenuItem>

                  <MenuItem value="la">Latin</MenuItem>
                  <MenuItem value="lv">Latvian</MenuItem>
                  <MenuItem value="lo">Lithuanian</MenuItem>
                  <MenuItem value="lu">Luxembourgish</MenuItem>
                  <MenuItem value="mk">Macedonian</MenuItem>

                  <MenuItem value="mg">Malagasy</MenuItem>
                  <MenuItem value="ms">Malay</MenuItem>
                  <MenuItem value="ml">Malayalam</MenuItem>
                  <MenuItem value="mt">Maltese</MenuItem>
                  <MenuItem value="mi">Maori</MenuItem>

                  <MenuItem value="mr">Marathi</MenuItem>
                  <MenuItem value="mn">Mongolian</MenuItem>
                  <MenuItem value="ne">Nepali</MenuItem>
                  <MenuItem value="no">Norwegian</MenuItem>
                  <MenuItem value="ny">Nyanja</MenuItem>

                  <MenuItem value="ps">Pashto</MenuItem>
                  <MenuItem value="fa">Persian</MenuItem>
                  <MenuItem value="pl">Polish</MenuItem>
                  <MenuItem value="pt">Portuguese</MenuItem>
                  <MenuItem value="pa">Punjabi</MenuItem>

                  <MenuItem value="ro">Romanian</MenuItem>
                  <MenuItem value="ru">Russian</MenuItem>
                  <MenuItem value="sm">Samoan</MenuItem>
                  <MenuItem value="gd">Scottish Gaelic</MenuItem>
                  <MenuItem value="sr">Serbian</MenuItem>

                  <MenuItem value="sn">Shona</MenuItem>
                  <MenuItem value="sd">Sindhi</MenuItem>
                  <MenuItem value="si">Sinhala</MenuItem>
                  <MenuItem value="sk">Slovak</MenuItem>
                  <MenuItem value="sl">Slovenian</MenuItem>

                  <MenuItem value="so">Somali</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="su">Sudanese</MenuItem>
                  <MenuItem value="sw">Swahili</MenuItem>
                  <MenuItem value="sv">Swedish</MenuItem>

                  <MenuItem value="tg">Tajik</MenuItem>
                  <MenuItem value="ta">Tamil</MenuItem>
                  <MenuItem value="te">Telugu</MenuItem>
                  <MenuItem value="th">Thai</MenuItem>
                  <MenuItem value="tr">Turkish</MenuItem>

                  <MenuItem value="uk">Ukrainian</MenuItem>
                  <MenuItem value="ur">Urdu</MenuItem>
                  <MenuItem value="uz">Uzbek</MenuItem>
                  <MenuItem value="vi">Vietnamese</MenuItem>
                  <MenuItem value="vo">Volapuk</MenuItem>

                  <MenuItem value="cy">Welsh</MenuItem>
                  <MenuItem value="xh">Xhosa</MenuItem>
                  <MenuItem value="ji">Yiddish</MenuItem>
                  <MenuItem value="yo">Yoruba</MenuItem>
                  <MenuItem value="zu">Zulu</MenuItem>
                </Select>
              </FormControl>

              {/* <div className="col s12">
                <select
                  id="language"
                  value={this.state.language}
                  onChange={event => this.signupInfo(event)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="it">Italian</option>
                  <option value="ru">Russian</option>
                </select>
              </div> */}
              <button
                id="button-SignUp"
                className="btn waves-effect waves-light"
                // type="submit"
                name="action"
                onClick={event => this.signUp(event)}
              >
                Sign Up
              </button>
              <Link to="/Signin" className="right" id="membercheck">
                Already A Member!
              </Link>
              {/* <a href={"/signin"} className="right" id="membercheck">
                Already A Member!
              </a> */}
            </div>
          </div>
          <div>{/* <Footer /> */}</div>
        </div>
      </div>
    );
  }
}
// Signup.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };
export default Signup;
