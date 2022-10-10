import React from 'react';
import StyledWrapper from './NewPostContainer.styles.js';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import Button from 'react-bootstrap/Button'

const  maxLengthValidator = maxLengthCreator(30);
const  minLengthValidator = minLengthCreator(2);
const NewPostForm = (props) => {
  const onSubmitLocal = (data) => {
    props.handleSubmit(data);
    props.reset();
  }
  return (<form onSubmit={onSubmitLocal}>
   <Field className="form-control" component={Textarea} name="newBody" placeholder="Write your post here..."
   validate={[required, maxLengthValidator, minLengthValidator]}/>
        <Button type="submit" variant="light">Post</Button>
        </form>)
  }

const NewPostReduxForm =  reduxForm({form: 'newPost'})(NewPostForm);

export const NewPostContainer = (props) => {
  return (
    <StyledWrapper styles={props.styles}>
      <div className="wrapper">
        <div className="thumbnail">
          <img className="avatar" alt="avatar" src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="100%"/>
        </div>
        <NewPostReduxForm onSubmit={props.onSubmit}/>
      </div>
    </StyledWrapper>
  )
}
