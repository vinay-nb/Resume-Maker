import React, { Component } from 'react'

class Skills extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Appreciation</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    <div className="row col-lg-10 mx-auto">
                        
                        <div className="col-lg-6 text-left">
                            <label>Skills</label>
                            <input type="text" name="skills" placeholder="Separate each skill with a space and a comma" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.skills} required />
                        </div>
                        
                    

                        <div className="col-lg-6 text-left">
                            <label>Awards</label>
                            <input type="text" name="awards" placeholder="Separate each award with a space and a comma" className="form-control" onChange={handleChange}  defaultValue={values.status === 1 ? '' : values.awards} required />
                        </div>
                    </div>
                    <br/>
                    
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Cerfiticates</label>
                            <input type="text" name="certificates" placeholder="Separate each certificate name with a space and a comma" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.certificates} required />
                        </div>
                     
                    
                        <div className="col-lg-6 text-left">
                            <label>Patents</label>
                            <input type="text" name="patents" className="form-control" placeholder="Separate each patents with a space and a comma" defaultValue={values.status === 20 ? '' : values.patents} onChange={handleChange} />
                        </div>
                    </div>
                    <br />

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">

                            <label>Projects</label>
                            <input type="text" name="projects" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.projects} required />
                        </div>
                     
                    
                        <div className="col-lg-6 text-left">
                            <label>Descriptions</label>
                            <input type="text" name="descriptions" className="form-control" onChange={handleChange} defaultValue={values.status === 20 ? '' : values.descriptions}  />
                        </div>
                    </div>
                    <br/>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">

                            <label>Activites</label>
                            <input type="text" name="activites1" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values. activites1} required />
                        </div>
                    </div>

                    <br />

                   
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


export default Skills;
