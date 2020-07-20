import React, { Component } from 'react';
import '../App.css';
import Main from './Main'
import Education from './Education'
import Skills from './Skills'
import Extras from './Extras'
import Success from './Success';

class Home extends Component {

    state = {

        step: 1,
        firstname: '',
        secondname:'',
        email: '',
        contactno: '',
        dob:'',
        bio:'',
        about:'',

        institution1:'',
  degree1:'',
  fieldofstudy1:'',
  graduationyear1:'',
  grade1:'',
  activites1:'',
  
  institution2:'',
  degree2:'',
  fieldofstudy2:'',
  graduationyear2:'',
  grade2:'',
  activites2:'',
  
  skills:'',
          projects:'',
          awards:'',
          certificates:'',
          languages:'',
          patents:'',
          hobbies:'',
          github:'',
          linkedin:'',
          personalsite:'',
          descriptions:'',
          achievement1:'',
          achievement2:'',
        
        status: 0

    }

    
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }

     

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    render() {
        const style1 = {
            'margin-top' : '-1695px',
        }

        const { step } = this.state;
       

        switch (step) {
            case 1:
                return (
                    <div className="App pt-5 mt-5" id="home" >
                        <div className="container col-lg-8 mx-auto text-center" style={style1} id="home">

                            <Main 
                                values={this.state}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 2:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center" style={style1}>

                            <Education
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 3:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center" style={style1}>

                            <Skills
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

                case 4:

                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center" style={style1}>
    
                                <Extras
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    submitted={this.submitted}
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <br />
                        </div>
                    );

         
            case 5:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center" style={style1}>

                            <Success />
                        </div>
                        <br />
                    </div>
                );
                default:
                    (console.log('This is a multi-step form built with React.'))

        }
    }
}

export default Home;
