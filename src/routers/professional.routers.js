const { Router } = require ('express');
const router = Router();
const professionalCtrl = require('../controller/professional.controller');


router.get('/profesionales', professionalCtrl.getOneAll);

router.post('/profesionales', professionalCtrl.addOne);

router.put('/profesionales', professionalCtrl.updateOne);

router.delete('/profesionales', professionalCtrl.deleteOne);

module.exports = router;