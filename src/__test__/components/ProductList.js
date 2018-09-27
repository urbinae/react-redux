import React from 'react';
import { shallow } from 'enzyme';

/*Como el componente presentacional, está oculto, no está siendo exportado,
 esta privado en el archivo /componentes/ProductList.js,
 sino que solo podemos ver el componente conectado con connect(...)...
 lo que vamos hacer es exportarlo con la palabra reservada export allá en el archivo
 */

 //lo importamos con corchete ya que no es un export default
 import { ProductList } from '../../components/ProductList';

 it('No renderizar cuando products este vacio', () => {
 	const wrapper = shallow(<ProductList products={[]} />);
 	expect(wrapper.find(".product").length).toBe(0);
 })