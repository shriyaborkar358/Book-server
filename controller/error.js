const handlePageNotFound =  (req, res) => {
    res.send(`<div>
          <h1 style="text-align: center; color: brown;">404 not found</h1>
          </div>`);
  }

  export { handlePageNotFound }