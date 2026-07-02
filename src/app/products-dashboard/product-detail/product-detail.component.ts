import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/products.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductComponent implements OnInit {

  productId!: string;
  productObj!: Iproduct;

  constructor(
    private _routes: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService,
    private _matDialog: MatDialog,
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this._routes.params.subscribe(param => {
      this.productId = param['prodID'];

      if (this.productId) {
        this._productService.fetchProductById(this.productId)
          .subscribe({
            next: (data) => {
              this.productObj = data;
            },
            error: (err) => {
              console.log(err);
            }
          });
      }
    });
  }

  onRemove(): void {

    const config = new MatDialogConfig();

    config.data = `Are you sure you want to remove this product with id ${this.productId}`;
    config.disableClose = true;
    config.width = '400px';

    const dialogRef = this._matDialog.open(GetConfirmComponent, config);

    dialogRef.afterClosed()
      .subscribe({
        next: (resp) => {
          if (resp) {
            this._productService.removeProduct(this.productId)
              .subscribe({
                next: (res) => {
                  this._snackBar.openSnackBar(res.msg);

                  this._router.navigate(['products']);

                  this._productService.setFirstProductSub$.next(true);
                },
                error: (err) => {
                  this._snackBar.openSnackBar(
                    err?.msg || 'Failed to remove product'
                  );
                }
              });
          }
        },
        error: (err) => {
          this._snackBar.openSnackBar(
            err?.msg || 'Something went wrong'
          );
        }
      });
  }

  redirectToEdit(): void {
    this._router.navigate(['edit'], {
      queryParamsHandling: 'preserve',
      relativeTo: this._routes
    });
  }
}