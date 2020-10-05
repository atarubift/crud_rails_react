import React from 'react'
import {Button,FormGroup,FormControl} from 'react-bootstrap'

class FormContainer extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <FormGroup controlId="formBasicText">
                        <FormControl
                          type="text"
                          value={this.state.product}
                          placeholder="Enter text"
                          onChange={ e => this.onChangetext(e)}
                        />
                    </FormGroup>

                </form>
                <Button type="submit" onClick={this.hundleSubmit}>つぶやく</Button>
            </div>
        )
    }
}

export default FormcContainer