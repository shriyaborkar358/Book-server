const getHealth = (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    })
}

export {getHealth}