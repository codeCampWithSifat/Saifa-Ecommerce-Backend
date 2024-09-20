import express from "express";
import { AuthController } from "../../controllers/auth/AuthController.js";

const router = express.Router();

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.post("/logout", AuthController.logoutUser);

router.get("/check-auth", AuthController.authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated User",
    user,
  });
});

export const AuthRoutes = router;
