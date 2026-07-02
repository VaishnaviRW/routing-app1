import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  removeMsg: string = '';

  constructor(
    @Inject(MatDialogRef)
    private _dialogRef: MatDialogRef<GetConfirmComponent>,

    @Inject(MAT_DIALOG_DATA)
    public msg: string
  ) {
    this.removeMsg = msg;
  }

  ngOnInit(): void {
  }

  onClose(flag: boolean): void {
    this._dialogRef.close(flag);
  }
}