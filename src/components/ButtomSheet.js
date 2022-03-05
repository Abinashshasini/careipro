import React from 'react';
import {Portal} from '@gorhom/portal';
import {Modalize} from 'react-native-modalize';

const BottomSheet = ({modalRef, children, modalHeight}) => {
  return (
    <Portal>
      <Modalize ref={modalRef} modalHeight={modalHeight}>
        {children}
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;
