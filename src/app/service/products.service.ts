import { Injectable } from '@angular/core';
import { Iproduct, IproductResp } from '../models/products';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr: Iproduct[] = [
    {
      prodID: 'P101',
      prodName: 'Apple iPhone 16',
      prodStatus: 'Delivered',
      canReturn: 1,
      description: 'Apple iPhone 16 with advanced camera system, powerful processor, and all-day battery life.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },
    {
      prodID: 'P102',
      prodName: 'Dell Inspiron Laptop',
      prodStatus: 'Dispatched',
      canReturn: 1,
      description: 'Dell Inspiron laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    },
    {
      prodID: 'P103',
      prodName: 'Sony WH-1000XM5 Headphones',
      prodStatus: 'Inprogress',
      canReturn: 0,
      description: 'Premium wireless noise-cancelling headphones with crystal-clear sound quality.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      prodID: 'P104',
      prodName: 'Samsung Galaxy Watch',
      prodStatus: 'Delivered',
      canReturn: 1,
      description: 'Smartwatch with fitness tracking, heart rate monitoring, and AMOLED display.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      prodID: 'P105',
      prodName: 'Canon EOS Camera',
      prodStatus: 'Dispatched',
      canReturn: 1,
      description: 'Professional DSLR camera with high-resolution image capture and 4K video recording.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
    },
    {
      prodID: 'P106',
      prodName: 'LG Smart TV',
      prodStatus: 'Inprogress',
      canReturn: 0,
      description: '55-inch 4K Ultra HD Smart TV with webOS and HDR support for immersive entertainment.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6'
    }
  ];

  setFirstProductSub$ = new Subject<boolean>()
  constructor() { }

  fetchProducts(): Observable<Iproduct[]> {
    return of(this.productsArr);
  }

  fetchProductById(id: string): Observable<Iproduct> {
    let getProdObj = this.productsArr.find(p => p.prodID === id)!;
    return of(getProdObj);
  }

  createProduct(product: Iproduct): Observable<IproductResp<Iproduct>> {
    this.productsArr.unshift(product);
    return of({
      msg: `The new Product with id ${product.prodID} is created successfully!!!`,
      data: product
    })
  }

  updateProduct(updatedProd: Iproduct) {
    let getIndex = this.productsArr.findIndex(p => p.prodID === updatedProd.prodID)
    this.productsArr[getIndex] = updatedProd;
    return of({
      msg: `The product with id ${updatedProd.prodID} is updated successfully!!!`,
      data: updatedProd
    })
  }

  removeProduct(removeID: string): Observable<IproductResp<Iproduct>> {
    let getIndex = this.productsArr.findIndex(p => p.prodID === removeID)
    let removedProd = this.productsArr.splice(getIndex, 1);
    return of({
      msg: `The product with id ${removedProd[0].prodID} is removed successfully!!!`,
      data: removedProd[0]
    })
  }

 
}
