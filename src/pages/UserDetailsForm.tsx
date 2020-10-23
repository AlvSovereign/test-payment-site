import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { FormProps } from './types';
import { useStateMachine } from 'little-state-machine';
import { completeStep, updateAction } from '../updateAction';
import { initialStepState } from '../App';
import { FieldContainer, Form } from 'components/ui';
import BraintreeDropin from 'components/BraintreeDropIn/BraintreeDropin';

const i18n = require('../i18n.json');

const UserDetailsForm = ({
  accentColor,
  fontColor,
  locale = 'en',
  omitFields = [],
  shortFlow,
  voucherCode,
}: any) => {
  const { action, state } = useStateMachine(updateAction);
  const { action: stepAction } = useStateMachine(completeStep);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    stepAction(initialStepState.stepsCompleted);
  }, []);

  const onSubmit = (formData: any) => {
    const updatedFormData = {
      ...formData,
      password: '',
      confirmPassword: '',
    };
    action(updatedFormData);

    const updatedStepData = {
      stepOne: true,
    };
    stepAction(updatedStepData);
  };

  const callback = (err, dropinInstance) => {
    if (err) {
      // Handle any errors that might've occurred when creating Drop-in
      console.error(err);
      return;
    }
    //  submitButton.addEventListener('click', function () {
    //    dropinInstance.requestPaymentMethod(function (err, payload) {
    //      if (err) {
    //        // Handle errors in requesting payment method
    //      }

    //      // Send payload.nonce to your server
    //    });
  };
  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldContainer>
        <label className='label' htmlFor='email'>
          {i18n.email.infotext[locale]}
        </label>
        <input
          className='input'
          type='text'
          placeholder={i18n.email.placeholder[locale]}
          defaultValue={state.form.email}
          name='email'
          id='email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
      </FieldContainer>
      <FieldContainer>
        <label className='label' htmlFor='password'>
          Enter password
        </label>
        <input
          className='input'
          type='password'
          placeholder='Enter Password'
          name='password'
          id='password'
          ref={register({ required: true, maxLength: 80 })}
        />
      </FieldContainer>
      <FieldContainer>
        <label className='label' htmlFor='confirmPassword'>
          Confirm password
        </label>
        <input
          className='input'
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          id='confirmPassword'
          ref={register({ required: true, maxLength: 80 })}
        />
      </FieldContainer>
      {!omitFields.includes('voucher') && (
        <FieldContainer>
          <label className='label' htmlFor='voucher'>
            Enter voucher code
          </label>
          <input
            className='input'
            type='text'
            placeholder='Voucher code'
            defaultValue={state.form.voucher}
            name='voucher'
            id='voucher'
            ref={register({ required: true, maxLength: 80 })}
          />
        </FieldContainer>
      )}
      <BraintreeDropin
        authorization='sandbox_kt95s7f3_8ckhmxwn5p9bcywd'
        callback={callback}
      />
      <button className='button' type='submit'>
        Submit
      </button>
    </Form>
  );
};

export default UserDetailsForm;
