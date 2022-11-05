import { AbstractControl, ValidationErrors } from "@angular/forms";

// we can add all validators in app/common/validators
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            }
        }
        return null
    }

    // Handling Async Validators
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // call api
            setTimeout(() => {
                if(control.value === "yashfa"){
                    resolve( {shouldBeUnique: true})
                }
                resolve(null)
            },2000 );
        })
    }
}