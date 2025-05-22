const mw = require('../middlewares/loginMW');

let objRepo;
let req;
let res;
let next;

beforeEach(() => {
    objRepo = {
        UserModel: { findOne: jest.fn() },
    };
    req = {
        body: {},
        session: {}
    };
    res = {
        status: jest.fn(() => res),
        send: jest.fn(),
        redirect: jest.fn(),
    };
    next = jest.fn();
});

test('should respond 400 if Username or Password missing', async () => {
    await mw(objRepo)(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
});

test('should respond 401 if user not found', async () => {
    req.body = { Username: 'user1', Password: 'pass1' };
    objRepo.UserModel.findOne.mockResolvedValue(null);

    await mw(objRepo)(req, res, next);

    expect(objRepo.UserModel.findOne).toHaveBeenCalledWith({ Username: 'user1', Password: 'pass1' });
    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
});

test('should set session and redirect on successful login', async () => {
    req.body = { Username: 'user1', Password: 'pass1' };
    const fakeUser = { _id: '123', username: 'user1', password: 'pass1' };
    objRepo.UserModel.findOne.mockResolvedValue(fakeUser);

    await mw(objRepo)(req, res, next);

    expect(objRepo.UserModel.findOne).toHaveBeenCalledWith({ Username: 'user1', Password: 'pass1' });
    expect(req.session.user).toEqual({ id: fakeUser._id, username: fakeUser.username });
    expect(res.redirect).toHaveBeenCalledWith('/');
    expect(next).not.toHaveBeenCalled();
});

test('should call next with error if findOne throws', async () => {
    const error = new Error('DB error');
    req.body = { Username: 'user1', Password: 'pass1' };
    objRepo.UserModel.findOne.mockRejectedValue(error);

    await mw(objRepo)(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
});
