import React from 'react';
import render  from 'react-test-renderer'
// import * as ReactDOM from 'react-dom';
import { ProductCard } from '../../src/components';
import { products } from './data/products';

const mockProducts = products

const { act } = render

describe('ProductCard', () => { 

   
    test('Debe mostrar el componente correctamente', () => { 
        const wrapper = render.create(
            <ProductCard product={mockProducts[0]}>
                {
                    (  ) => (
                         <>
                            <h1>Product Card</h1>
                         </>
                        )
                    }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
     })

     test('debe incrementar el contador', () => { 

        const wrapper1 = render.create(
            <ProductCard product={mockProducts[0]}>
                {
                    ( {count, increaseBy} ) => (
                         <>
                            <h1>Product Card</h1>
                            <span> {count} </span>
                            <button type='button' onClick={() => increaseBy(1) }> +1 </button>
                         </>
                        )
                    }
            </ProductCard>
        )

        let tree:any = wrapper1.toJSON()
        console.log({tree})
        expect(tree).toMatchSnapshot()
        
        act(() => {
            console.log(tree.children[2].props)
            tree.children[2].props.onClick()
        })
        
        tree = wrapper1.toJSON()
        console.log({tree: tree.children[1]})
        expect( tree.children[1].children[1] ).toBe('1')

      })
})
