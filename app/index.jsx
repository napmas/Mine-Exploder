'use strict';
import React from "react";
import ReactDOM from "react-dom";

import {Button, Modal} from 'react-bootstrap';

// var ServerSettingModal = ();

var MainWindow = React.createClass({
    getInitialState: function() {
        return {message: '', showModal: true};
    },
    handleTextChange: function(event) {
        this.setState({message: event.target.value});
    },

    openModal: function(event) {
        console.log("open modal");
        this.setState({showModal: true});
    },

    closeModal: function(event) {
        console.log("close modal");
        this.setState({showModal: false});
    },
    render: function() {
        return (
            <div>
            Hello world!!
            <hr/>
            <input type="text" onChange={this.handleTextChange}/>
            <p>
                <strong>你輸入的是</strong>
            </p>
            <p>
                <span>{this.state.message}</span>
            </p>
            <button type="button">
                Login
            </button>

            <button onClick={this.openModal}>
                OpenModal
            </button>

            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Button bsStyle="primary">Primary</Button>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                       <Modal.Title>Modal heading</Modal.Title>
                     </Modal.Header>

     <Modal.Body>
       One fine body...
     </Modal.Body>

     <Modal.Footer>
           <Button onClick={this.closeModal}>Close</Button>
         </Modal.Footer>

    </Modal>

        </div>


        );
    }
});

ReactDOM.render(
    <MainWindow/ >,
        document.getElementById('content'));
