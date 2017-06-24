import React from 'react';

class Modal extends React.Component {

  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
    }

    let backdropStyle = {
       position: 'absolute',
       width: '100%',
       height: '100%',
       top: '0px',
       left: '0px',
       zIndex: '9998',
       background: 'rgba(0, 0, 0, 0.9)',
       display: 'flex'
     }

    return (
     <div className={this.props.containerClassName}>
       <div className={this.props.className} style={modalStyle}>
         {this.props.children}
       </div>
       {!this.props.noBackdrop &&
           <div style={backdropStyle} />}
     </div>
    );
  }
}

export default Modal;
