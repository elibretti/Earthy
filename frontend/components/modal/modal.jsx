import React from 'react'
import LoginFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import NewReviewContainer from '../reviews/new_review_container';
import EditReviewContainer from '../reviews/edit_review_container';
import ThankYou from '../thank_you/thank_you_container';
class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.modal){
            return null;
        }
        let component;
        switch(this.props.modal){
            case 'login':
                component = <LoginFormContainer/>
                break;
            case 'signup':
                component = <SignUpFormContainer/>
                break;
            case 'new-review':
                component = <NewReviewContainer/>
                break;
            case 'edit-review':
                component = <EditReviewContainer/>
                break;
            case 'thankyou':
                component = <ThankYou/>
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={this.props.closeModal}>
              <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
              </div>
            </div>
          );
    }
}

export default Modal;