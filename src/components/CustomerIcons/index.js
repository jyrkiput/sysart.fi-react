import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/customers';

import { CustomerLogo } from './customerLogo';
import { styles } from './styles.scss';


@connect(
  state => state.customers.frontpage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class CustomerIcons extends Component {

    constructor(props, context){
        super(props, context);
    }


    componentDidMount(){
        const { dispatch, fetchCustomers } = this.props;

        fetchCustomers();
    }

    render() {
        console.log('render customers ', this);
        const { items } = this.props;

        if(items){
            return (

                <section className={`${styles}`}>
                  <div className="container">
                    <div className="row">
                        <h1>Asiakkaat</h1>
                    </div>
                    <div className="row">

                        {items.map((customer, index) => <CustomerLogo item={customer} key={index} />)}
                    </div>
                  </div>
                </section>

            );
        }else{
            return (
                <div>Loading</div>
            )
        }

    }
}
