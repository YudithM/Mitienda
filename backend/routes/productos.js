const {Router} = require('express');
const {check} = require('express-validator');



const router = Router();

const {
    obtenerProductos, 
    agregarProductos, 
    actualizarProducto,
    borrarProduto
    } = require('../controllers/productos');

const{
   // validateId, 
    productExiste
} = require('../middlewares/validators')






router.get('/', obtenerProductos);


router.post('/registrar', agregarProductos);

router.put('/actualizar/:id', 
/*[
check("id","No es un ID valido").isMongoId(),
check("id").custom(productExiste),
validateId,
], */
actualizarProducto
);

router.delete('/borrar/:id',
[
    check("id","No es un ID valido").isMongoId(),
    check("id").custom(productExiste),
],
 borrarProduto);



module.exports = router;

