'use strict';

var React = require('react/addons');
var $ = require('jquery'); // excluded and shimed

// adapted from react examples (https://github.com/facebook/react/tree/master/examples/jquery-bootstrap)
var BootstrapModal = React.createClass({
    componentDidMount() {
        // When the component is added, turn it into a modal
        $(this.getDOMNode())
            .modal({backdrop: 'static', keyboard: true, show: false});
    },
    componentWillUnmount() {
    },
    close() {
        $(this.getDOMNode()).modal('hide');
    },
    open() {
        var modal = $(this.getDOMNode());
        modal.modal('show');
        modal.on("shown", () => $("input", this.refs.body.getDOMNode()).first().focus());
    },
    _submit(event) {
        this.props.onConfirm();
        event.preventDefault();
    },
    render() {
        var confirmButton = null;
        var cancelButton = null;

        if (this.props.confirm && this.props.onConfirm) {
            confirmButton = <input role="button" value={this.props.confirm} type="submit" className="btn btn-primary" onClick={this._submit} />;
        }
        if (this.props.cancel && this.props.onCancel) {
            cancelButton = (
                <a role="button" className="btn" onClick={this.props.onCancel}>
                      {this.props.cancel}
                </a>
                );
        }

        return (
            <div className="modal hide fade">
                <div className="modal-header">
                    <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    onClick={this.props.onCancel}
                    dangerouslySetInnerHTML={{__html: '&times'}}
                    />
                        {Array.isArray(this.props.children) ? this.props.children[0] : this.props.children}
                </div>
                <div ref="body" className="modal-body">
                        {this.props.children[1]}
                </div>
                <div className="modal-footer">
                      {cancelButton}
                      {confirmButton}
                </div>
            </div>
            );
    }
});

module.exports = BootstrapModal;
