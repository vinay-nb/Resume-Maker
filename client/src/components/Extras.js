import React, { Component } from 'react';

import axios from 'axios';
import { saveAs } from 'file-saver';

class Extras extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    formSubmit = (e) => {
        e.preventDefault();
        this.props.submitted();
        this.props.nextStep();
        const data = this.props.values;


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Extras</h3>
                    <hr />
                </div>
                <form onSubmit={this.formSubmit}>
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 text-left">
                            <label>Languages</label>
                            <input type="text" name="languages" placeholder="Separate each language with a space and a comma" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.languages} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Hobbies</label>
                            <input type="text" name="hobbies" placeholder="Separate each hobbie with a space and a comma" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.hobbies} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 text-left">
                            <label>1.Achievement</label>
                            <input type="text" name="achievement1"  className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.achievement1} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>2.Achievement</label>
                            <input type="text" name="achievement2"  className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.achievement2} required />
                        </div>
                    </div>
                    
                    <br/>

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <input type="text" name="github" className="form-control" placeholder="github" defaultValue={values.status === 20 ? '' : values.github} onChange={handleChange} />
                            <input type="text" name="linkedin" className="form-control"  placeholder="linkdin" defaultValue={values.status === 20 ? '' : values.linkedin} onChange={handleChange} />
                            <input type="text" name="personalsite" className="form-control" placeholder="personalsite"  defaultValue={values.status === 20 ? '' : values.personalsite} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Download PDF<i className="fas fa-download ml-1"></i></button>
                    </div>
                    <br />
                </form>
            </div>

        )
    }
}

export default Extras;
