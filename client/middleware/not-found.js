const notFoundMiddleware = (req, res) => {
    res.status(404).send('KHONG TON TAI TRANG NAY')
}

export default notFoundMiddleware