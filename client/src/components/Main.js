import React, { Component } from 'react'

class Main extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    


      
    render() {
        const style1={
            background: '#EA7773'
        }

        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInRight" >
                <div className="card-body">

                    <h3 className="card-title">Personal Information</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue} >
                    <div className="row col-lg-10 mx-auto" >
                        <div className="col-lg-6 text-left">
                            <label>First Name</label>
                            <input type="text" name="firstname" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.firstname} required />
                        </div>
                        <br/>
                        <br/>
                        <div className="col-lg-6 text-left">
                            <label>Last Name</label>
                            <input type="text" name="lastname" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.lastname} required />
                        </div>
                      </div>  
                      <br/>
                    
                      <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange}  defaultValue={values.status === 1 ? '' : values.email} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Contact Number</label>
                            <input type="integer" name="contactno" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.contactno} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Date of Birth</label>
                            <input type="date" name="dob" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.dob}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Bio</label>
                            <input type="text" name="bio" className="form-control" onChange={handleChange} defaultValue={values.status === 20 ? '' : values.bio}  />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>About</label>
                            <input type="text" name="about" className="form-control"   onChange={handleChange} defaultValue={values.status === 20 ? '' : values.about}  />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center"><button type="submit" className="btn " style={style1}>Next<i className="fas fa-angle-right ml-1"></i></button></div>
                    <br/>
                </form>
            
            </div>
        )
    }
}


export default Main;
