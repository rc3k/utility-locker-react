import uiSlice from '../../slices/ui';

describe('ui slice', () => {
  it('should return the initial state', () => {
    expect(uiSlice.reducer(undefined, {})).toEqual({
      accordion: {
        productTypes: []
      }
    });
  });
  it('should handle the toggleAccordionItemOpen action (adding an item)', () => {
    expect(uiSlice.reducer(undefined, {
      type: uiSlice.actions.toggleAccordionItemOpen,
      payload: { name: 'productTypes', itemId: 123 }
    })).toEqual({
      accordion: {
        productTypes: [123]
      }
    });
  });
  it('should handle the toggleAccordionItemOpen action (removing an item)', () => {
    expect(uiSlice.reducer({
      accordion: {
        productTypes: [123, 124]
      }
    }, {
      type: uiSlice.actions.toggleAccordionItemOpen,
      payload: { name: 'productTypes', itemId: 123 }
    })).toEqual({
      accordion: {
        productTypes: [124]
      }
    });
  });
});
