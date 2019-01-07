import { listView, initialState } from './grid-type.reducer';

describe('GridType Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = listView(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
