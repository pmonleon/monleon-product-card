# monleon-product-card

Este es un paquete de prueba de despliegue en NPM

## Francisco Monleon

## Ejemplos

```text
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'monleon-product-card'
```

```text
           <ProductCard 
                eroductw{ peoduct }
                initialValues={{
                    count:4,
                    maxCount: 10
                }}
             >
                {
                    ( { reset, increaseBy, count, isMaxCountedReached, maxCount }) => (
                        <>
                           
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />     
                                    
                        </>
                    )
                }
            </ProductCard>
````
