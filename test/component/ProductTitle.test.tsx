import React from 'react';
import render  from 'react-test-renderer'
// import * as ReactDOM from 'react-dom';
import { ProductTitle, ProductCard } from '../../src/components';
import { products } from './data/products';

const mockProducts = products

describe('ProducTitle', () => { 

    test('Debe mostrar el componente Title con los dtaos de las props', () => { 
        const wrapper = render.create(
            <ProductTitle
                title='Custom Product'
                className='custom-class'
            />
        )
        
       // console.log(wrapper.toJSON())
        expect(wrapper.toJSON()).toMatchSnapshot()
        
        
    })
    test('Debe mostrar el componente Title con los datos del context', () => { 
        const wrapper2 = render.create(
            <ProductCard product={mockProducts[0]}>
                {
                    (  ) => (
                        <ProductTitle/>
                        )
                    }
            </ProductCard>
        )
        
        expect(wrapper2.toJSON()).toMatchSnapshot()
     })
})
