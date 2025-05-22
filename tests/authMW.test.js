const mw = require('../middlewares/authMW');

let req;
let res;
let next;

beforeEach(() => {
    req = {
        session: {}
    };
    res = {
        redirect: jest.fn()
    };
    next = jest.fn();
});

test('should redirect to /login if user is not logged in', () => {
    mw({})(req, res, next);

    expect(res.redirect).toHaveBeenCalledWith('/login');
    expect(next).not.toHaveBeenCalled();
});

test('should call next if user is logged in', () => {
    req.session.user = { id: '123', username: 'testuser' };

    mw({})(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalled();
});
