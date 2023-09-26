const {Router} = require('express');
//const {check} = require ('express-validator');


const router = Router();

const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
} = require ('../controllers/usuarios')

/*const {
    validarCampos,
    emailExiste
} = require('../middlewares/validators')*/




router.get('/', usuariosGet)
router.put(
    '/:id',
    /*[
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos    
    ],*/
usuariosPut
);

router.post(
    '/',
    /*[
    check('nombre','el nombre es obligatorio').not().isEmpty(), 
    check('password','El password debe tener mas de 4 digitos').isLength({min:4,}),
    //check('email').custom(emailExiste),
    validarCampos
    ],*/
usuariosPost);


router.delete(
    '/eliminar/:id',
    /*[
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom(emailExiste),
        validarCampos    
        ], */
        usuariosDelete
        );


module.exports = router