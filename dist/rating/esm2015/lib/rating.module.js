import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { StarRatingComponent } from '../components/star-rating/star-rating.component';
export class RatingModule {
    ngDoBootstrap() { }
}
RatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule
                ],
                declarations: [
                    RatingComponent,
                    StarRatingComponent
                ],
                exports: [StarRatingComponent],
                entryComponents: [StarRatingComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9NZXRhL1Byb2plY3RzL25nLXN0YXItcmF0aW5nL3Byb2plY3RzL3JhdGluZy9zcmMvIiwic291cmNlcyI6WyJsaWIvcmF0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBYXRGLE1BQU0sT0FBTyxZQUFZO0lBQUUsYUFBYSxLQUFJLENBQUM7OztZQVg1QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixtQkFBbUI7aUJBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhclJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSYXRpbmdDb21wb25lbnQsIFxuICAgIFN0YXJSYXRpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3RhclJhdGluZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1N0YXJSYXRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ01vZHVsZSB7bmdEb0Jvb3RzdHJhcCgpIHt9fVxuIl19