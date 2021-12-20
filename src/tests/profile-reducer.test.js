import profileReducer, { addPostActionCreator, deletePost } from '../redux/profile-reducer';

let state = {
    postData: [
        {id:1, text:'hello pidor'},
        {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
        {id:3, text:'l;dfjla;dfja;lsdfj'}
      ] 
}

test('postData shuold be 6', () => {
    let action = addPostActionCreator('test');
    
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(4);
  });

test('message should be test', () => {
    let action = addPostActionCreator('test');
      
    let newState = profileReducer(state, action);
    expect(newState.postData[3].text).toBe('test');
});

test('after deleting length of postData should be decrement', () => {
    let action = deletePost(1);
      
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2);
});

test('post id should not be delete', () => {
    let action = deletePost(1000);
      
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3);
});

