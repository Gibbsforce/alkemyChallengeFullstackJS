const auth = async (req, res) => {
  try {
    res.json({
      message: "This is the auth from controller to router",
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
export default {
  auth,
}
