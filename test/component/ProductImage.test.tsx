import React from 'react';
import render  from 'react-test-renderer'
// import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage } from '../../src/components';
import { products } from './data/products';

const mockProducts = products

describe('ProducImage', () => { 

    test('Debe mostrar el componente Title con los dtaos de las props', () => { 
        const wrapper1 = render.create(
            <ProductImage
                img='./no-image.jpg'
                className='custom-class'
            />
        )
        
       // console.log(wrapper.toJSON())
        expect(wrapper1.toJSON()).toMatchSnapshot()
        
        
    })

    test('Debe mostrar el componente Title con los datos del context', () => { 
        const wrapper = render.create(
            <ProductCard product={mockProducts[1]}>
                {
                    (  ) => (
                        <ProductImage/>
                        )
                    }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
     })
})
