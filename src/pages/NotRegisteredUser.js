import React, { useContext } from 'react';
import { Context } from '../Context';

import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context);

    return (
        <React.Fragment>
            <RegisterMutation>
                {
                    (register, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password };
                            const variables = { input };

                            register({ variables }).then(({ data }) => {
                                const { signup } = data;
                                activateAuth(signup);
                            });
                        }
                        const errorMsg = error && 'El usuario ya existe o hubo algún problema.';

                        return (
                            <UserForm 
                                disabled={loading}
                                onSubmit={onSubmit} 
                                title="Registrarse" 
                                error={errorMsg}
                            />
                        )
                    }
                }
            </RegisterMutation>

            <LoginMutation>
                {
                    (login, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password };
                            const variables = { input };

                            login({ variables }).then(({ data }) => {
                                const { login } = data;
                                activateAuth(login);
                            });
                        }
                        const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.';

                        return(
                            <UserForm 
                                disabled={loading}
                                onSubmit={onSubmit} 
                                title="Iniciar Sesión" 
                                error={errorMsg}
                            />   
                        )
                    }
                }
            </LoginMutation>
        </React.Fragment>
    )
};