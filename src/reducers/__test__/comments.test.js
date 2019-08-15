import { SAVE_COMMENT } from './../../actions/types';
import commentsReducer from '../comments.reducer';

it('should handle an action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});
it('should handle an action of type unknown', () => {
    const action = {
        type: 'SOME GIBBERISH'
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
});
