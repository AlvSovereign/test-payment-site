import React, { ReactNode, useRef } from 'react';
import BraintreeWebDropIn from 'braintree-web-drop-in';

interface BraintreeDropinProps {
  authorization: string;
  callback: (err: any, dropinInstance: any) => void;
}

const BraintreeDropin = ({ authorization, callback }: BraintreeDropinProps) => {
  const dropInElement = useRef();
  console.log('dropInElement: ', dropInElement);
  console.log('BraintreeWebDropIn: ', BraintreeWebDropIn);
  const create = BraintreeWebDropIn.create(
    {
      authorization,
      selector: dropInElement.current,
    },
    callback
  );

  return (
    <div ref={dropInElement} id='btDropin'>
      {create}
    </div>
  );
};

export default BraintreeDropin;
