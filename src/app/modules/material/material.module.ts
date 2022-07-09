import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [MatFormFieldModule,
        MatInputModule
      ],
    
exports: [
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTooltipModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSortModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatNativeDateModule
],
providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: MatDialogRef, useValue: {}},
    
]
})
export class MaterialModule { }
