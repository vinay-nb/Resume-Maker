import React, { Component } from 'react'

export default class Education extends Component {
    

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>

                    
       

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                        </div>
                        <div className="col-lg-6 text-left">
                            <label><b>1.</b></label>
                            <label>Institution Name</label>
                            <input type="text" name="institution1" className="form-control" defaultValue={values.status === 1 ? '' : values.institution1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Degree</label>
                            <input type="text" name="degree1" className="form-control" defaultValue={values.status === 1 ? '' : values.degree1} onChange={handleChange} required/>
                        </div>
                    </div>


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6    text-left">
                            <label>Graduation Year</label>
                            <input type="text" name="graduationyear1" className="form-control" defaultValue={values.status === 1 ? '' : values.graduationyear1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Grade</label>
                            <input type="text" name="grade1" className="form-control" defaultValue={values.status === 1 ? '' : values.grade1} onChange={handleChange} required/>
                        </div>
                    </div>
                    <br />
                    <br></br>
                    <hr />

                    


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>2.Institution Name</label>
                            <input type="text" name="institution2" className="form-control" defaultValue={values.status === 1 ? '' : values.institution2} onChange={handleChange} required />
                        </div>

                        <div className="col-lg-6 text-left">
                            <label>Degree</label>
                            <input type="text" name="degree2" className="form-control" defaultValue={values.status === 1 ? '' : values.degree2} onChange={handleChange} required/>
                        </div>
                    </div>
                    <br/>
                    <div className="row col-lg-10 mx-auto">
                      
                        <div className="col-lg-6 text-left">
                            <label>Graduation Year</label>
                            <input type="text" name="graduationyear2" className="form-control" defaultValue={values.status === 1 ? '' : values.graduationyear2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Grade</label>
                            <input type="text" name="grade2" className="form-control" defaultValue={values.status === 1 ? '' : values.grade2} onChange={handleChange} required/>
                        </div>
                    </div>
                    <br/>
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1" ></i></button>
                    </div>
                    <br/>





                </form>

            </div>
        )
    }
}
