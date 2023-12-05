
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = /* ... */;

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default function Routes() {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/contact' Component={ContactPage} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </>
    );
}
