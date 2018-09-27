import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

/*Como el componente presentacional, está oculto, no está siendo exportado,
 esta privado en el archivo /componentes/ProductList.js,
 sino que solo podemos ver el componente conectado con connect(...)...
 lo que vamos hacer es exportarlo con la palabra reservada export allá en el archivo
 */

 //lo importamos con corchete ya que no es un export default
 import { ProductList } from './components/ProductList';

 // setup file
configure({ adapter: new Adapter() });

 it('No renderizar cuando products este vacio', () => {
 	const wrapper = render(<ProductList products={[]} />);
 	expect(wrapper.find(".product").length).toBe(0);
 })