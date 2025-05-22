const mw = require('../middlewares/deleteMovieMW')

test('should delete movie and redirect to / ', async ()=>{
    const objRepo = {
        MovieModel:{
            findByIdAndDelete: jest.fn(() => Promise.resolve())
        }
    };

    const req = {
        params:{
            id: 'abc123'
        }
    };

    const res = {
        redirect: jest.fn((hova)=>{})
    };

    const next = jest.fn(()=>{});

    await mw(objRepo)(req,res,next);
    expect(next).not.toBeCalled();
    expect(res.redirect).toBeCalledWith("/");
    expect(objRepo.MovieModel.findByIdAndDelete).toHaveBeenCalledWith('abc123');
})
