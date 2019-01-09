import { listView, initialState, GridTypeState } from './grid-type.reducer';

describe('GridType Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = listView(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('a known action', () => {
    it('should return the current state', () => {
      const action = {
        type: 'LOAD_GRID_TYPE',
        payload: 'grid'
      };
      const resultToBe: GridTypeState = {
        gridType: action.payload
      };

      const result = listView(initialState, action);

      expect(result.gridType).toBe(resultToBe.gridType);
    });
  });
});
