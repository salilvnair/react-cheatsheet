import { saveComment } from '../../actions';
import { SAVE_COMMENT } from '../../actions/types';

describe('saveComment', () => {

    it('should have correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    
    it('should have correct payload', () => {
        const newComment = 'New Comment';
        const action = saveComment(newComment);
        expect(action.payload).toEqual(newComment);
    });

});