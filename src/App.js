import React from 'react';
import UpdateViaNestedComponent from './update-via-nested-component';
import UpdateViaParentComponent from './update-via-parent-component';

export default function App() {
  return (
    <>
      <UpdateViaParentComponent />
      <UpdateViaNestedComponent />
    </>
  )
}
