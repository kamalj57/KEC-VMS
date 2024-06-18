const {Router}=require('express');
const router =Router();


const authController=require('../controllers/authController');
const busController=require('../controllers/busController');


router.post('/api/v1/sign-in',authController.loginUser);
router.post('/api/v1/sign-up',authController.signupUser)
router.get('/api/v1/businfo',busController.getBusInfo);
router.post('/api/v1/addData',busController.addBusInfo);
router.delete('/api/v1/delete/:id',busController.deleteBusInfo);

module.exports=router;