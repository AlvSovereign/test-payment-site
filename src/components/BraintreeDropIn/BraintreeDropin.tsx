import React, { ReactNode, useEffect, useRef, useState } from 'react';
import BraintreeWebDropIn from 'braintree-web-drop-in';

interface BraintreeDropinProps {
  authorization: string;
  callback: (err: any, dropinInstance: any) => void;
  btInstance: any;
}

const BraintreeDropin = ({
  authorization,
  callback,
  btInstance,
}: BraintreeDropinProps) => {
  const dropInElement = useRef();
  console.log('dropInElement: ', dropInElement);

  useEffect(() => {
    (async () => {
      const instance = await BraintreeWebDropIn.create(
        {
          authorization,
          selector: dropInElement.current,
        },
        callback
      );

      console.log('instance: ', instance);
    })();
  }, []);

  return (
    <>
      <div ref={dropInElement} id='btDropin'>
        {/* {btInstance()} */}
      </div>
      <button
        onClick={() =>
          btInstance.requestPaymentMethod(function (err, payload) {
            if (err) {
              console.log('err: ', err);
              // Handle errors in requesting payment method
            }

            // Send payload.nonce to your server
          })
        }>
        Submit Card Payment
      </button>
    </>
  );
};

export default BraintreeDropin;
