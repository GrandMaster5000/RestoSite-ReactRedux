import React from 'react';
import { connect } from 'react-redux';
import './cart-table.scss';
import { deleteFromCard, decPrice } from '../../actions';

const CartTable = ({items, deleteFromCard, decPrice}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id} = item;

                        return (
                            <div key={`${id}${Date.now().toString()}${Math.random() * 10}`} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => {
                                decPrice(price);
                                deleteFromCard(id)
                                }} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
              
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCard,
    decPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);