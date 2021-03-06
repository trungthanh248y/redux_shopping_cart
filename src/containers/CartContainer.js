import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as action from '../actions/index';

class CartContainer extends Component {
    render () {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var result = <tr>
            <td>{Message.MSG_EMPTY}</td>
        </tr>;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={ index }
                        item={item}
                        index={index}
                        onDeleteProductInCart = { this.props.onDeleteProductInCart }
                        onChangeMessage = { this.props.onChangeMessage }
                        onUpdateProductInCart = { this.props.onUpdateProductInCart }
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,//number check kiểu số và bắt buộc phải có
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,//isRequired bắt buộc phải có, PropTypes.arrayOf check nó là một array
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(action.actDeleteProductInCart(product));
        },
        onChangeMessage: (mess) => {
            dispatch(action.actChangeMessage(mess));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(action.actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
