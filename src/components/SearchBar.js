import { Row, Col,InputGroup, FormControl } from 'react-bootstrap'
import $ from 'jquery'


function SearchBar() {
    function AppendKey(e) {
        e.preventDefault();
        var value = $('#searchBar').val();

    }

    return (
        <>
            <Row>
            <Col md={6}>
                <InputGroup className="col-md-6 mb-3" style={{marginLeft:460, marginTop:50}}>
                    <FormControl
                        placeholder="search here . . ."
                        aria-label="searchBox"
                        aria-describedby="basic-addon1" 
                        onKeyUp={AppendKey}
                        id="searchBar"
                    />
                    <InputGroup.Text id="basic-addon1" onClick={()=>alert('hello')}> @</InputGroup.Text>

                </InputGroup>
                </Col>
            </Row>
        </>
    );
}
export default SearchBar;