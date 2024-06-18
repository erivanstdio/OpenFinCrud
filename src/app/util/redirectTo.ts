import { Router } from "@angular/router";

export function redirectTo(router: Router, uri: string) {
  router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    router.navigate([uri])});
}
