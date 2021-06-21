import React from "react";
import ReactDOM from "react-dom"
import { useStyles } from './Styles';
import { postsProps } from '../../Graphql/FetchPost';


const PayPalButton = (window as any).paypal.Buttons.driver("react", { React, ReactDOM });

type Props = {
    posts: postsProps
}

const Paypal: React.FC<Props> = ({ posts }) => {
    const classes = useStyles();

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: posts?.prices,
                    },
                },
            ],
        });
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture();
    };

    return (
        <div className={classes.paypal}>
            <PayPalButton
                createOrder={(data: any, actions: any) => createOrder(data, actions)
                }

                onApprove={(data: any, actions: any) => onApprove(data, actions)}

            />

        </div>

    );
}

export default Paypal;