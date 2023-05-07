import { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { oktaConfig } from '../lib/oktaConfig';

const OktaSignInWidget = ({ onSuccess, onError }) => {
    const widgetRef = useRef();

    useEffect(() => {

        if (!widgetRef.current) 
        {
            return false;
        }

        const widget = new OktaSignIn(oktaConfig);

        widget.showSignInToGetTokens({
            el: widgetRef.current,
        }).then(onSuccess).catch(onError);

        return () => widget.remove();
    }, [onSuccess, onError]);

    return (
        <div className='container mt-5 mb-5'>
            <div ref={widgetRef}></div>
            <div>
            <div className="alert alert-primary" role="alert">
                <b>Note:</b> Currently our Library App is in Preview mode. So kindly login as a Demo User using these credentials: Username: <b>username</b> Password: <b>password</b>
            </div>
            </div>
        </div>
    );
};

export default OktaSignInWidget;