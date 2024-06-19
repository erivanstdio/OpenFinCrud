import { Router } from "@angular/router";

export function redirectTo(router: Router, uri: string) {
  router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    router.navigate([uri])});
}
