import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import {removeFromCart} from '../actionCreators';
import {connect} from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

/*
({cart, removeFromCart}) = (props)
son las props que se pasan a mapStateToProps y a mapDispatchToProps
y que con el método connect, permite conectar los componentes
*/
const ShoppingCart = ({cart, removeFromCart}) => {
    return (
      <Panel header="Carrito de compras">
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((acum, product) => acum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    );
}

const mapStateToProps = state => {
  return{
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product){
      dispatch(removeFromCart(product))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
