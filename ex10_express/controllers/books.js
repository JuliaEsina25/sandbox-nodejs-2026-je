class BooksController {
    update = (req, res,next) => {
        res.send('patch/put books by id');
    }
}

const ctrl = new BooksController();
export default ctrl